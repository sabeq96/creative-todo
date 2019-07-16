<script>
  import TileList from '../../components/TileList/TileList.svelte'
  import moment from 'moment';
  export let activeMenu = 'today';
  export let todos = [];
  export let fetchImage = () => {};

  const filterMap = {
    today: ({date}) => moment(date, "YYYYMMDD").isSame(moment(), 'day'),
    tomorrow: ({date}) => moment(date, "YYYYMMDD").isSame(moment().add(1, 'day'), 'day'),
    upcomming: ({date}) => moment(date, "YYYYMMDD").isAfter(moment().add(1, 'day'), 'day'),
    bookmarks: ({bookmark}) => bookmark,
  }

  $: tiles = todos.filter(filterMap[activeMenu]).value()

  function bookmarkCheck(e) {
    const { id, bookmark } = e.detail;
    todos.update()
      .find({id})
      .assign({ bookmark })
      .write()
  }

  async function tileImageChange(e) {
    const { id } = e.detail;
    todos.update()
      .find({id})
      .assign({
        imageUrl: await fetchImage()
      })
      .write()

      tiles = todos.filter(filterMap[activeMenu]).value()
  }
</script>

<div class="wrapper">
  <TileList
    on:bookmarkCheck={bookmarkCheck}
    on:tileImageChange={tileImageChange}
    {tiles}
  />
</div>

<style>
  .wrapper{
    position: absolute;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 50px;
  }
</style>