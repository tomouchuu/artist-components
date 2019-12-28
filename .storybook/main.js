module.exports = {
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-docs/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register'
    ],
    presets: ['@storybook/addon-docs/preset'],
    stories: ['../components/**/*/*\.stories.mdx']
}