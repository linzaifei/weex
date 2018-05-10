<template>
    <div class="container" v-if="show"
         :style="conStyle"
    >
        <div class="alert"
             :hack="shouldShow"
             ref="zf-alert"
             :style="alertStyle"
        >
            <div class="top">
                <text class="alert_title" v-if="title">{{title}}</text>
                <text class="alert_content" v-if="content">{{content}}</text>
            </div>
            <div class="btn">
                <text @click="clickItem(0)" :style="{color:cancelColor}" class="left tag" v-if="cancelTitle">{{cancelTitle}}</text>
                <text @click="clickItem(1)" :style="{color:okColor}" class="right tag" v-if="okTitle">{{okTitle}}</text>
            </div>
        </div>

    </div>
</template>

<script>
    const animation = weex.requireModule('animation');

    const modal =weex.requireModule('modal')

    export default {
        props:{
            show:{default:false},
            title:{default:''},
            content:{default:''},
            okTitle:{default:'确认'},
            cancelTitle:{default:''},
            opacity:{default:0.1},
            okColor:{default:'#fc8157'},
            cancelColor:{default:'#666'},
        },
        data() {
            return {

            }
        },
        created() {

        },
        computed:{
            conStyle(){
                return{
                    backgroundColor:`rgba(0,0,0,${this.opacity})`
                }
            },
            alertStyle(){
                return{
                    transform:'scale(0.6)'
                }
            },
            shouldShow(){
                const { show } = this;
                setTimeout(() => {
                    this.apperAlert(show);
                }, 50);
                return show;
            },

        },
        components: {

        },
        methods: {
            apperAlert(bool,duration = 300) {
                var refs = this.$refs['zf-alert'];
                if (bool && refs) {
                    animation.transition(refs, {
                        styles: {
                            transform: 'scale(1)',
                            transformOrigin: 'center center'
                        },
                        duration,
                        timingFunction: 'ease-out',
                    }, () => {
                    })
                }
            },
            clickItem(e){
                this.$emit('clickItem',{
                    data:{
                        key:e,
                    }
                })
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
        justify-content: center;
        align-items: center;

    }
    .alert{
        width: 500px;
        border-radius: 20px;
        background-color: #fff;
    }

    .alert_title{
        font-size: 32px;
        color: #333;
    }

    .btn{
        flex-direction: row;
        align-items: center;
        border-color: #ddd;
        border-top-width: 1px;
    }
    .alert_content{
        margin-top: 15px;
        font-size: 29px;
        color: #666;
    }
    .top{
        text-align: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
    }
    .left{
        flex: 1;
        text-align: center;
        border-color: #ddd;
        border-right-width: 1px;
    }
    .right{
        flex:1;
        text-align: center;
    }

    .tag{
        padding-top: 15px;
        padding-bottom:15px;
        font-size: 35px;
    }



</style>
