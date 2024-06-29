<template>
  <div class="set-color" @mousemove="showPalitra" @mouseleave="hidePalitra">
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.9959.9959 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>
    <p v-if="!isShowPalitra">Set Color</p>
    <div class="palitra" v-if="isShowPalitra">
      <div class="color-1"></div>
      <div class="color-2"></div>
      <div class="color-3"></div>
      <div class="color-4"></div>
      <div class="color-5"></div>
      <div class="color-6"></div>
      <div class="color-7"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetColor',
  
  props: {
    idElement: {
      type: String,
      required: false
    },
    setColor: {
      type: Function,
      required: false
    },
  },

  data() {
    return {
      isShowPalitra: false  
    }
  },

  methods: {
    showPalitra() {
      this.isShowPalitra = true;
    },
    hidePalitra() {
      this.isShowPalitra = false;
    }
  }
}
</script>

<style scoped>
.set-color {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 20px;
  height: 20px;
  margin-bottom: 5px;
}
.set-color svg {
  margin-right: 8px;
  width: 18px;
  height: 18px;
  fill: var(--deep-gray);
}
.set-color svg:hover {
  fill: var(--red);
}
.set-color p {
  margin-bottom: 6px;
  font-size: 15px;
  cursor: pointer;
}
.set-color p:hover {
  color: var(--red);
}
.palitra {
  display: flex;
}
.palitra > div {
  width: 20px;
  height: 20px;
  margin: 1px;
  border: 1px solid var(--gray);
  border-radius: 3px;
}
.palitra > div:hover {
  transform: scale(1.1);
  border-color: var(--deep-gray);
}
.color-1 {
  background: gray;
}
.color-2 {
  background: white;
}
.color-3 {
  background: blue;
}
.color-4 {
  background: red;
}
.color-5 {
  background: orange;
}
.color-6 {
  background: yellow;
}
.color-7 {
  background: green;
}
</style>
