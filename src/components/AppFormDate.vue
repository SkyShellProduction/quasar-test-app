<template>
    <div class="q-my-md row no-wrap items-center app__picker">
        <div class="app__date">
            <span>Дата</span>
            <strong class="bg-grey-2 q-pa-md q-mx-sm">{{date}}</strong>
            <q-icon push name="calendar_today" 
                class="no-border material-symbols-outlined cursor-pointer" 
                size="22px">
                <q-popup-proxy>
                    <q-date v-model="date" 
                        mask="DD.MM.YY" 
                        today-btn />
                </q-popup-proxy>
            </q-icon>
        </div>
        <div class="app__date">
            <q-icon name="humidity_low" 
                class="material-symbols-outlined q-mx-sm app__special-icon" 
                size="40px" />
            <span>Цена</span>
            <strong class="bg-grey-2 q-pa-md q-mx-sm">
                {{price}}
                <q-icon name="currency_ruble" />
            </strong>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            price: state => state.form.orderData.price
        }),
        date: {
            get () { return this.$store.state.form.orderData.date},
            set (val) {return this.$store.dispatch('setDate', val)}
        }
    }
}
</script>
<style lang="scss">
.app {
    &__special-icon {
        color: rgb(244, 244, 244);
        position: relative;
        rotate: 225deg;
        display: inline-flex !important;
        &::after {
            content: 'B';
            text-transform: none;
            transform: rotate(135deg);
            color: #fff;
            font-size: 14px;
            line-height: 70%;
            width: 55%;
            height: 55%;
            margin-left: -4px;
            margin-top: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(210, 17, 210);
            border-radius: 50%;
            position: absolute;
        }
    }
    &__picker {
        button {
            background: transparent;
            padding: 0;
            box-shadow: none;
        }
        strong {
            border-radius: 6px;
        }
    }
}
</style>