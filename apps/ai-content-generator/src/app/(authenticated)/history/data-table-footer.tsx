import { Table } from '@tanstack/react-table';
import { Button } from '@monor/ui/shadcn/button';
import { UserAiContentType } from '../../../db/schema';

type DataTableFooterProps = {
  table: Table<UserAiContentType>;
};

const DataTableFooter = ({ table }: DataTableFooterProps) => {
  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <div className="flex items-center space-x-2">
        <p className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} total records.
        </p>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DataTableFooter;
