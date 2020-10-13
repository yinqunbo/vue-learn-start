<template>
    <div>
        <span>这是父组件的页面</span>
        <h4 v-show="show">你能看到我吗？</h4>
        <hr>
        <Child :show.sync="show" @update='update'></Child>
    </div>
</template>

<script>
    import Child from '../../components/3.Sync/Child'
    export default {
        components: {
            Child
        },
        data() {
            return {
                show: true
            }
        },
        methods: {
            update(val) {
                this.show = val;
            }
        }
    }
</script>

<style>

</style>