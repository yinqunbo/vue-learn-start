<template>
    <div>
        <p>1.先搞个匿名插槽</p>
        <slot></slot>
        <p>2.1再搞个具名插槽slot1</p>
        <slot name="slot1"></slot>
        <p>2.2再搞个具名插槽slot2</p>
        <slot name="slot2"></slot>
        <p>3.插槽作用域</p>
        <slot :list="list"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:["刘备","关羽","张飞"]
            }
        }
    }
</script>

<style>

</style>