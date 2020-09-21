// configuration: http://eslint.org/docs/user-guide/configuring

module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true
    },
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',   // 表示继承了 eslint 推荐的规则
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        semi: ['warn', 'always'], //语句强制用分号结尾
        quotes: [1, 'single'], //引号类型 `` "" ''
        // 'react/prop-types': 0 // 禁用react propsType 规范类型检测
    }   
};
