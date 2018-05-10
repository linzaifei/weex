<template>
    <div class="container">
        <text class="title">样式一(默认样式)</text>
        
        <div class="item">
            <text @click="clickItem(0)" class="center">点击弹出</text>
        </div>

        <zf-alert @clickItem="clickAction"
                  title="温馨提示"
                  content="这是样式一"
                  okTitle="确定"
                  cancelTitle="取消"
                  :show="show" />

        <text class="title">样式二</text>
        <div class="item">
            
            <text @click="clickItem(1)" class="center">点击弹出样式二</text>
        </div>

        <zf-alert @clickItem="clickAction"
                  content="这是样式二这是样式二这是样式二这是样式二这是样式二"
                  okTitle="确定"
                  cancelTitle="取消"
                  :show="show1" />

        <text class="title">样式三</text>
        <div class="item">
            <text @click="clickItem(2)" class="center">点击弹出样式三</text>
        </div>

        <zf-alert @clickItem="clickAction"
                  content="这是样式二这是样式二这是样式二这是样式二这是样式二"
                  okTitle="确定"
                  :show="show2" />

        <text class="title">样式四</text>
        <div class="item">
            <text @click="clickItem(3)" class="center">点击弹出样式四</text>
        </div>

        <zf-alert @clickItem="clickAction"
                  title="温馨提示"
                  content="这是样式二这是样式二这是样式二这是样式二这是样式二"
                  okTitle="确定"
                  :show="show3" />

    </div>
</template>

<script>

    import {ZfAlert} from '../../index'
    const modal = weex.requireModule('modal')
    export default {

        data() {
            return {
                show:false,
                show1:false,
                show2:false,
                show3:false,
            }
        },
        created() {

        },
        components: {
            ZfAlert,
        },
        methods: {
            clickItem(e){
                switch (e){
                    case 0:
                        this.show = true
                        break;
                    case 1:
                        this.show1 = true
                        break;
                    case 2:
                        this.show2 = true
                        break;
                    case 3:
                        this.show3 = true
                        break;
                }

            },
            clickAction(e){
                if(this.show){
                    this.show = false
                }
                if(this.show1){
                    this.show1 = false
                }
                if(this.show2){
                    this.show2 = false
                }
                if(this.show3){
                    this.show3 = false
                }
            }
        }
    };
</script>

<style scoped>
    .container{
        background-color: #fff;
    }
    .item{
        justify-content: center;
        align-items: center;
        margin: 20px;
    }
    .center{
        color: #333;
        font-size: 35px;
    }
    .title{
        font-size: 30px;
        color: #666;
        background-color: #f2f2f2;
        padding: 15px;
    }

</style>
