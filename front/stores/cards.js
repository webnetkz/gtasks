import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards', {
  state: () => ({
    cards: [
      {id: 1, name: 'one'},
      {id: 2, name: 'two'},
      {id: 3, name: 'three'},
      {id: 4, name: 'three'},
      {id: 5, name: 'three'},
    ]
  }),
  actions: {
    addCard(item) {
      this.cards.push(item)
    },
    removeCard(id) {
      id = Number(id);
      this.cards = this.cards.filter(card => card.id !== id)
    },
    clearCards() {
      this.cards = []
    }
  },
  getters: {
    cardCount: (state) => state.cards.length,
    cardItems: (state) => state.cards,
  }
})
