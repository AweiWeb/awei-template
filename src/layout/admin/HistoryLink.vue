<script setup lang="ts">
import { useRoute } from 'vue-router';
import NMenu from '@/composables/menu.ts'
console.log(useRoute().name);

</script>
<template>
    <div class="grid grid-flow-col gap-2 justify-start bg-white p-3 border-t border-b rounded-sm hover:cursor-pointer"
        v-show="NMenu.history.value.length">
        <div class="rounded-md py-2 px-3 text-sm text-gray-700 border shadow-sm"
            :class="{ 'bg-purple-300': item.route == $route.name }" v-for="item of NMenu.history.value" :key="item.title">
            <RouterLink :to="{ name: item.route }">{{
                item.title
            }}</RouterLink> <i class="fab fa-xbox" @click="NMenu.removeMenu(item)"></i>
        </div>
    </div>
</template>
<style></style>