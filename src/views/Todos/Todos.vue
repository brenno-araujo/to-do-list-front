<template>
    <div class="container">
        <h2 class="text-center">Lista de Tarefas</h2>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Tarefa</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="name">
            <div id="emailHelp" class="form-text">Nome da tarefa.</div>
        </div>
    </form>

    <ul>
        <li v-for="todo in todos" :key="todo.identify">
            {{todo.name}}
        </li>
    </ul>
    </div>
    
</template>

<script>
    import { ref } from 'vue' 
    export default{
        name: 'todos',
        setup(){
            const todos = [
                {name:'tarefa 01', completed: true},
                {name:'tarefa 02', completed: true},
                {name:'tarefa 03', completed: false}
            ]

            const name = ref('default')
        return {
            todos,
            name
        }
        }
    }
</script>
