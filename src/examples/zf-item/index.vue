<template>

    <div class="container">

        <scroller>
            <text class="title">样式一</text>
            <div v-for="(item,index) in list">
                <zf-item
                        :leftTitle="item.title"
                        :leftFont="leftFont"
                        :leftColor="item.leftColor"
                        :leftImg="item.img"
                        :rightTitle="item.rightTitle"
                        :rightImg="item.rightImg"
                        :rightFont="item.rightFont"
                        :rightColor="item.rightColor"
                        :isSwitch="item.isSwitch"
                        :checked="item.checked"
                        :bgColor="item.bgColor"
                        @clickItem="clickItem"
                        @onchange="onchange"
                        :index="index"
                />
            </div>

            <text class="title">自定义样式</text>
            <zf-item >
                <div slot="left">
                    <text>这是自定义样式</text>
                </div>
                <div slot="right">
                    <text>这是自定义样式Detail</text>
                </div>
            </zf-item>
        </scroller>

    </div>

</template>

<script>

    import {ZfItem} from '../../index';
    const modal = weex.requireModule('modal');
    export default {

        data() {
            return {
                list:[{
                    title:'样式一',
                    img:'http://chuantu.biz/t6/281/1523500757x-1404793106.png',
                },{
                    title:'样式二',
                    img:'http://chuantu.biz/t6/281/1523500757x-1404793106.png',
                    rightTitle:'这是样式二detail'
                },{
                    title:'样式三',
                    leftColor:'red',
                    rightTitle:'这是样式二detail'
                },{
                    title:'样式四',
                    img:'http://chuantu.biz/t6/281/1523500757x-1404793106.png',
                    rightTitle:'这是样式二detail',
                    leftFont:'30px'
                },{
                    title:'样式五',
                    img:'http://chuantu.biz/t6/281/1523500757x-1404793106.png',
                    isSwitch:true,
                    leftFont:'30px'
                },{
                    title:'样式四',
                    img:'http://chuantu.biz/t6/281/1523500757x-1404793106.png',
                    rightTitle:'这是样式二detail',
                    rightColor:'#999',
                    leftFont:'30px'
                },]
            }
        },
        created() {

        },
        components: {
            ZfItem,
        },
        methods: {
            clickItem(e){
                modal.toast({
                    message:'点击cell' +e.data.key
                })
            },
            onchange(e){
                modal.toast({
                    message:'点击开关' +e.data.key + '  '+ e.data.index
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
        margin-top: 20px;
    }

</style>
