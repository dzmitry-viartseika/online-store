<template>
    <div class="v-modal__wrapper"
        ref="modal"
        >
        <div class="v-modal">
            <div class="v-modal__header">
            <span>
                {{ popupTitle }}
            </span>
                <span>
                <i class="material-icons"
                   @click="closePopup()"
                >close</i>
            </span>
            </div>
            <div class="v-modal__content">
                <slot></slot>
            </div>
            <div class="v-modal__footer">
                <button @click="rightBtnAction()">{{ rightBtnItem }}</button>
                <button @click="closePopup()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-popup",
        props: ['isPopupVisible', 'rightBtnItem', 'popupTitle'],
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            rightBtnAction() {
                this.$emit('rightBtnAction')
            }
            // hidePopup() {
            //    this.$emit('update:isPopupVisible', false)
            // }
        },
        // mounted() {
        //     document.addEventListener('click', this.hidePopup.bind(this), true)
        // },
        // beforeDestroy() {
        //     document.removeEventListener('click', this.hidePopup)
        // }
        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                console.log('wertey');
                console.log(item);
                if(item.target === vm.$refs.modal) {
                    vm.closePopup()
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .v-modal {
        padding: 16px;
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        background: white;
        box-shadow: 0 0 17px 0 #e7e7e7;
        &__wrapper {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0, .3);
            z-index: 10;
        }
        &__header, &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
</style>