<script setup>
import {ref} from 'vue'
import  {getFields,getJsonObject,getPath,getSampleData,InflowFieldsTypes}  from './inflowHelper.js'
import docHandler from './docViewComponent/docHandler.vue';
const data = ref(getSampleData())
const scope = getPath(data.value,'')
    console.log(getJsonObject(scope.value))
</script>

<template>
    <div v-for="doc in data">

        <docHandler :data="doc.o"></docHandler>
    </div>
</template>