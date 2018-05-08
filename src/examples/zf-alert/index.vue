<template>


    <div class="container">

        <div class="item">
            <text @click="clickItem" class="center">点击弹出alert</text>
        </div>

        <zf-alert @clickItem="clickAction" :show="show" />
    </div>
</template>

<script>

    import {ZfAlert} from '../../index'
    const modal = weex.requireModule('modal')
    export default {

        data() {
            return {
                show:false,
            }
        },
        created() {

        },
        components: {
            ZfAlert,
        },
        methods: {
            clickItem(){
                this.show = true
            },
            clickAction(e){
                this.show = false
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
