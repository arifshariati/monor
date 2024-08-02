'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@monor/ui/shadcn';
import { templateList } from '../../../../constants/templates';
import TemplateCard from './(components)/template-card';

type TemplateDynamicPageProps = {
  params: {
    slug: string;
  };
};

const TemplateDynamicPage = ({
  params: { slug },
}: TemplateDynamicPageProps) => {
  const router = useRouter();

  const templateDetails = templateList.find(
    (template) => template.slug === slug
  );
  if (!templateDetails) return null;

  const onSubmit = (values: any) => {
    console.log(values);
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
        <TemplateCard templateData={templateDetails} onSubmit={onSubmit} />
        {/* WYSWYG section */}
        <div className="flex flex-col p-4 col-span-2">
          <h1>Hellow</h1>
        </div>
      </div>
    </div>
  );
};

export default TemplateDynamicPage;
