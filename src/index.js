import dva from 'dva';
import router from './routes/router.jsx';
import createBrowserHistory from 'history/createBrowserHistory';

import user from './models/user';

// 1. Initialize
const app = dva({
    onError(e) {
        // console.log(e);
    },
    history: createBrowserHistory()
});

// 3. Model
app.model(user);

// 4. Router
app.router(router);

// 5. Start
app.start('#app');
