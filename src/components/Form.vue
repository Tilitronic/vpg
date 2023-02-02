<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const email: Ref<string>=ref('')
const password: Ref<string>=ref('')

    const onSubmit = ()=>{
        
        alert('SUBMITTTTTTTTTTED!!!')
    }
</script>

<template>
    <div>
        <h1>Form component</h1>
        <form @submit.prevent="onSubmit">
            <input type="email" v-model="email"/>
            <input  type="password" v-model="password"/>
            <button type="submit">submit</button>
        </form>
    </div>
</template>

<style>
    form{
        display: flex;
        flex-direction: column;
    }
</style>