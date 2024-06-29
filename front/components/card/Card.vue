<template>
  <div class="card" :style="`background-color: ${bg}`">
    <header>
      <p contenteditable="true" @blur="saveCardName" @keyup.enter="saveCardName">{{ card.name }}</p>
      <CardOptions>
        <SetColor />
        <Delete @click="deleteCard"/>
      </CardOptions>
    </header>
    <AddTask />
    <slot></slot>
  </div>
</template>

<script>
import CardOptions from './CardOptions.vue';
import Delete from '~/components/Delete.vue'
import SetColor from '~/components/SetColor.vue'
import AddTask from '~/components/task/AddTask.vue'
import { computed } from 'vue';

export default {
  name: 'Card',

  components:
  {
    CardOptions,
    Delete,
    AddTask,
    SetColor
  },

  props: {
    card: {
      type: Object,
      required: true
    },
    removeCard: {
      type: Function,
      required: true
    }
  },

  setup(props) {

    const bg = computed(() => props.card.bg);

    const saveCardName = (event) =>
    {
      props.card.name = event.target.innerText;
    }

    const deleteCard = () =>
    {
      props.removeCard(props.card.id);
    }

    return {
      saveCardName,
      deleteCard,
      bg,
    }
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
  height: 100%;
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
</style>