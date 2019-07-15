import { storiesOf } from '@storybook/svelte';
import NewTodo from './NewTodo';

storiesOf('NewTodo', module)
  .add('default', () => ({
    Component: NewTodo,
    props: {},
    on: {
      todoAdd: (e) => console.log(e)
    }
  }))