<template>
    <div>
        <q-select 
            v-model="agent" 
            :options="agentOptions" 
            bg-color="blue-grey-11" 
            color="blue-grey" 
            rounded 
            dense
            standout="bg-grey-10 text-white" 
            class="app__delivery-option" 
            dropdown-icon="expand_more"
            :hide-dropdown-icon="agent !== null">

            <template v-slot:selected>
                <span v-if="agent">{{agent.label}}</span>
                <span v-else>Ничего не выбрано</span>
            </template>
            
            <template v-slot:append>
                <p v-if="agent !== null" 
                        @click.stop="$store.dispatch('setAgent', null)"   
                        class="row items-center q-ma-none">
                    <span style="font-size: 12px">очистить</span>
                    <q-icon class="cursor-pointer" 
                        name="horizontal_rule" />
                </p>
            </template>
        </q-select>

      <div class="q-my-md">
        <q-select standout 
            v-model="delivery" 
            dropdown-icon="expand_more" 
            :options="deliveryOptions" />
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
           deliveryOptions: state => state.form.deliveryOptions, 
           agentOptions: state => state.form.agentOptions, 
        }),
        agent: {
            get () { return this.$store.state.form.orderData.agent},
            set (val) {return this.$store.dispatch('setAgent', val)}
        },
        delivery: {
            get () { return this.$store.state.form.orderData.delivery},
            set (val) {return this.$store.dispatch('setDelivery', val)}
        }
    }
}
</script>
<style lang="scss">
    .app {
        &__delivery-option span {
            font-weight: 700;
        }
    }
</style>