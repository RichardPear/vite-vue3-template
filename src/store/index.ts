import { createStore } from 'vuex'
const defaultState = {
    count: 0,
};

// Create a new store instance.
export default createStore({
    state() {
        return defaultState;
    },
    mutations: {
        increment(state: typeof defaultState) {
            state.count++;
        },
        doubleCount(state: typeof defaultState) {
            state.count = state.count * 2
        }
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
    },
    getters: {
        double(state: typeof defaultState) {
            return 2 * state.count;
        },
    },
});
