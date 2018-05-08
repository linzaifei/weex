<template>
    <div class="mask"
         v-if="show"
         ref="zf-mask"
         :hack="shouldShow"
         :style="maskStyle"
         @click="maskClicked"
    >
        <slot></slot>
    </div>
</template>

<script>
    const animation =weex.requireModule('animation');
    const modal =weex.requireModule('modal');
    export default {
        props:{
            show:{default:false}, //显示
            hasAnimation:{default:true},//是否有动画
            duration:{default:300},//动画时间
            opacity:{default:0.6},//透明度
            timingFunction:{default:'linear'},
        },
        data() {
            return {}
        },
        computed:{
            maskStyle(){
                return {
                    opacity: this.hasAnimation ? 0 : 1,
                    backgroundColor: `rgba(0, 0, 0,${this.opacity})`
                }
            },
            shouldShow(){
                const { show, hasAnimation } = this;
                hasAnimation && setTimeout(() => {
                    this.appermask(show);
                }, 50);
                return show;
            }
        },
        created() {

        },
        components: {},
        methods: {
            appermask(bool,duration=this.duration){
                const { hasAnimation, timingFunction} = this;
                var ref = this.$refs['zf-mask'];
                if (hasAnimation && ref) {
                    animation.transition(ref,{
                        styles:{
                            opacity:bool ? 1 : 0
                        },
                        duration,
                        timingFunction:timingFunction,
                        delay: 0
                    },()=>{

                    })
                };
            },
            maskClicked(){
                this.$emit('zfMaskClicked', {})
            }
        }
    };
</script>

<style scoped>
    .mask{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 100;
    }

</style>
