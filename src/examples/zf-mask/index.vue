<template>

    <div class="container">

        <div class="item">
            <text @click="clickItem" class="center">点击弹出mask</text>
        </div>


        <zf-mask :show="show" @zfMaskClicked="zfMaskClicked"/>

    </div>

</template>

<script>
    import {ZfMask} from '../../index'
    export default {

        data() {
            return {
                show:false,
            }
        },
        created() {

        },
        components: {
            ZfMask
        },
        methods: {
            zfMaskClicked(){
                this.show = false
            },
            clickItem(){
             this.show = true
            }

        }
    };
</script>

<style scoped>
    .item{
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
    .center{
        color: #333;
        font-size: 35px;
    }


</style>
