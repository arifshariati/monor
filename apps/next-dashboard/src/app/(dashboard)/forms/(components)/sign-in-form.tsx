'use client';
import { DynamicForm } from '@monor/ui/dynamic-form';
import { formConfig } from './sign-in-form-config';

const SignInForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return <DynamicForm config={formConfig} onSubmit={handleSubmit} />;
};

export default SignInForm;
