/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

type DynamicFormProps = {
  config: FormConfig;
  onSubmit: SubmitHandler<any>;
};

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

export const DynamicForm = ({ config, onSubmit }: DynamicFormProps) => {
  const schema = generateZodSchema(config.fields);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: config.defaultValues,
  });

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
            {config.fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: controllerField }) =>
                  renderField(field, controllerField)
                }
              />
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              {config.submitButtonText}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
