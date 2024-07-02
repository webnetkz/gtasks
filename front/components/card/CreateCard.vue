<template>
  <div
    class="create-card"
    contenteditable="true"
    @blur="addNewCard"
    @keyup.enter="addNewCard"
    @click="$event.target.innerText = ''"
  >
    <p>+ Add new card</p>
  </div>
</template>

<script>
export default
{
  name: 'CreateCard',

  props:
  {
    addNewCard: {
      type: Function,
      require: true,
    }
  },

  setup(props)
  {
    const addNewCard = (event) =>
    {
      if (event.target.innerText.trim() !== '')
      {
        props.addNewCard(event.target.innerText);
      }
      event.target.innerText = '+ Add new card';
    }

    return {
      addNewCard
    };
  }
}
</script>

<style scoped>
  .create-card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
</style>