import { FormConfig, FormFieldType } from '@monor/types/form';

export const formConfig: FormConfig = {
  title: 'Sign up',
  description: 'Provide below details to register',
  submitButtonText: 'Create Account',
  fields: [
    {
      name: 'name',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [{ method: 'min', params: [8] }],
      },
    },
    {
      name: 'address1',
      label: 'Address',
      placeholder: 'Enter your address',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [{ method: 'min', params: [8] }],
      },
    },
    {
      name: 'city',
      label: 'City',
      placeholder: 'Enter your city',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [],
      },
    },
    {
      name: 'state',
      label: 'State',
      placeholder: 'Enter your state',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [],
      },
    },
    {
      name: 'postalCode',
      label: 'Postal Code',
      placeholder: 'Enter your postal code',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [],
      },
    },
    {
      name: 'dob',
      label: 'DOB',
      placeholder: 'Enter your DOB',
      type: FormFieldType.Date,
      validation: {
        type: 'date',
        rules: [],
      },
    },
    {
      name: 'ssn',
      label: 'SSN',
      placeholder: 'Enter your ssn',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [],
      },
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email address',
      type: FormFieldType.Text,
      validation: {
        type: 'string',
        rules: [{ method: 'email', params: [] }],
      },
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      type: FormFieldType.Password,
      validation: {
        type: 'string',
        rules: [
          { method: 'min', params: [8] },
          { method: 'max', params: [64] },
        ],
      },
    },
  ],
  defaultValues: {
    name: '',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    dob: '',
    ssn: '',
    email: '',
    password: '',
  },
};
