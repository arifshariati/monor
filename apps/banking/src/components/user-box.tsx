'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { stringFirstLetterCapital } from '@monor/utils/js';
import { logOutUser } from '../actions/auth.actions';

type UserBoxProps = {
  name: string;
  email: string;
};
const UserBox = ({ name, email }: UserBoxProps) => {
  const router = useRouter();
  const handleLogOut = async () => {
    await logOutUser();
    router.push('/sign-in');
  };
  return (
    <div className="flex items-center gap-2 p-2 mt-auto mb-0 md:mb-4 w-full h-auto bg-accent rounded-lg">
      <div className="flex items-center justify-center w-[40px] h-[40px] bg-slate-900 rounded-lg">
        <p className="text-2xl font-bold text-white">
          {stringFirstLetterCapital(name)}
        </p>
      </div>
      <div className="flex flex-col flex-1 truncate">
        <p className="text-xs font-bold text-accent-foreground">
          {name.split(' ')[0]}
        </p>
        <p className="text-xs text-accent-foreground">{email}</p>
      </div>
      <LogOut onClick={handleLogOut} cursor={'pointer'} />
    </div>
  );
};

export default UserBox;
