<template>

    <div class="container">

       <scroller>
           <text class="title">样式一</text>
           <zf-navigator
                   leftTitle="返回"
           >
           </zf-navigator>

           <text class="title">样式二(bgColor)</text>
           <zf-navigator
                   leftTitle="返回"
                   centerTitle="这是标题二"
                   bgColor="#fc8157"
           >
           </zf-navigator>

           <text class="title">样式三(rightTitle、rightColor、rightImg)</text>
           <zf-navigator
                   leftTitle="返回"
                   centerTitle="这是标题二"
                   rightTitle="提交"
                   rightColor="#E55455"
                   :rightImg="submitImg"
                   @rightButtonClicked="rightButtonClicked"
           >
           </zf-navigator>

           <text class="title">样式四(标题是图片centerImg、centerImgWidth)</text>
           <zf-navigator
                   :centerImg="centerImg"
                   centerTitle=""
                   centerImgWidth="170px"
           >
           </zf-navigator>

           <text class="title">样式五(自定义导航栏)</text>
           <zf-navigator :useDefaultReturn="useDefaultReturn">
               <div class="left" slot="left">
                   <text  style="color: #333333;font-size: 28px">左边</text>
               </div>
               <div class="center" slot="center">
                    <text class="center_title">样式五</text>
               </div>
               <div class="right" slot="right">
                   <image @click="searchAction" src="http://chuantu.biz/t6/277/1523176231x-1404781300.png"
                          style="height: 40px;width: 40px "></image>
                   <image @click="historyAction" src="http://chuantu.biz/t6/277/1523176208x-1404781300.png"
                          style="height: 40px;width: 40px ;margin-left: 15px"></image>
               </div>
           </zf-navigator>

       </scroller>

    </div>

</template>

<script>

    import {ZfNavigator} from '../../index'
    const modal =weex.requireModule('modal')
    export default {

        data() {
            return {
                useDefaultReturn:false,
                submitImg:"http://chuantu.biz/t6/287/1523861847x-1566638291.png",
                centerImg:'http://chuantu.biz/t6/281/1523499220x-1404793477.png',
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
    .container{
        background-color: #f2f2f2;
    }
    .title{
        font-size: 30px;
        color: #666;
        padding: 15px;
        margin-top: 10px;
    }
    .center_title{
        font-size: 35px;
        color: #333;
        font-weight: bold;
    }
    .right{
        flex-direction: row;
    }

</style>
