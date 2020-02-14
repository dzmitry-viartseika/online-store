<template>
    <div class="v-main-wrapper">
        <vHeader/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import vHeader from '../components/layouts/v-header'
    export default {
        name: "v-main-wrapper",
        components: {
            vHeader
        }
    }
</script>

<style scoped lang="scss">
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
