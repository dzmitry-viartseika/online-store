<template>
    <div>
        <div class="v-catalog-range">
            <input type="range"
                   min="0"
                   max="10000"
                   step="10"
                   v-model.number="minPrice"
                   @change="setRangeSliders()"
            >
            <input type="range"
                   min="0"
                   max="10000"
                   step="10"
                   v-model.number="maxPrice"
                   @change="setRangeSliders()"
            >
            <p>Min:{{minPrice}}</p>
            <p>Max:{{maxPrice}}</p>
        </div>
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
                    @productClick="productClick"
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
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 10000
            }
        },
        computed: {
            ...mapGetters(['cart', 'searchData']),
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
        watch: {
            searchData() {
                this.sortProductsBySearchData(this.searchData)
            }
        },
        methods: {
            ...mapActions(['fetchProducts', 'addToCartProduct']),
            addToCart(data) {
                this.addToCartProduct(data)
            },
            productClick(article) {
                this.$router.push({name: 'product', query: {'product': article}})
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
            sortProductsBySearchData(value) {
                this.sortedProducts = this.allProducts
                if(value) {
                    this.sortedProducts = this.sortedProducts.filter((item) => {
                        return item.name.toLowerCase().includes(value.toLowerCase())
                    })
                } else {
                    this.sortedProducts = this.allProducts;
                }
            },
            sortByCategories(category) {
                this.sortedProducts = this.allProducts
                this.sortedProducts = this.sortedProducts.filter((item) => {
                    return item.price >= this.minPrice && item.price <= this.maxPrice
                })
                if (category) {
                    this.sortedProducts = this.sortedProducts.filter((item) => {
                        this.selected === category.name
                        return item.category === category.name
                    })
                }
            },
            setRangeSliders() {
                if (this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
                this.sortByCategories()
            },
            select(option) {
                this.selected = option.name
            }
        },
        mounted() {
            this.fetchProducts()
                .then((response) => {
                    if (response) {
                        this.sortedProducts()
                        this.sortProductsBySearchData(this.searchData)
                    }
            })
            this.sortByCategories()
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
            top: 90px;
            right: 10px;
            padding: $padding * 2;
            border: 1px solid #2c3e50;
        }
        &-range {
            margin-top: 50px;
            width: 200px;
            text-align: center;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            & svg, & input[type="range"] {
                position: absolute;
                left: 0;
                bottom: 0;
            }
            & input[type="range"]::-webkit-slider-thumb {
                z-index: 2;
                position: relative;
                top: 2px;
                margin-top: -7px;
            }
        }
    }
</style>
