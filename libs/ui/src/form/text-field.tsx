import { ControllerRenderProps } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '../shadcn/form';
import { Input } from '../shadcn/input';

import { FormFieldType } from '@monor/types/form';

type TextFieldProps = {
  field: ControllerRenderProps;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  description?: string;
};

export const TextField = ({
  field,
  type,
  label,
  placeholder = '',
  description = '',
}: TextFieldProps) => (
  <FormItem className="space-y-0.5">
    <FormLabel>{label}</FormLabel>
    <FormControl>
      <Input
        type={type}
        placeholder={placeholder}
        autoComplete={field.name}
        {...field}
      />
    </FormControl>
    {description && <FormDescription>{description}</FormDescription>}
    <FormMessage />
  </FormItem>
);
