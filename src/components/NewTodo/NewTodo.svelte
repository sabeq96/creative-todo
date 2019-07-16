<script>
  import DatePicker from 'svelte-calendar';
	import { createEventDispatcher } from 'svelte';
  import { PlusIcon, CalendarIcon, TextIcon } from 'svelte-eva-icons'
  import moment from 'moment';

  let value = '';
  let dateSelected = new Date();
  let isTextAreaOpen = false;

  document.addEventListener('click', (e) => {
    const hasElement = e.target.name === 'textarea'
    || e.target.querySelector('textarea')

    if (!hasElement && isTextAreaOpen) {
      toggleTextAreaOpen();
    }
  })

  function toggleTextAreaOpen(e) {
    e && e.stopPropagation()
    isTextAreaOpen = !isTextAreaOpen 
  }

  const dispatch = createEventDispatcher();
  function onAdd () {
    dispatch('todoAdd', {
      value,
      date: moment(dateSelected, 'YYYYMMDD').format('YYYYMMDD'),
    })
    value = '';
    dateSelected = new Date();
  }
</script>

<div class="wrapper">
  <textarea
    name="textarea"
    placeholder="Write something..."
    bind:value
    class="{isTextAreaOpen && "textareaOpen"}"
  />
  <div class="icon" on:click={toggleTextAreaOpen}>
    <TextIcon />
  </div>
  <div class="icon">
    <DatePicker  bind:selected={dateSelected}>
      <CalendarIcon />
    </DatePicker>
  </div>
  <div class="icon" on:click={onAdd}>
    <PlusIcon />
  </div>
</div>

<style>
  .wrapper{
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  textarea{
    visibility: hidden;
    position: fixed;
    bottom: 10px;
    left: 0;
    height: 0;
    width: 100%;
    padding: 10px;
    margin: 0;
    border: 0;
    resize: none;
    z-index: 10;
    box-shadow: 0px 10px 26px rgba(0,0,0,0.4);
    transition: .2s;
  }
  .textareaOpen{
    visibility: visible;
    height: 420px;
  }
  .icon{
    width: 26px;
    height: 26px;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 1px 1px 8px 0px rgba(140,140,140,.8);
    background: #fff;
    fill: #aaa;
    margin: 0 10px;
  }
</style>