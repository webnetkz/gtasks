<template>
  <div class="board" :id-board="boards[0].id">
    <h2 contenteditable="true" @blur="saveBoardName($event, boards)" @keyup.enter="saveBoardName($event.target, boards)">{{boards[0].name}}</h2>
    <div id="cards">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Delete from '~/components/Delete.vue'
import SetColor from '~/components/SetColor.vue'
import { computed } from 'vue';
import { useBoardStore } from '~/stores/boards';

export default {
  name: 'Board',

  components:
  {
    Delete,
    SetColor
  },

  methods:
  {
    saveBoardName(event, boards)
    {
      boards[0].name = event.target.innerText;
    }
  },

  setup() {
    const boardStore = useBoardStore();
    const boards = computed(() => boardStore.boards);

    return {
      boards
    }
  }
}
</script>

<style scoped>
#cards {
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