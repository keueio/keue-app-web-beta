<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted } from "vue";
const auth0 = useAuth0();
const login = () => {
    auth0.loginWithRedirect();
};
onMounted(() => {
    login();
});
</script>
<template>
    <div class="container">
        <h1 class="text-lg">Login</h1>
    </div>
</template>
