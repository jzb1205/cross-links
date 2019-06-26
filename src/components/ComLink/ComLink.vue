<template>
    <div class="comLink">
        <ul>
            <li>
                <div class="kefuIcon">
                </div>
                <div class="name"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    }
}
</script>

<style lang='less' scoped>
.comLink{
    position: fixed;
    top:35vh;
    right:0;
    background:#fff;
    width:120px;
    height:150px;
    overflow: hidden;
    .kefuIcon{
        width:120px;
        height:150px;
        background: url('../../assets/img/kefu.jpg') 150px 20px;
    }
}
</style>
