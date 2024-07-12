<script setup lang="ts">

// Declare Options
const open = defineModel()

defineProps({
  width: {
    type: Number,
    default: 600,
  },
})

</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="open"
        @click="open = false"
        class="modal"
      >
        <div
          @click.stop=""
          :style="{'max-width': `${width}px`}"
          class="modal__card"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__card {
  background-color: #fff;
  padding: 15px;
  border-radius: 7px;
  margin: 0 15px;
  width: 100%;
}
</style>