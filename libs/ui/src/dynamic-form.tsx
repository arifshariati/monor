/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RefreshCcw } from 'lucide-react';
import { cn } from '@monor/utils/tailwind/cn';
import {
  FormConfig,
  FormFieldConfig,
  FormFieldType,
  FormOptions,
} from '@monor/types/form';
import { generateZodSchema } from '@monor/utils/form-validation';
import { Button } from './shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './shadcn/card';
import { Form, FormField } from './shadcn/form';
import { DateFieled } from './form/date-field';
import { SelectField } from './form/select-field';
import { TextareaField } from './form/text-area-field';
import { TextField } from './form/text-field';

export const renderField = (field: FormFieldConfig, controllerField: any) => {
  switch (field.type) {
    case FormFieldType.Text:
    case FormFieldType.Email:
    case FormFieldType.Password:
    default:
      return (
        <TextField
          field={controllerField}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          description={field.description}
        />
      );
    case FormFieldType.Select:
      return (
        <SelectField
          field={controllerField}
          label={field.label}
          placeholder={field.placeholder}
          description={field.description}
          options={field.options as FormOptions[]}
        />
      );
    case FormFieldType.Date:
      return (
        <DateFieled
          field={controllerField}
          label={field.label}
          description={field.description}
        />
      );
    case FormFieldType.TextArea:
      return (
        <TextareaField
          field={controllerField}
          label={field.label}
          placeholder={field.placeholder}
          description={field.description}
        />
      );
  }
};

type DynamicFormProps = {
  config: FormConfig;
  onSubmit: SubmitHandler<any>;
  isLoading?: boolean;
};

export const DynamicForm = ({
  config,
  onSubmit,
  isLoading,
}: DynamicFormProps) => {
  const schema = generateZodSchema(config.fields);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: config.defaultValues,
  });

  // group fields by 'group' property
  const groupedFields = config.fields.reduce((acc, field) => {
    const groupKey = field.group || field.name;
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(field);
    return acc;
  }, {} as Record<string, FormFieldConfig[]>);

  return (
    <Card>
      <CardHeader>
        {config.title && <CardTitle>{config.title}</CardTitle>}
        {config.description && (
          <CardDescription>{config.description}</CardDescription>
        )}
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-1">
            {Object.entries(groupedFields).map(([groupKey, fields]) => (
              <div
                key={groupKey}
                className={cn(
                  'flex',
                  fields.length > 1
                    ? 'flex-row justify-between gap-2'
                    : 'flex-col'
                )}
              >
                {fields.map((field) => (
                  <div className="w-full" key={field.name}>
                    <FormField
                      control={form.control}
                      name={field.name}
                      render={({ field: controllerField }) =>
                        renderField(field, controllerField)
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <RefreshCcw className="animate-spin mr-2 size-5" />}{' '}
              &nbsp;
              {config.submitButtonText}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
