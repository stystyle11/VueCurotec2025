import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    email: '',
    isLoggedIn: false
  }),
  actions: {
    // Initialize the store by checking localStorage
    initializeStore() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        this.username = parsedUser.username || '';
        this.email = parsedUser.email || '';
        this.isLoggedIn = parsedUser.isLoggedIn || false;
      }
    },
    // Log in and save to localStorage
    login(username, email) {
      this.username = username;
      this.email = email;
      this.isLoggedIn = true;
      this.saveToLocalStorage();
    },
    // Log out and clear localStorage
    logout() {
      this.username = '';
      this.email = '';
      this.isLoggedIn = false;
      localStorage.removeItem('user');
    },
    // Save the store state to localStorage
    saveToLocalStorage() {
      const user = {
        username: this.username,
        email: this.email,
        isLoggedIn: this.isLoggedIn
      };
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
});
