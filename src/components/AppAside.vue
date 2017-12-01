<template>
  <aside>
    <div class="title is-6 has-text-white">
      NOTES
    </div>
    <div @click="select('AllNotes')">
      <i class="fa fa-sticky-note-o" :class="{ selected : selected == 'AllNotes' }"></i>
    </div>
    <div @click="select('AddNote')">
      <i class="fa fa-plus" :class="{ selected : selected == 'AddNote' }"></i>
    </div>
    <div @click="select('About')">
      <i class="fa fa-info" :class="{ selected : selected == 'About' }"></i>
    </div> 
  </aside>
</template>

<script>
  import { eBus } from '../main';
  export default {
    data: function() {
      return {
        selected: 'AllNotes'
      }
    },
    methods: {
      select(comp) {
        this.selected = comp;
        eBus.changeSelected(comp);
      }
    },
    created() {
      eBus.$on('selection', (selection) =>  { 
        this.selected = selection 
      });
    }
  }
</script>

<style lang="scss" scoped>
  aside {
    background-color: #2b2b2b;
    width: 100px;
    height: 100vh;
    div {
      text-align: center;
      padding: 18px;
      i {
        font-size: 40px;
        color: whitesmoke;
      }
      .selected {
        color: yellow;
      }
    }
  }
</style>
