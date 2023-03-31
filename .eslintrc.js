module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "browser":true,
    },
    env: {
    jest: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
    ,
    parserOptions: {
  parser: '@babel/eslint-parser',
  requireConfigFile: false, // <== ADD THIS
  ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  sourceType: 'module' // Allows for the use of imports
    }
    
}
