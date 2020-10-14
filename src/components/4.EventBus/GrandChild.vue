<template>
    <div>{{grandchildmsg}}</div>
</template>

<script>
export default {
        data() {
            return {
                grandchildmsg: ''
            }
        },
        created() {
            this.$bus.$on('busMsg',val => {
                this.grandchildmsg = val
            })
        }
}
</script>

<style>

</style>