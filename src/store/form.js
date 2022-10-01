export default {
    state: {
        toggler: 'address',
          orderData: {
            comment: '',
            price: 600,
            address: '',
            date: new Date().toLocaleDateString(),
            delivery: 'По спб близко',
            agent: { value: 'Выезд курьера', price: 1000, label: 'Выезд курьера' },
          },
          deliveryOptions: [
            'По спб близко', 
            'чуть дальше', 
            'еще дальше', 
            'далеко', 
            'очень далеко'
          ],
          togglerOptions: [
            { label: 'Нет', value: 'no' },
            { label: 'В офис', value: 'office' },
            { label: 'На адрес', value: 'address' }
          ],
          agentOptions: [
            { value: 'Выезд курьера', price: 1000, label: 'Выезд курьера' },
            { value: 'Самовывоз', price: 0, label: 'Самовывоз' },
            { value: 'Доставка почтой', price: 500, label: 'Доставка почтой' }
          ],
      },
      mutations: {
        setToggler(state, toggler){
            state.toggler = toggler
        },
        setComment(state, text) {
            state.orderData.comment = text;
        },
        setAddress(state, address){
            state.orderData.address = address;
        },
        setDate(state, date) {
            state.orderData.date = date;
        },
        setDelivery(state, delivery) {
            state.orderData.delivery = delivery;
        },
        setAgent(state, agent) {
            state.orderData.agent = agent;
        }
      },
      actions: {
        setToggler({commit}, toggler) {
            commit('setToggler', toggler);
        },
        setComment({commit}, text) {
            commit('setComment', text);
        },
        setAddress({commit}, address){
            commit('setAddress',address);
        },
        setDate({commit}, date) {
            commit('setDate', date)
        },
        setDelivery({commit}, delivery) {
            commit('setDelivery', delivery)
        },
        setAgent({commit}, agent) {
            commit('setAgent', agent)
        }
      },
      getters: {
        totalPrice: state =>  {
          return state.orderData.agent ? state.orderData.agent.price + state.orderData.price : state.orderData.price
        }
      },
}