<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'Todos.index'}">Todos</router-link>
  </div>
  <router-view/>
</template>
