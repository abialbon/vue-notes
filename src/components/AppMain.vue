<template>
  <section>
    <keep-alive>
      <component :is="selected">

      </component>
    </keep-alive>
  </section>
</template>

<script>
  import AddNote from './AddNote.vue';
  import AllNotes from './AllNotes.vue';
  import { eBus } from '../main';
  export default {
    data() {
      return {
        selected: 'AllNotes'
      }
    },
    components: {
      AllNotes,
      AddNote
    },
    created() {
      eBus.$on('selection', (comp) => this.selected = comp)
    }
  }
</script>

<style scoped lang="scss">
  section {
    padding: 40px;
    background-color: rgba(181,203,3,0.11);
    flex: 1;
  }
</style>
