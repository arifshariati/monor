/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use server';

import { ID, Query } from 'node-appwrite';
import { parseStringify } from '@monor/utils/js';
import { createAdminClient } from '../lib/appwrite';
import { plaidClient } from '../lib/plaid';

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_TRANSACTION_COLLECTION_ID: TRANSACTION_COLLECTION_ID,
} = process.env;

type CreateTransactionProps = {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  email: string;
};
export const createTransaction = async (
  transaction: CreateTransactionProps
) => {
  try {
    const { database } = await createAdminClient();

    const newTransaction = await database.createDocument(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      ID.unique(),
      {
        channel: 'online',
        category: 'Transfer',
        ...transaction,
      }
    );

    return parseStringify(newTransaction);
  } catch (error) {
    console.error('An error occured while creating transaction', error);
  }
};

export const getTransactions = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  let hasMore = true;
  let transactions: unknown = [];

  try {
    // Iterate through each page of new transaction updates for item
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
      });

      const data = response.data;

      transactions = response.data.added.map((transaction) => ({
        id: transaction.transaction_id,
        name: transaction.name,
        paymentChannel: transaction.payment_channel,
        type: transaction.payment_channel,
        accountId: transaction.account_id,
        amount: transaction.amount,
        pending: transaction.pending,
        category: transaction.category ? transaction.category[0] : '',
        date: transaction.date,
        image: transaction.logo_url,
      }));

      hasMore = data.has_more;
    }

    return parseStringify(transactions);
  } catch (error) {
    console.error('An error occurred while getting the accounts:', error);
  }
};

export const getTransactionsByBankId = async ({
  bankId,
}: {
  bankId: string;
}) => {
  try {
    const { database } = await createAdminClient();

    const senderTransactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [Query.equal('senderBankId', bankId)]
    );

    const receiverTransactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [Query.equal('receiverBankId', bankId)]
    );

    const transactions = {
      total: senderTransactions.total + receiverTransactions.total,
      documents: [
        ...senderTransactions.documents,
        ...receiverTransactions.documents,
      ],
    };

    return parseStringify(transactions);
  } catch (error) {
    console.error(
      'An error occured during getting transactions by bank id: ',
      error
    );
  }
};
