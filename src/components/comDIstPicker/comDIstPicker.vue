<template>
    <v-distpicker hide-area  @province="onChangeProvince" @city="onChangeCity" :province="addressData.provice" :city="addressData.city"  @selected='selected'></v-distpicker>
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
    selected(data){
        this.$emit('getAddress',data)
    },
    onChangeProvince(a){ 
        this.proviceCode = a.code;
        this.proviceValue = a.value;
        let data = {
            province:{
                code:this.proviceCode,
                value:this.proviceValue
            },
            city:{
                code:"",
                value:""
            }
        }  
        this.$emit('getAddress',data)         
    },
    onChangeCity(a){
        let data = {
            province:{
                code:this.proviceCode,
                value:this.proviceValue
            },
            city:{
                code:a.code,
                value:a.code
            }
        }  
        this.$emit('getAddress',data)    
    }            

  },
  watch:{
      'address':{
          handler:function(newValue,oldValue){
                this.addressData.provice = newValue.provinceName
                this.addressData.city = newValue.cityName
          },
          deep:true
      }
  }
};
</script>