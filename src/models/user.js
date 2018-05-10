export async function query(url){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('hello, welcome');
        }, 1000);
    });
}
export default {
    namespace: 'user',
    state: {
        name: 'unknown'
    },
    subscriptions: {},
    effects: {
        *getName({ name }, { put, call, select }) {
            const res = yield call(query);
            yield put({type: 'setName', name: res});
        }
    },
    reducers: {
        setName(state, action) {
            return {
                ...state,
                name: action.name
            };
        }
    }
};
