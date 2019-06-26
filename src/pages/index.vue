<template>
    <div>
        <com-header></com-header>
        <com-nav></com-nav>
        <router-view></router-view>
        <com-inter v-if="interNoShow.includes(interShow)"></com-inter>
        <com-footer></com-footer>
        <!-- <com-link></com-link> -->
    </div>
</template>

<script>
import ComHeader from '@/components/ComHeader/ComHeader'
import ComNav from '@/components/ComNav/ComNav'
import ComInter from '@/components/ComInter/ComInter'
import ComFooter from '@/components/ComFooter/ComFooter'
import ComLink from '@/components/ComLink/ComLink'
export default {
    components: {
        ComHeader,
        ComNav,
        ComInter,
        ComFooter,
        ComLink
    },
    data(){
        return {
            interShow:'home',
            interNoShow:["home","nav"]
        }
    },
    created(){
        this.interShow = this.$route.name;
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
