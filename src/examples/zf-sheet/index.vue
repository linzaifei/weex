<template>

    <div class="container">

        <text class="title">样式一(默认样式)</text>
        <div class="item">
            <text @click="clickItem(0)" class="center">点击弹出</text>
        </div>

        <zf-sheet
                @clickItem="clickSheetItem"
                @clickCancel="clickCancel"
                :show="show"
                :actions="actions"
                actionCancelTitle="取消"
                actionTitle="选择方式"
        >
        </zf-sheet>

        <text class="title">样式二</text>
        <div class="item">
            <text @click="clickItem(1)" class="center">点击弹出样式二</text>
        </div>

        <zf-sheet
                @clickItem="clickSheetItem"
                @clickCancel="clickCancel"
                :show="show1"
                :actions="actions1"
                actionCancelTitle="取消"
        >
        </zf-sheet>

        <text class="title">样式三</text>
        <div class="item">
            <text @click="clickItem(2)" class="center">点击弹出样式三</text>
        </div>

        <zf-sheet
                @clickItem="clickSheetItem"
                @clickCancel="clickCancel"
                :show="show2"
                canClickMask="true"
                :actions="actions1"
        >
        </zf-sheet>



    </div>

</template>

<script>

    import {ZfSheet} from '../../index'
    const modal = weex.requireModule('modal')

    export default {

        data() {
            return {
                show:false,
                show1:false,
                show2:false,
                actions:['打开相册','打开相机'],
                actions1:['样式一','样式二','样式三'],

            }
        },
        created() {

        },
        components: {
            ZfSheet,
        },
        methods: {
            clickItem(e){
                switch (e){
                    case 0:
                        this.show = true;
                        break
                    case 1:
                        this.show1 = true;
                        break
                    case 2:
                        this.show2 = true;
                        break
                }
            },
            clickCancel(){
                if(this.show){
                    this.show=false
                }
                if(this.show1){
                    this.show1=false
                }
                if(this.show2){
                    this.show2=false
                }
            },
            clickSheetItem(e){
                if(this.show){
                    this.show=false
                }
                if(this.show1){
                    this.show1=false
                }
                if(this.show2){
                    this.show2=false
                }
                modal.toast({
                    message:e.value
                })
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
