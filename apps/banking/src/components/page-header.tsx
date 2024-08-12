type PageHeaderProps = {
  type?: 'title' | 'greeting';
  title: string;
  subtext: string;
  user?: string;
};

const PageHeader = ({ type, title, subtext, user }: PageHeaderProps) => {
  return (
    <div className="flex flex-col w-full font-lexend">
      <h1 className="text-3xl font-semibold">
        {title}
        {type === 'greeting' && (
          <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-transparent bg-clip-text">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="text-muted-foreground">{subtext}</p>
    </div>
  );
};

export default PageHeader;
