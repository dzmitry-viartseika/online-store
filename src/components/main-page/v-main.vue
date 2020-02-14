<template>
    <div class="v-main">
        <h1>Online-store</h1>
        <p>
            <router-link :to="{name: 'catalog'}">
                to catalog
            </router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "v-main",
    }
</script>

<style scoped lang="scss">
    .v-main {

    }
</style>