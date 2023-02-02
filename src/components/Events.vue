<script setup lang="ts"> 
import { ref } from 'vue';
import type { Ref } from 'vue';

    const counter: Ref<number> = ref(0)
    const enterCounter: Ref<number> = ref(0)
    const keyPressed: Ref<string> = ref('')

    const handleEnterPressed = ()=>{
        enterCounter.value+=1;

    }
    const handleKeyPressed = (event: KeyboardEvent)=>{
        keyPressed.value = event.key
        

    }
</script>

<template>
    <div>
        <button v-on:click="counter++">Click to increace counter</button>
        <button @click="counter=0">Reset counter</button> 
        <p>Counter{{ counter }}</p>
        <hr/>
        <p>{{ enterCounter ? 'Enter pressed '+enterCounter+' times' : null}}</p>
        <label>Prese Enter in input field<input @keydown.enter="handleEnterPressed"/></label>
        <hr/>
        <p>{{ keyPressed ? keyPressed+' was just pressed' : null}}</p>
        <label><input @keydown="handleKeyPressed"/></label>
    </div>
</template>

<style>
</style>