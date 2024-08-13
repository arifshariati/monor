/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICard1 } from '@monor/interfaces/card.interface';
import { FormFieldConfig } from '@monor/types/form';

export interface ITemplateList extends ICard1 {
  category: 'Blog' | 'Youtube Tools' | 'Re-writing Tools' | 'Email';
  aiPrompt: string;
  formFields: FormFieldConfig[];
  defaultValues: { [key: string]: any };
}
