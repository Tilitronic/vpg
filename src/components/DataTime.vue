<template>
    <div class="dataTimeWrapper">
        <p> Date: {{ dataTime }}</p>
        <button @click="increment">Count is: {{ count }}</button>
    </div>
</template>

<script setup lang="ts"> 
    import { ref, onMounted } from 'vue'

    // reactive state
    const count = ref(0)
    const dataTime = ref(new Date().toString())

    // functions that mutate state and trigger updates
    function increment() {
    count.value++
    }

    setTimeout(()=>{
        dataTime.value=new Date().toString(); 
        console.log('dataTime', dataTime.value);
    }, 1000)

    // lifecycle hooks
    onMounted(() => {
    console.log(`The initial count is ${count.value}.`)

    })

</script>

export default {
    name: 'DataTime',
    data() {
        return {dataTime: new Date().toString()}
    },
    // refresh: function(){this.dataTime=new Date().toString()},
    timeRefresh: function (){
        setTimeout(()=>{this.dataTime=new Date().toString(); console.log('this.dataTime', this.dataTime);}, 1000)
    },
    
    };


