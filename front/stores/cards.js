import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards', {
  state: () => ({
    cards: [
      {id: 1, name: 'one', bg: 'var(--gray)'},
      {id: 2, name: 'two', bg: ''},
      {id: 3, name: 'three', bg: ''},
    ]
  }),

  actions: {
    addCard(card)
    {
      this.cards.push(card)
    },

    removeCard(id)
    {
      id = Number(id);
      this.cards = this.cards.filter(card => card.id !== id)
    },

    seveCardName(id, name)
    {
      id = Number(id);
      const card = this.cards.find(card => card.id === id);
      if (card)
      {
        card.name = name;
      }
    },

    setColorCard(id, color)
    {
      id = Number(id);
      const card = this.cards.find(card => card.id === id);
      if (card)
      {
        card.bg = color;
      }
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
