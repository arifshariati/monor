'use client';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { Button } from '@monor/ui/shadcn/button';
import HeaderLandingPage from './(landing-page)/header';

const HomePage = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col h-full">
      <HeaderLandingPage user={user} />
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
          {!user && (
            <Link href="/sign-up" className="my-20">
              <Button className="py-8">
                <p className="text-3xl ">Join the ride NOW</p>
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
