type BoxPageCenterProps = { children: React.ReactNode };

const BoxPageCenter = ({ children }: BoxPageCenterProps) => {
  return (
    <div data-testid="box-page-center" className="h-screen flex items-center justify-center">{children}</div>
  );
};

export default BoxPageCenter;
