<script>
	import { createEventDispatcher } from 'svelte';
  import { BookmarkIcon, ImageIcon, Trash2Icon, CheckmarkIcon } from 'svelte-eva-icons'
  import moment from 'moment';

  export let id;
  export let date;
  export let description;
  $: if (description.length > 33) {
    description = description.slice(0, 30) + '...';
  }
  export let imageUrl;
  export let bookmark;
  export let editing = false;

const dispatch = createEventDispatcher();
  function onBookmark (e) {
    e.stopPropagation();
    dispatch('bookmarkCheck', {
      id,
      bookmark: !bookmark,
    })
    bookmark = !bookmark
  }

  function onTileClick (e) {
    dispatch('tileClick', {
      id,
      editing: !editing,
    })
    editing = !editing
  }

  function onTileImageChange (e) {
    dispatch('tileImageChange', { id })
  }

  function onTileDel (e) {
    dispatch('tileDel', { id })
  }

  function onTileComplete (e) {
    dispatch('tileComplete', { id })
  }

  $: day = moment(date, 'YYYYMMDD').format('DD'); 
  $: month = moment(date, 'YYYYMMDD').format('MM');
</script>

<div class="wrapper">
  <div class="tileWrapper"
    style="background-image: url({imageUrl})"
    on:click={onTileClick}
  >
    <div class="cover">
      <div class="bookmarkWrapper {bookmark && 'bookmarkActive'}" on:click={onBookmark}>
        <BookmarkIcon />
      </div>
      <div class="dateWrapper">
        <div class="dateBig">
          {day}
        </div>
        <div class="dateSmall">
          {month}
        </div>
      </div>
      <div class="descriptionWrapper">
        {description}
      </div>
    </div>
  </div>
  <div class="editingWrapper {editing && 'editingActive'}">
    <div class="iconWrapper" on:click={onTileComplete}>
      <CheckmarkIcon />
    </div>
    <div class="iconWrapper" on:click={onTileImageChange}>
      <ImageIcon />
    </div>
    <div class="iconWrapper" on:click={onTileDel}>
      <Trash2Icon />
    </div>
  </div>
</div>

<style>
  .wrapper{
    display: inline-flex;
    flex-wrap: nowrap;
  }
  .tileWrapper{
    position: relative;
    border-radius: 8px;
    background-size: cover;
    box-shadow: 10px 10px 26px 0px rgba(140,140,140,.8);
    overflow: hidden;
    width: 160px;
    height: 250px;
    color: #fff;
    text-shadow: 1px 1px 2px #444;
    z-index: 1;
  }
  .cover{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: linear-gradient(transparent, #000)
  }
  .bookmarkWrapper{
    position: absolute;
    left: 6px;
    top: 12px;
    width: 34px;
    height: auto;
    fill: #fff;
  }
  .bookmarkActive{
    fill: #ffdb4d;
  }
  .dateWrapper{
    position: absolute;
    display: flex;
    top: 150px;
    left: 12px;
    line-height: 1;
  }
  .dateBig{
    display: flex;
    align-items: center;
    transform: scale(2);
    transform-origin: left;
    margin-top: 8px;
    font-size: 20px;
  }
  .dateSmall{
    margin: 24px 0 0 24px;
    font-size: 20px;
  }
  .descriptionWrapper{
    position: absolute;
    bottom: 10px;
    left: 12px;
    right: 10px;
  }
  .editingWrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    margin-left: -46px;
    opacity: 0;
    transition: 0.3s ease;
  }
  .editingActive{
    opacity: 1;
    margin-left: 16px;
  }
  .iconWrapper{
    width: 24px;
    height: 24px;
    box-shadow: 1px 1px 8px 0px rgba(140,140,140,.8);
    border-radius: 50%;
    padding: 10px;
    fill: #aaa;
  }
</style>