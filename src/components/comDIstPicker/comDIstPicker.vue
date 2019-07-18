<template>
    <v-distpicker only-province  @province="onChangeProvince" :province="addressData.provice"></v-distpicker>
</template>
<script>
import VDistpicker from "v-distpicker";
export default {
  props: {
      address:{
          type:Object,
          default:()=>{
              return {}
          }
      }
  },
  data() {
    return {
        addressData:{
            provice:'',
            city:''
        },
        proviceCode:'',
        proviceValue:'',
    };
  },
  created() {
  },
  methods: {
    onChangeProvince(a){ 
        this.proviceCode = a.code;
        this.proviceValue = a.value;
        let data = {
            province:{
                code:this.proviceCode,
                value:this.proviceValue
            }
        } 
        this.$emit('getAddress',data)         
    }       
  },
  watch:{
      'address':{
            handler:function(newValue,oldValue){
                    this.addressData.provice = newValue.provinceName
            },
            deep:true
        }
  }
};
</script>