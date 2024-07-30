import { cn } from '@monor/utils/tailwind';
type ContainerType = {
  children: React.ReactNode;
  col?: boolean;
};
export const Container = ({ children, col }: ContainerType) => (
  <div
    data-testid="container"
    className={cn('flex flex-wrap gap-4 p-2', col && 'flex-col')}
  >
    {children}
  </div>
);
