module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 0,
        "no-undef": 0,
        "no-else-return": 0,
        "no-empty-function": 0,
        "no-eq-null": 0,
        "eqeqeq": 0,
        "dot-notation": 0,
        "curly": 0,
        "complexity": 0
    },
    "overrides": [
        {
            "files": ["src/public/**/*.js"],
            "env": {
                "es2021": true,
                "browser": true,
            }
        }
    ]
}
