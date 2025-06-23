<script setup lang="ts"></script>

<template>
    <main id="main" class="main">
        <div class="container">
            <div class="main__content">
                <h4 class="main__content-title">
                    Manager Task
                </h4>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.main {
    position: relative;
    width: 100%;
    background: $white;
    padding: 58px 0 0 0;

    &__content {
        position: relative;
        padding: 20px 0;
    }

    &__content-title {
        font-family: $roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: $black;
    }
}
</style>