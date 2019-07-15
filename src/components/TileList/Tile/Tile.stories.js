import { storiesOf } from '@storybook/svelte';
import Tile from './Tile';

storiesOf('Tile', module)
  .add('default', () => ({
    Component: Tile,
    props: {
      id: 1,
      date: new Date().getTime(),
      description: 'short description, just 5 words that mean so much for me',
      imageUrl: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=150',
      bookmark: true,
    },
    on: {
      bookmarkCheck: (e) => console.log(e.detail),
      tileClick: (e) => console.log(e.detail),
      tileImageChange: (e) => console.log(e.detail),
      tileDel: (e) => console.log(e.detail),
      tileComplete: (e) => console.log(e.detail),
    },
  }))