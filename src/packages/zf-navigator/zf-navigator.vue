<template>

    <div :class="['navi', isBorder ? 'navi_border':'']" :style="{backgroundColor: bgColor,height:height}"  >
        <div class="left" @click="leftButtonClicked">
            <slot name="left">
                <zf-tag @zfClickTag="leftButtonClicked" :src="leftImg" space="5px" :iconWidth="leftImgWidth"  :color="leftColor" :size="leftFont" :content="leftTitle" />
            </slot>
        </div>
        <div class="center">
            <slot name="center">
                <zf-tag :src="centerImg" space="15px" :iconWidth="centerImgWidth" :color="centerColor" :size="centerFont" :content="centerTitle" />
            </slot>
        </div>
        <div class="right"  @click="rightButtonClicked">
            <slot name="right">
                <zf-tag  @zfClickTag="rightButtonClicked":src="rightImg" space="15px"  :iconWidth="rightImgWidth"  :color="rightColor" :size="rightFont" :content="rightTitle" />
            </slot>
        </div>
    </div>

</template>

<script>
    const navigator = weex.requireModule('navigator');
    import ZfTag from '../zf-tag'
    const modal =weex.requireModule('modal');

    export default {
        props:{
            leftImg:{default:'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'},
            leftTitle:{default:''},
            leftColor:{default:'#333'},
            leftFont:{default:'30px'},
            leftImgWidth:{default:'32px'},

            centerTitle:{default:'标题'},
            centerColor:{default:'#666'},
            centerFont:{default:'35px'},
            centerImgWidth:{default:'35px'},
            centerImg:{default:''},

            rightTitle:{default:''},
            rightColor:{default:'#666'},
            rightFont:{default:'30px'},
            rightImgWidth:{default:'35px'},
            rightImg:{default:''},

            bgColor:{default:'#fff'},
            isBorder:{default:true},
            useDefaultReturn:{default: true,},
        },
        data() {
            return {
                height:"90px"
            }
        },
        created() {

        },
        components: {
            ZfTag,
        },
        methods: {
            leftButtonClicked () {
                const self = this;
                if (self.useDefaultReturn) {
                    navigator.pop({}, e => {
                    });
                }
                self.$emit('leftButtonClicked', {});
            },
            rightButtonClicked() {
                const self = this;
                if (self.rightTitle || self.rightImg) {
                    self.$emit('rightButtonClicked', {});
                }
            }
        }
    };
</script>

<style scoped>
    .navi{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 90px;
    }
    .navi_border{
        border-color: #ddd;
        border-bottom-width: 1px;
    }
    .left{
        flex: 1;
        margin-left: 32px;
        flex-direction: row;
        align-items: center;
    }
    .center{
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .right{
        flex: 1;
        flex-direction: row;
        align-items: center;
        margin-right: 32px;
        justify-content: flex-end;
    }

</style>
