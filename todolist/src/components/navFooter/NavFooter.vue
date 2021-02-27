<template>
  <div>
    <div>已完成{{ isComplete }}/全部{{ list.length }}</div>
    <div v-if="isComplete > 0" @click="clear">清除已完成</div>
    父组件传递过来的数据--- {{ msg
    }}<button @click="send">传递数据给父组件</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NavFooter",
  //接收父组件传递的数据
  props: {
    msg: {
      //数据类型校验
      type: String,

      //required  是否msg为必传，默认为false
      required: false,

      //default 设置默认值
      default: "默认值",
    },
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let childMsg = ref("我是子组件的数据");
    let send = () => {
      //通过ctx.emit分发事件
      //emit 第一个参数是事件名称，第二个参数是传递的数据
      ctx.emit("send", childMsg.value);
    };

    let isComplete = ref(1);
    console.log(props, "props");
    let clear = () => {};
    return {
      isComplete,
      childMsg,
      send,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>