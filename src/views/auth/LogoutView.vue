<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted } from "vue";
const auth0 = useAuth0();
const logout = () => {
    auth0.logout();
};
onMounted(() => {
    logout();
});
</script>
<template>
    <div class="container">
        <h1 class="text-lg">Logout</h1>
    </div>
</template>
