module.exports = {
  title: 'Tech Sabbatical',
  description: 'Resisting the tornado of technology once a month.',
  themeConfig: {
    // logo: '/vuepress-logo.png',
    // lastUpdated: 'Last updated',
    // repo: 'https://github.com/bencodezen/vuepress-starter-kit',
    // docsDir: 'docs',
    // editLinks: true,
    // editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Blog',
        items: [
          {
            text: 'Attempt #1',
            link: '/blog/2020-01'
          },
        ]
      },
    ],
    plugins: ['@vuepress/active-header-links']
  }
}
