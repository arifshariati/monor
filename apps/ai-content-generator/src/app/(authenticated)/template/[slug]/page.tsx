'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Mail } from 'lucide-react';
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@monor/ui/shadcn';
import { templateList } from '../../../../constants/templates';

type TemplateDynamicPageProps = {
  params: {
    slug: string;
  };
};

const TemplateDynamicPage = ({
  params: { slug },
}: TemplateDynamicPageProps) => {
  const router = useRouter();
  const formDetails = templateList.find((template) => template.slug === slug);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full">
        <Button className="gap-1" onClick={() => router.back()}>
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
      </div>
      {/* forms section */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 max-h-[400px] ">
        {/* form section */}
        <div className="flex flex-col p-4">
          <Card data-testid="card1-card" className="rounded-md shadow-sm">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center text-xl">
                {formDetails?.titleLogo}
                {formDetails?.title}
              </CardTitle>
              <CardDescription className="min-h-10 max-h-10">
                {formDetails?.description}
              </CardDescription>
            </CardHeader>

            {formDetails?.button && (
              <CardFooter>
                <Button data-testid="card1-button" className="w-full">
                  {formDetails.button.text}
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
        {/* WYSWYG section */}
        <div className="flex flex-col p-4 col-span-2">
          <h1>Hellow</h1>
        </div>
      </div>
    </div>
  );
};

export default TemplateDynamicPage;
