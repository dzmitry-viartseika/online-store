<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link">Back to Catalog</div>
        </router-link>
        <h1>cart</h1>
        <p v-if="!cart.length">There is no products in cart...</p>
        <vCartItem
            v-for="(product, index) in cart"
            :product="product"
            @deleteFromCart="deleteFromCart(index)"
            @removeProductItem="removeProductItem(index)"
            @addProductItem="addProductItem(index)"
        />
        <div class="v-cart-total">
            <p>Total: </p>
            <p>{{ amountPrice }} $</p>
        </div>
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
        computed: {
            amountPrice() {
                const res = [];
                let result
                if (this.cart.length) {
                    this.cart.forEach((item) => {
                        res.push(item.price * item.quantity)
                    })
                    result =  res.reduce((sum,el) => {
                        return sum + el
                    })
                    return result;
                } else {
                    return 0
                }
            }
        },
        methods: {
            ...mapActions(['deleteProductFromCart','product', 'deleteFromCart']),
            deleteFromCart(index) {
                this.deleteProductFromCart(index)
            },
            addProductItem(index) {
                this.addProduct(index)
            },
            removeProductItem(index) {
                this.removeProduct(index)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/variables";
    .v-cart {
        margin-bottom: 50px;
        &-total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            padding: 0 $padding;
            background: #26ae68;
            color: white;
            font-size: 20px;
        }
    }
</style>
