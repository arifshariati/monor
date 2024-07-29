import { ICard1 } from '@monor/interfaces';
import {
  ClipboardType,
  Lightbulb,
  Mail,
  MailPlus,
  TypeOutline,
} from 'lucide-react';

import { YoutubeIcon } from '../statics/icons';
export const templateList: ICard1[] = [
  {
    titleLogo: <Mail className="h-6 w-6 text-muted-foreground" />,
    title: 'Write Email',
    slug: 'write-email',
    description:
      'This is your AI powered email writer. Lets write professional email with AI.',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <MailPlus className="h-6 w-6 text-muted-foreground" />,
    title: 'Rewrite Your Email',
    slug: 'rewrite-your-email',
    description:
      'The re-write email AI helps you draft and write emails in more professional manner.',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <TypeOutline className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Title',
    slug: 'blog-title',
    description: 'An AI tool that creates SEO friendly blog title for you.',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <ClipboardType className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Content',
    slug: 'blog-content',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <Lightbulb className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Topic Ideas',
    slug: 'blog-topic-ideas',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube SEO title',
    slug: 'youtube-seo-title',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube Description',
    slug: 'youtube-description',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube Tags',
    slug: 'youtube-tags',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    button: {
      url: '/dashboard',
      text: 'Lets go',
    },
  },
];
