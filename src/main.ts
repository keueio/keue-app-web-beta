import { createApp, h, provide } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createAuth0 } from "@auth0/auth0-vue";

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
app.use(
    createAuth0({
        domain: "keue.eu.auth0.com",
        client_id: "n8T4xX4aRKerVaArHdh5lWrVo5g4qvBi",
        redirect_uri: window.location.origin,
        cacheLocation: "localstorage",
    })
);

app.mount("#app");
