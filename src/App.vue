<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import DataTime from './components/DataTime.vue';
import ListItemsVue from './components/ListItems.vue';
</script>

<template>
  <header>
  </header>
  <main>
    <div>
      <nav class="sideNav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ListItems">ListItems</RouterLink>
        <RouterLink to="/ConditionalRendering">ConditionalRendering</RouterLink>
        <RouterLink to="/Events">Events</RouterLink>
        <RouterLink to="/Form">Form</RouterLink>
      </nav>
    </div>
    <div class="routerWrapper">
    <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100vh;
}

.sideNav {
  width: auto;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

header{
  position: fixed;
  top: 0;
  height: 35px;
  background-color: black;
  width: 100vw;
}

main{
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: flex-start;
  margin-top: 35px;
  height: calc(100vh - 35px);
}

.routerWrapper{
  min-width: 900px;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
