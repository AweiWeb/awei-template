<script setup lang="ts">
import Menu from './components/Menu.vue';
import NavBar from './admin/NavBar.vue'
import HistoryLink from './admin/HistoryLink.vue'
import NMenu from '@/composables/menu.ts'
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const route = useRoute()

// 刷新的时候传入路由
// onBeforeRouteUpdate(() => {
//     menu.addHistoryMenu(route)
// })
watch(route, () => {
    NMenu.addHistoryMenu(route)
}, { immediate: true })
</script>
<template>
    <div class=" grid grid-cols-[auto_1fr] w-screen min-h-screen ">
        <Menu class="bg md:block" />
        <div class="content grid grid-rows-[auto_1fr] bg-gray-200">
            <div>
                <NavBar />
                <HistoryLink />
            </div>
            <div class="m-3 p-5 rounded-sm overflow-y-auto ">
                <router-view #default="{ Component }">
                    <Transition leave-active-class="animate__animated animate__fadeOutLeft"
                        enter-active-class="animate__animated animate__fadeInRight">
                        <component :is="Component" class="w-full" />
                    </Transition>
                </router-view>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.animate__fadeInRight {
    animation-duration: 0.5s;
}

.animate__fadeOutLeft {
    animation-duration: 0.3s;
}
</style> 
<script lang="ts">
export default {
    route: {
        meta: { auth: true }
    }
}
</script>
