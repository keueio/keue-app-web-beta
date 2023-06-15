<script setup lang="ts">
import { orderBy as lodashOrderBy, uniqBy } from "lodash";
import ToggleSwitch from "@/components/buttons/ToggleSwitch.vue";
import TaskItem from "@/components/tasks/TaskItem.vue";
import { useRoute } from "vue-router";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, onMounted, ref, watch } from "vue";
import { useFirestore } from "@/composables/firestoreComposable";
const { db } = useFirestore();
import {
    collection,
    query,
    onSnapshot,
    getDocs,
    limit,
    orderBy,
} from "firebase/firestore";
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
const isSubscribedToggle = ref(false);
let unsubscribe = null;
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
const latest: any = ref([]);
const list: any = ref([]);
const listFiltered = computed(() =>
    lodashOrderBy(
        uniqBy(list.value, (i: any) => i.id),
        ["data.createdAt"],
        ["desc"]
    )
);

// Initialize Realtime Database and get a reference to the service
const queryCollection = computed(() => `keues/${keueFullId.value}/tasks`);
console.log("query collection: ", queryCollection.value);
const q = query(
    collection(db, queryCollection.value),
    orderBy("createdAt", "desc"),
    limit(Number(30))
);

const getInitialList = async (q: any) => {
    return new Promise<void>(async (resolve, reject) => {
        console.log("get initial docs");
        const initialDocs = await getDocs(q);
        initialDocs.forEach((doc) => {
            list.value.push({ data: doc.data(), id: doc.id });
        });
        console.log("completed initial docs");
        return resolve();
    });
};
const subscribeToListener = () => {
    unsubscribe = onSnapshot(q, (querySnapshot) => {
        console.log("udate: ", querySnapshot);
        querySnapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("added: ", change.doc.data());
                if (list.value.some((i: any) => i.id === change.doc.id)) return;
                list.value.push({
                    data: change.doc.data(),
                    id: change.doc.id,
                });
            }
            if (change.type === "modified") {
                console.log("Modified: ", change.doc.data());
                list.value.push({
                    data: change.doc.data(),
                    id: change.doc.id,
                });
            }
            if (change.type === "removed") {
                console.log("Removed: ", change.doc.data());
            }
        });
    });
};
onMounted(async () => {
    await getInitialList(q);
    subscribeToListener();
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
                                v-if="keueFullId"
                                class="text-darkBlueGray-400 leading-8"
                            >
                                {{ keueFullId }}
                            </p>
                            <p
                                v-if="result?.keue?.state"
                                class="text-darkBlueGray-400 leading-8"
                            >
                                Status: {{ result.keue?.state }}
                            </p>
                            <p
                                v-if="ingressUrl"
                                class="text-darkBlueGray-400 leading-8"
                            >
                                Ingress URL: {{ ingressUrl }}
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
    <section class="py-8 bg-blueGray-100">
        <div class="container px-4 mx-auto">
            <div
                class="relative p-10 xl:py-12 xl:px-20 bg-grey-300 overflow-hidden rounded-4xl"
            >
                <div v-for="task in listFiltered" class="py-1 mb-4">
                    <TaskItem :task="task"></TaskItem>
                </div>
            </div>
        </div>
    </section>
</template>
