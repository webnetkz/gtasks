<template>
  <div id="mainContainer">
    <Board>
      <Card 
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :removeCard="removeCard"
      >
        <div v-for="task in tasks" :key="task.id">
          <div v-if="task.card_id === card.id">
            <Task />
          </div>
        </div>
      </Card>
      <div @click="addNewCard">
        <CreateCard />
      </div>
    </Board>
  </div>
</template>

<script>
import Board from '~/components/board/Board.vue';
import Card from '~/components/card/Card.vue';
import CreateCard from '~/components/card/CreateCard.vue';
import Task from '~/components/task/Task.vue';
import { computed } from 'vue';

import { useCardStore } from '~/stores/cards';
import { useTaskStore } from '~/stores/tasks';

export default {
  components: {
    Board,
    Card,
    CreateCard,
    Task
  },

  setup() {
    const cardStore = useCardStore();
    const taskStore = useTaskStore();

    const cards = computed(() => cardStore.cards);
    const tasks = computed(() => taskStore.tasks);

    const addNewCard = () => {
      cardStore.addCard({ id: Date.now(), name: 'New Item' });
    }

    const removeCard = cardStore.removeCard;

    return {
      cards,
      addNewCard,
      removeCard,

      tasks,
    }
  }
}
</script>

<style>
#mainContainer > div {
  padding: 20px;
}
</style>
