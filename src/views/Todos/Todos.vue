<template>
    <div class="container">
            <h2 class="text-center">Lista de Tarefas</h2>
            <div class="align-self-end ml-auto">
                <router-link :to="{name: 'Todo.create'}">
                    <button type="submit" class="btn btn-primary ">
                        Adicionar
                    </button>
                </router-link>           
            </div>
        <div v-show="loading" class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>

    <ul class="list-group mt-3">
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

                const loading = ref(false)

                onMounted(async() => {
                    loading.value = true
                    TodoService.getAll()
                        .then(response => {
                            todos.value = response.data.data
                        })
                        .catch(error => console.log(error))
                        .finally(() => loading.value = false)
                })
                return {
                    loading,
                    todos
                }
            }
    }
</script>
