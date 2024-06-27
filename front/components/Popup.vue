<template>
  <div class="pupup" ref="popup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Popup',

  mounted()
  {
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },

  methods:
  {
    handleClickOutside(event)
    {
      if (!this.$refs.popup || !this.$refs.popup.contains(event.target))
      {
        this.$emit('close');
      }
    }
  }
}
</script>

<style scoped>
.pupup {
  position: absolute;
  top: 0;
  left: calc(100% + 20px);
  background: var(--white);
  padding: 12px 16px;
  color: var(--deep-gray);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: var(--radius);
  width: 250px;
}
.pupup-bottom {
  top: 100px;
}
</style>