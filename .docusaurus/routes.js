import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gz/__docusaurus/debug',
    component: ComponentCreator('/gz/__docusaurus/debug', '1c3'),
    exact: true
  },
  {
    path: '/gz/__docusaurus/debug/config',
    component: ComponentCreator('/gz/__docusaurus/debug/config', '886'),
    exact: true
  },
  {
    path: '/gz/__docusaurus/debug/content',
    component: ComponentCreator('/gz/__docusaurus/debug/content', '5d5'),
    exact: true
  },
  {
    path: '/gz/__docusaurus/debug/globalData',
    component: ComponentCreator('/gz/__docusaurus/debug/globalData', 'e34'),
    exact: true
  },
  {
    path: '/gz/__docusaurus/debug/metadata',
    component: ComponentCreator('/gz/__docusaurus/debug/metadata', '1e4'),
    exact: true
  },
  {
    path: '/gz/__docusaurus/debug/registry',
    component: ComponentCreator('/gz/__docusaurus/debug/registry', 'f01'),
    exact: true
  },
  {
    path: '/gz/__docusaurus/debug/routes',
    component: ComponentCreator('/gz/__docusaurus/debug/routes', 'e0c'),
    exact: true
  },
  {
    path: '/gz/blog',
    component: ComponentCreator('/gz/blog', '492'),
    exact: true
  },
  {
    path: '/gz/blog/archive',
    component: ComponentCreator('/gz/blog/archive', 'e8c'),
    exact: true
  },
  {
    path: '/gz/blog/first-blog-post',
    component: ComponentCreator('/gz/blog/first-blog-post', '9ed'),
    exact: true
  },
  {
    path: '/gz/blog/long-blog-post',
    component: ComponentCreator('/gz/blog/long-blog-post', 'f3f'),
    exact: true
  },
  {
    path: '/gz/blog/mdx-blog-post',
    component: ComponentCreator('/gz/blog/mdx-blog-post', 'ece'),
    exact: true
  },
  {
    path: '/gz/blog/tags',
    component: ComponentCreator('/gz/blog/tags', '3a7'),
    exact: true
  },
  {
    path: '/gz/blog/tags/docusaurus',
    component: ComponentCreator('/gz/blog/tags/docusaurus', '73e'),
    exact: true
  },
  {
    path: '/gz/blog/tags/facebook',
    component: ComponentCreator('/gz/blog/tags/facebook', '488'),
    exact: true
  },
  {
    path: '/gz/blog/tags/hello',
    component: ComponentCreator('/gz/blog/tags/hello', 'af5'),
    exact: true
  },
  {
    path: '/gz/blog/tags/hola',
    component: ComponentCreator('/gz/blog/tags/hola', '1e2'),
    exact: true
  },
  {
    path: '/gz/blog/welcome',
    component: ComponentCreator('/gz/blog/welcome', '394'),
    exact: true
  },
  {
    path: '/gz/Dockerfile',
    component: ComponentCreator('/gz/Dockerfile', 'b21'),
    exact: true
  },
  {
    path: '/gz/markdown-page',
    component: ComponentCreator('/gz/markdown-page', 'c7a'),
    exact: true
  },
  {
    path: '/gz/my-markdown-page',
    component: ComponentCreator('/gz/my-markdown-page', '56b'),
    exact: true
  },
  {
    path: '/gz/my-react-page',
    component: ComponentCreator('/gz/my-react-page', '90a'),
    exact: true
  },
  {
    path: '/gz/docs',
    component: ComponentCreator('/gz/docs', 'bb9'),
    routes: [
      {
        path: '/gz/docs/category/tutorial---basics',
        component: ComponentCreator('/gz/docs/category/tutorial---basics', '72e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/category/tutorial---extras',
        component: ComponentCreator('/gz/docs/category/tutorial---extras', '596'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/intro',
        component: ComponentCreator('/gz/docs/intro', 'a6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/gz/docs/tutorial-basics/congratulations', '8aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/gz/docs/tutorial-basics/create-a-blog-post', 'cd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/gz/docs/tutorial-basics/create-a-document', 'fef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/gz/docs/tutorial-basics/create-a-page', 'c25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/gz/docs/tutorial-basics/deploy-your-site', 'ab7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/gz/docs/tutorial-basics/markdown-features', 'a8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/gz/docs/tutorial-extras/manage-docs-versions', '673'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gz/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/gz/docs/tutorial-extras/translate-your-site', 'aea'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/gz/',
    component: ComponentCreator('/gz/', '4ad'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
