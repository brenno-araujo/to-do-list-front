<template>
    <div class="container">
        <h2 class="text-center">Tarefas</h2>
        <div class="form-grop">
            <form>
                 <label for="exampleInputEmail1" class="form-label">Tarefa</label>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nome da tarefa" v-model="name">
                    <button class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>

        <div v-show="loading" class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>

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
