
<script setup lang="ts">
    interface Props {
        value: String,
        type: 'password' | 'text' | 'email' 
    }
    const props = defineProps<Props>();

</script>

<template>
    <label><input v-mode="props.value" type={{props.type}}/></label>
</template>

<script>
</script>