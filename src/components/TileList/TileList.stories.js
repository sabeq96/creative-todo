import { storiesOf } from '@storybook/svelte';
import TileList from './TileList';

const tiles = new Array(9).fill('').map((_, i) => ({
  id: i,
  date: new Date().getTime(),
  description: 'short description, just 5 words that mean so much for me',
  imageUrl: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=150',
  bookmark: true,
}))

storiesOf('TileList', module)
  .add('default', () => ({
    Component: TileList,
    props: {
      tiles,
    },
    on: {
      bookmarkCheck: (e) => console.log(e.detail),
    },
  }))