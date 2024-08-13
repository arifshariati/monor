'use client';
import moment from 'moment';
import { ColumnDef } from '@tanstack/react-table';
import { truncateString } from '@monor/utils/strings';
import { UserAiContentType } from '../../../db/schema';
import { Button } from '@monor/ui/shadcn/button';
import { CaretSortIcon } from '@radix-ui/react-icons';

export const columns: ColumnDef<UserAiContentType>[] = [
  {
    accessorKey: 'input',
    header: 'Input',
    cell: ({ row }) => truncateString(row.getValue('input'), 30),
  },
  {
    accessorKey: 'content',
    header: 'Content',
    cell: ({ row }) => truncateString(row.getValue('content')),
  },
  {
    accessorKey: 'wordCount',
    header: 'Count',
    cell: ({ row }) => Intl.NumberFormat().format(row.getValue('wordCount')),
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{moment(row.getValue('createdAt')).fromNow()}</div>,
  },
];
