

<template>
  <div class="delete">
    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
    <p>Delete</p>
  </div>
</template>

<script>
export default {
  name: 'Delete',
}
</script>

<style scoped>
  .delete {
    display: flex;
  }
  .delete svg {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    fill: var(--deep-gray);
  }
  .delete svg:hover {
    fill: var(--red);
  }
  .delete p {
    margin-bottom: 6px;
    font-size: 15px;
  }
  .delete p:hover {
    color: var(--red);
  }
</style>