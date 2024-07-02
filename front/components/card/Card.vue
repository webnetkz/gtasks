<template>
    <div>
      <div v-for="card in cards" :key="card.id">
        <div class="card" :style="`background-color: ${card.bg}`">
          <header>
            <p 
              contenteditable="true"
              :card-id="card.id"
              @blur="seveCardName(card.id, $event.target.innerText)"
              @keyup.enter="seveCardName(card.id, $event.target.innerText)"
            >
              {{ card.name }}
            </p>
            <CardOptions>
              <SetColor />
              <Delete @click="removeCard(card.id)"/>
            </CardOptions>
          </header>
          <div @click="addNewTask">
            <AddTask />
          </div>
          <Task :card_id="card.id"/>
        </div>
    </div>
    <div class="create-card-container">
        <CreateCard :addNewCard="addNewCard"/>
        <div class="stub-end"></div>
    </div>
  </div>
</template>

<script>
import { useCardStore } from '~/stores/cards';
import { computed } from 'vue';

import CardOptions from './CardOptions.vue';
import CreateCard from '~/components/card/CreateCard.vue';
import Delete from '~/components/Delete.vue';
import SetColor from '~/components/SetColor.vue';
import AddTask from '~/components/task/AddTask.vue';
import Task from '~/components/task/Task.vue'


export default
{
  name: 'Card',

  components:
  {
    CardOptions,
    CreateCard,
    Delete,
    AddTask,
    SetColor,
    Task,
  },

  setup()
  {
    const cardStore = useCardStore();

    const cards = computed(() => cardStore.cards);

    const addNewCard = (nameCard) => {
      cardStore.addCard({ id: Date.now(), name: nameCard });
    }

    const seveCardName = cardStore.seveCardName;
    const removeCard = cardStore.removeCard;

    return {
      cards,
      addNewCard,
      seveCardName,
      removeCard,
    };
  }
}
</script>

<style scoped>
.card {
  min-width: var(--width-cart);
  max-width: var(--width-cart);
  min-height: var(--height-cart);
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-right: 20px;
  padding: 20px 15px;
}
.card > header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.card > header > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
p[contenteditable="true"]:focus {
  font-size: 1.2rem;
}
.create-card-container {
  height: 90px;
  display: flex;
  align-items: center;
}
.stub-end {
    min-width: 50px;
}
</style>