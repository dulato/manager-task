<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useFetcher } from '@/сomposables/useFetcher';
import { useTodoStore } from '@/store';
import Skeleton from '@/components/Skeleton.vue';

const store = useTodoStore();

const taksQuantity = computed(() => store.todoList.length);

const taskList = computed(() => store.todoList);

onMounted(async () => {
    try {
        store.setIsFetching(true)
        const tasks = await useFetcher.get('/todos');
        store.setTodoTask(tasks.data);
    } catch (error) {
        console.error('Failed to delete task:', error);
        store.setIsFetching(false)
    } finally {
        store.setIsFetching(false)
    }
});

const deleteTask = async (id: number) => {
    try {
        store.setIsLoading(true)
        const deleteTask = await useFetcher.delete(`/todos/${id}`);
        console.log(deleteTask);
        store.removeTodoTask(id);
    } catch (error) {
        console.error('Failed to delete task:', error);
        store.setIsLoading(false)
    } finally {
        store.setIsLoading(false)
    }
}
</script>

<template>
    <div class="todo-list">
        <h2 class="todo-list__title">
            {{ taksQuantity > 0 ? `There are ${taksQuantity} tasks!` : 'Task list is empty!' }}
        </h2>
        <div v-if="store.isFetching" class="todo-list__empty">
            <Skeleton 
                v-for="item in 9" 
                :key="item"
            ></Skeleton>
        </div>
        <ul v-if="taksQuantity > 0" class="todo-list__array">
            <li 
                v-for="task in taskList" :key="task.id"
                class="todo-list__item"
            >
                <h5 class="todo-list__item-number">
                    Task {{ task.id }}
                </h5>
                <div class="todo-list__item-status">
                    <input 
                        type="checkbox" 
                        :id="`todo-list__checkbox-${task.id}`" 
                        v-model="task.completed"
                        class="todo-list__item-checkbox" 
                        name="todo-list__item-checkbox"
                    />
                    <label 
                        :for="`todo-list__checkbox-${task.id}`" 
                        :class="[
                            'todo-list__item-label',
                            { 'todo-list__item-label--active': task.completed }
                        ]"
                    >
                        {{ task.completed ? 'completed' : 'uncompleted' }}
                    </label>
                </div>
                <p class="todo-list__item-text">
                    {{ task.title }}
                </p>
                <div class="todo-list__item-bottom">
                    <button 
                        type="button" 
                        class="todo-list__item-button"
                        @click="deleteTask(task.id)"
                    >
                        Delete
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.todo-list {
    position: relative;

    &__title {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
        color: $black;
    }

    &__array {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 30px 20px;
        margin: 40px 0 0 0;

        @media screen and (max-width: 992px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }

    &__empty {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 30px 20px;
        margin: 40px 0 0 0;

        @media screen and (max-width: 992px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: 2px 1px 8px 2px rgba($black, 0.3);
        background: $white;
        border-radius: 8px;
    }

    &__item-number {
        margin: 0 0 12px 0;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        color: $black;
    }

    &__item-status {
        display: flex;
        align-items: center;
        margin: 0 0 12px 0;
    }

    &__item-checkbox {
        display: block;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
        outline: none;
        cursor: pointer;
    }

    &__item-label {
        display: block;
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: $red;
        user-select: none;
        cursor: pointer;

        &--active {
            color: $green;
        }
    }

    &__item-text {
        margin: 0 12px 0 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: $black;
    }

    &__item-bottom {
        margin-top: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &__item-button {
        display: block;
        padding: 8px 16px;
        background: $red;
        border-radius: 8px;
        flex: 0 0 120px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: $white;
    }
}
</style>