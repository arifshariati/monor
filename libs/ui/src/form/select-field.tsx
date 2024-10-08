import { ControllerRenderProps } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '../shadcn/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../shadcn/select';

import { FormOptions } from '@monor/types/form';

type SelectFieldProps = {
  field: ControllerRenderProps;
  label: string;
  options: FormOptions[];
  placeholder?: string;
  description?: string;
};

export const SelectField = ({
  field,
  label,
  options,
  placeholder = '',
  description = '',
}: SelectFieldProps) => {
  return (
    <FormItem className="space-y-0.5">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
