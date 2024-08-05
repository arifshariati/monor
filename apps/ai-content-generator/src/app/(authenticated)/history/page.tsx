'use client';
import { useState, useEffect } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getRecords } from '../../../actions/neon-drizzle';
import { UserAiContentType } from '../../../db/schema';

const HistoryPage = () => {
  const [data, setData] = useState<UserAiContentType[] | []>([]);
  useEffect(() => {
    const records = async () => {
      const result = await getRecords();
      if (result) {
        setData(result);
      }
    };

    records();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default HistoryPage;
