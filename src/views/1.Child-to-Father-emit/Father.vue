<template>
    <div>
        <Child @say="say"/>
        {{word}}
    </div>
</template>

<script>
import Child from "../../components/1.Child-to-Father-emit/Child.vue"
export default {
    data() {
        return {
            word: ""
        }
    },
    components: {
        Child
    },
    methods: {
        say(data){
            this.word = data
        }
    }
}
</script>

<style>

</style>