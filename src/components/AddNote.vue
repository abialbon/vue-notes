<template>
  <div class="box">
    <h1 class="title">Add A Note!</h1>
    <label for="note"></label>
    <div class="field">
      <div class="control">
        <textarea v-model="text" class="input" name="note" id="note" cols="30" rows="30"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button @click="addNote" class="button is-info">Add Node</button>
        <button @click="clear" class="button is-danger">Clear</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { eBus } from '../main';
  export default {
    data() {
      return {
        text: ''
      }
    },
    methods: {
      clear() {
        this.text = '';
      },
      addNote() {
        eBus.addNote(this.text);
        this.clear();
        eBus.changeSelected('AllNotes');
      }
    }
  }
</script>

<style lang="scss" scoped>
  textarea {
    width: 100%;
    height: 300px;
  }
</style>
