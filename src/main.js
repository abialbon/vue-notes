import Vue from 'vue'
import App from './App.vue'

export const eBus = new Vue({
  methods: {
    changeSelected(comp) {
      this.$emit('selection', comp)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
