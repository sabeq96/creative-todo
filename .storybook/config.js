import { configure } from '@storybook/svelte';

function loadStories() {
  const modules = require.context('../src', true, /\.*.stories\.js/);
  modules.keys().forEach(key => modules(key))
  // You can require as many stories as you need.
}

configure(loadStories, module);
