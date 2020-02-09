<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__img" :src="require('../assets/images/' + product.image)" alt="">
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
    export default {
        name: "v-catalog-item",
        props: ['product', 'sendArticle'],
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/variables";
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin: $margin * 2;
        &__img {
            max-width: 100px;
        }
    }
</style>
