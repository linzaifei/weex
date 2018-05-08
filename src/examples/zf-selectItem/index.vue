<template>

    <div class="container">

        <scroller>

            <div class="item1">
                <text class="title">样式一(默认样式)</text>
                <zf-select-item :list="list" @addPhoto="addPhoto"/>
            </div>

            <div class="item1">
                <text class="title">样式二(count=3、max=12、space=5、margin=5)</text>
                <zf-select-item count="3" :list="list1" max="12" @addPhoto="addPhoto1"/>
            </div>

            <div class="item1">
                <text class="title">样式三(count=3、max=5、space=12、margin=5)</text>
                <zf-select-item count="3" space="20" :list="list2" max="5" @addPhoto="addPhoto2"/>
            </div>

            <div class="item1">
                <text class="title">样式四(count=4、max=10、space=5、margin=20)</text>
                <zf-select-item count="4" margin="20" :list="list3" max="10" @addPhoto="addPhoto3"/>
            </div>

            <div class="item1">
                <text class="title">样式五(count=2、max=10、space=5、margin=5)</text>
                <zf-select-item count="2" :list="list4" max="10" @addPhoto="addPhoto4"/>
            </div>

        </scroller>


    </div>

</template>

<script>

    import {ZfSelectItem} from '../../index'
    export default {

        data() {
            return {
                list:[
                    "https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg",
                    'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg',
                    'https://gw.alicdn.com/tps/TB1U8avPFXXXXaDXpXXXXXXXXXX-140-140.jpg',
                    'https://gw.alicdn.com/tps/TB17Xh8PFXXXXbkaXXXXXXXXXXX-140-140.jpg',
                    'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg',
                    'https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg',
                ],
                list1:[
                    "https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg",
                    'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg',
                ],
                list2:[
                    "https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg",
                    'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg',
                ],
                list3:[
                    "https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg",
                    'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg',
                ],
                list4:[
                    "https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg",
                    'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg',
                ],
            }
        },
        created() {

        },
        components: {
            ZfSelectItem,
        },
        methods: {
            addPhoto(){
                this.list.push("https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg")
            },
            addPhoto1(){
                this.list1.push("https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg")
            },
            addPhoto2(){
                this.list2.push("https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg")
            },
            addPhoto3(){
                this.list3.push("https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg")
            },
            addPhoto4(){
                this.list4.push("https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg")
            },
        }
    };
</script>

<style scoped>
    
    .container{
        background-color: #f2f2f2;
    }
    .title{
        color: #666;
        font-size: 30px;
        padding: 15px;
    }
</style>
