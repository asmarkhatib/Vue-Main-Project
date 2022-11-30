import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-dialog', BaseDialog);

app.mount('#app');
