import { createStore } from 'vuex';
import coachesModule from './module/coaches/index.js';
import requestsModule from './module/requests/index.js';
import authModule from './module/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },

  
});

export default store;
