<script setup lang="ts"></script>
<template>
    <div class="h-screen w-screen bg-gray-500 flex flex-col justify-center items-center">
        <img src="/public/awei.jpg" class="w-40 h-40 rounded-full object-cover border-8 mb-5 border-white" alt="">
        <div>
            <router-link :to="{ name: 'admin.home' }" class="awei-button text-white p-2">后台管理</router-link>
            <router-link :to="{ name: 'login' }" class="awei-button text-white p-2 ml-3 !bg-violet-700">用户登录</router-link>
        </div>
        <div class="text-gray-300 mt-6 text-sm font-mono drop-shadow-sm">欢迎来到阿伟web的学习空间, 大家一起进步！</div>
    </div>
</template>
<style></style>
<script lang="ts">
export default {
    route: {
        name: 'home'
    }
}
</script>