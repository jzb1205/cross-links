<template>
    <div>
        <com-header></com-header>
        <com-nav></com-nav>
        <router-view></router-view>
        <com-inter v-if="page.includes(interShow)"></com-inter>
        <com-footer></com-footer>
    </div>
</template>

<script>
import ComHeader from '@/components/ComHeader/ComHeader'
import ComNav from '@/components/ComNav/ComNav'
import ComInter from '@/components/ComInter/ComInter'
import ComFooter from '@/components/ComFooter/ComFooter'
export default {
    components: {
        ComHeader,
        ComNav,
        ComInter,
        ComFooter
    },
    data(){
        return {
            interShow:'home',
            page:["home","nav"]
        }
    },
    watch:{
        '$route'(){
            this.interShow = this.$route.name;
        }
    }
}
</script>

<style>
</style>
