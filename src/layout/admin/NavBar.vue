<script setup lang="ts">
import { userStore } from '@/store/user';
import { logout } from '@/utils/user';
import NMenu from '@/composables/menu.ts'
import notice from '@/components/notice.vue';
import breadcrum from '@/components/breadcrum.vue';
const fullScreen = () => {
    document.documentElement.requestFullscreen()
}
const store = userStore()
</script>
<template>
    <div class=" bg-white p-3 px-5 flex justify-between items-center">
        <div class=" flex items-center">
            <div @click="NMenu.toggleMenu">
                <i class="fas fa-left-long mr-2 cursor-pointer" v-if="!NMenu.close.value"></i>
                <i class="fas fa-right-long mr-2 cursor-pointer" v-else></i>
            </div>
            <breadcrum />
        </div>
        <div class="flex justify-center items-center relative cursor-pointer">
            <notice />
            <i class="fab fa-unity mr-5 text-2xl text-gray-600" @click="fullScreen"></i>
            <div class="group relative">
                <div class="flex items-center justify-center">
                    <img :src="store.info?.avatar" class="h-8 w-8 rounded-full object-cover" alt="">
                    <span class=" text-gray-500 text-sm ml-2">{{ store.info?.name }}</span>
                </div>
                <section
                    class=" group-hover:block mt-1 absolute top-full right-0 px-3 whitespace-nowrap border rounded-md bg-white shadow-sm hidden">
                    <RouterLink to="/" class=" bg-white rounded-sm p-2 cursor-pointer hover:bg-purple-300">
                        <a class="fab fa-elementor"></a>
                        <span class=" text-sm ml-1">网站首页</span>
                    </RouterLink>
                    <div class="bg-white rounded-sm p-2 cursor-pointer hover:bg-purple-300">
                        <a href="https://weibo.com/" target="_blank" class="fab fa-weibo"></a>
                        <span class=" text-sm ml-1">微博</span>
                    </div>
                    <div class="bg-white rounded-sm p-2 cursor-pointer hover:bg-purple-300">
                        <a href="https://github.com/AweiWeb" target="_blank" class="fab fa-github"></a>
                        <span class=" text-sm ml-1">Github</span>
                    </div>
                    <div class="bg-white rounded-sm p-2 cursor-pointer hover:bg-purple-300" @click="logout()">
                        <a class="fab fa-opera"></a>
                        <span class=" text-sm ml-1">退出登录</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<style></style> 