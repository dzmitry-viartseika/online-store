<template>
    <div class="v-product-page">
        <img class="v-catalog-item__img"
             v-if="product.image"
             :src="require('../assets/images/' + product.image)" alt="">
        <h1 class="v-catalog-item__name">{{ product.name }}</h1>
        <p>Price: {{ product.price }} P.</p>
        <p>Category: {{ product.category }}</p>
        <p>Available: {{ product.available }}</p>
        <button class="v-catalog-item__btn"
                @click="addToCart()"
        >
            Add to Cart
        </button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-product-page",
        computed: {
            ...mapGetters(['products']),
            product() {
                let res = {}
                let vm = this
                this.products.map((item) => {
                    if (item.article === vm.$route.query.product) {
                        res = item
                    }
                })
                return res
            }
        },
        methods: {
            ...mapActions(['fetchProducts', 'addToCartProduct']),
            addToCart() {
                this.addToCartProduct(this.product)
            },
        },
        mounted() {
            this.fetchProducts()
        }
    }
</script>

<style scoped lang="scss">
    .v-product-page {

    }
</style>