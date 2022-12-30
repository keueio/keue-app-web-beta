import { createApp, h, provide } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import { apolloClient } from "./apollo";

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
});

app.use(createPinia());
app.use(router);
app.use(autoAnimatePlugin);

app.mount("#app");
