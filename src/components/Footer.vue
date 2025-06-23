<script setup lang="ts"></script>

<template>
    <footer id="footer" class="footer">
        <div class="container">
            <div class="footer__content">
                <p class="footer__content-text">
                    Almaty city 2025
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;

.footer {
    position: relative;
    margin-top: auto;
    width: 100%;
    background: $blue;

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
    }

    &__content-text {
        font-family: $roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: $white;
    }
}
</style>