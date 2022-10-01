<template>
    <div class="app__toggler">
        <q-btn-toggle v-model="toggler" 
            spread 
            rounded 
            dense 
            class="bg-blue-grey-11 text-blue-grey" 
            no-caps 
            unelevated
            toggle-color="blue-grey-1 border-radius-15" 
            toggle-text-color="blue-grey-10" 
            size="md" 
            :options="togglerOptions" />
        <div class="q-my-md">
        <q-input 
            standout="bg-grey-10 text-white" 
            v-model="comment" 
            label="Ваш комментарий" 
            bg-color="grey-2" 
            autogrow />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            togglerOptions: state => state.form.togglerOptions
        }),
        toggler: {
            get () { return this.$store.state.form.toggler},
            set (val) {return this.$store.dispatch('setToggler', val)}
        },
        comment: {
            get () { return this.$store.state.form.orderData.comment},
            set(val) {return this.$store.dispatch('setComment', val)}
        },
    }
}
</script>
<style lang="scss">
    .border-radius-15 {
        border-radius: 15px !important;
    }
</style>