module.exports = {
    extends: [
        'brian',
    ],
    plugins: [
        'svelte3',
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        // Fixes a bug with svelte eslint plugin
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 2, maxEOF: 0}],
    },
}
