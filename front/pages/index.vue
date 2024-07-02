<template>
  <div id="mainContainer">
    <Board />
  </div>
</template>

<script>
import Board from '~/components/board/Board.vue';


export default 
{
  components:
  {
    Board,
  },
}
</script>

<style>
#mainContainer > div {
  padding: 20px;
}
</style>
