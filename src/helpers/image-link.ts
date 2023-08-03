export const imageLink:(img:string)=>string=(img)=>{
    return new URL(`../assets/${img}.jpg`,import.meta.url).href
}