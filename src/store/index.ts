import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { todoTaskType } from '@/types/todoTypes';

export const useTodoStore = defineStore('todo', () => {
    const isLoading = ref<boolean>(false);
    const todoList = ref<todoTaskType[]>([]);
    const todoTask = ref<todoTaskType>({
        id: 0,
        userId: 6,
        title: '',
        completed: false,
    });

    const setTodoTask = (arr: todoTaskType[]): void => {
        todoList.value = [...arr];
    };

    const setIsLoading = (val: boolean): void => {
        isLoading.value = val;
    };

    const addTodoTask = (obj: todoTaskType): void => {
        if(todoList.value.length > 0) {
            const index = todoList.value.findIndex((elem: todoTaskType) => elem.id === obj.id);
            if(index === -1) {
                todoList.value.unshift(obj);
            }
        } else {
            todoList.value.push(obj);
        }
    };
    
    const removeTodoTask = (id: number): void => {
        const index = todoList.value.findIndex((elem: todoTaskType) => elem.id === id);
        if(index !== -1) {
            todoList.value.splice(index, 1);
        }
    };

    const deleteTodoList = (): void => {
        todoList.value.splice(0, todoList.value.length);
    };

    return {
        isLoading,
        setIsLoading,
        todoTask,
        todoList,
        setTodoTask,
        addTodoTask,
        removeTodoTask,
        deleteTodoList,
    }
});
