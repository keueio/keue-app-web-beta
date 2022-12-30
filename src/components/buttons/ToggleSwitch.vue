<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps(["modelValue"]);
const isActive = computed(() => !!props.modelValue);
const activeClass = computed(() => {
    return isActive.value ? "hover:bg-primary-600 bg-primary-400" : "hover:bg-gray-400 bg-gray-300";
});
const activeTransitionClass = computed(() => {
    return isActive.value ? " translate-x-4" : " translate-x-0";
});
const toggle = () => {
    emit("update:modelValue", !props.modelValue);
};
</script>
<template>
    <div class="relative p-4">
        <div @click="toggle"
            class="pointer-events-auto cursor-pointer h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ring-black/20"
            :class="activeClass">
            <div class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"
                :class="activeTransitionClass"></div>
        </div>
        <div class="z-0">
            <div
                class="absolute left-0 -top-full bottom-2/3 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
            </div>
        </div>
    </div>
</template>
