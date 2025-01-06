<template>
  <canvas
    ref="canvasElement"
    :width="width"
    :height="height"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 800
  },
  height: {
    type: Number,
    default: 600
  },
  brushColor: {
    type: String,
    default: 'black'
  }
});

const canvasElement = ref(null);
let canvas;

onMounted(() => {
  // Access Fabric.js from the global window object
  canvas = new window.fabric.Canvas(canvasElement.value);

  // Enable drawing mode
  canvas.isDrawingMode = true;

  // Customize brush settings using props
  canvas.freeDrawingBrush.color = props.brushColor;
  canvas.freeDrawingBrush.width = 5;
});

onBeforeUnmount(() => {
  // Dispose of the canvas instance
  if (canvas) {
    canvas.dispose();
  }
});
</script>

<style scoped>
canvas {
  border: 1px solid #ddd;
}
</style>
