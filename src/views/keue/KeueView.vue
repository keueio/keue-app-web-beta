<script setup lang="ts">
import ToggleSwitch from "@/components/buttons/ToggleSwitch.vue";
import { useRoute } from "vue-router";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, ref, watch } from "vue";
const route = useRoute();
const keueId = computed(() => route.params.id);
const appId = computed(() => route.params.app);
const keueFullId = computed(() => `${route.params.app}---${route.params.id}`);
const { result, refetch } = useQuery(
    gql`
        query getKeue($name: String!) {
            keue(name: $name) {
                name
                state
            }
        }
    `,
    {
        name: keueFullId,
    }
);
const { mutate: pauseKeue, loading: pauseKeueLoading } = useMutation(
    gql`
        mutation pauseKeue($input: CreateKeueInput) {
            pauseKeue(input: $input) {
                name
                state
            }
        }
    `
);
const { mutate: resumeKeue, loading: resumeKeueLoading } = useMutation(
    gql`
        mutation resumeKeue($input: CreateKeueInput) {
            resumeKeue(input: $input) {
                name
                state
            }
        }
    `
);
const ingressUrl = computed(
    () => `https://${appId.value}.dev-beta.eu.keue.io/${keueId.value}`
);
const isRunningToggle = ref(false);
watch(result, () => {
    console.log("result update: ", result.value);
    isRunningToggle.value = result.value?.keue?.state === "RUNNING";
});
watch(isRunningToggle, async (value) => {
    console.log("is running value: ", value);
    if (!value) {
        await pauseKeue({
            input: { name: keueFullId.value, app: appId.value },
        });
        return refetch();
    }
    await resumeKeue({ input: { name: keueFullId.value, app: appId.value } });
    return refetch();
});
</script>

<template>
    <section class="py-8 bg-blueGray-100">
        <div class="container px-4 mx-auto">
            <div class="flex flex-wrap items-center justify-between -mx-4">
                <div class="w-full lg:w-auto px-4 mb-14 lg:mb-0">
                    <div class="flex flex-wrap items-center">
                        <img
                            class="mb-6 md:mb-0 mr-10"
                            src="/uinel-assets/images/dashboard-navigations/icon2.svg"
                            alt=""
                        />
                        <div class="w-full md:w-auto">
                            <h2
                                class="text-7xl md:text-8xl font-heading font-bold leading-relaxed"
                            >
                                Your Keue
                            </h2>
                            <p
                                v-if="result"
                                class="text-darkBlueGray-400 leading-8"
                            >
                                {{ result.keue?.name }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-auto px-4">
                    <div class="flex items-center">
                        <ToggleSwitch v-model="isRunningToggle"></ToggleSwitch>
                        <a
                            class="inline-block py-4 px-8 text-lg leading-6 text-white font-medium tracking-tighter font-heading text-center bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-6xl"
                            href="#"
                            >Settings</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-8 bg-blueGray-50">
        <div class="container px-4 mx-auto">
            <div
                class="relative p-10 xl:py-12 xl:px-20 bg-grey-300 overflow-hidden rounded-4xl"
            >
                <div v-if="result" class="relative z-10 sm:max-w-sm">
                    <h2
                        class="mb-8 text-2xl md:text-2xl text-grey-600 font-heading font-semibold"
                    >
                        Status: {{ result.keue?.state }}
                    </h2>
                    <a
                        :href="ingressUrl"
                        target="_blank"
                        class="mb-8 text-xl md:text-xl text-grey-600 font-heading font-medium"
                    >
                        {{ ingressUrl }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
