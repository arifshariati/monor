import Link from 'next/link';
import { ICard1 } from '@monor/interfaces';
import { Button } from './shadcn/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './shadcn/card';

type Card1Type = { data: ICard1 };

export const Card1 = ({
  data: { titleLogo, title, description, button },
}: Card1Type) => {
  return (
    <Card data-testid="card1-card" className="rounded-md shadow-sm">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {titleLogo && titleLogo}
          {title}
        </CardTitle>
        <CardDescription className="min-h-10 max-h-10">
          {description}
        </CardDescription>
      </CardHeader>
      {button && (
        <CardFooter>
          <Link href={button.url} className="w-full">
            <Button data-testid="card1-button" className="w-full">
              {button.text}
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
