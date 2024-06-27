<template>
  <div>
    <h2>Main Board</h2><button @click="addItemToCard">add</button>
    <button @click="clearCards">clear</button>
    <div id="cards">
      <Card v-for="card in cards" :key="card.id" :card="card" :removeCard="removeCard" />
    </div>
  </div>
</template>

<script>
import Card from '~/components/card/Card.vue';
import { useCardStore } from '~/stores/cards';
import { computed } from 'vue';


export default {
  components: {
    Card
  },
  setup() {
    const cardStore = useCardStore();

    const cards = computed(() => cardStore.cards);

    const addItemToCard = () => {
      const newItem = { id: Date.now(), name: 'New Item' }
      cardStore.addCard(newItem)
    }

    const clearCards = cardStore.clearCards;
    const removeCard = cardStore.removeCard;

    return {
      cards,
      addItemToCard,
      removeCard,
      clearCards
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 18px;
  color: var(--deep-gray);
  margin-bottom: 10px;
}
#cards {
  display: flex;
}
</style>
