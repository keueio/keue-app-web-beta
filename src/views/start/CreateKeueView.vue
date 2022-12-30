<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onMounted, ref, computed } from "vue";
import { useGeneralStore } from "../../stores/general";
const general = useGeneralStore();
const newKeueName = ref(`k-${new Date().valueOf()}`);
const appName = ref(`chris`);
const newKeueLink = computed(
    () => `/app/${appName.value}/keue/${newKeueName.value}`
);
const {
    mutate: createKeue,
    loading,
    onDone,
} = useMutation(
    gql`
        mutation createKeue($input: CreateKeueInput) {
            createKeue(input: $input) {
                name
                state
            }
        }
    `
);
onDone(() => {
    general.setFullPageLoading(false);
});
onMounted(() => {
    general.setFullPageLoading(true);
    createKeue({
        input: {
            name: newKeueName.value,
            app: appName.value,
        },
    });
});
</script>

<template>
    <section class="py-8 bg-blueGray-50">
        <div class="container px-4 mx-auto">
            <div class="relative p-10 xl:py-12 xl:px-20 bg-primary-500 overflow-hidden rounded-4xl">
                <img class="absolute right-0 top-0 sm:top-1/2 transform -translate-y-1/2 w-1/2 sm:w-2/3 lg:w-auto mt-12 sm:mt-0"
                    src="/uinel-assets/images/dashboard-banners/header.png" alt="" />
                <div class="relative z-10 sm:max-w-sm">
                    <h2 class="mb-8 text-6xl md:text-7xl text-white font-heading font-semibold">
                        Stand-by we are busy building your dedicated Keue from
                        scratch...
                    </h2>
                    <h2 class="mb-8 text-sm md:text-sm text-white font-heading font-semibold">
                        {{ loading }}
                    </h2>
                    <h2 class="mb-8 text-sm md:text-sm text-white font-heading font-semibold">
                        {{ appName }}/{{ newKeueName }}
                    </h2>
                    <div class="sm:max-w-max">
                        <a class="block py-5 px-7 w-full text-lg leading-3 text-primary-600 font-medium tracking-tighter font-heading text-center bg-white hover:bg-primary-300 focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-xl"
                            :href="newKeueLink">Go to your new Keue</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
