<template>
  <div>
    <h1>Fabric.js Drawing Example</h1>
    <CanvasComponent
      :canvasWidth="1000"
      :canvasHeight="600"
    />
  </div>
</template>

<script>
import CanvasComponent from '@/components/CanvasComponent.vue';

export default {
  name: 'App',
  components: {
    CanvasComponent
  }
};
</script>
