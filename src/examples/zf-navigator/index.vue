<template>

    <div class="container">

        <text class="title">样式一</text>
        <zf-navigator
                leftTitle="返回"
        >
        </zf-navigator>

        <text class="title">样式二</text>
        <zf-navigator
                leftTitle="返回"
                centerTitle="这是标题二"
                bgColor="#fc8157"
        >
        </zf-navigator>

        <text class="title">样式三</text>
        <zf-navigator
                leftTitle="返回"
                centerTitle="这是标题二"
                rightTitle="提交"
                rightColor="#E55455"
                :rightImg="submitImg"
                @rightButtonClicked="rightButtonClicked"
        >
        </zf-navigator>

    </div>

</template>

<script>

    import {ZfNavigator} from '../../index'
    const modal =weex.requireModule('modal')
    export default {

        data() {
            return {
                submitImg:"http://chuantu.biz/t6/287/1523861847x-1566638291.png",
            }
        },
        created() {

        },
        components: {
            ZfNavigator,
        },
        methods: {
            rightButtonClicked(){
                modal.toast({
                    message:'提交'
                })
            }
        }
    };
</script>

<style scoped>
    .title{
        font-size: 30px;
        color: #666;
        padding: 15px;
        margin-top: 10px;
    }

</style>
