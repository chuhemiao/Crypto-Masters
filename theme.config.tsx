import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span> 📖 Crypto Master</span>,
  project: {
    link: 'https://github.com/chuhemiao/Crypto-Masters'
  },
  chat: {
    link: 'https://x.com/0xkkdemian',
    icon: (
      <svg width='24' height='24' viewBox='0 0 248 204'>
        <path
          fill='currentColor'
          d='M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z'
        />
      </svg>
    )
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      };
    }
  },
  // banner: {
  //   key: 'bitcoin etf',
  //   content: (
  //     <a href='https://kkdemian.com' target='_blank'>
  //       🎉 bitcoin etf is released. Read more →
  //     </a>
  //   )
  // },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  docsRepositoryBase: 'https://github.com/chuhemiao/Crypto-Masters',
  head: function useHead() {
    const config = useConfig();
    const title = `${config.title} – kkdemian`;
    const description = config.frontMatter.description || 'crypto masters book';
    const image =
      config.frontMatter.image || 'https://book.kkdemian.com/og.png';
    return (
      <>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta name='og:image' content={image} />

        <meta name='msapplication-TileColor' content='#fff' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='apple-mobile-web-app-title'
          content='kkdemian crypto masters '
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='https://book.kkdemian.com' />

        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-touch-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon-180x180.png'
        />
      </>
    );
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href='https://kkdemian.com' target='_blank'>
          kkdemian
        </a>
        .
      </span>
    )
  }
};

export default config;
