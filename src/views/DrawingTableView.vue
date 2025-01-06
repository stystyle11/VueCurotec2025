<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- Left Drawer -->
    <div
      id="leftDrawer"
      class="w-full md:w-1/3 bg-blue-500 p-4 h-100 overflow-y-auto"
    >
      <h2 class="text-lg font-bold text-white pb-6">Users' Area:</h2>
      <!-- Pass the username dynamically from the Pinia store -->
      <UserCardComponent
        :username="username"
        :color="colorUserBrush"
      />
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col items-center justify-center p-4">
      <h1>Fabric.js Drawing Example</h1>
      <CanvasComponent
        :canvasWidth="1000"
        :canvasHeight="600"
        :brush-color="colorUserBrush"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/user'; // Import the Pinia store
import CanvasComponent from '@/components/CanvasComponent.vue';
import UserCardComponent from '@/components/UserCardComponent.vue';

const userStore = useUserStore();
// Get user Name from Pinia
const username = computed(() => userStore.username);
// Set a Random Color for Brush and User
const randomColor = () => {
  const randomInt = Math.floor(Math.random() * 16777215);

  const hexColor = `#${randomInt.toString(16).padStart(6, '0')}`;
  return hexColor;
};
// Make sure the color will be the same for User and Brush
const colorUserBrush = randomColor();
</script>
