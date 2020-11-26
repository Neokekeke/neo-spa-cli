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
        'func-names': [0],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-console': [0],
        'no-alert': [0],
        'no-bitwise': [0],
        'eqeqeq': [0],
        'object-shorthand': [0],
        'object-curly-newline': ['off'],
        'prefer-arrow-callback': [0],
        'import/no-duplicates': [0],
        'import/no-unresolved': [0],
        'import/no-extraneous-dependencies': [0],
        'no-unused-vars': [0],
        'no-param-reassign': [0],
        'max-len': [0, 150],
        'import/first': [0],
        'global-require': [0],
        'arrow-parens': [0, 'as-needed'],
        'no-use-before-define': [0],
        'no-multi-assign': [0],
        'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
        'no-underscore-dangle': [0],
        'linebreak-style': [0, 'windows'],
        indent: [
            'error',
            4,
            { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }
        ],
        'array-bracket-spacing': [0],
        'spaced-comment': [0],
        'space-before-function-paren': [0],
        // 'no-trailing-spaces': [0],
        'comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'prefer-template': [0],
        'camelcase': [0],
        'no-useless-escape': [0],
        'no-mixed-operators': [0],
        // don't require .vue extension when importing
        'import/extensions': [0, 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        'import/prefer-default-export': [0],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }   
};
