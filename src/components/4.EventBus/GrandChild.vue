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
            this.$bus.$on('busMsg',value => {
                this.grandchildmsg = value
            })
        }
}
</script>

<style>

</style>