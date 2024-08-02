import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormConfig, FormFieldConfig, FormFieldType } from '@monor/types';
import { generateZodSchema } from '@monor/utils/form-validation';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormField,
} from './shadcn';
import { DateFieled, SelectField, TextareaField, TextField } from './form';

type DynamicFormProps = {
  config: FormConfig;
  onSubmit: SubmitHandler<any>;
};

export const renderField = (field: FormFieldConfig, controllerField: any) => {
  switch (field.type) {
    case FormFieldType.Text:
    case FormFieldType.Email:
    case FormFieldType.Password:
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
          options={field.options!}
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
    default:
      return <></>;
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
