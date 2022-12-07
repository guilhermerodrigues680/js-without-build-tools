PetiteVue.createApp({
  _clockInterval: null,
  message: "Hello petite-vue",
  dateNow: new Date(),

  get now() {
    return this.dateNow.toLocaleString();
  },

  mounted() {
    this._clockInterval = setInterval(() => (this.dateNow = new Date()), 1000);
  },

  unmounted() {
    clearInterval(this._clockInterval);
  },
}).mount("#app");
