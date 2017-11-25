<template>
  <aside>
    <div class="title is-6 has-text-white">
      NOTES
    </div>
    <div @click="select('AllNotes')">
      <i class="fa fa-sticky-note-o"></i>
    </div>
    <div @click="select('AddNote')">
      <i class="fa fa-plus"></i>
    </div>
    <div @click="select('AllNotes')">
      <i class="fa fa-info"></i>
    </div>
  </aside>
</template>

<script>
  import { eBus } from '../main';
  export default {
    methods: {
      select(comp) {
        console.log('clicked', comp);
        eBus.changeSelected(comp);
      }
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
        font-size: 60px;
        color: whitesmoke;
      }
    }
  }
</style>
