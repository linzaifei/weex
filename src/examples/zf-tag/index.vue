<template>

    <div class="container">

        <scroller>
            <div class="item">
                <text class="title">样式一(direction = left、space=20)</text>
                <zf-tag @zfClickTag="clickTag" space="20" :src="img" content="这是样式一" />
            </div>

            <div class="item">
                <text class="title">样式二(direction = right、bgColor="#fff")</text>
                <zf-tag @zfClickTag="clickTag":src="img" bgColor="#fff" direction="right" content="这是样式二" />
            </div>

            <div class="item">
                <text class="title">样式三(direction = top、iconWidth=50px)</text>
                <zf-tag @zfClickTag="clickTag"iconWidth="50px" :src="img" direction="top" content="这是样式三" />
            </div>

            <div class="item">
                <text class="title">样式四(direction = top、size=30、color=red)</text>
                <zf-tag @zfClickTag="clickTag" size="30px" color="red" :src="img" direction="bottom" content="这是样式四" />
            </div>

            <div class="item">
                <text class="title">样式五(direction = top、right、bottom、left、isShow=show)</text>
                <zf-tag @zfClickTag="clickTag" bgColor="#fff"  :isShow="show" content="这是样式五" />
            </div>

            <div class="item">
                <text class="title">样式六(direction = top、right、bottom、left)</text>
                <zf-tag @zfClickTag="clickTag" bgColor="#fff"  :src="img"   />
            </div>
        </scroller>

    </div>
</template>

<script>

    import {ZfTag} from '../../index'
    const modal = weex.requireModule('modal')
    export default {

        data() {
            return {
                show:false,
                img:'http://chuantu.biz/t6/281/1523500757x-1404793106.png',
            }
        },
        created() {

        },
        components: {
            ZfTag,
        },
        methods: {
            clickTag(){
                modal.toast({
                    message:'点击了'
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
        padding: 15px;
        color: #666;
    }
    .item{
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    

</style>
