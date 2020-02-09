<template>
    <div class="v-catalog">
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
    import { mapActions } from 'vuex';
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
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>
