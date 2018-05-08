<template>
    <div class="container" :style="{padding:margin,backgroundColor:bgColor}">
        <block v-for="(item,index) in list" :key="index">
            <div class="item" :style="{width:itemW,height:itemW,marginBottom:index <  getBottom? space+'px' :'0px', marginLeft: index == parseInt(index/getCount) *getCount ?'0px':space+'px' }">
                <image :src="item" class="item_img" :style="{width:itemW,height:itemW}"></image>
                <image v-if="showClose" :src="close" class="item_close" @click="del(index)"></image>
            </div>
        </block>
        <div :style="{marginLeft:getMarfinLeft ==0 ?'0px': space+'px'}" v-if="list.length < max" @click="addAction">
            <image :src="add" class="item_img" :style="{width:itemW,height:itemW}"></image>
        </div>
    </div>
</template>

<script>
    const modal =weex.requireModule('modal');

    export default {
        props:{
            space:{default:5},//item中间间距
            margin:{default:5},//item外间距
            count:{default:4},//水平item个数
            list:{default: []},
            max:{default:9},//最大9个
            showClose:{default:true},//隐藏删除
            bgColor:{default:'#fff'}
        },
        data() {
            return {
                close:'http://chuantu.biz/t6/300/1525251856x-1404781168.png',
                add:'http://chuantu.biz/t6/300/1525252504x-1566638249.png',
                itemW:'',
                index:0,
            }
        },
        created() {

            this.itemW = ((750-2*this.margin -(this.getCount -1) *this.space) /this.getCount)+'px';
        },
        watch:{

        },
        computed: {
            getBottom(){

                return parseInt((this.list.length /this.getCount))*this.getCount;
            },
            getMarfinLeft(){
                return  (this.list.length% this.getCount)
            },
            getCount(){
                if (this.count>5 || this.count<3){
                    return 3;
                }
                return this.count;
            }
        },
        components: {},
        methods: {
            del(index){
                this.list.splice(index,1);
            },
            addAction(){
                this.$emit('addPhoto',{});
            }
        }
    };
</script>

<style scoped>

    .container{
        width: 750px;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap:wrap;
    }
    .item{
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }
    .item_close{
        position: absolute;
        right: 5px;
        top: 5px;
        width: 40px;
        height: 40px;
    }


</style>
