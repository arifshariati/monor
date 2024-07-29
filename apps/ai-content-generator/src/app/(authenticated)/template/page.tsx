'use client';
import { Card1 } from '@monor/ui';
import { templateList } from '../../../constants/templates';
import { Search } from 'lucide-react';
import { Input } from '@monor/ui/shadcn';
import { useState } from 'react';

const TemplatePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredTemplates = templateList.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col items-center justify-center text-center h-[200px] p-4">
        <h1 className="text-3xl font-bold">Browse all templates</h1>
        <p>
          Search your desired templated through thousands of available templates
        </p>
        <div className="relative w-full max-w-screen-md mt-10">
          <Search
            data-testid="search-icon"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md bg-background pl-8"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredTemplates.map((template) => (
          <Card1 key={template.title} data={template} />
        ))}
      </div>
    </div>
  );
};

export default TemplatePage;
