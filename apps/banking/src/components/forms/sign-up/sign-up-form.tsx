'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DynamicForm } from '@monor/ui/dynamic-form';
import { formConfig } from './sign-up-form-config';
import { signUp } from '../../../actions/auth.actions';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      await signUp(values);
      router.push('/');
    } catch (error: unknown) {
      console.error(
        'Error while signing up user.',
        JSON.stringify(error, null, 2)
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-2 p-4 w-full lg:w-[500px]">
      <DynamicForm
        config={formConfig}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <div className="flex gap-2 items-center justify-center text-sm">
        Already have an account?
        <Link href={'/sign-in'} className="underline">
          {' '}
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
