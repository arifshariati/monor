'use client';

import { DynamicForm } from '@monor/ui/dynamic-form';
import { formConfig } from './sign-in-form-config';

const SignInForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="p-4 w-full lg:w-[500px]">
      <DynamicForm config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default SignInForm;
