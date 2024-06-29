<template>
  <div class="task-options" @click="togglePopup">
    <svg class="task-options" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
    <Popup v-if="isPopupVisible"  @close="isPopupVisible = false">
      <slot></slot>
    </Popup>
  </div>
</template>

<script>
import Popup from '~/components/Popup.vue'


export default {
  name: 'TaskOptions',

  components:
  {
    Popup,
  },

  data()
  {
    return {
      isPopupVisible: false
    };
  },

  methods:
  {
    togglePopup(event)
    {
      event.stopPropagation();
      this.isPopupVisible = !this.isPopupVisible;
    }
  }
}
</script>

<style scoped>
.task-options {
  position: relative;
  height: 24px;
}
.task-options:hover {
  cursor: pointer;
}
.task-options > svg:hover {
  fill: var(--red);
  transform: rotateZ(360deg);
}
</style>