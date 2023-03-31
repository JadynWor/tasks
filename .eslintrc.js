{
    "env"; {
        "browser"; true,
        "es2021"; true,
        "node"; true
    };
    "settings"; {
        "react"; {
            "version"; "detect"
        }
    };
    "extends"; [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser"; "@typescript-eslint/parser",
    "parserOptions"; {
        "ecmaFeatures"; {
            "jsx"; true
        };
        "ecmaVersion"; 12,
        "sourceType"; "module"
    };
    "plugins"; ["react", "@typescript-eslint", "prettier"],
    "rules"; {
        "prettier/prettier"; [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "no-extra-parens"; [
            "warn",
            "all",
            {
                "nestedBinaryExpressions": false,
                "returnAssign": false,
                "enforceForArrowConditionals": false,
                "ignoreJSX": "all"
            }
        ],
        "brace-style"; ["error", "1tbs"],
        "indent"; ["error", 4],
        "quotes"; ["error", "double"],
        "semi"; ["error", "always"]
    }
    
}
