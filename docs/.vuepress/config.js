module.exports = {
  title: 'VuePress Starter Kit',
  description: 'This is your page description.',
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
        text: 'Section',
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
