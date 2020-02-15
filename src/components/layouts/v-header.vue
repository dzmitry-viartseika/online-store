<template>
    <div class="v-header">
        <router-link :to="{name: 'main'}">
            <img src="../../assets/images/logo.png" alt="">
        </router-link>
        <div class="v-header__search">
            <input type="text"
                v-model="searchData"
            >
            <button><i class="material-icons" @click="search(searchData)">search</i></button>
            <button><i class="material-icons" @click="clearField(searchData)">close</i></button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "v-header",
        data() {
            return {
                searchData: ''
            }
        },
        methods: {
            ...mapActions(['writeSearchValue']),
            search(value) {
                this.writeSearchValue(value)
                if (this.$router !== '/catalog') {
                    this.$router.push('/catalog')
                }
            },
            clearField() {
                this.searchData = ''
                this.writeSearchValue()
                if (this.$router !== '/catalog') {
                    this.$router.push('/catalog')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-header {
        display: flex;
        justify-content: space-between;
        background: gray;
        padding: 16px;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        & img {
            width: 20px;
        }
        &__search {
            margin-right: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            & button {
                margin-left: 50px;
            }
            & input {
                height: 30px;
            }
        }
    }
</style>