import '../stories/tokens/design-tokens.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',  value: '#000000' },
        { name: 'carbon', value: '#1B1B1D' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
