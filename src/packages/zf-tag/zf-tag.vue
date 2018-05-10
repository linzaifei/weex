<template >
    <div class="container">
        <div v-if="direction=='left'||direction=='top'" class="item" :style="itemStyle" @click="clickTag">
            <image v-if="src":style="{width: iconWidth,height:iconWidth}" class="img" resize="contain" :src="src"></image>
            <text v-if="content" :style="[{color:color,fontSize:size,},textStyle]" class="content">{{content}}</text>
        </div>
        <div v-if="direction=='right'||direction=='bottom'" class="item" :style="itemStyle" @click="clickTag">
            <text v-if="content" :style="[{color:color,fontSize:size},textStyle]"  class="content">{{content}}</text>
            <image  v-if="src":style="{width: iconWidth,height:iconWidth}" class="img" resize="contain" :src="src"></image>
        </div>
    </div>
</template>

<script >
    export default {
        props:{
            src: {default: ''},
            content: {default: ''},
            color: {default: '#666'},
            size:{default:'27px'},
            iconWidth:{default:'35px'},
            direction:{default:'left'},
            bgColor:{default:'transparent'},
            space:{default:"8px"},
        },
        data() {
            return {}
        },
        computed:{
            itemStyle(){
                if(this.direction=='left'){
                    return{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor:this.bgColor,
                    }
                }else if(this.direction=='top'){
                    return{
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor:this.bgColor,
                    }
                }else if(this.direction=='right'){
                    return{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor:this.bgColor,
                    }
                }else if(this.direction=='bottom'){
                    return{
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor:this.bgColor,
                    }
                }
            },
            textStyle(){
                if(this.direction=='left'){
                    return{
                        marginLeft:this.src? this.space  :'0px',
                    }
                }else if(this.direction=='top'){
                    return{
                        marginTop:this.src? this.space  :'0px',
                    }
                }else if(this.direction=='right'){
                    return{
                        marginRight:this.src? this.space  :'0px',
                    }
                }else if(this.direction=='bottom'){
                    return{
                        marginBottom:this.src? this.space  :'0px',
                    }
                }
            }
        },
        created() {

        },
        components: {},
        methods: {
            clickTag(){
                this.$emit("zfClickTag",{});
            }
        }
    };
</script>

<style>

    .item{
        padding: 10px;
    }

</style>
