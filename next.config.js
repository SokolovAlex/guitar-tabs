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
        env: {
            Google_API_KEY: process.env.Google_API_KEY,
            YOUTUBE_URL: process.env.YOUTUBE_URL,
            YOUTUBE_CHANNEL: process.env.YOUTUBE_CHANNEL,
        },
        compiler: styledComponentsCompiler,
        experimental: {
            esmExternals: 'loose',
            swcPlugins: [
                [
                    '@lingui/swc-plugin', {}
                ],
            ],
        },
    }
}
