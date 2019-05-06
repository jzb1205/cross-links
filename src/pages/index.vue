<template>
    <div>
        <com-header></com-header>
        <com-nav></com-nav>
        <router-view></router-view>
        <com-inter></com-inter>
    </div>
</template>

<script>
import ComHeader from '@/components/ComHeader/ComHeader'
import ComNav from '@/components/ComNav/ComNav'
import ComInter from '@/components/ComInter/ComInter'
export default {
    components: {
        ComHeader,
        ComNav,
        ComInter
    }
}
</script>

<style>
</style>
