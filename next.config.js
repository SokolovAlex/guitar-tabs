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
    }
}
