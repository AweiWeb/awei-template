<script setup lang="ts">
import { nextTick, ref } from 'vue';
nextTick(() => {
    document.documentElement.addEventListener('click', () => {
        show.value = false
    })
})
const activeName = ref('site')
const show = ref(false)
</script>
<template>
    <div class="email">
        <i class="fas fa-envelope text-2xl" @click.stop="show = !show"></i>
        <el-tabs v-model="activeName" class="demo-tabs" v-show="show === true" @click.stop>
            <el-tab-pane label="Role" name="third"><a>剪短发；连接大陆看金德拉克金额都疯了哈弗朗加利福卡上；jfsjfej.sjfrlhs</a></el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
    </div>
</template>
<style scoped lang="scss">
.email {
    @apply relative mr-5 text-gray-500;

    .demo-tabs {
        @apply absolute bg-white p-2 z-10 right-0 border rounded-md w-[300px];

        a {
            @apply truncate overflow-hidden block border-b p-2 text-sm hover:text-pink-400;
        }
    }
}
</style>