<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue'

    
    const isItem0Show: Ref<boolean>= ref(false)
    const isItem1Show: Ref<boolean>= ref(false)
    const isItem2Show: Ref<boolean>= ref(false)

 

</script>

<template>
    <div v-cloak>
        <h1>Conditional Rendering</h1>
        <div class="displayControl">
            <p>Items display control</p>
            <label>Show item 0 <input type="checkbox" v-model="isItem0Show"></label>
            <label>Show item 1 <input type="checkbox" v-model="isItem1Show"></label>
            <label>Show item 2 <input type="checkbox" v-model="isItem2Show"></label>

        </div>
        <div class="itemsToShow">
            <div v-if="isItem0Show" class="item">
                <p class="title">Item 0</p>
                <p class="info">Rendered with v-show directive (so display chanches to none and element stays in DOM)</p>
            </div>
            <div v-if="isItem1Show" class="item">
                <p class="title">Item 1</p>
                <p class="info">Rendered with v-if directive (so it disapears from DOM)</p>
            </div>
            <div v-else-if="isItem2Show" class="item">
                <p class="title">Item 2</p>
                <p class="info">Rendered with v-else-if directive (so it is visible when item 1 is false and item 2 is true)</p>
            </div>
            <div v-else class="item">
                <p class="title">Item 3</p>
                <p class="info">Rendered with v-else directive (so it is visible when item 1 is false and item 2 is false)</p>
            </div>
        </div>
    </div>
</template>

<style>
.displayControl{
    display: flex;
    flex-direction: column;
}
.item{
    width: 100px;
    height: auto;
    background-color: pink;
    color: black;
    margin: 5px;
}

.info{
    font-size: small;
}

.title{
    font-weight: bold;
}

</style>