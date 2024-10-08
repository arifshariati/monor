/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateZodSchema } from '@monor/utils/form-validation';
import { renderField } from '@monor/ui/dynamic-form';
import { Button } from '@monor/ui/shadcn/button';
import { Form, FormField } from '@monor/ui/shadcn/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@monor/ui/shadcn/card';
import { ITemplateList } from '../../../../../types/template';
import { RefreshCcw } from 'lucide-react';

type TemplateCardProps = {
  templateData: ITemplateList;
  onSubmit: SubmitHandler<any>;
  isLoading?: boolean;
};

const TemplateCard = ({
  isLoading = false,
  onSubmit,
  templateData: {
    title,
    titleLogo,
    description,
    formFields,
    defaultValues,
    button,
  },
}: TemplateCardProps) => {
  const schema = generateZodSchema(formFields);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <div className="flex flex-col p-4">
      <Card data-testid="card1-card" className="rounded-md shadow-sm">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center text-xl">
            {titleLogo}
            {title}
          </CardTitle>
          <CardDescription className="min-h-10 max-h-10">
            {description}
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-1">
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  disabled={isLoading}
                  render={({ field: controllerField }) =>
                    renderField(field, controllerField)
                  }
                />
              ))}
            </CardContent>

            {button && (
              <CardFooter>
                <Button
                  disabled={isLoading}
                  data-testid="card1-button"
                  className="w-full flex gap-4"
                >
                  {isLoading && <RefreshCcw className="animate-spin" />}
                  {button.text}
                </Button>
              </CardFooter>
            )}
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default TemplateCard;
