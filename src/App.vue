<script setup lang="ts">
import { RouterView } from "vue-router";
import PrimaryHeader from "@/components/PrimaryHeader.vue";
import PrimaryFooter from "@/PrimaryFooter.vue";
</script>

<template>
  <div class="">
    <PrimaryHeader />
    <div class="container mx-auto">
      <RouterView></RouterView>
    </div>
    <PrimaryFooter />
  </div>
</template>
