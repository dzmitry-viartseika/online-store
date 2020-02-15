<template>
    <div class="v-button"
         @click="click"
         :class="className"
    >
        <i class="material-icons" v-if="prependIcon">{{ prependIcon }}</i>
        <span>
            {{ title }}
        </span>
        <i class="material-icons" v-if="appendIcon">{{ appendIcon }}</i>
    </div>
</template>

<script>
    export default {
        name: "v-button",
        props: {
            title: {
                type: String,
                default: 'Press'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            success: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
            appendIcon: {
                type: String,
                default: ''
            },
            prependIcon: {
                type: String,
                default: ''
            }
        },
        computed: {
            className() {
                return {
                    'v-button_disabled': this.disabled,
                    'v-button_error': this.success,
                    'v-button_success': this.error,
                }
            }
        },
        methods: {
            click() {
                this.$emit('click')
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-button {
        border-radius: 4px;
        padding: 8px 16px;
        color: #fff;
        background: green;
        cursor: pointer;
        transition: opacity .3s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        .material-icons {
            font-size: 16px;
            line-height: 16px;
            margin-left: 10px;
        }
        &_error {
            background: red;
        }
        &_success {
            background: blueviolet;
        }
        &_disabled {
            background: gray;
            pointer-events: none;
        }
        &:hover {
            opacity: .8;
        }
    }
</style>