import { Account } from '../types/account';
import { Bank } from '../types/bank';
import { Transaction } from '../types/transaction';
import { User } from '../types/user';
import UserBox from './user-box';

type UserProfileRightProps = {
  user: User;
  transactions?: Transaction[];
  banks?: Bank[] & Account[];
};

const UserProfileRight = ({
  user,
  transactions,
  banks,
}: UserProfileRightProps) => {
  return (
    <aside className="hidden max-h-screen flex-col xl:flex w-[355px] p-2 bg-blue-100/20 rounded-lg">
      <section className="flex flex-col pb-8">
        <UserBox name={user.name} email={user.email} />
      </section>
      <section></section>
    </aside>
  );
};

export default UserProfileRight;
