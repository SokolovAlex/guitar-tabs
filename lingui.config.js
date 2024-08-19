const { formatter } = require('@lingui/format-po')

const locales = ['en-us', 'ru-ru']

if (process.env.NODE_ENV !== 'production') {
    locales.push('pseudo')
}

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: locales,
    sourceLocale: 'en-us',
    pseudoLocale: 'pseudo',
    catalogs: [
        {
            path: '<rootDir>/src/translations/locales/{locale}',
            include: [
                '<rootDir>/src/pages',
                '<rootDir>/src/translations/languages.ts',
            ],
        },
    ],
    format: formatter({ origins: false }),
}