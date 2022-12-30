<script setup lang="ts">
import { AdjustmentsIcon } from "@heroicons/vue/solid";
import { CakeIcon } from "@heroicons/vue/solid";
const props = defineProps(["icon"]);
const icon = props.icon || AdjustmentsIcon;
</script>
<template>
    <a class="flex items-center font-heading font-medium text-gray-400 hover:text-primary-500" href="#">
        <component :is="icon" class="w-6 h-6 text-lime-600 mr-2"></component>
        <span>
            <slot></slot>
        </span>
    </a>
</template>
