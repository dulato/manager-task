<script setup lang="ts">
import { useTodoStore } from '@/store';
import Loader from '@/components/Loader.vue';
import TaskForm from '@/components/TaskForm.vue';
import TodoList from '@/components/TodoList.vue';

const store = useTodoStore();
</script>

<template>
    <main id="main" class="main">
        <div class="container">
            <div class="main__content">
                <Loader v-if="store.isLoading" />
                <TaskForm />
                <TodoList />
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.main {
    position: relative;
    width: 100%;
    background: $light;
    padding: 58px 0 0 0;

    &__content {
        position: relative;
        padding: 20px 0;
    }

    &__content-title {
        margin: 0 0 24px 0;
        font-family: $roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: $black;
    }
}
</style>