<template>
  <div class="app">
    <AppForm />
  </div>
</template>

<script>
import AppForm from './components/AppForm.vue';
export default {
  name: 'App',
  components: {
    AppForm
  },
  created() {
    console.log(this.$q);
  }
};
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-style: normal;
    outline: none;
    border: none;
    line-height: 1;
    &:focus{
      outline: none;
      border: none;
    }
  }
</style>
