'use client';

import { useState } from 'react';
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
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-4 w-full lg:w-[500px]">
      <DynamicForm
        config={formConfig}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SignUpForm;
