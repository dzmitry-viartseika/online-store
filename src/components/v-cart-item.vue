<template>
    <div class="v-cart-item">
        <img class="v-cart-item__img" :src="require('../assets/images/' + product.image)" alt="">
        <div class="v-cart-item-info">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.article }}</p>
        </div>
        <div>Qty: {{ product.quantity }}</div>
        <button @click="deleteFromCartItem()">Remove product</button>
    </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        props: ['product', 'deleteFromCart'],
        methods: {
            deleteFromCartItem() {
                this.$emit('deleteFromCart')
            }

        },
        mounted() {
            this.$set(this.product, 'quantity', 1);
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/variables";
    .v-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin: $margin * 2;
        &-info {
            display: flex;
            flex-direction: column;
        }
        &__img {
            max-width: 50px;
        }
    }
</style>
