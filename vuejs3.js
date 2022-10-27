const { createApp } = Vue;

const app = createApp({
  data: () => ({
    message: "Hello Vue!",
    dateNow: new Date(),
    timerInterval: null,
  }),

  created() {
    this.timerInterval = setInterval(() => (this.dateNow = new Date()), 1000);
  },

  beforeUnmount() {
    clearInterval(this.timerInterval);
  },

  computed: {
    now() {
      return this.dateNow.toLocaleString();
    },
  },
});

app.mount("#app");
