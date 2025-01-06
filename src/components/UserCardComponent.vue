<template>
  <div
    class="p-4 rounded shadow-md"
    :style="{ backgroundColor: color }"
  >
    <h1 class="text-lg font-bold text-white p-2">User:</h1>
    <h2 class="text-lg font-bold text-white p-2">{{ username }}</h2>
    <h2 class="text-lg font-bold text-white p-2">{{ color }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  username: {
    type: String,
    required: true,
    default: 'RandomUser'
  },
  color: {
    type: String,
    default: '#3498db'
  }
});
</script>
