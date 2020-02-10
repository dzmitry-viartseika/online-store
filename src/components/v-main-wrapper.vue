<template>
    <div class="v-main-wrapper">
        <h1>Catalog</h1>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "v-main-wrapper",
    }
</script>

<style scoped lang="scss">
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
