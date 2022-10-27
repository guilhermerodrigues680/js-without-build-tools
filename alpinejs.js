const appData = () => ({
  message: "Hello Alpine.js!",
  dateNow: new Date(),

  get now() {
    return this.dateNow.toLocaleString();
  },

  init() {
    setInterval(() => (this.dateNow = new Date()), 1000);
  },
});
