import { defineStore } from 'pinia'

export const useBoardStore = defineStore('boards', {
  state: () => ({
    boards: [
      {id: 1, name: 'First board', bg: 'rgba(0, 255, 0, 0.2)'},
      {id: 2, name: 'Second board', bg: 'red'},
    ]
  }),

  actions: {
    addBoard(board) {
      this.boards.push(board)
    },
    
    removeBoard(id) {
      id = Number(id);
      this.boards = this.boards.filter(board => board.id !== id)
    },

    clearBoards() {
      this.boards = []
    }
  },

  getters: {
    boardCount: (state) => state.boards.length,
    boardItems: (state) => state.boards,
  }
})
