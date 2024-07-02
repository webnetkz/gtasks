<template>
  <div class="board" :id-board="boards[0].id">
    <h2 contenteditable="true" @blur="saveBoardName($event, boards)" @keyup.enter="saveBoardName($event.target, boards)">{{boards[0].name}}</h2>
    <div id="cards">
      <Card />
    </div>
  </div>
</template>

<script>
import { useBoardStore } from '~/stores/boards';
import { computed } from 'vue';

import Card from '~/components/card/Card.vue';
import Delete from '~/components/Delete.vue';
import SetColor from '~/components/SetColor.vue';


export default
{
  name: 'Board',

  components:
  {
    Card,
    Delete,
    SetColor,
  },

  methods:
  {
    saveBoardName(event, boards)
    {
      boards[0].name = event.target.innerText;
    }
  },

  setup()
  {
    const boardStore = useBoardStore();
    const boards = computed(() => boardStore.boards);

    return {
      boards,
    }
  }
}
</script>

<style scoped>
#cards > div {
  display: flex;
  padding-bottom: 50px;
  min-height: 90vh;
}
h2 {
  font-size: 18px;
  color: var(--deep-gray);
  padding-bottom: 10px;
}
</style>