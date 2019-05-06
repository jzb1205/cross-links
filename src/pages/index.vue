<template>
    <div>
        <com-header></com-header>
        <com-nav></com-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import ComHeader from '@/components/ComHeader/ComHeader'
import ComNav from '@/components/ComNav/ComNav'
export default {
    components: {
        ComHeader,
        ComNav
    }
}
</script>

<style>
</style>
