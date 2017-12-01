<template>
  <div>
    <h1 class="title">All Notes</h1>
    <Note v-for="(note, i) in notes" :text="note" :key="i"></Note>
  </div>
</template>

<script>
  import Note from './Note.vue';
  import { eBus } from '../main';
  export default {
    data() {
      return {
        notes: ['This is a note!', 'You bet this is!']
      }
    },
    components: {
      Note
    },
    created() {
      eBus.$on('addnote', (note) => {
        this.notes.push(note)
      })
    }
  }
</script>

<style>

</style>
