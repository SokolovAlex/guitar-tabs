// https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
const styledComponentsCompiler = {
    styledComponents: true,
    displayName: true,
    ssr: true,
    fileName: true,
};

module.exports = function (name, { defaultConfig }) {
    const config = {
        ...defaultConfig,
    };
    return {
        ...config,
        compiler: styledComponentsCompiler,
    };
};
