<script setup lang="ts">
import toastEditor from './toastEditor';
import { nextTick } from 'vue';

interface Iprops {
  modelValue?: string,
  height?: number,
  placeholder?: string
}
const props = withDefaults(defineProps<Iprops>(), {
  modelValue: '',
  height: 500,
  placeholder: ''
})

const emit = defineEmits(['update:modelValue'])
nextTick(() => {
  const toast = new toastEditor('#editor', `${props.height}px`, `${props.modelValue}`)

  // 提交组件的内容
  toast.editor.on('change', (type: string) => {
    const content = type === 'markdown' ? toast.editor.getMarkdown() : toast.editor.getHTML()
    emit('update:modelValue', content)
  })
})
</script>
<template>
  <div id="editor">
  </div>
</template>
<style>
@import url('https://uicdn.toast.com/editor/latest/toastui-editor.min.css');

#editor {
  @apply bg-white;

  .toastui-editor-mode-switch {
    display: none !important;
  }

  .fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>