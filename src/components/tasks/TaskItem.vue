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
const payload = computed(() => task.value?.data?.payload);
const requestContext = computed(() => task.value?.data?.ingressRequestContext);
const formatPayload: any = (payload: any) => {
    try {
        return JSON.parse(atob(task.value?.data?.payload || ""));
    } catch (error) {
        return atob(task.value?.data?.payload || "");
    }
};
</script>
<template>
    <div
        class="flex justify-center flex-col rounded-7xl bg-gray-50 p-6 mb-4 hover:bg-gray-100 w-full"
    >
        <div class="flex justify-between items-center w-full">
            <span class="flex flex-col text-xs">
                <span>{{ publishedAtToHuman }}</span>
                <span>{{ publishedAt }}</span>
            </span>
            <span class="text-xs">
                {{ task.id }}
            </span>
            <span class="text-sm">
                {{ task.data?.status }}
            </span>
        </div>
        <div class="flex mt-4">
            <span class="text-xs">{{ formatPayload(payload) }}</span>
        </div>
        <div class="flex mt-4">
            <span class="text-xs">{{ requestContext }}</span>
        </div>
    </div>
</template>
