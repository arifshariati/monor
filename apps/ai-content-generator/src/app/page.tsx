import Link from 'next/link';
import { Button } from '@monor/ui/shadcn';
import HeaderLandingPage from './(landing-page)/header';


const HomePage = () => {
  return (
    <div className="flex flex-col h-full">
      <HeaderLandingPage />
      <main>
        <div className="font-lexend min-h-svh container flex flex-col gap-5 justify-center items-center text-center">
          <h1 className="text-5xl font-bold">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 ">
              AI
            </span>{' '}
            one stop{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 ">
              content generator
            </span>{' '}
            solution.{' '}
          </h1>
          <h2 className="text-2xl">
            Brows tons of categories such as Youtube tag generator and Blog
            article writer.
          </h2>
          <div className="flex flex-col items-center gap-5 py-10">
            <Link href="/sign-up">
              <Button>Get started NOW</Button>
            </Link>

            <Link href="/dashboard">
              <Button variant={'ghost'}>Take me to the dashboard</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
