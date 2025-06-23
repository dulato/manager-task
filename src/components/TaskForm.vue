<script setup lang="ts">
import { ref, computed } from 'vue';
import type { todoTaskType } from '@/types/todoTypes';
import { useTodoStore } from '@/store';
import { useFetcher } from '@/сomposables/useFetcher';

const store = useTodoStore();

const taskForm = ref<todoTaskType>({
    id: 0,
    userId: 6,
    title: '',
    completed: false,
});

const taskTitleTrim = computed(() => taskForm.value.title.trim().length > 0);

const resetTaskForm = () => {
    taskForm.value.title = '';
    taskForm.value.completed = false;
};

const createTask = async () => {
    taskForm.value.id = Date.now();
    const newTask = {...taskForm.value}

    try {
        store.setIsLoading(true)
        const createTask = await useFetcher.post('/todos', newTask);
        console.log(createTask);
        store.addTodoTask(newTask)
    } catch (error) {
        console.error('Failed to delete task:', error);
        store.setIsLoading(false)
    } finally {
        store.setIsLoading(false)
        resetTaskForm()
    }
};

</script>

<template>
    <form class="task-form">
        <h3 class="task-form__head">Create a task</h3>
        <div class="task-form__status">
            <input 
                type="checkbox" 
                id="task-form__status-input" 
                v-model="taskForm.completed"
                class="task-form__status-input" 
                name="task-form__status-input"
            />
            <label 
                for="task-form__status-input" 
                class="task-form__status-label"
                :class="[
                    'task-form__status-label',
                    { 'task-form__status-label--active': taskForm.completed }
                ]"
            >
                {{ taskForm.completed ? 'completed' : 'uncompleted' }}
            </label>
        </div>
        <div class="task-form__title">
            <input 
                type="text" 
                id="task-form__title-input"
                v-model="taskForm.title"
                class="task-form__title-input"
                placeholder="Enter title of task"
            />
        </div>
        <div class="task-form__bottom">
            <button 
                type="button" 
                id="task-form__cancel"
                class="task-form__button task-form__cancel" 
                @click="resetTaskForm"
            >
                Cancel
            </button>
            <button 
                type="button" 
                id="task-form__save"
                class="task-form__button task-form__save"
                :disabled="!taskTitleTrim"
                @click="createTask"
            >
                Save
            </button>
        </div>
    </form>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.task-form {
    position: relative;
    padding: 30px 20px;
    margin: 0 0 30px 0;
    border: 1px solid $gray;
    background: $white;
    border-radius: 10px;

    &__head {
        margin: 0 0 20px 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        color: $black;
    }

    &__status {
        display: flex;
        align-items: center;
        margin: 0 0 12px 0;
    }

    &__status-input {
        display: block;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
        outline: none;
        cursor: pointer;
    }

    &__status-label {
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

    &__title {
        margin: 0 0 12px 0;
    }

    &__title-input {
        display: block;
        width: 100%;
        background: $white;
        border: 1px solid $gray;
        border-radius: 8px;
        padding: 8px 16px;
        outline: none;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: $black;

        &::placeholder {
            color: $gray;
        }
    }

    &__bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &__cancel {
        background: $green;
        margin: 0 12px 0 0;
    }

    &__save {
        background: $blue-light;
    }

    &__button {
        display: block;
        flex: 0 0 120px;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: $white;

        &:disabled {
            background: $gray;
        }
    }
}
</style>