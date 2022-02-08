<template>
    <div class="container form-grop">
            <form action="#" method="post" @submit.prevent="createTodo">
                 <h5 class="my-3">Adicionar nova tarefa</h5>

                <div class="mb-3">
                    <label for="title" class="form-label">Nome da tarefa</label>
                    <input type="text" class="form-control" id="title" placeholder="Nome da tarefa" v-model="todo.name">
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Descrição da tarefa</label>
                    <textarea class="form-control" id="description" rows="2" v-model="todo.description"></textarea>
                </div>
                    
                <button type="submit" class="btn btn-primary" :disabled="todo.disabled">
                    <span v-if="todo.loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span v-if="todo.loading">Adicionando...</span>
                    <span v-else> Adicionar </span>
                </button>
            </form>
        </div>
</template>

<script>

import { reactive } from '@vue/reactivity'
import router from '@/router'
import TodoService from '../../../services/todos.service'

export default {
    name: 'CreateTodo',
    setup() {
        const todo = reactive({
            name: '',
            description: '',
            completed: false,
            loading: false
        })
        const createTodo = () => {
            todo.loading = true
            TodoService.createTodo({...todo})
                .then(() => router.push ({name: 'Todos.index'}) )
                .finally(() => todo.loading = false)
        }
        return {
            createTodo,
            todo
        }
    }
}
</script>