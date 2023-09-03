<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue'
import { ref } from 'vue';
const content = ref('')
</script>
<template>
    <Editor v-model="content" :height="300" placeholder=" 请输入markdown内容 "></Editor>
    {{ content }}
</template>

<style scoped lang="scss"></style>