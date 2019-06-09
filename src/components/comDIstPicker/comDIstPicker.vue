<template>
    <v-distpicker hide-area :province="addressData.provice" :city="addressData.city"  @selected='selected'></v-distpicker>
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
        }
    };
  },
  created() {
  },
  methods: {
    selected(data){
        this.$emit('getAddress',data)
    },
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