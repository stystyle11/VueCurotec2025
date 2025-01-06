<template>
  <div
    class="p-4 rounded shadow-md"
    :style="{ backgroundColor: color }"
  >
    <h1 class="text-lg font-bold text-white p-2">User:</h1>
    <h2 class="text-lg font-bold text-white p-2">
      UserName:
      <p class="pl-2 text-black">{{ username }}</p>
    </h2>
    <h2 class="text-lg font-bold text-white p-2">
      UserColor:
      <p class="pl-2 text-black">{{ color }}</p>
    </h2>
  </div>
</template>

<script setup>
// Receive props from Page = Provider Pattern
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
