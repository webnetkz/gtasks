<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <div v-if="task.card_id === card_id">
        <div class="task" @mousemove="showOptions" @mouseleave="hideOptions">
          <span class="status-task"></span>
          <p>{{ task.name }}</p>
          <TaskOptions v-if="isShowOptions">
            <h2>33</h2>
          </TaskOptions>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '~/stores/tasks';
import TaskOptions from './TaskOptions.vue';


export default
{
  components:
  {
    TaskOptions,
  },

  props:
  {
    card_id:
    {
      type: Number,
      require: true,
    }
  },

  data()
  {
    return {
      isShowOptions: false, 
    };
  },

  setup()
  {
    const taskStore = useTaskStore();

    const tasks = computed(() => taskStore.tasks);

    return {
      tasks,
    };
  },

  methods:
  {
    showOptions()
    {
      this.isShowOptions = true;
    },
    hideOptions()
    {
      this.isShowOptions = false;
    },
  }
}
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-left: -15px;
  width: calc(100% + 30px);
  min-height: 45px;
}
.task:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.task p {
  width: 100%;
  text-align: left;
  cursor: text;
}
.status-task {
  margin-right: 20px;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid var(--deep-gray);
  border-radius: 50%;
  cursor: pointer;
}
.status-task:hover {
  position: relative;
  border: 1px solid var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-task:hover::after {
  content: "+";
  position: absolute;
  font-size: 30px;
  color: var(--red);
  transform: rotate(45deg) translate(-2%, -2%);
}
</style>