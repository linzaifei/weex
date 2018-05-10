<template>
    <div  class="item" >
        <div :style="{backgroundColor:bgColor}"  v-for="(item,i) in stars">
            <image :style="{width:iconWidth+'px',height:iconWidth+'px'}" v-if="i<inter" resize="contain" class="img" :src="imgStarHight"></image>
            <image :style="{width:iconWidth+'px',height:iconWidth+'px'}" v-else-if="isHalf && i==inter" resize="contain" class="img" :src="imgStarHalf"></image>
            <image :style="{width:iconWidth+'px',height:iconWidth+'px'}" v-else resize="contain" class="img" :src="imgStar"></image>
        </div>
        <text>{{pageX}}</text>
    </div>
</template>

<script>
    const modal =weex.requireModule('modal')
    export default {
        props:{
//
            rate:{default:0},
            imgStar:{default:'https://linzaifei.github.io/weex/img/comment_star.png'},//空
            imgStarHalf:{default:'https://linzaifei.github.io/weex/img/comment_star_half.png'},//半高亮
            imgStarHight:{default:'https://linzaifei.github.io/weex/img/comment_star_highlighted.png'},//高亮
            maxRate:{default:5},//默认5分值
            iconWidth:{default:30},
            bgColor:{default:'#fff'},
        },
        data() {
            return {
                inter:0,
                isHalf:false,
            }
        },
        computed:{
            stars(){
                var list = [];
                for(var i=0;i<this.maxRate;i++){
                    list.push(i);
                }
                return list;
            },
        },

        created() {
            if(Number.isInteger(parseFloat(this.rate))){
                this.inter =this.rate;
                this.isHalf =false;
            }else{
                this.inter = parseInt(this.rate);
                this.isHalf =true;
            }
        },
        components: {},
        methods: {

        }
    };
</script>

<style scoped>
    .item{
        flex-direction: row;
        align-items: center;

    }
    .img{
        margin-left: 5px;
        margin-right: 5px;
    }
</style>
