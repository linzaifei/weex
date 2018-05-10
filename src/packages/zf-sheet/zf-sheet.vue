<template>
    <div class="container" v-if="show"
         :style="conStyle"
         @click="clickmask"
    >
        <div class="zf-sheet"
             :hack="shouldShow"
             ref="zf-alert"
             :style="sheetStyle"
        >
            <div class="actionList">
                <div v-if="actionTitle" class="action-title border">
                    <text class="action-title-text">{{actionTitle}}</text>
                </div>

                <div @click="clickItem(index,item)" class="action-item border"
                     v-for="(item,index) in actions"
                >
                    <text :style="{color:actionItemColor}" class="action-item-title">{{item}}</text>
                </div>
            </div>
            <div @click="clickCancel"  v-if="actionCancelTitle" class="action-cancel">
                <text :style="{color:actionCancelColor}" class="action-cancel-text">{{actionCancelTitle}}</text>
            </div>

        </div>
    </div>
</template>

<script>

    const animation = weex.requireModule('animation');
    const modal =weex.requireModule('modal')

    import mixins from '../utils/mixins'
    export default {
        mixins:[mixins],
        props:{
            show:{default:false},
            opacity:{default:0.1},
            actionTitle:{default:''},
            actionCancelTitle:{default:''},
            actions:{default:[[]]},
            actionItemColor:{default:'#333'},
            actionCancelColor:{default:'#333'},
            canClickMask:{default:false},
        },
        data() {
            return {
                actionHeight:{default:114},
            }
        },
        computed:{
            conStyle(){
                return{
                    backgroundColor:`rgba(0,0,0,${this.opacity})`
                }
            },
            sheetStyle(){
                var actionItemHeight=114;
                var titleHeight=90;
                var height = this.actions.length * actionItemHeight -15;
                if(this.actionTitle){
                    height += titleHeight ;
                }
                if(this.actionCancelTitle){
                    height +=  actionItemHeight;
                }
                const posBottom = Number(this.getPosition().bottom.replace('px', ''));
                const styleObj = {'bottom':  '-'+(height - posBottom) + 'px'};
                return styleObj;
            },

            shouldShow(){
                const { show } = this;
                setTimeout(()=>{
                     this.apperSheet(show,);
                },100)
                return show
            }

        },
        created() {

        },
        components: {},
        methods: {
            apperSheet(bool,callback){
                var refs = this.$refs['zf-alert'];

                const styles = bool ?
                    { transform: 'translate(0, -100%)' } :
                    { transform: 'translate(0, 100%)' };
                const timingFunction = bool ? 'ease' : 'ease-out';
                const duration= 300;
                if (refs){
                    animation.transition(refs,{
                        styles,
                        duration,
                        timingFunction,
                    },function () {
                        typeof callback === 'function' && callback();
                    })
                }
            },
            clickmask(){
                if(!this.canClickMask){
                    return;
                }
                this.apperSheet(!this.show,()=>{
                    this.$emit('clickCancel',{
                    })
                });
            },
            clickCancel(){
                this.apperSheet(!this.show,()=>{
                    this.$emit('clickCancel',{
                    })
                });
            },
            //点击取消
            clickItem(index,value){
                this.apperSheet(!this.show,()=>{
                    this.$emit('clickItem',{
                        index:index,
                        value:value
                    })
                });
            },
        }
    };
</script>

<style scoped>
    .container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }
    .zf-sheet{
        position: fixed;
        left: 0;
        right: 0;
        z-index: 101;
        width: 750px;
        justify-content: center;
        align-items: center;
    }
    .actionList{
        width: 710px;
        border-radius: 20px;
        overflow: hidden;
        background-color: #fff;
    }
    .action-title{
        padding: 20px;
        height: 90px;
        justify-content: center;
        align-items: center;
    }
    .action-title-text{
        font-size: 25px;
        color: #666;
    }
    .action-item{
        width: 710px;
        height: 114px;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    .action-item-title{
        font-size: 35px;
    }
    .action-cancel{
        margin-top: 10px;
        width: 710px;
        height: 100px;
        border-radius: 20px;

        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    .action-cancel-text{
        font-size: 35px;
    }
    .border{
        border-bottom-width: 1px;
        border-color: #eee;
    }

</style>
