<template>

    <div v-if="primitiveFields.length > 0">
          
                <FormView :data="primitiveFields"></FormView>

    </div>
    <div v-for="(item) in props.data">


        <div v-if="item.t === InflowFieldsTypes.ObjectType">
            <v-card variant="outlined" class="ma-2">
                <v-card-title>
                    {{ item.title }}
                </v-card-title>
                <v-card-text>
                    <docHandler :data="item.o"></docHandler>
                </v-card-text>
            </v-card>
        </div>
        <div v-else-if="item.t === InflowFieldsTypes.ArrayType">
           
            <div v-for="(innerItem,index) in item.o">
                {{ innerItem.title }} Index {{ index  }}
                <docHandler :data="innerItem.o"></docHandler>
            </div>
        </div>




    </div>


</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import FormView from './formView.vue'
import { getFields, getJsonObject, getPath, getSampleData, InflowFieldsTypes } from '../inflowHelper.js'
const primitiveFields = ref([])
const props = defineProps({ data: Object })

primitiveFields.value = getFields(props.data)
onBeforeMount(() => {
})

</script>