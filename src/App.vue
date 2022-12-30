<script setup lang="ts">
import { RouterView } from "vue-router";
import PrimaryHeader from "@/components/PrimaryHeader.vue";
import PrimaryFooter from "@/PrimaryFooter.vue";
import FullPageLoader from "@/components/FullPageLoader.vue";
import { useGeneralStore } from "./stores/general";
const general = useGeneralStore();
</script>

<template>
  <div class="">
    <FullPageLoader v-if="general.fullPageLoading"></FullPageLoader>
    <PrimaryHeader />
    <div>
      <RouterView></RouterView>
    </div>
    <PrimaryFooter />
  </div>
</template>
