<template>
    <div class="container">


        <text class="title">样式一</text>
        <zf-time
                tpl="{d}天{h}:{m}:{s}"
                :timeBoxStyle="{ height: '50px', width: '50px',borderColor:'#B3B3B3',borderWidth:'1px',overflow:'hidden'}"
                :timeTextStyle="{fontSize: '24px', color: '#000'}"
                :dotTextStyle="{color: '#000', fontSize: '24px'}"
                :dotBoxStyle="{width: '30px'}"
                :style="{marginTop: '10px', justifyContent: 'center'}"
        ></zf-time>


        <text class="title">各种样式</text>
        <zf-time
                tpl="{h}:{m}:{s}"
                :timeBoxStyle="{ height: '50px',backgroundColor:'orange',  width: '50px',borderColor:'#B3B3B3',borderWidth:'1px',overflow:'hidden'}"
                :timeTextStyle="{fontSize: '24px', color: '#000'}"
                :dotTextStyle="{color: '#000', fontSize: '24px'}"
                :dotBoxStyle="{width: '30px'}"
                :style="{marginTop: '10px', justifyContent: 'center'}"
                countVal="1525918833000"
        ></zf-time>
        <zf-time
                tpl="{h}时{m}分{s}秒"
                :timeBoxStyle="{ height: '50px',backgroundColor:'orange',  width: '50px',borderColor:'#B3B3B3',borderWidth:'1px',overflow:'hidden'}"
                :timeTextStyle="{fontSize: '24px', color: '#000'}"
                :dotTextStyle="{color: '#000', fontSize: '24px'}"
                :dotBoxStyle="{width: '30px'}"
                :style="{marginTop: '10px', justifyContent: 'center'}"
                countVal="1525919151000"
        ></zf-time>

        <zf-time
                tpl="{m}分{s}秒"
                :timeBoxStyle="{ height: '50px',backgroundColor:'orange',  width: '50px',borderColor:'#B3B3B3',borderWidth:'1px',overflow:'hidden'}"
                :timeTextStyle="{fontSize: '24px', color: '#000'}"
                :dotTextStyle="{color: '#000', fontSize: '24px'}"
                :dotBoxStyle="{width: '30px'}"
                :style="{marginTop: '10px', justifyContent: 'center'}"
                countVal="1525919181000"
        ></zf-time>
        <zf-time
                tpl="{m}:{s}秒"
                :timeBoxStyle="{ height: '50px',backgroundColor:'orange',  width: '50px',borderColor:'#B3B3B3',borderWidth:'1px',overflow:'hidden'}"
                :timeTextStyle="{fontSize: '24px', color: '#000'}"
                :dotTextStyle="{color: '#000', fontSize: '24px'}"
                :dotBoxStyle="{width: '30px'}"
                :style="{marginTop: '10px', justifyContent: 'center'}"
                countVal="1525918833000"
        ></zf-time>
    </div>
    
</template>

<script>
    import {ZfTime} from '../../index'
    export default {
        data() {
            return {}
        },
        created() {

        },
        components: {
            ZfTime,
        },
        methods: {}
    };
</script>

<style scoped>

    .container{
        background-color: #f2f2f2;
    }
    .title{
        padding: 20px;
        color: #666;
    }



</style>
