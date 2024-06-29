import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {id: 1, card_id: 1, name: 'one'},
      {id: 2, card_id: 1, name: 'two'},
      {id: 3, card_id: 1, name: 'three'},
      {id: 4, card_id: 1, name: 'one'},
      {id: 5, card_id: 1, name: 'two'},
      {id: 6, card_id: 1, name: 'three'},
      {id: 7, card_id: 1, name: 'one'},
      {id: 8, card_id: 1, name: 'two'},
      {id: 9, card_id: 1, name: 'three'},
      {id: 10, card_id: 2, name: 'one'},
      {id: 11, card_id: 2, name: 'two'},
      {id: 12, card_id: 2, name: 'three'},
    ]
  }),

  actions: {
    addTask(task) {
      this.tasks.push(task)
    },

    removeTask(id) {
      id = Number(id);
      this.tasks = this.tasks.filter(task => task.id !== id)
    },

    clearTasks() {
      this.tasks = []
    }
  },

  getters: {
    taskCount: (state) => state.tasks.length,
    taskItems: (state) => state.tasks,
  }
})
