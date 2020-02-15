<template>
    <div class="v-main-wrapper">
        <vHeader/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
<!--        <vBtutton @click="clickBtn"-->
<!--            :title="'Edit'"-->
<!--            :disabled="false"-->
<!--            :error="true"-->
<!--            :prependIcon="'edit'"-->
<!--        ></vBtutton>-->
<!--        <br>-->
<!--        <br>-->
<!--        <vTextField-->
<!--            v-model="model"-->
<!--            :label="'Name:'"-->
<!--        />-->
<!--        {{ model }}-->
    </div>
</template>

<script>
    import vHeader from '../components/layouts/v-header'
    import vBtutton from '../components/elements/v-button'
    import vTextField from '../components/elements/v-text-field'
    export default {
        name: "v-main-wrapper",
        data() {
            return {
                model: ''
            }
        },
        components: {
            vHeader,
            vBtutton,
            vTextField
        },
        watch: {
            model() {
                // console.log('Dates changed', this.model);
            }
        },
        methods: {
            clickBtn() {
                // console.log('wertey');
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-main-wrapper {
        max-width: 900px;
        margin: 100px auto 0;
    }
</style>
