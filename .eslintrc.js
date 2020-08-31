// configuration: http://eslint.org/docs/user-guide/configuring

module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true,
        'commonjs': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    'parserOptions': {
        sourceType: 'module',
        'parser': 'babel-eslint'
    },
    'plugins': [
        'html',
    ],
    'rules': {
        semi: ['warn', 'always'], //语句强制用分号结尾
        quotes: [1, 'single'], //引号类型 `` "" ''
        'no-empty': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'never'],
        'vue/html-self-closing': ['error', {
            'html': {
              'void': 'never',
              'normal': 'never',
              'component': 'never'
            },
            'svg': 'never',
            'math': 'never'
          }]
    }
};
