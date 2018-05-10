<template >
    <div :class="['item',isBorder ?'border':'']" :style="{backgroundColor:BgColor}" @click="clickCell(index)">
        <div class="left">
            <slot name="left">
                <zf-tag :src="leftImg" space="20" :iconWidth="leftImgWidth"  :color="leftColor" :size="leftFont" :content="leftTitle" />
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <switch v-if="isSwitch" @change="onchange" :checked="checked"></switch>
                <zf-tag v-if="!isSwitch" :src="rightImg" direction="right" space="15"  :iconWidth="rightImgWidth"  :color="rightColor" :size="rightFont" :content="rightTitle" />
            </slot>
        </div>
    </div>
</template>

<script>

    import ZfTag from '../zf-tag'

    export default {
        props:{
            leftImg:{default:''},
            leftTitle:{default:'标题'},
            leftColor:{default:'#333'},
            leftFont:{default:'35px'},
            leftImgWidth:{default:'35px'},


            rightTitle:{default:''},
            rightColor:{default:'#666'},
            rightFont:{default:'30px'},
            rightImgWidth:{default:'35px'},
            rightImg:{default:'http://chuantu.biz/t6/281/1523501493x-1404793106.png'},

            index:{default:0},

            isSwitch:{default:false},
            checked:{default:false},
            BgColor:{default:'#fff'},
            isBorder:{default:true}
        },
        data() {
            return {}
        },
        created() {

        },
        components: {
            ZfTag,
        },
        methods: {
            clickCell:function (index) {
                const self = this;
                self.$emit("clickItem",{
                    data : {
                        key :String(index),
                    }
                })
            },
            onchange:function (e) {
                const self = this;
                if(self.isSwitch){
                    self.$emit("onchange",{
                        data : {
                            key :e.value,
                            index:this.index,
                        }
                    })
                }
            }
        }
    };
</script>

<style scoped>
    .item{
        padding: 15px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .border{
        border-bottom-width: 1px;
        border-color: #ddd;
    }

    .left{
        flex-direction: row;
        align-items: center;
    }
    .left_img{
        width: 35px;
        height: 35px;
        margin-right: 15px;
    }
    .left_title{
        margin-right: 5px;
    }
    .left_text_img{
        width: 30px;
        height: 30px;
    }
    .right{
        flex-direction: row;
        align-items: center;
    }
    .right_img{
        width: 35px;
        height: 35px;
        margin-left: 8px;
    }

</style>
