<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import { ref, computed } from "vue";
const auth0 = useAuth0();
const username = ref("keuer");
const plan = computed(() =>
    auth0.isAuthenticated.value ? "Serverless Free Plan" : "Guest"
);
const user = auth0.user;
const isLoading = auth0.isLoading;
const login = () => {
    return auth0.loginWithPopup();
};
const profileImage = computed(() => {
    if (auth0.isAuthenticated.value) {
        return (
            user.value?.picture ||
            "/uinel-assets/elements/navigations/avatar-online.png"
        );
    }
    return "/uinel-assets/elements/navigations/avatar-online.png";
});
</script>
<template>
    <div class="flex">
        <a
            class="flex items-center text-darkBlueGray-400 hover:text-darkBlueGray-500"
            @click="login"
        >
            <div class="mr-6 text-right">
                <span
                    v-if="auth0.isAuthenticated"
                    class="block font-heading font-medium leading-tight"
                    >{{ user?.name || "keuer" }}</span
                >
                <span
                    v-else
                    class="block font-heading font-medium leading-tight"
                    >keuer</span
                >
                <span
                    class="font-heading font-medium text-xs text-darkBlueGray-300 uppercase leading-tight"
                    >{{ plan }}</span
                >
            </div>
            <img
                class="mr-4 rounded-full w-12 h-12"
                :src="profileImage"
                alt=""
            />
            <DownArrowIcon></DownArrowIcon>
        </a>
    </div>
</template>
