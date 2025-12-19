import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default [
    ...eslintPluginAstro.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
        ignores: ['dist/', '.astro/', 'node_modules/'],
    },
]
