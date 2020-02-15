<template>
    <!--    @click="showProductPage()"-->
    <div class="v-catalog-item"
    >
        <vModal v-if="isPopupVisible"
                @closePopup="closeInfoPopup"
                :isPopupVisible.sync="isPopupVisible"
                :rightBtnItem="'Add To CART'"
                :popupTitle="product.name"
                @rightBtnAction="addToCart"
        >
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
        </vModal>
        <img class="v-catalog-item__img" :src="require('../assets/images/' + product.image)" alt="">
        <h1 class="v-catalog-item__name">{{ product.name }}</h1>
        <p>Price: {{ product.price }} P.</p>
        <p>Category: {{ product.category }}</p>
        <p>Available: {{ product.available }}</p>
        <button class="v-catalog-item__btn"
                @click="showPopupInfo()"
        >
            Show info
        </button>
        <button class="v-catalog-item__btn"
                @click="addToCart()"
        >
            Add to Cart
        </button>
    </div>
</template>

<script>

    import vModal from './modals/v-popup'

    export default {
        name: "v-catalog-item",
        props: ['product', 'sendArticle', 'productClick'],
        data() {
            return {
                isPopupVisible: false,
            }
        },
        components: {
            vModal
        },
        methods: {
            showProductPage() {
                this.$emit('productClick', this.product.article)
            },
            addToCart() {
                this.$emit('addToCart', this.product)
            },
            showPopupInfo() {
                this.isPopupVisible = true
            },
            closeInfoPopup() {
                this.isPopupVisible = false;
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
