/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@monor/ui/shadcn';
import { templateList } from '../../../../constants/templates';
import TemplateCard from './(components)/template-card';
import { chatSession } from '../../../../utils/gemini-modal';
import PromoptResult from './(components)/prompt-result';

type TemplateDynamicPageProps = {
  params: {
    slug: string;
  };
};

const TemplateDynamicPage = ({
  params: { slug },
}: TemplateDynamicPageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editorData, setEditorData] = useState<string>('');
  const router = useRouter();

  const templateDetails = templateList.find(
    (template) => template.slug === slug
  );
  if (!templateDetails) return null;

  const onSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const aiPrompt = `${JSON.stringify(values)} ${templateDetails.aiPrompt}`;
      const result = await chatSession.sendMessage(aiPrompt);
      setEditorData(result.response.text());
    } catch (e) {
      // do nothing
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full">
        <Button className="gap-1" onClick={() => router.back()}>
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 max-h-[400px] ">
        <TemplateCard
          templateData={templateDetails}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
        <div className="flex flex-col p-4 col-span-2">
          <PromoptResult data={editorData} />
        </div>
      </div>
    </div>
  );
};

export default TemplateDynamicPage;
