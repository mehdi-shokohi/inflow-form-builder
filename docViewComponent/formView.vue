<template>
    <v-container>
                {{props.data.title}}
                <v-row >
                <v-col  v-for="el in (props.data)">
                      <v-text-field v-if="el.v.length<=1" variant="outlined"  :label="el.title" v-model="el.v" >
                      </v-text-field>
                      <v-select v-else="el.v.length>1"  v-model="el.v" @change=updateSelectValue(el)></v-select>
                  </v-col>
                       
               
            </v-row>
    </v-container>
</template>

<script setup>
// import {ref,onMounted} from 'vue'
// import  {getFields,getJsonObject,getPath,getSampleData,InflowFieldsTypes}  from '../inflowHelper.js'

const props = defineProps({data:Object})
</script>