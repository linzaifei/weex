<template>

  <div class="container">
    <recycle-list class="list" for="(item, i) in list" >
      <cell-slot @click="clickItem(item.value)">
        <text class="cell">{{item.title}}</text>
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
        },]
    }
  },
    methods: {

        clickItem(value){
//            modal.toast({
//                message:push.baseUrl()+'examples/'+`${value}`+'/index.js'
//            })

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

  .list{
    margin-top: 10px;
  }
  .cell{
    padding: 20px;
    font-size: 35px;
    color: #333;
    border-bottom-width: 1px;
    border-color: #eee;
    background-color: #fff;
  }

</style>
