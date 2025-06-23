<script setup lang="ts"></script>

<template>
    <div class="skeleton">
        <div class="skeleton__number"></div>
        <div class="skeleton__status"></div>
        <div class="skeleton__title"></div>
        <div class="skeleton__btn"></div>
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.skeleton {
    position: relative;
    display: block;
    padding: 20px;
    box-shadow: 2px 1px 8px 2px rgba($black, 0.3);
    background: $white;
    border-radius: 8px;

    &__number {
        background: $gray;
        animation: loading 1.4s infinite ease-in-out;
        height: 22px;
        width: 35%;
        border-radius: 6px;
        margin: 0 0 16px 0;
    }

    &__status {
        background: $gray;
        animation: loading 1.4s infinite ease-in-out;
        height: 18px;
        width: 55%;
        border-radius: 6px;
        margin: 0 0 16px 0;
    }

    &__title {
        background: $gray;
        animation: loading 1.4s infinite ease-in-out;
        height: 15px;
        width: 80%;
        border-radius: 6px;
        margin: 0 0 20px 0;
    }

    &__btn {
        background: $gray;
        animation: loading 1.4s infinite ease-in-out;
        height: 30px;
        width: 35%;
        border-radius: 8px;
        margin-left: auto;
    }
}

@keyframes loading {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}
</style>