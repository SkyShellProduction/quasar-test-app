<template>
  <q-form class="app__form q-pa-md">
    <h2 class="app__title">Агентские услуги</h2>
    <h3 class="app__subject">Доставка урны заказчику</h3>
    <AppFormToggler />
    <AppFormDate />
    <AppFormSelect v-if="toggler !== 'no'" />
    <AppFormTotalPrice />
  </q-form>
</template>

<script>
import { mapState } from 'vuex';
import AppFormToggler from './AppFormToggler.vue';
import AppFormDate from './AppFormDate.vue';
import AppFormSelect from './AppFormSelect.vue';
import AppFormTotalPrice from './AppFormTotalPrice.vue';

export default {
  name: "AppForm",
  components: { 
    AppFormToggler, 
    AppFormDate, 
    AppFormSelect, 
    AppFormTotalPrice 
  },

  computed: {
    ...mapState({
      toggler: state => state.form.toggler,
    }),
  },

  watch: {
    toggler() {
      if (this.toggler == "no") {
        this.$store.dispatch('setAgent', null);
      }
    }
  },
}
</script>

<style lang="scss">
  .app {
    &__form {
      max-width: 400px;
      width: 100%;
      border: 1px solid;
      margin: 30px auto;
    }
    &__title {
      font-size: 24px;
    }
    &__subject {
      font-size: 20px;
    }
  }
</style>
