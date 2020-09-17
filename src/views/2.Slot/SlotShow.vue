<template>
    <Child>
        <h3>我进来了</h3>
        <h4 slot="slot1">进入插槽slot1</h4>
        <h4 slot="slot2">进入插槽slot2</h4>
        <template slot-scope="user">
            <ul>
                <li v-for="(index ,item) in user.data" :key="index" >{{item}}</li>
            </ul>
        </template>
    </Child>
</template>

<script>
import Child from "../../components/2.Slot/ChildSlot.vue"
export default {
    
    components: {
        Child
    }
}
</script>

<style>

</style>