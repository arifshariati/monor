'use server';

import { Client } from 'dwolla-v2';

enum DwollaEnvironment {
  Production = 'production',
  Sandbox = 'sandbox',
}

const dwollaGetEnvironment = (): DwollaEnvironment => {
  const environment = process.env.DWOLLA_ENV as DwollaEnvironment;
  const validDwollaEnvironments = new Set(Object.values(DwollaEnvironment));
  if (validDwollaEnvironments.has(environment)) return environment;
  throw new Error(
    `Dwolla environment should be set to one of: ${Array.from(
      validDwollaEnvironments
    ).join(', ')}`
  );
};

const dwollaClient = new Client({
  environment: dwollaGetEnvironment(),
  key: process.env.DWOLLA_KEY as string,
  secret: process.env.DWOLLA_SECRET as string,
});

export const createOnDemandAuthorization = async () => {
  try {
    const onDemandAuthorization = await dwollaClient.post(
      'on-demand-authorization'
    );

    return onDemandAuthorization.body._links;
  } catch (error) {
    console.error('Creating an on demand authorization failed', error);
  }
};

type CreateDwollaCustomerProps = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};
export const createDwollaCustomer = async ({
  dateOfBirth,
  ...rest
}: CreateDwollaCustomerProps) => {
  try {
    const formatedDOB = new Date(dateOfBirth).toLocaleDateString('en-CA');

    console.log({ formatedDOB });

    const response = await dwollaClient.post('customers', {
      dateOfBirth: formatedDOB,
      ...rest,
    });

    return response.headers.get('location');
  } catch (err) {
    console.error(
      'Creating a Dwolla Customer Failed',
      JSON.stringify(err, null, 2)
    );
    throw err;
  }
};

type CreateTransferProps = {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
};
export const createTransfer = async ({
  sourceFundingSourceUrl,
  destinationFundingSourceUrl,
  amount,
}: CreateTransferProps) => {
  try {
    const requestBody = {
      _links: {
        source: {
          href: sourceFundingSourceUrl,
        },
        destination: {
          href: destinationFundingSourceUrl,
        },
      },
      amount: {
        currency: 'USD',
        value: amount,
      },
    };

    return await dwollaClient
      .post('transfers', requestBody)
      .then((res) => res.headers.get('location'));
  } catch (err) {
    console.error('Transfer fund failed: ', err);
  }
};

type AddFundingSourceProps = {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
};
export const addFundingSource = async ({
  dwollaCustomerId,
  processorToken,
  bankName,
}: AddFundingSourceProps) => {
  try {
    const dwollaAuthLinks = await createOnDemandAuthorization();

    const fundingSourceOptions = {
      customerId: dwollaCustomerId,
      fundingSourceName: bankName,
      plaidToken: processorToken,
      _links: dwollaAuthLinks,
    };

    return await createFundingSource(fundingSourceOptions);
  } catch (err) {
    console.error('Transfer fund failed: ', err);
  }
};

type CreateFundingSourceProps = {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
};
export const createFundingSource = async ({
  customerId,
  fundingSourceName,
  plaidToken,
  _links,
}: CreateFundingSourceProps) => {
  try {
    return await dwollaClient
      .post(`customers/${customerId}/funding-sources`, {
        name: fundingSourceName,
        plaidToken: plaidToken,
      })
      .then((res) => res.headers.get('location'));
  } catch (error) {
    console.error('Creating a funding source failed', error);
  }
};
