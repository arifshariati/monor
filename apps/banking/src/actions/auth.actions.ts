'use server';
import { AppwriteException, ID, Query } from 'node-appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '@monor/utils/js';
import { createAdminClient, createSessionClient } from '../lib/appwrite';

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

export type GetUserInfoProps = {
  userId: string;
};

export const getUserInfo = async ({ userId }: GetUserInfoProps) => {
  try {
    const { database } = await createAdminClient();
    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    );
    return parseStringify(user.documents[0]);
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.warn(error.response);
    }
  }
};

export type SignInProps = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: SignInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId });
    return parseStringify(user);
  } catch (error: unknown) {
    if (error instanceof AppwriteException) {
      console.warn(error.response);
    }
  }
};

export type SignUpProps = {
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dob: string;
  ssn: string;
  email: string;
  password: string;
};

export const signUp = async ({ password, ...userData }: SignUpProps) => {
  const { name, email } = userData;
  try {
    const { account, database } = await createAdminClient();
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (!newUserAccount) throw new Error('Error creating user');

    const session = await account.createEmailPasswordSession(email, password);
    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.warn(error.response);
    }
  }
};

export const getLoggedInUsers = async () => {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
};

export const logOutUser = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.warn(error.response);
    }
  }
};
