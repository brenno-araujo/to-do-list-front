<template>
  <div id="nav" class="text-center my-3">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'Todos.index'}">Todos</router-link>
  </div>
  <router-view/>
</template>
