<template>
    <div class="v-cart">
        <h1>cart</h1>
        <vCartItem
            v-for="(product, index) in cart"
            :product="product"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import vCartItem from './v-cart-item';
    import { mapActions } from 'vuex';
    export default {
        name: "v-cart",
        props: ['cart'],
        components: {
            vCartItem
        },
        methods: {
            ...mapActions(['deleteProductFromCart']),
            deleteFromCart(index) {
                this.deleteProductFromCart(index)
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-cart {

    }
</style>
