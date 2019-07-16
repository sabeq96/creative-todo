<!-- App.svelte -->
<script>
  import low from 'lowdb'
  import LocalStorage from 'lowdb/adapters/LocalStorage'
  import uuid from 'uuid/v4';

  import Home from "./pages/Home/index.svelte";
  import Sidebar from './components/Sidebar/Sidebar.svelte'
  import NewTodo from './components/NewTodo/NewTodo.svelte'

  const db = low(new LocalStorage('creative-todo-db'));
  db.defaults({ todos: [] }).write();
  let todos = db.get('todos'); 

function fetchImage() {
    return fetch('https://source.unsplash.com/random/150x300')
      .then((res) => res.url)
      .catch(console.log)
  }

  async function setTodo (e) {
    const {value, date} = e.detail;

    todos.push({
      id: uuid(),
      date,
      description: value,
      imageUrl: await fetchImage(),
      bookmark: false,
    }).write()

    todos = db.get('todos');
    window.scrollTo(0, document.body.scrollHeight);
  }

  let menuItems = [
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
    },
  ].reverse()

  let activeMenu = 'today';
  function setActiveMenuItem (e) { activeMenu = e.detail.id}
</script>

<Sidebar {menuItems} on:menuClick={setActiveMenuItem} />
<NewTodo on:todoAdd={setTodo} />
  <div>
    <Home {activeMenu} {todos} {fetchImage} />
  </div>
