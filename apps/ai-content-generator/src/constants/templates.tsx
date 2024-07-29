import { ICard1 } from '@monor/interfaces';
import {
  ClipboardType,
  Lightbulb,
  Mail,
  MailPlus,
  TypeOutline,
} from 'lucide-react';

import { YoutubeIcon } from '../statics/icons';

interface IformField {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
interface ITemplateList extends ICard1 {
  category: string;
  aiPrompt: string;
  form?: IformField[];
}
export const templateList: ITemplateList[] = [
  {
    titleLogo: <Mail className="h-6 w-6 text-muted-foreground" />,
    title: 'Write Email',
    slug: 'write-email',
    description:
      'This is your AI powered email writer. Lets write professional email with AI.',
    category: 'email',
    aiPrompt: 'Write for me a beautify official email',
    button: {
      url: '/template/write-email',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <MailPlus className="h-6 w-6 text-muted-foreground" />,
    title: 'Rewrite Your Email',
    slug: 'rewrite-your-email',
    description:
      'The re-write email AI helps you draft and write emails in more professional manner.',
    category: 'email',
    aiPrompt: 'Re-write this email for me in a more official manner',
    button: {
      url: '/template/rewrite-your-email',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <TypeOutline className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Title',
    slug: 'blog-title',
    description: 'An AI tool that creates SEO friendly blog title for you.',
    category: 'blog',
    aiPrompt:
      'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
    button: {
      url: '/template/blog-title',
      text: 'Lets go',
    },
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    titleLogo: <ClipboardType className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Content',
    slug: 'blog-content',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'blog',
    aiPrompt:
      'Generate Blog Content based on topic and outline in rich text editor format',
    button: {
      url: '/template/blog-content',
      text: 'Lets go',
    },
    form: [
      {
        label: 'Enter your blog topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
      {
        label: 'Enter blog Outline here',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    titleLogo: <Lightbulb className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Topic Ideas',
    slug: 'blog-topic-ideas',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'blog',
    aiPrompt:
      'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
    button: {
      url: '/template/blog-topic-ideas',
      text: 'Lets go',
    },
    form: [
      {
        label: 'Enter your Niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
    ],
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube SEO title',
    slug: 'youtube-seo-title',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'youtube tools',
    aiPrompt:
      'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
    button: {
      url: '/template/youtube-seo-title',
      text: 'Lets go',
    },
    form: [
      {
        label: 'Enter your youtube video topic keyowords',
        field: 'input',
        name: 'keywords',
        required: true,
      },
      {
        label: 'Enter youtube description Outline here',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube Description',
    slug: 'youtube-description',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'youtube tools',
    aiPrompt:
      'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
    button: {
      url: '/template/youtube-description',
      text: 'Lets go',
    },
    form: [
      {
        label: 'Enter your blog topic/title',
        field: 'input',
        name: 'topic',
        required: true,
      },
      {
        label: 'Enter youtube Outline here',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube Tags',
    slug: 'youtube-tags',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'youtube tools',
    aiPrompt:
      'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',
    button: {
      url: '/template/youtube-tags',
      text: 'Lets go',
    },
    form: [
      {
        label: 'Enter your youtube title',
        field: 'input',
        name: 'title',
        required: true,
      },
      {
        label: 'Enter youtube video Outline here (Optional)',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
];
