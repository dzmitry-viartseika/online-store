<template>
    <div class="v-main-wrapper">
        <h1>Catalog</h1>
        <vCatalog/>
        <vCart
                :cart="cart"
                v-if="cart.length"
        />
    </div>
</template>

<script>
    import vCatalog from './v-catalog';
    import vCart from './v-cart';
    import {mapGetters} from 'vuex';

    export default {
        name: "v-main-wrapper",
        components: {
            vCatalog,
            vCart,
        },
        computed: {
            ...mapGetters(['cart'])
        }
    }
</script>

<style scoped lang="scss">
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
