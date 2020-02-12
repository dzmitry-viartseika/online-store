<template>
    <div class="v-select">
        <p class="v-select__title"
            @click="areOptionsVisible = !areOptionsVisible"
        >{{ selected }}</p>
        <div class="v-select__options"
             v-if="areOptionsVisible"
        >
            <p v-for="option in options"
               :key="option.value"
               @click="selectedOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-select",
        props: ['options','select', 'selected'],
        data() {
            return {
                areOptionsVisible: false,
            }
        },
        methods: {
            selectedOption(option) {
                this.$emit('select', option);
                this.areOptionsVisible = false;
            },
            hideSelect() {
                this.areOptionsVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)

        }
    }
</script>

<style scoped lang="scss">
    .v-select {
        position: relative;
        width: 200px;
        & p {
            margin: 0;
            background: white;
            &:hover {
                background: #e7e7e7;
            }
        }
        &__options {
            border: 1px solid #aeaeae;
            position: absolute;
            top: 30px;
            right: 0;
            width: 100%;
        }
        &__title {
            border: 1px solid #aeaeae;
        }
    }
</style>