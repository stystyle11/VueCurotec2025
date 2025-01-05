<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div
      id="leftDrawer"
      class="w-full md:w-1/3 bg-blue-500 p-4 h-100 overflow-y-auto"
    >
      <h6>User Area</h6>
      <UserCard></UserCard>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center p-4">
      <h1>Fabric.js Drawing Example</h1>
      <CanvasComponent
        :canvasWidth="1000"
        :canvasHeight="600"
        :brush-color="'blue'"
      />
    </div>
  </div>
</template>

<script>
import CanvasComponent from '@/components/CanvasComponent.vue';
import UserCard from '@/components/UserCard.vue';
export default {
  name: 'DrawingTableView',
  components: {
    CanvasComponent,
    UserCard
  }
};
</script>
