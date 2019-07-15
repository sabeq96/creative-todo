<script>
  import TileList from '../../components/TileList/TileList.svelte'
  export let activeMenu;
  export let todos = [];
  export let fetchImage = () => {};

  const tiles = todos.value()
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