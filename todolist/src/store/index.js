import { createStore } from 'vuex'

export default createStore({
  //定义所需要状态的
  state: {
    name:"baidu",
    list:[
      {
         title:"吃饭",
         complate:false
      },
      {
         title:"睡觉",
         complate:false
      },{
         title:"打豆豆",
         complate:true
      },
   ]
  },
  //同步修改state 都是方法
  //第一个参数state 第二个参数是需要修改的值
  mutations: {
    setName(state,payload){
      state.name=payload
    },
    //添加数据
    addTodo(state,payload){
      state.list.push(payload)
    },
    //删除单个数据
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    //清除已完成的所有数据
    clear(state,payload){
      state.list=payload
    }

  },
  //异步提交mutation
  //第一个参数是store对象，第二个参数是修改的值
  actions: {

    asyncSetName(store,params){
      setTimeout(()=>{
        //commit是提交mutation  调用mutation的方法
        store.commit('setName',params)
      },2000)
    }
  },
  //模块化
  modules: {
  }
})
