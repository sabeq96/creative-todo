<script>
  import { tweened } from 'svelte/motion';
  import Tile from './Tile/Tile.svelte'

  export let tiles;

  const tileSize = tweened(grid ? 0.5 : 1, {
		duration: 60,
  });
  const rotatePos = tweened(grid ? 0 : 135, {
		duration: 120,
  });
</script>

<div class="list">
  {#each tiles as tile (tile.id)}
    <div class="listTile">
      <Tile
        {...tile}
        on:bookmarkCheck
        on:tileImageChange
      />
    </div>
  {/each}
</div>

<style>
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .listTile{
    margin: 12px;
  }
</style>