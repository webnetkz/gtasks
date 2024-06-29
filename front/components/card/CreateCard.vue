<template>
  <div class="create-card" contenteditable="true">
    <p>+ Add new card</p>
  </div>
  <div class="stub-end"></div>
</template>

<script>
export default {
  name: 'CreateCard',
}
</script>

<style scoped>
  .create-card {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    min-width: var(--width-cart);
    height: 50px;
    border-radius: var(--radius);
    background: var(--white-05);
    margin-right: 50px;
    cursor: pointer;
    outline: none;
  }
  .create-card:focus {
    background: var(--white);
    box-shadow: var(--shadow);
  }
  .stub-end {
    min-width: 50px;
  }
</style>