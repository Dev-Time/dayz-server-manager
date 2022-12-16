/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "ignorePatterns": [
        "scripts",
        "*.spec.ts"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@angular-eslint/eslint-plugin",
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "@angular-eslint/eslint-plugin-template",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "root": true,
    "rules": {
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": [
                    "app",
                    "sb"
                ],
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/contextual-lifecycle": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": [
                    "app",
                    "sb"
                ],
                "style": "camelCase"
            }
        ],
        "@angular-eslint/no-conflicting-lifecycle": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-output-native": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": true,
                "ts-check": true,
                "minimumDescriptionLength": 3
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/indent": [
            "error",
            4
        ],
        "@typescript-eslint/init-declarations": "error",
        "@typescript-eslint/keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
            "off",
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "UPPER_CASE",
                    "PascalCase"
                ],
                "leadingUnderscore": "allow",
                "trailingUnderscore": "forbid"
            }
        ],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "prettier": true
                }
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
        "accessor-pairs": "error",
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": [
            "error",
            "never",
            {
                "singleValue": false,
                "objectsInArrays": false,
                "arraysInArrays": false
            }
        ],
        "array-callback-return": "error",
        "arrow-body-style": [
            "off",
            "as-needed"
        ],
        "arrow-parens": [
            "off",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "block-scoped-var": "error",
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "callback-return": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-spacing": "error",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "off",
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-return": "off",
        "consistent-this": [
            "error",
            "self"
        ],
        "constructor-super": "error",
        "curly": [
            "error",
            "multi-line",
            "consistent"
        ],
        "default-case": "off",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "off",
        "eol-last": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "for-direction": "off",
        "func-call-spacing": [
            "error",
            "never"
        ],
        "func-name-matching": [
            "warn",
            "always"
        ],
        "func-names": [
            "warn",
            "as-needed"
        ],
        "func-style": "error",
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "generator-star-spacing": [
            "error",
            "before"
        ],
        "getter-return": "off",
        "global-require": "off",
        "guard-for-in": "error",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-length": "off",
        "id-match": "error",
        "import/no-deprecated": "warn",
        "import/order": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "flatTernaryExpressions": false,
                "offsetTernaryExpressions": false,
                "ignoreComments": false
            }
        ],
        "init-declarations": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/no-types": "error",
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "max-classes-per-file": "off",
        "max-depth": "off",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "multiline-comment-style": "off",
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-cap": "off",
        "new-parens": "error",
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 3
            }
        ],
        "no-alert": "error",
        "no-array-constructor": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "error",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-catch-shadow": "error",
        "no-class-assign": "warn",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-const-assign": "error",
        "no-constant-condition": "off",
        "no-control-regex": "off",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "off",
        "no-dupe-args": "error",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "warn",
        "no-empty": "off",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "off",
        "no-eq-null": "warn",
        "no-eval": "error",
        "no-ex-assign": "off",
        "no-extend-native": "warn",
        "no-extra-bind": "off",
        "no-extra-boolean-cast": "off",
        "no-extra-label": "warn",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "off",
        "no-global-assign": "off",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "off",
        "no-inline-comments": "off",
        "no-inner-declarations": "off",
        "no-invalid-regexp": "warn",
        "no-invalid-this": "off",
        "no-irregular-whitespace": [
            "error",
            {
                "skipStrings": true,
                "skipComments": true,
                "skipRegExps": true,
                "skipTemplates": true
            }
        ],
        "no-iterator": "off",
        "no-label-var": "error",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "error",
        "no-loop-func": "off",
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "error",
        "no-mixed-requires": "error",
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "no-multi-assign": "warn",
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true
            }
        ],
        "no-multi-str": "error",
        "no-negated-condition": "warn",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "warn",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "warn",
        "no-new-wrappers": "error",
        "no-obj-calls": "warn",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "warn",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "off",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "warn",
        "no-restricted-globals": "off",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "off",
        "no-return-await": "warn",
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "warn",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "warn",
        "no-sync": "off",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "off",
        "no-unneeded-ternary": "off",
        "no-unreachable": "warn",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-call": "off",
        "no-useless-computed-key": "error",
        "no-useless-concat": "warn",
        "no-useless-constructor": "off",
        "no-useless-escape": "off",
        "no-useless-rename": "error",
        "no-useless-return": "warn",
        "no-var": "error",
        "no-void": "off",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": [
            "error",
            {
                "multiline": true,
                "consistent": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "operator-assignment": [
            "error",
            "always"
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            {
                "classes": "always"
            }
        ],
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "error",
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "error",
        "prefer-destructuring": [
            "error",
            {
                "VariableDeclarator": {
                    "array": false,
                    "object": true
                },
                "AssignmentExpression": {
                    "array": true,
                    "object": false
                }
            }
        ],
        "prefer-numeric-literals": "off",
        "prefer-promise-reject-errors": "error",
        "prefer-rest-params": "warn",
        "prefer-spread": "error",
        "prefer-template": "warn",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "error",
        "require-await": "off",
        "require-jsdoc": "off",
        "require-yield": "warn",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error",
            {
                "int32Hint": true
            }
        ],
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "strict": [
            "error",
            "never"
        ],
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "symbol-description": "warn",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "off",
        "vars-on-top": "off",
        "wrap-iife": [
            "error",
            "inside"
        ],
        "yield-star-spacing": [
            "error",
            "before"
        ],
        "yoda": "error"
    }
};
