import moment from 'moment';
import { ColumnDef } from '@tanstack/react-table';
import { truncateString } from '@monor/utils/strings';
import { UserAiContentType } from '../../../db/schema';

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
    header: 'CreatedAt',
    cell: ({ row }) => moment(row.getValue('createdAt')).fromNow(),
  },
];
