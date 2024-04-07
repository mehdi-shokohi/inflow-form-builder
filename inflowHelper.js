import {data} from './data'
export const InflowFieldsTypes = {
    ObjectType :'form',
    ArrayType :'form[]',
    StringValue:'string',
    NumberValue :'number'
}
export function getFields(data){
        let f=[]
        if (data)
        data.map((v,i)=>{
          if (v.v!=null)
          f.push(v)
        
        })
        return f
}

export function getObjectKey(o){
    return o.O
}
export function getObjectMeta(o){
    return o.meta
}

export function setValue(field,value){
    if (field.t==InflowFieldsTypes.ObjectType || field.t==InflowFieldsTypes.ArrayType) return
    if (field.meta?.edit?.v == "1") return // field is not editable
    if (field.meta.multi==true){

        if (!Array.isArray(field.v)){
            field.v = []
        }
        field.v.push(value)
    }else{
        field.v = [...value]
    }
    field.meta.ver = (Number(field.meta.ver) + 1).toString();

}

export function getValue(field){
    if (field.o){
        return getJsonObject(field.o)
    }
    if (field.meta.multi==true){
            return field.v
    }else{
        if (field.v.length>0){
            return field.v[0]
        }
    }
    return null
}

export function getJsonObject(obj){
    let jo={}
    for (let i=0;i<obj.length;i++){
        if (obj[i].t == InflowFieldsTypes.StringValue || obj[i].t ==InflowFieldsTypes.NumberValue ){
            jo[obj[i].k] = Array.isArray(obj[i].v) ? (obj[i].v.length==1 ? obj[i].v[0]:obj[i].v) : null
        }else if (obj[i].t == InflowFieldsTypes.ObjectType && obj[i].o!=null){
            jo[obj[i].k] = getJsonObject(obj[i].o)
        }else if(obj[i].t == InflowFieldsTypes.ArrayType){
            if (obj[i]?.o==null){
                jo[obj[i].k] = []
                continue
            }
            jo[obj[i].k] =  obj[i].o.map(el=>{
               return getJsonObject(el.o)
            })
        }
    }
    return jo
}

export function getRefMeta(field){
return field.meta.ref
}
export function getPath(data,path){
    let key = path.split(".")
    return getValueByPath(data, key) 
}
function getValueByPath(data, key) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].k == key[0]) {
  
        if (data[i]["v"]) {
          if (data[i].v.length > 1) {
  
            return { value: data[i].v, arr: true }
          }
          return { value: data[i].v, arr: false }
  
        }
        key = key.slice(1, key.length)
        return getValueByPath(data[i].o, key)
      }
    }
    return { value: data, arr: false }
  }

 

export function getSampleData(){
    return data
}