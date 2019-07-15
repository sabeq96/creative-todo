<script>
	import { createEventDispatcher } from 'svelte';
  import DateUtils from '../../utils/DateUtils'
  export let menuItems = [];

  const dispatch = createEventDispatcher();
  function onMenuClick(id) {
    dispatch('menuClick', {
      id
    })
  }
</script>

<div class="wrapper">
  <div class="menuWrapper">
    {#each menuItems as item (item.name)}
      <div
        class="menuItem"
        on:click={() => onMenuClick(item.name)}
      >
        {item.name}
      </div>
    {/each}
  </div>
</div>

<style>
  .wrapper{
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 26px 0px rgba(140,140,140,.8);
    height: 100%;
    width: 60px;
  }
  .menuWrapper{
    position: absolute;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    width: 100vh;
    transform: rotate(-90deg);
}
  .menuItem{
    padding: 20px;
  }
</style>