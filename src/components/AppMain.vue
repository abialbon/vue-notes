<template>
  <section>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="selected"></component>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  import AddNote from './AddNote.vue';
  import AllNotes from './AllNotes.vue';
  import About from './About.vue';
  import { eBus } from '../main';
  export default {
    data() {
      return {
        selected: 'AllNotes'
      }
    },
    components: {
      AllNotes,
      AddNote,
      About
    },
    created() {
      eBus.$on('selection', (comp) => this.selected = comp)
    }
  }
</script>

<style lang="scss">
  section {
    padding: 40px;
    background-color: rgba(181,203,3,0.11);
    flex: 1;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.2s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.2s;
  }
</style>
