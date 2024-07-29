import { Card1 } from '@monor/ui';
import { templateList } from '../../../constants/templates';

const TemplatePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {templateList.map((template) => (
          <Card1 key={template.title} data={template} />
        ))}
      </div>
    </div>
  );
};

export default TemplatePage;
