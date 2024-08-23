'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from 'react-plaid-link';
import { Button } from '@monor/ui/shadcn/button';
import { User } from '../types/user';
import { createLinkToken, exchangePublicToken } from '../actions/plaid.actions';

type PlaidLinkProps = {
  user: User;
  dwollaCustomerId?: string;
};

const PlaidLink = ({ user }: PlaidLinkProps) => {
  const [token, setToken] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({ publicToken: public_token, user });

      router.push('/');
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open } = usePlaidLink(config);

  return <Button onClick={() => open()}>Add New Bank Account</Button>;
};

export default PlaidLink;
