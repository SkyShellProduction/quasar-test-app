<template>
    <div>
        <q-input 
            standout="bg-grey-10 text-white" 
            v-model="address" 
            label="Ваш адрес" 
            bg-color="grey-2" />
        <div class="q-my-md row items-center">
            <span>Цена</span>
            <span class="q-mx-md">
                {{totalPrice}}
                <q-icon name="currency_ruble" />
            </span>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        totalPrice() {
            return this.$store.getters.totalPrice
        },
        address: {
            get () { return this.$store.state.form.orderData.address},
            set (val) {return this.$store.dispatch('setAddress', val)}
        },
    }
}
</script>