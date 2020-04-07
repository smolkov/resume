module.exports = {
    base: '/resume/',
    title: 'Aleksandr Smolkov',
    description: 'Resume, Lebenslauf',
    locales: {
        '/': {
          lang: 'de-DE',
          title: '',
          description: 'Lebenslauf'
        },
        '/en/': {
          lang: 'en-EN',
          title: '',
          description: 'Resume,CV'
        }
    },
    themeConfig: {
      locales: {
        '/': {
          label: 'Deutch',
          selectText: 'Sprache',
          ariaLabel: 'Sprache auswaelen',
          editLinkText: 'Diese Seite auf GitHub bearbeiten',
          lastUpdated: 'Letzte Anderung',
          nav: require('./nav/de'),
        },
        '/en/': {
          label: 'English',
          selectText: 'Languages',
          ariaLabel: 'Select language',
          editLinkText: 'Edit this page on GitHub',
          lastUpdated: 'Last Updated',
          nav: require('./nav/en'),
        }
      }
    },
    extraWatchFiles: [
      '.vuepress/nav/de.js',
      '.vuepress/nav/en.js'
    ]
}