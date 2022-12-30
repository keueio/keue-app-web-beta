<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<template>
    <footer class="footer z-10 w-full bg-gray-100 bg-opacity-70 backdrop-blur-md p-4 fixed bottom-0">
        <div class="flex justify-center">
            <span class="font-medium text-gray-300">Made with ❤️ by the Keue Team - {{ year }}</span>
        </div>
    </footer>
</template>
