import { storiesOf } from '@storybook/svelte';
import Sidebar from './Sidebar';

storiesOf('Sidebar', module)
  .add('default', () => ({
    Component: Sidebar,
    props: {
      menuItems: [
        {
          name: 'today',
          path: 'list',
        },
        {
          name: 'tomorrow',
          path: 'list',
        },
        {
          name: 'upcomming',
          path: 'list',
        },
        {
          name: 'bookmarks',
          path: 'list',
          filter: 'bookmark',
        },
      ].reverse()
    },
    on: {
      menuClick: (e) => {console.log(e)}
    }
  }))