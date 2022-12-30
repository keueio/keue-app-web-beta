<script setup>
import { ref } from "vue";
import SideMenu from "@/components/SideMenu.vue";
import Logo from "@/components/Logo.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import NotificationsButton from "@/components/NotificationsButton.vue";
import HeaderLoggedInUserDropdown from "@/components/HeaderLoggedInUserDropdown.vue";
import VerticalDivider from "@/components/VerticalDivider.vue";
import NavBarBurger from "@/components/NavBarBurger.vue";
import { CakeIcon } from "@heroicons/vue/solid";
const openSideMenu = ref(false);
</script>
<template>
    <section>
        <div class="px-6 lg:px-12 py-6">
            <nav class="flex justify-between">
                <div class="flex w-full items-center">
                    <a href="#">
                        <Logo />
                    </a>
                    <ul class="hidden xl:flex px-4 ml-14 2xl:ml-40 mr-auto">
                        <li class="mr-8 2xl:mr-14">
                            <PrimaryButton :icon="CakeIcon"
                                >Dashboard</PrimaryButton
                            >
                        </li>
                        <li class="mr-8 2xl:mr-14">
                            <PrimaryButton>Users</PrimaryButton>
                        </li>
                        <li class="mr-8 2xl:mr-14">
                            <PrimaryButton>Chat</PrimaryButton>
                        </li>
                        <li class="mr-8 2xl:mr-14">
                            <PrimaryButton>Messages</PrimaryButton>
                        </li>
                    </ul>
                    <div class="hidden xl:flex items-center">
                        <NotificationsButton />
                        <VerticalDivider />
                        <HeaderLoggedInUserDropdown />
                    </div>
                </div>
                <NavBarBurger @click="openSideMenu = !openSideMenu" />
            </nav>
        </div>
        <SideMenu v-if="openSideMenu" @closeSideMenu="openSideMenu = false" />
    </section>
</template>
