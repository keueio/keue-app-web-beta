<script setup lang="ts">
import SideMenuCloseButton from "@/components/SideMenuCloseButton.vue";
import { vAutoAnimate } from "@/directives/directives";

const emits = defineEmits(["closeSideMenu"]);
const closeSideMenu = () => {
    emits("closeSideMenu", false);
};
</script>
<template>
    <div>
        <teleport to="body">
            <Transition name="slide-fade">
                <div v-auto-animate class="navbar-menu fixed top-0 left-0 bottom-0 w-full sm:w-5/6 max-w-max z-50">
                    <div class="navbar-backdrop fixed inset-0 bg-darkGray-800 opacity-80"></div>
                    <nav class="relative flex flex-col py-20 px-10 h-full w-full bg-blueGray-100 overflow-y-auto">
                        <SideMenuCloseButton @click="closeSideMenu" />
                        <a class="inline-block mb-12" href="#">
                            <img class="h-12" src="/uinel-assets/logos/dashboard/uifive-white-black.svg" alt="" />
                        </a>
                        <ul class="mb-16">
                            <li>
                                <a class="flex items-center pl-10 pr-24 py-4 bg-white rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/dashboards.svg"
                                        alt="" />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/users.svg"
                                        alt="" />
                                    <span>Users</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/chat.svg"
                                        alt="" />
                                    <span>Chat</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/dashboards.svg"
                                        alt="" />
                                    <span>Chat</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center pl-10 pr-8 w-full py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/add-mail.svg"
                                        alt="" />
                                    <span class="mr-auto">Messages</span>
                                    <svg width="8" height="5" viewbox="0 0 8 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.97291 0.19311C7.20854 -0.0645328 7.58938 -0.0645328 7.82328 0.19311C8.05804 0.450753 8.05978 0.867019 7.82328 1.12466L4.42529 4.80665C4.19053 5.06429 3.81056 5.06429 3.57406 4.80665L0.176073 1.12466C-0.0586909 0.86798 -0.0586909 0.450753 0.176073 0.19311C0.411706 -0.0645328 0.792544 -0.0645328 1.02644 0.19311L4.00098 3.21272L6.97291 0.19311Z"
                                            fill="#8C949F"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center pl-10 pr-8 w-full py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/folder.svg"
                                        alt="" />
                                    <span class="mr-auto">Catalog</span>
                                    <svg width="8" height="5" viewbox="0 0 8 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.97291 0.19311C7.20854 -0.0645328 7.58938 -0.0645328 7.82328 0.19311C8.05804 0.450753 8.05978 0.867019 7.82328 1.12466L4.42529 4.80665C4.19053 5.06429 3.81056 5.06429 3.57406 4.80665L0.176073 1.12466C-0.0586909 0.86798 -0.0586909 0.450753 0.176073 0.19311C0.411706 -0.0645328 0.792544 -0.0645328 1.02644 0.19311L4.00098 3.21272L6.97291 0.19311Z"
                                            fill="#8C949F"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <span class="inline-block mb-6 text-sm text-darkBlueGray-400 font-heading font-medium">New
                            tools</span>
                        <ul class="mb-16">
                            <li>
                                <a class="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/pointer.svg"
                                        alt="" />
                                    <span>Location</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                                    href="#">
                                    <img class="mr-5" src="/uinel-assets/elements/dashboard-navigations/document.svg"
                                        alt="" />
                                    <span>Documents</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="pb-24 mb-auto">
                            <li>
                                <a class="text-sm text-darkBlueGray-400 font-heading font-medium leading-8"
                                    href="#">About</a>
                            </li>
                            <li>
                                <a class="text-sm text-darkBlueGray-400 font-heading font-medium leading-8"
                                    href="#">Help center</a>
                            </li>
                            <li>
                                <a class="text-sm text-darkBlueGray-400 font-heading font-medium leading-8"
                                    href="#">Contact</a>
                            </li>
                        </ul>
                        <div class="pt-8 border-t border-blueGray-200">
                            <span
                                class="inline-block mb-5 text-sm text-darkBlueGray-400 font-heading font-medium">Upcoming</span>
                            <a class="flex items-center py-4 px-6 bg-white rounded-3xl shadow-lg text-darkBlueGray-300 hover:text-darkBlueGray-400"
                                href="#">
                                <img class="w-10 sm:w-14 h-10 sm:h-14 mr-2 sm:mr-5"
                                    src="/uinel-assets/images/dashboard-navigations/avatar-image.png" alt="" />
                                <div class="pr-1 mr-auto">
                                    <span
                                        class="block text-sm text-darkBlueGray-900 font-heading font-medium leading-tight">Product
                                        design</span>
                                    <span class="text-xs text-darkBlueGray-300 font-medium leading-tight">MON, 8
                                        AM</span>
                                </div>
                                <svg width="5" height="8" viewbox="0 0 5 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.193232 1.02782C-0.064411 0.79219 -0.064411 0.411351 0.193232 0.177457C0.450875 -0.0573063 0.867141 -0.0590449 1.12478 0.177457L4.80677 3.57544C5.06441 3.8102 5.06441 4.19017 4.80677 4.42668L1.12478 7.82466C0.868102 8.05942 0.450875 8.05942 0.193232 7.82466C-0.0644107 7.58903 -0.0644107 7.20819 0.193232 6.97429L3.21284 3.99975L0.193232 1.02782Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </Transition>
        </teleport>
    </div>
</template>
<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
