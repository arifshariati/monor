'use client';
import { useState, useEffect, useCallback } from 'react';
import { useUser } from '@clerk/nextjs';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getUserRecords } from '../../../actions/neon-drizzle';
import { UserAiContentType } from '../../../db/schema';
import { toast } from '@monor/ui/shadcn';

const HistoryPage = () => {
  const [data, setData] = useState<UserAiContentType[] | []>([]);
  const { user } = useUser();

  const fetchRecords = useCallback(async () => {
    try {
      const result = await getUserRecords({
        email: user?.primaryEmailAddress?.emailAddress,
      });

      if (result) {
        setData(result);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast({
          title: '🔴 Error',
          description: e.message,
        });
      } else {
        console.log(e);
      }
    }
  }, [user?.primaryEmailAddress?.emailAddress]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default HistoryPage;
