<template>

  <div class="container">
    <recycle-list class="list" for="(item, i) in list" >
      <cell-slot @click="clickItem(item.value)">
        <div class="item">
          <text class="cell">{{item.title}}</text>
          <image resize="contain" src="http://chuantu.biz/t6/281/1523501493x-1404793106.png" class="img"></image>
        </div>
      </cell-slot>
    </recycle-list>
  </div>

</template>

<script>
import push from './ZFPush'
const navigator = weex.requireModule('navigator');
const  modal =weex.requireModule('modal');
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
        imgBack:"",
        list:[{
            title:'ZfRate',
            value:'zf-rate'
        },{
            title:'ZfSelectItem',
            value:'zf-selectItem'
        },{
            title:'ZfMask',
            value:'zf-mask'
        },{
            title:'ZfAlert',
            value:'zf-alert'
        },{
            title:'ZfSheet',
            value:'zf-sheet'
        },{
            title:'ZfTime',
            value:'zf-time'
        },{
            title:'ZfTag',
            value:'zf-tag'
        },{
            title:'ZfItem',
            value:'zf-item'
        },{
            title:'ZfNavigator',
            value:'zf-navigator'
        },]
    }
  },
    methods: {

        clickItem(value){
            navigator.push({
                url: push.createURL(push.baseUrl()+'examples/'+`${value}`+'/index.js'),
                animated: 'true'
            })
        }
    }


}
</script>

<style scoped>
  .container{
    background-color: #f2f2f2;
  }

  .img{
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }

  .list{
    margin-top: 10px;
  }
  .cell{
    padding: 20px;
    font-size: 35px;
    color: #333;
    flex: 1;
  }
  .item{
    flex-direction: row;
    background-color: #fff;
    align-items: center;
    border-bottom-width: 1px;
    border-color: #eee;
  }

</style>
