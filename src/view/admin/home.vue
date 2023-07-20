<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { options1, option2 } from './echart'


const CartList = ref<CardItem[]>([{
    title: 'Vue',
    price: 565470,
    icon: 'fab fa-vuejs text-green-600',
    total: 767640,

}, {
    title: 'React',
    price: 432520,
    icon: 'fab fa-react text-blue-600',
    total: 54367,

}, {
    title: 'JS',
    price: 5426666,
    icon: 'fab fa-js-square text-yellow-300',
    total: 64788,
}, {
    title: 'Css',
    price: 32155696,
    icon: 'fab fa-css3-alt text-blue-600',
    total: 443256,
}])

// 基于准备好的dom，初始化echarts实例
nextTick(() => {
    echarts.init(document.getElementById('awei1')).setOption(options1)
    echarts.init(document.getElementById('awei2')).setOption(option2)
})
</script>
<template>
    <div class="grid md:grid-flow-col gap-2 bg-white p-3 rounded-sm">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="item in CartList" :key="item"
            class=" cursor-pointer bg-white">
            <template #header>
                <div class=" flex items-center justify-between">
                    {{ item.title }}
                    <el-tag type="success" effect="dark" size="small">month</el-tag>
                </div>
            </template>
            <section class="flex justify-between items-center">
                <span class="">{{ item.price }}<i class="fas fa-dollar-sign"></i></span>
                <i :class="item.icon" class="text-4xl"></i>
            </section>
        </el-card>
    </div>
    <!-- echarts图表 -->
    <div class=" bg-white mt-5 p-3 grid md:grid-flow-col rounded-sm">
        <el-card shadow="always" :body-style="{ padding: '10px' }">
            <template #header>
                <div>
                    <span>Vue People</span>
                </div>
            </template>
            <!-- card body -->
            <div id="awei1" style="height: 400px;" class="md:600px"></div>

        </el-card>
        <el-card shadow="always" :body-style="{ padding: '10px' }" class="ml-3">
            <template #header>
                <div>
                    <span>React People</span>
                </div>
            </template>
            <!-- card body -->
            <div id="awei2" style="height: 400px;" class="md:600px"></div>
        </el-card>
    </div>
</template>
<style scoped lang="scss"></style>