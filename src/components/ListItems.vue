<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Ref } from 'vue'

    //state
    const itemsAr: Ref<string[]>= ref([]) 
    const newItem: Ref<string> = ref('')
    const newItemPriority: Ref<'low' | 'medium' | 'high'> = ref('low')
    const newItemHighPriority: Ref<boolean> = ref(false)

    
    for (let i: number = 0; i<10; i++){
        itemsAr.value.push(i.toString()+"item")
    }   

    // //state manipulation
    // function createItems (){
        
    // }
    
    // //lifecycle hooks
    // onMounted(() => {
    //     createItems()

    // })

</script>

<template>
    <div class="itemListWrapper">
        <ul>
            <li v-for="(item, index) in itemsAr" :key="index+'testListItem'">{{item}}</li>
        </ul>
        <input v-model="newItem">
        <input type="checkbox" v-model="newItemHighPriority"/>
        <div>
            <label><input type="radio" v-model="newItemPriority" value="low">low</label>
            <label><input type="radio" v-model="newItemPriority" value="high">high</label>
            <label><input type="radio" v-model="newItemPriority" value="medium">medium</label>
        </div>
        <select v-model="newItemPriority">
            <option value="low">low</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
        </select>
        <br>
        {{newItem}}
        <p>({{newItemPriority}} priority)</p>



        
    </div>
</template>

<style>
    .itemListWrapper{
        width: 300px;
    }
</style>