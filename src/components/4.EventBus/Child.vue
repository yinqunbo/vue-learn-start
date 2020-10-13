<template>
  <div>{{childmsg}}</div>
</template>

<script>
    export default {
        data() {
            return {
                childmsg: ''
            }
        },
        created() {
            this.$bus.$on('busMsg',value => {
                this.childmsg = value
            })
        }
    }
</script>

<style>

</style>