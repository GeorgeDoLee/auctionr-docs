// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AuctionR',
  tagline: 'Real-time auctions made simple, fast, and scalable.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://GeorgeDoLee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/auctionr-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GeorgeDoLee', // Usually your GitHub org/user name.
  projectName: 'auctionr-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          property: 'og:image', 
          content: './static/img/logo.svg'
        },
        {
          property: 'og:description',
          content: "a real-time auction microservice built with ASP.NET Core"
        },
        {
          property: 'description',
          content: "a real-time auction microservice built with ASP.NET Core"
        }
      ],  
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'AuctionR',
        logo: {
          alt: 'AuctionR Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'docs/Contributing',
            label: 'Contributing',
            position: 'left',
          },
          {
            to: 'docs/License',
            label: 'License',
            position: 'left',
          },
          {
            href: 'https://github.com/GeorgeDoLee/auctionr/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'AuctionR Documentation',
                to: '/docs/Documentation/introduction/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributing Guide',
                to: '/docs/Contributing/',
              },
              {
                label: 'Issues',
                href: 'https://github.com/GeorgeDoLee/auctionr/issues/',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/GeorgeDoLee/auctionr/discussions/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
                to: '/docs/License/',
              }
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GeorgeDoLee/auctionr/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/giorgi-dolidze-05428b278/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AuctionR. Built with Docusaurus.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
