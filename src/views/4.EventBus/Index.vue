<template>
    <div>
        <span>bus</span>
        <button @click='handler'>点击</button>
        <Child></Child>
        <GrandChild></GrandChild>
    </div>
</template>

<script>
    import Child from '../../components/4.EventBus/Child';
    import GrandChild from '../../components/4.EventBus/GrandChild'

    export default {
        components: {
            GrandChild,
            Child
        },
        data() {
            return {
                msg: "我来自父组件"
            }
        },
        methods: {
            handler() {
                this.$bus.$emit("busMsg",this.msg)
            }
        }
    }
</script>

<style>

</style>