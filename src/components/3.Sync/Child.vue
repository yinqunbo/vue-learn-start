<template>
    <div>
        <button @click="display">点击按钮</button>
    </div>
</template>

<script>
    export default {
        props: {
            show : Boolean
        },
        methods: {
            display() {
                this.$emit("update",!this.show)
            }
        }
    }
</script>

<style>

</style>