import { FormFieldConfig } from '@monor/types/form';

export type FormFieldType = {
  id: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'select'
    | 'checkbox'
    | 'radio';
  inputType: 'select' | 'input' | 'textarea';
  name: string;
  label?: string;
  options?: { value: string; label: string; id: string }[];
  placeholder?: string;
};

export type StepConfig = {
  stepNumber: number;
  stepValue: string;
  stepLabel: string;
  fields: FormFieldConfig[];
  defaultValues: { [key: string]: any };
};

// export type FormFieldConfig = {
//   name: string;
//   label: string;
//   placeholder?: string;
//   type: FormFieldType;
//   options?: FormOptions[];
//   description?: string;
//   validation: {
//     type: ZodMethodType;
//     rules: ValidationRule[];
//   };
// };
