<script setup lang="ts"></script>

<template>
    <div class="loader">
        <div class="loader__spinner"></div>
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($black, 0.7);
    z-index: 999;

    &__spinner {
        width: 52px;
        height: 52px;
        border: 5px solid $white;
        border-bottom-color: $orange;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>