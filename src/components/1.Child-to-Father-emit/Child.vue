<template>
    <div>我是儿子组件</div>
</template>

<script>
    export default {
        data() {
            return {
                name: "我是儿子"
            }
        },
        mounted() {
            this.$emit("say",this.name)
        }
    }
</script>

<style>

</style>