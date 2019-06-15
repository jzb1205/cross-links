<template>
    <div class="table-list">
        <el-table :data="list"
                row-class-name="changeCss"
                style="width: 100%">
            <el-table-column prop="orderNo"
                            width="150"
                            align="center"
                            label="服务订单编号">
            </el-table-column>
            <el-table-column prop="serviceType"
                            width="130"
                            align="center"
                            label="服务类型">
            </el-table-column>
            <el-table-column prop="serviceName"
                            label="服务名称"
                            align="center"
                            width="130">
            </el-table-column>
            <el-table-column label="服务状态"
                            align="center"
                            width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.status==='0'?'未完成':'已完成'}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="serviceAmount"
                            width="120"
                            align="center"
                            label="服务收费">
            </el-table-column>
            <el-table-column align="center"
                            label="支付状态">
                <template slot-scope="scope">
                    <span>{{scope.row.payStatus==='0'?'待支付':'已支付'}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center"
                            label="操作">
                <template slot-scope="scope">
                    <div class="option-btn">
                        <el-button @click="deleteUsoById(scope.row)" type="text" size="small">删除</el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                        </div>
                </template>
            </el-table-column>
        </el-table>
        <com-pagination :rows='rows' :page='page' :total='total' @getList='getUsoListPage'></com-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            page:1,
            rows:10,
            total:0,
            params:{
                serviceType:'',
                status:'',
                service_name:'',
                payStatus:'',
            },
            userId:sessionStorage.getItem('userInfo') && JSON.parse(sessionStorage.getItem('userInfo')) && JSON.parse(sessionStorage.getItem('userInfo')).userId,
            list:[]
        }
    },
    created(){
        this.getUsoListPage()
    },
    methods:{
        getUsoListPage(){
            this.$post(this.$api.order.getUsoListPage,{
                serviceType:this.params.type,
                userId:this.userId,
                status:this.params.status,
                service_name:this.params.service_name, 
                payStatus:this.params.id
            }).then((res)=>{
                if (res.code === '000') {
                    this.list = res.data && res.data.list || []
                    this.total = res.data && res.data.total || 0
                }else{
                    this.$message({
                        message: '获取订单列表失败',
                        type: 'error'
                    });
                }
            })
        },
        deleteUsoById(row){
            this.$post(this.$api.order.deleteUsoById,{
                id:row.id
            }).then((res)=>{
                if (res.code === '000') {
                    this.$message({
                        message: `删除服务名称为${row.serviceName}的订单成功`,
                        type: 'success'
                    });
                this.getUsoListPage()
                }else{
                    this.$message({
                        message: `删除服务名称为${row.serviceName}的订单失败`,
                        type: 'error'
                    });
                }
            })
        },
        handleClick(row){
            if (!row.id) {
                this.$message({
                    message: 'id不能为空',
                    type: 'error'
                });
                return
            }
            this.$router.push({
                path:'/userContanter/serviceOrderDetail',
                query:{ 
                    id:row.id
                }
            })
        },
    }
}
</script>

<style>

</style>
