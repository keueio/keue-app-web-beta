<script setup lang="ts">
import moment from "moment";
import { computed } from "vue";

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
});
const task = computed(() => props.task);
const publishedAt = computed(() => {
    return new Date(task.value?.data?.publishedAt).toLocaleString();
});
const publishedAtToHuman = computed(() => {
    return moment(task.value?.data?.publishedAt).fromNow();
});
</script>
<template>
    <div
        class="flex justify-between items-center w-full rounded-6xl bg-gray-50 p-4 hover:bg-gray-100"
    >
        <span class="flex flex-col text-sm">
            <span>{{ publishedAtToHuman }}</span>
            <span>{{ publishedAt }}</span>
        </span>
        <span class="text-sm">
            {{ task.id }}
        </span>
        <span class="text-sm">
            {{ task.data?.status }}
        </span>
    </div>
</template>
