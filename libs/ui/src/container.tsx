import { cn } from '@monor/utils/tailwind';
type ContainerType = {
  children: React.ReactNode;
  className?: string;
  col?: boolean;
};
export const Container = ({ children, className, col }: ContainerType) => (
  <div
    data-testid="container"
    className={cn(
      'flex flex-wrap gap-4 p-2',
      col && 'flex-col',
      className && className
    )}
  >
    {children}
  </div>
);
