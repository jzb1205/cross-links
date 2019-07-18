<template>
    <transition name="el-fade-in-linear">
        <router-view v-show="show"></router-view>
    </transition>
</template>

<script>
export default {
 data () {
     return {
         show:true
     }
 },
 created () {
 },
 watch:{
 }
}
</script>

<style>

</style>
