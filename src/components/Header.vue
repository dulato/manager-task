<script setup lang="ts"></script>

<template>
    <header id="header" class="header">
        <div class="container">
            <div class="header__content">
                <h4 class="header__content-title">
                    Manager Task
                </h4>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: $blue;
    z-index: 99;

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
    }

    &__content-title {
        font-family: $rye;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
        color: $white;
    }
}
</style>