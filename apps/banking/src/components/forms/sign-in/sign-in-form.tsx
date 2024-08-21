'use client';

import { useRouter } from 'next/navigation';
import { DynamicForm } from '@monor/ui/dynamic-form';
import { toast } from '@monor/ui/shadcn/use-toast';
import { formConfig } from './sign-in-form-config';
import { signIn } from '../../../actions/auth.actions';

const SignInForm = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    console.log(values);
    try {
      const loggedIn = await signIn(values);
      router.push('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: '🔴 Error',
          description: error.message,
        });
      }
    }
  };
  return (
    <div className="p-4 w-full lg:w-[500px]">
      <DynamicForm config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default SignInForm;
