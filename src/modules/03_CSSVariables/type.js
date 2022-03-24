// 之所以要创建此文件把每个表单元素的属性做成一个对象，
// 是考虑到那万一要是出现更多表单元素，且其type是多种多样的呢? 
// 或许这种方式可以为你以后做表单校验时提供一些思路
export default [
    {
        "id": "spacing",
        "type": "range",
        "name": "spacing",
        "min": "10",
        "max": "200",
        "value": "10",
        "dataSizing": "px"
    },
    {
        "id": "blur",
        "type": "range",
        "name": "blur",
        "min": "0",
        "max": "25",
        "value": "10",
        "dataSizing": "px"
    },
    {
        "id": "base",
        "type": "color",
        "name": "base",
        "value": "#ffc600",
    }
]