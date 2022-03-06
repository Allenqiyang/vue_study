### WebStorage
    1.存储内容大小一般支持5MB左右
    2.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
    3.相关的4个API已展示在代码中
    4.SessionStorage存储的内容会随着浏览器窗口的关闭而消失
    5.LocalStorage存储的内容需要手动清除才会消失
    6.xxxStorage.getItem(xxx)如果对应的value值无法获取将会返回null
    7.JSON。parse(null)结果任然是null