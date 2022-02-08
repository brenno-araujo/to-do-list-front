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

    <ul class="list-group">
        <li v-for="todo in todos" :key="todo.identify" class="list-group-item">
            {{todo.title}} - {{todo.completed}}
        </li>
    </ul>
    </div>
    
</template>

<script>
    import { onMounted, ref } from 'vue' 

    import TodoService from '../../../services/todos.service'

    export default{
        name: 'todos',
            setup() {
                const todos = ref([])
                onMounted(() => {
                    TodoService.getAll()
                        .then(response => {
                            todos.value = response.data.data
                        })
                        .catch(error => console.log(error))
                })
                return {
                    todos
                }
            }
    }
</script>
