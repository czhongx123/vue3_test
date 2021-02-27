<template>
   <div>
       <input placeholder="请输入" v-model="value" @keydown.enter="enter" />
    </div> 
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"NavHeader",
    setup(props,ctx) {
        let value=ref('');

        let enter=()=>{
            ctx.emit('add',value.value);
            console.log(value.value)
            value.value="";
        }
        return{
            value,
            enter
        }
    }
})
</script>

<style lang="scss" scoped>


</style>