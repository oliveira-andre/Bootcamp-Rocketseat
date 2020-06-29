module.exports = {
  "env": {
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  globals: {
    __DEV__: 'readonly',
  },
  "parser": "babel-eslint"
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
  ],
  "rules": {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/preffer-default-export': 'off'
  },
};
