import SignInForm from './(components)/sign-in-form';

const FormsPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2">
        <SignInForm />
      </div>
      <div className="w-full">Others</div>
    </div>
  );
};

export default FormsPage;
