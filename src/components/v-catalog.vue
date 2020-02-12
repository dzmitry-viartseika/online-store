<template>
    <div>
        <vSelect :options="category"
                 @select="sortByCategory"
                 :selected="selected"
        />
        <div class="v-catalog">
            <router-link :to="{name: 'cart', params: {cart: cart}}">
                <div class="v-catalog__link">Cart: {{ cart.length }}</div>
            </router-link>
            <vCatalogItem
                    v-for="(product, index) in filterProducts"
                    :key="product.article"
                    :product="product"
                    @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import vSelect from './elements/v-select'
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSelect,
        },
        data() {
            return {
                category: [
                    {
                        name: 'All',
                        value: 'all'
                    },
                    {
                        name: 'Man',
                        value: 'm'
                    },
                    {
                        name: 'Woman',
                        value: 'w'
                    },
                ],
                selected: 'Select Category',
                sortedProducts: []
            }
        },
        computed: {
            ...mapGetters(['cart']),
              allProducts() {
                return this.$store.getters.products
              },
            filterProducts() {
                if(this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                    return  this.allProducts
                }
            }
        },
        methods: {
            ...mapActions(['fetchProducts', 'addToCartProduct']),
            addToCart(data) {
                this.addToCartProduct(data)
            },
            sortByCategory(category) {
                this.sortedProducts = []
                this.selected = category.name
                this.allProducts.map((item) => {
                    if (item.category === category.name) {
                        this.sortedProducts.push(item)
                    }
                })
            },
            select(option) {
                this.selected = option.name
            }
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
        justify-content: flex-start;
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
