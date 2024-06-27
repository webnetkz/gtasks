

<template>
  <div class="add-task">
    <span class="add-task-plus">+</span>
    <p>Add a task</p>
  </div>
</template>

<script>
export default {
  name: 'AddTask',

  setup()
  {
    //const audio = new Audio('./hover.mp3');

    // const playSound = () => {
    //   audio.play();
    // }

    // return {
    //   playSound
    // }
  }
}
</script>

<style scoped>
.add-task {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.add-task:hover .add-task-plus {
  color: var(--white);
  background: var(--red);
}
.add-task p {
  color: var(--deep-gray);
}
.add-task p:hover {
  color: var(--red);
  font-size: 1.2rem;
}
.add-task-plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  font-size: 25px;
  margin-right: 20px;
  padding: 3px;
  border-radius: 50%;
}
</style>