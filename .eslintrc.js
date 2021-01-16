module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [
        "__tests__", 'webpack.config.js'
    ],
    "rules": {
        'no-console': 'off',
        'no-underscore-dangle': ["error", {"allow": ["_id"]}]
    }
};
