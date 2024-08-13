import { Table } from '@tanstack/react-table';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@monor/ui/shadcn/button';
import { Input } from '@monor/ui/shadcn/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@monor/ui/shadcn/dropdown-menu';
import { UserAiContentType } from '../../../db/schema';

type DataTableHeaderProps = {
  table: Table<UserAiContentType>;
};

const DataTableHeader = ({ table }: DataTableHeaderProps) => {
  return (
    <div className="flex items-cente justify-between">
      <Input
        className="max-w-sm"
        placeholder="filter data ..."
        value={(table.getColumn('content')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('content')?.setFilterValue(event.target.value)
        }
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DataTableHeader;
