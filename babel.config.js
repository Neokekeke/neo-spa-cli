// {
//     // Create a .babelrc config in your project root and enable some plugins.

//     // @babel/preset-env：即babel-preset-env
//     // 根据您要支持的浏览器，决定使用哪些transformations / plugins 和 polyfills，例如为旧浏览器提供现代浏览器的新特性。

//     // @babel/preset-react：即 babel-preset-react
//     // 针对所有React插件的Babel预设，例如将JSX转换为函数
//     "presets": ["@babel/preset-env", "@babel/preset-react"],
//     "plugins": [
//         ["@babel/plugin-proposal-decorators", { "legacy": true }],
//         ["@babel/plugin-proposal-class-properties", { "loose" : true }],
//         ["@babel/plugin-transform-runtime"]
//     ]
// }

module.exports = {
    // 解析ES6
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false, // 不转换import export成require，方便后面进行treeshaking
                useBuiltIns: 'usage', // 是为浏览器添加polyfills,按需加载的
                corejs: '3.x',
                targets: {
                    ie: '11',
                    chrome: '57',
                    browsers: 'cover 99.5%'
                },
            }
        ],
        '@babel/preset-react',
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ['@babel/plugin-proposal-class-properties', { 'loose' : true }],
        ['@babel/plugin-transform-runtime'],
        ['import', { libraryName: 'antd', style: 'css' }]
    ]
};