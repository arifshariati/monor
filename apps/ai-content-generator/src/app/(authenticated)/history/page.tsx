'use client';
import { useEffect, useCallback } from 'react';
import { useUser } from '@clerk/nextjs';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getUserRecords } from '../../../actions/neon-drizzle';
import { toast } from '@monor/ui/shadcn';
import { useUserAiContent } from '../../../store/user-ai-content';

const HistoryPage = () => {
  const { userAiContent, setUserAiContents, hasLoaded } = useUserAiContent();

  const { user } = useUser();

  const fetchRecords = useCallback(async () => {
    if (!user?.primaryEmailAddress?.emailAddress || hasLoaded) return;

    try {
      const result = await getUserRecords({
        email: user?.primaryEmailAddress?.emailAddress,
      });

      if (result) {
        setUserAiContents(result);
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
  }, [user?.primaryEmailAddress?.emailAddress, setUserAiContents, hasLoaded]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={userAiContent} />
    </div>
  );
};

export default HistoryPage;
