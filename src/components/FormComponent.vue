<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow rounded">
    <form
      @submit.prevent="handleSubmit"
      class="space-y-4"
    >
      <div>
        <label
          for="username"
          class="block text-sm font-medium text-gray-700"
          >Username</label
        >
        <input
          id="username"
          v-model="username"
          type="text"
          class="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200"
          placeholder="Enter username"
        />
        <p
          v-if="errors.username"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.username }}
        </p>
      </div>
      <div>
        <label
          for="email"
          class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          class="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200"
          placeholder="Enter email"
        />
        <p
          v-if="errors.email"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.email }}
        </p>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
const username = ref('');
const email = ref('');
const errors = ref({ username: '', email: '' });

const userStore = useUserStore();
const router = useRouter();
const validateForm = () => {
  errors.value = { username: '', email: '' };
  let isValid = true;

  // Username validation
  if (!username.value) {
    errors.value.username = 'Username is required.';
    isValid = false;
  } else if (/[-]/.test(username.value)) {
    errors.value.username = 'Username cannot contain dashes.';
    isValid = false;
  }

  // Email validation
  if (!email.value) {
    errors.value.email = 'Email is required.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Enter a valid email.';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    userStore.login(username.value, email.value);
    console.log('valor username', username.value);
    router.push('/board');
    alert('User logged in successfully!');
  }
};
</script>
