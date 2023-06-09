<script setup lang="ts">
import moment from "moment";
import { computed } from "vue";
import { useTimeAgo } from "@vueuse/core";

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
const timeAgo = useTimeAgo(new Date(task.value?.data?.publishedAt));
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
    <div class="flex flex-col">
        <div
            class="flex justify-center flex-col rounded-7xl text-gray-600 bg-white p-6 mb-1 hover:bg-gray-50 w-full"
        >
            <div class="flex justify-between items-center w-full">
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

        <span
            class="flex flex-row justify-end space-x-2 text-xs mr-6 text-gray-400"
        >
            <span>{{ timeAgo }}</span>
            <span>{{ publishedAtToHuman }}</span>
            <span>{{ publishedAt }}</span>
        </span>
    </div>
</template>
