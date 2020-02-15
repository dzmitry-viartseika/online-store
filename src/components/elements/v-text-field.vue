<template>
    <div class="v-text-field">
        <label for="text"> {{ label }}
            <input name="text"
                   type="text"
                   :value="value"
                   @input="input"
            >
        </label>
    </div>
</template>

<script>
    export default {
        name: "v-text-field",
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            label: {
                type: String,
                default: ''
            }
        },
        methods: {
            input(e) {
              let value = e.target.value
              this.$emit('input', value)
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-text-field {

    }
</style>