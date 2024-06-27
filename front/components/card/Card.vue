<template>
  <div class="card">
    <header>
      <p contenteditable="true" @blur="saveName" @keyup.enter="saveName">{{ card.name }}</p>
      <CardOptions>
        <Delete @click="deleteCard"/>
      </CardOptions>
    </header>
    <AddTask />
  </div>
</template>

<script>
import CardOptions from './CardOptions.vue';
import Delete from '~/components/Delete.vue'
import AddTask from '~/components/task/AddTask.vue'

export default {
  name: 'Card',

  components:
  {
    CardOptions,
    Delete,
    AddTask
  },

  props: {
    card: {
      type: Object,
      required: true
    },
    removeCard: {
      type: Function,
      required: false
    }
  },

  setup(props) {

    const saveName = (event) =>
    {
      props.card.name = event.target.innerText;
    }

    const deleteCard = () =>
    {
      props.removeCard(props.card.id);
    }

    return {
      saveName,
      deleteCard
    }
  }
}
</script>

<style scoped>
.card {
  min-width: var(--width-cart);
  height: var(--height-cart);
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-right: 20px;
  padding: 20px 15px;
}
.card > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
p[contenteditable="true"] {
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  width: auto;
  display: inline;
}
p[contenteditable="true"]:focus {
  font-size: 1.2rem;
}
</style>