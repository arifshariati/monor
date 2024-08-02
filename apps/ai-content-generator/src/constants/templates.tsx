import { ClipboardType, Lightbulb, TypeOutline } from 'lucide-react';
import { FormFieldType } from '@monor/types';
import { YoutubeIcon } from '../statics/icons';
import { ITemplateList } from '../types/template';

export const templateList: ITemplateList[] = [
  {
    titleLogo: <TypeOutline className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Title',
    slug: 'blog-title',
    description: 'An AI tool that creates SEO friendly blog title for you.',
    category: 'Blog',
    aiPrompt:
      'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
    formFields: [
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Enter blog title',
        type: FormFieldType.Text,
        validation: {
          type: 'string',
          rules: [{ method: 'min', params: [1] }],
        },
      },
    ],
    defaultValues: {
      title: '',
    },
    button: {
      url: '/template/blog-title',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <ClipboardType className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Content',
    slug: 'blog-content',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'Blog',
    aiPrompt:
      'Generate Blog Content based on topic and outline in rich text editor format',
    formFields: [
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Enter blog title',
        type: FormFieldType.Text,
        validation: {
          type: 'string',
          rules: [{ method: 'min', params: [1] }],
        },
      },
    ],
    defaultValues: {
      title: '',
    },
    button: {
      url: '/template/blog-content',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <Lightbulb className="h-6 w-6 text-muted-foreground" />,
    title: 'Blog Topic Ideas',
    slug: 'blog-topic-ideas',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'Blog',
    aiPrompt:
      'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
    formFields: [
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Enter blog title',
        type: FormFieldType.Text,
        validation: {
          type: 'string',
          rules: [{ method: 'min', params: [1] }],
        },
      },
    ],
    defaultValues: {
      title: '',
    },
    button: {
      url: '/template/blog-topic-ideas',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube SEO title',
    slug: 'youtube-seo-title',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'Youtube Tools',
    aiPrompt:
      'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
    formFields: [
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Enter blog title',
        type: FormFieldType.Text,
        validation: {
          type: 'string',
          rules: [{ method: 'min', params: [1] }],
        },
      },
    ],
    defaultValues: {
      title: '',
    },
    button: {
      url: '/template/youtube-seo-title',
      text: 'Lets go',
    },
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube Description',
    slug: 'youtube-description',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'Youtube Tools',
    aiPrompt:
      'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
    button: {
      url: '/template/youtube-description',
      text: 'Lets go',
    },
    formFields: [
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Enter blog title',
        type: FormFieldType.Text,
        validation: {
          type: 'string',
          rules: [{ method: 'min', params: [1] }],
        },
      },
    ],
    defaultValues: {
      title: '',
    },
  },
  {
    titleLogo: <YoutubeIcon className="h-6 w-6 text-muted-foreground" />,
    title: 'Youtube Tags',
    slug: 'youtube-tags',
    description:
      'An AI tool that serves as your personal blog content with viral-worthy slugs provided',
    category: 'Youtube Tools',
    aiPrompt:
      'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',
    button: {
      url: '/template/youtube-tags',
      text: 'Lets go',
    },
    formFields: [
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Enter blog title',
        type: FormFieldType.Text,
        validation: {
          type: 'string',
          rules: [{ method: 'min', params: [1] }],
        },
      },
    ],
    defaultValues: {
      title: '',
    },
  },
];
