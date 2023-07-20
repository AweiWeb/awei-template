<script setup lang="ts">
const props = defineProps({
    moduleValue: String
})
</script>
<template>
    <input class="awei-input" :value="props.moduleValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>
<style scoped lang="scss">
.awei-input {
    @apply border w-full border-gray-200 placeholder:text-xs rounded-sm py-1 px-2 outline-none focus:ring-1 ring-offset-2 ring-pink-400 duration-200 focus:border-white;
}
</style>