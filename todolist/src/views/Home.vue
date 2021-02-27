<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div @click="clickNum">{{ num }}</div>
  <div>{{ data }}</div>
  <div>{{ aa }}</div>
  <button @click="goto">跳转路由</button>
  <NavHeader @add="add1" />
  <NavMain :list="list" @del="del"/>
  <NavFooter :msg="msg" :list="list" @send="send1" />
</template>

<script>
// @ is an alias to /src

import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  computed,
  onMounted,
  onUnmounted,
} from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

export default defineComponent({
  name: "Home",
  //接收父组件的值
  props: {},
  //定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  //setup代表组件创建的过程
  setup() {
    //可用ref定义单个数据（ref同时可以定义数组和对象），切记定义的数据要return出去
    //使用reactive定义对象类型的数据
    //toRefs可以解构出属性
    let num = ref(10);
    let msg = ref("这个是父组件的数据");
    let clickNum = () => {
      //访问ref定义的数据要写数据名.value的形式
      //访问reactive定义的数据可以直接访问
      console.log(num, "num");
      console.log(data, "data");
      num.value++;
    };
    let name = ref("sss");

    let data = reactive({
      name: "hhh",
      age: "12",
    });
    let obj = {
      aa: "mmm",
      bb: "nnnn",
    };

    let send1 = (value) => {
      console.log(value, "------我是接收的子组件的值");
    };

    //全局路由对象
    let router = useRouter();

    //当前路由对象
    let route = useRoute();
    console.log(route, "route");

    //路由传参，params和query的区别？params传参刷新页面后，参数消失
    let goto = () => {
      router.push("/about");
    };

    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    //添加数据
    let value = ref("");
    let add1 = (val) => {
      value.value = val;

      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("数据已存在");
        }
      });

      if (flag) {
        store.commit("addTodo", {
          title: value.value,
          complate: false,
        });
      }
    };

    //删除数据
    let del=(val)=>{
      store.commit('delTodo',val)
    }

    onMounted(() => {
      //组件挂载的过程
      //数据  DOM。。。
      //执行顺序晚于set up
      //发起请求
      //数据初始化的操作  接收路由传递的参数
    });

    onUnmounted(() => {
      //组件卸载时的生命周期函数
      //清除定时器   清除闭包函数。。。
    });
    return {
      value,
      del,
      add1,
      send1,
      goto,
      list,
      num,
      name,
      data,
      ...toRefs(obj),
      clickNum,
      msg,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
