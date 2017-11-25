import Vue from 'vue'
import App from './App.vue'

export const eBus = new Vue({
  methods: {
    changeSelected(comp) {
      this.$emit('selection', comp)
    },
    addNote(note) {
      this.$emit('addnote', note)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
