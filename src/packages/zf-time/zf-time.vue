<template>
    <div class="container">
        <div :style="mrTimeBoxStyle"
             v-if="tplIndexOfDays !== -1"
             :accessible="true"
             :aria-label="`${day}天`">
            <text :style="mrTimeTextStyle">{{day}}</text>
        </div>
        <div :style="mrDotBoxStyle" v-if="tplIndexOfDays !== -1" :aria-hidden="true">
            <text :style="mrDotTextStyle">{{getDot(tplIndexOfDays, tplIndexOfHours)}}</text>
        </div>

        <div :style="mrTimeBoxStyle"
             v-if="tplIndexOfHours !== -1"
             :accessible="true"
             :aria-label="`${hour}时`">
            <text :style="mrTimeTextStyle">{{hour}}</text>
        </div>
        <div :style="mrDotBoxStyle" v-if="tplIndexOfHours !== -1" :aria-hidden="true">
            <text :style="mrDotTextStyle">{{getDot(tplIndexOfHours, tplIndexOfMinutes)}}</text>
        </div>

        <div :style="mrTimeBoxStyle" v-if="tplIndexOfMinutes !== -1"
             :accessible="true"
             :aria-label="`${minute}分`">
            <text :style="mrTimeTextStyle">{{minute}}</text>
        </div>
        <div :style="mrDotBoxStyle" v-if="tplIndexOfMinutes !== -1" :aria-hidden="true">
            <text :style="mrDotTextStyle">{{getDot(tplIndexOfMinutes, tplIndexOfSeconds)}}</text>
        </div>

        <div :style="mrTimeBoxStyle"
             v-if="tplIndexOfSeconds !== -1"
             :accessible="true"
             :aria-label="`${second}秒`">
            <text :style="mrTimeTextStyle">{{second}}</text>
        </div>
        <div :style="mrDotBoxStyle" v-if="tplIndexOfSeconds !== -1" :aria-hidden="true">
            <text :style="mrDotTextStyle">{{getDot(tplIndexOfSeconds, -1)}}</text>
        </div>
    </div>
</template>

<script>

    const modal = weex.requireModule("modal");

    export default {
        props:{
            autoStart: {
                type: Boolean,
                default: true,
            },
            countVal: {//获取初始值
                type: Number,
                default: 1525917631000,
            },
            //单位为"毫秒"
            interval: {
                type: Number,
                default: 1000
            },
            tpl: {
                type: String,
                default: '{h}:{m}:{s}'
            },
            // 数字盒子 style
            timeBoxStyle: Object,
            // : 盒子Style
            dotBoxStyle: Object,
            // 数字文字 Style
            timeTextStyle: Object,
            // : 文字Style
            dotTextStyle: Object
        },
        data() {
            return {
                isStart: false,
                globalTimer: null,//获取setInterval对象值
                pauseTime: 0,
                tplIndexOfDays: -1,
                tplIndexOfHours: -1,
                tplIndexOfMinutes: -1,
                tplIndexOfSeconds: -1,

                day:'00',//天
                hour:'00',//时
                minute:'00',//分
                second:'00',//秒

                TIME_BOX_STYLE: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '30px',
                    width: '30px'
                },
                DOT_BOX_STYLE: {
                    width: '18px',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                TIME_TEXT_STYLE: {
                    color: '#FFCC80',
                    fontSize: '26px'
                },
                DOT_TEXT_STYLE: {
                    color: '#333333',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            }
        },
        mounted() {
            this.tplIndexOfDays = this.tpl.indexOf('d');
            this.tplIndexOfHours = this.tpl.indexOf('h');
            this.tplIndexOfMinutes = this.tpl.indexOf('m');
            this.tplIndexOfSeconds = this.tpl.indexOf('s');

            var vm = this
            if (vm.autoStart) {
                vm.startCountFn()
            }

        },
        computed: {
            mrTimeBoxStyle() {
                return {
                    ...this.TIME_BOX_STYLE,
                    ...this.timeBoxStyle
                }
            },
            mrDotBoxStyle() {
                return {
                    ...this.DOT_BOX_STYLE,
                    ...this.dotBoxStyle
                }
            },
            mrTimeTextStyle() {
                return {
                    ...this.TIME_TEXT_STYLE,
                    ...this.timeTextStyle
                }
            },
            mrDotTextStyle() {
                return {
                    ...this.DOT_TEXT_STYLE,
                    ...this.dotTextStyle
                }
            },

        },



        methods: {
            counterFn: function(counterTime) {
                var vm = this
                var nowDate = new Date().getTime()
                if(vm.pauseTime == 0){
                    var num = nowDate - counterTime //计算时间毫秒差
                }else{
                    vm.pauseTime = vm.pauseTime +10
                    var num = vm.pauseTime - counterTime //计算时间毫秒差
                }
                var leave1 = num % (24 * 3600 * 1000)  //计算天数后剩余的毫秒数
                var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
                var leave3 = leave2 % (60 * 1000)   //计算分钟数后剩余的毫秒数
                vm.day = Math.floor(num / (24 * 3600 * 1000))<10?'0'+Math.floor(num / (24 * 3600 * 1000)):Math.floor(num / (24 * 3600 * 1000)); //计算相差天数
                vm.hour = Math.floor(leave1 / (3600 * 1000))<10?'0'+Math.floor(leave1 / (3600 * 1000)):Math.floor(leave1 / (3600 * 1000))//计算相差小时
                vm.minute = Math.floor(leave2 / (60 * 1000))<10? '0'+Math.floor(leave2 / (60 * 1000)):Math.floor(leave2 / (60 * 1000))//计算相差分钟
                vm.second = Math.round(leave3 / 1000) <10 ? '0'+Math.round(leave3 / 1000):Math.round(leave3 / 1000) //计算相差秒
            },
            startCountFn: function() {
                var vm = this
                if (!vm.isStart) {
                    vm.countVal = vm.countVal ? vm.countVal : new Date().getTime()
                    var timer = setInterval(function() {
                        vm.counterFn(vm.countVal)
                    }, 10)
                    vm.globalTimer = timer
                    vm.isStart = true
                }
            },
            stopCountFn: function() {
                var vm = this
                if (vm.isStart) {
                    window.clearInterval(vm.globalTimer)
                    vm.globalTimer = null;
                    vm.isStart = false
                    vm.pauseTime = new Date().getTime()
                }
            },

            getDot (prevTagIndex, nextTagIndex = -1) {
                if (nextTagIndex === -1) {
                    return this.tpl.slice(prevTagIndex + 2)
                }
                return this.tpl.slice(prevTagIndex + 2, nextTagIndex - 1)
            }

        }
    };
</script>

<style scoped>
    .container{
        flex-direction: row;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }

</style>
