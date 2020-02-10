<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart: cart}}">
            <div class="v-catalog__link">Cart: {{ cart.length }}</div>
        </router-link>
        <vCatalogItem
            v-for="(product, index) in allProducts"
            :key="product.article"
            :product="product"
            @addToCart="addToCart"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['cart']),
              allProducts() {
                return this.$store.getters.products
              }
        },
        methods: {
            ...mapActions(['fetchProducts', 'addToCartProduct']),
            addToCart(data) {
                this.addToCartProduct(data)
            },
        },
        mounted() {
            this.fetchProducts();
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/variables";
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &__link {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding * 2;
            border: 1px solid #2c3e50;
        }
    }
</style>
