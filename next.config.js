const linguiConfig = require('./lingui.config')

// https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
const styledComponentsCompiler = {
    styledComponents: true,
    displayName: true,
    ssr: true,
    fileName: true,
}

module.exports = function (_, { defaultConfig }) {
    const config = {
        ...defaultConfig,
    }
    return {
        ...config,
        compiler: styledComponentsCompiler,
        experimental: {
            swcPlugins: [
                [
                    '@lingui/swc-plugin', {}
                ],
            ],
        },
        // i18n: {
        //     locales: linguiConfig.locales,
        //     defaultLocale: linguiConfig.sourceLocale,
        // },
        webpack: (config) => {
            config.module.rules.push({
                test: /\.po$/,
                use: {
                    loader: '@lingui/loader', // https://github.com/lingui/js-lingui/issues/1782
                },
            })
            return config
        },
    }
}
