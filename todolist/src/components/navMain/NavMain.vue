<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complate" />
      {{ item.title }}
      <button class="del" @click="del(intem, index)">删除</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
   emits:['del'],
  setup(props,ctx) {
     let store=useStore();
    let del = (item, index) => {
       ctx.emit('del',index)
    };
    return {
      del,
      store
    };
  },
});
</script>

<style lang="scss" scoped>
.del {
  display: none;
}
.item:hover .del {
  display: inline-block;
}
</style>