<template>

    <div class="container">

        <div class="item">
            <text class="title">样式1(iconWidth=80、bgColor=red,rate=4)</text>
            <zf-rate  rate="4" iconWidth="40" bgColor="red"/>
        </div>

        <div class="item">
            <text class="title">样式2(iconWidth=80、rate=3.5)</text>
            <zf-rate  rate="3.5" iconWidth="80"/>
        </div>


    </div>



</template>

<script>
    import {ZfRate} from '../../index'
    export default {

        data() {
            return {
                value:0,
            }
        },
        created() {

        },
        components: {
            ZfRate,
        },
        methods: {

        }
    };
</script>

<style scoped>
    .container{
        background-color: #f2f2f2;
    }
    .item{
        padding: 20px;
        background-color: #fff;
    }
    .title{
        color: #666;
        font-size: 30px;
        margin-bottom: 15px;
        background-color: #f2f2f2;
    }


</style>
