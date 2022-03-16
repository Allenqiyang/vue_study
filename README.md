# vue_study
小白学习vue打的一些代码🤪

对Vue的各个知识点例如 vue-cli Vuex vue-router等敲的一些代码
还有一些案例 todoList Github搜索

### ref
用于给节点打标识

读取方式：this.$refs.xxx

### props
让组件接收外部传进来的数据<br>
1.传递数据  <Demo name="xxx"/> 就直接在使用得到组件那个标签里面写就行<br>
2.接收数据
```js
props:['name']

props:{
    name:Number
}

props:{
    name:{
        type:string,
        required:ture,
        default:"xxx"
    }
}
```
required default一般不会一起出现在一个元素
* props是只读的，如果需要对其进行修改那就要搞个data然后传到data里面修改data里的数据

### mixin
功能：把多个组件共用的配置提取成一个混合对象
1.定义混合.例如

```js
{
    data(){...},
    methods:{...}
    ...
}
```
2.使用混合.例如:<br>
*全局混合：Vue.mixin(xxx)<br/>
*局部混合：mixins:[xxx]

### plugin
包含install方法的一个对象，install的第一个参数是Vue，第二个参数是插件使用者传递的数据
```js
    // 定义插件：
    object.install = function(Vue,options){
    // 1.添加全局过滤器
    Vue.filter(...)
    // 2.添加全局指令
    Vue.directive(...)
    // 3.配置全局混入
    Vue.mixin(...)
    // 4.添加实例方法
    Vue.prototype.$myMethod =function(){...}
        Vue.prototype.$myProperty = xxx
    }
```
使用插件：Vue.use()

### scoped  
scoped指定作用域是当前文件，防止冲突

### TodoList conclusion
1.组件化编码流程:<br>
拆分静态组件:组件要按照功能点拆分,命名不要与html元素冲突
实现动态组件:考虑好数据的存放位置:<br>
*一个组件在用:放在组件自身即可<br>
*多个组件在用:放在他们共同的父组件上<br>
2.props适用于<br>父组件 ===> 子组件 通信<br>
子组件 ===> 父组件 通信(需要父组件给子组件传一个函数)<br>
3.使用v-mode应注意v-mode绑定的值不能是props传过来的值,因为props不可被修改<br>
4.props传过来的若是对象类型的值,修改对象中的属性Vue不会报错,但不应该这么做<br>

### 自定义事件
1.一种组件间通信的方式,适用于: 子组件 ===> 父组件<br>
2.使用场景：A是父组件，B是子组件，B给A传数据，在A中给B绑定自定义事件(事件的回调在A中)<br>
3.绑定自定义事件：<br>
第一种：在父组件中`<Demo @happy="test">` or `<Demo v-on:happy="test"><br>`
第二种：在父组件中
```
<Demo ref="demo"/>
...
mounted(){
    this.$refs.demo.$on('happy',this.test)
}
```
4.触发自定义事件:this.$emit('happy',data)<br>
5.解绑自定义事件:this.$off('happy')<br>
6.组件上也可以绑定原生DOM事件，使用native修饰符<br>

### Global Event bus
1.一种组件间通信的方式,适用于任意组件间通信
2.先安装全局事件总线：
```js
    new Vue({
        ...
        beforeCreate(){
            Vue.prototype.$bus = this  //安装全局事件总线，然后$bus就是当前的vm
        },
        ...
    })
```
3.使用事件总线
接收数据：A组件想接收数据就在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
```js
methods(){
    demo(data){...}
}
...
mounted(){
    this.$bus.$on('xxx',this.demo)  //xxx是事件名
}
```
提供数据：`this.$bus.$emit('xxx',this.demo)`<br>
4.最好在beforeDestroy钩子中用$off解绑当前组件所用到的事件

### Message subscription and publishing
1.一种组件间通信的方式,适用于任意组件间通信<br>
2.接收数据：A组件想接收数据就在A组件中订阅消息，订阅的回调留在A组件本身
```js
    methods(){
        demo(data){...}
    }
    mounted(){
        this.pubId = pubsub.subscribe('messageName',this.demo);
    }
```
3.提供数据：pubsub.publish('messageName',data)<br>
4.最好在beforeDestroy钩子中用pubsub.unsubscribe(pubId)取消订阅

### nextTick
语法：this.nextTick(回调函数)<br>
作用：在下一次DOM更新结束后执行其指定的回调<br>
当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick指定的回调函数中执行

### Vue封装的过度与动画
作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名<br>
写法：先写好样式<br>
    元素进入的样式：<br>
    1.v-enter 进入的起点<br>
    2.v-enter-active 进入过程中<br>
    3.v-enter-to 进入的终点<br>
    元素离开的样式：<br>
    1.v-leave 离开的起点<br>
    2.v-leave-active 离开过程中<br>
    3.v-leave-to 离开的终点<br>
使用```<transition>```包裹要过度的元素，可以配置name属性<br>
若有多个元素需要过度,需要使用```<transition-group>```,并且每个元素都要指定key值

### Vue脚手架配置代理
method 1<br>
在vue.config.js中添加如下配置
```js
    devServer:{
        proxy:"http://localhost:5000"
    }
```

### 插槽
1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，使用于父组件 ===> 子组件<br>
2.分类：默认插槽、具名插槽、作用域插槽<br>
3.使用方式：<br>
- 默认插槽：
```html
    父：
    <Category>
    	<div>html结构1</div>
    </Category>
    子：
    <template>
    	<div>
    		<slot>默认插槽内容</slot>
    	</div>
    </template>
```
- 具名插槽：
```html
	父：
	<Category>
    	<template slot="center">
            <div>html1</div>
    	</template>
    	<template slot="footer">
            <div>html2</div>
    	</template>
    </Category>
    子：
    <template>
    	<div>
    		<slot name="center">default</slot>
    		<slot name="footer">default</slot>
    	</div>
    </template>
```

- 作用域插槽：
数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定<br>
代码就看文件里的了,不想写了太多了

### Vuex

1. 概念

   在Vue中实现集中式状态(数据)管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件间通信

2. 何时使用：多个组件需要共享数据时

3. 搭建vuex环境  (index.js) (main.js)

4. 基本使用
- 初始化数据、配置actions、配置mutations，操作文件store.js

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    // 觉得没啥用的action部分就可以直接不写,越过action直接跟mutations对话
    add:function(context,value){
        context.commit('add',value)
    }
}
const mutations = {
    add:function(state,value){
        state.sum+=value
    }
}
const state = {
    sum: 0,
}

export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state
})
```

   - 组件中读取vuex中的数据：`$store.state.sum`
   - 组件中修改vuex中的数据：`$store.dispatch('action中的方法名',data)` 或 `$store.commit('mutations中的方法名',data)`

##### 若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接写commit

### getters
- 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
- 在store.js中追加getters配置
```js
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
export default new Vuex.Store({
    ...
    getters     //getters:getters
})
```

- 组件中读取数据：`$store.getters.bigSum`

### 4个map方法
1. mapState方法：用于帮助映射state中的数据为计算属性

```js
computed:{
    //原始写法
    sum(){
        return this.$store.state.sum
    }
    //对象写法
    ...mapState({sum: 'sum',school: 'school',subject: 'subject'}),
    //数组写法
    ...mapState(['sum','school','subject'])
}

```


2. mapGetters方法：用于帮助我们映射getters中的数据为计算属性

```js
computed:{
    //原始写法
    bigSum(){
        return this.$store.state.bigSum
    }
    //对象写法
    ...mapGetters({bigSum:'bigSum'}),
    //数组写法
	...mapGetters(['bigSum'])
}
```

3. mapActions方法：用于帮助我们生成与actions对话的方法，即：包含`$store.dispatch(xxx)`的函数

```js
methods:{
    //原始写法
    increseOdd(){
        this.$store.dispatch('addOdd',this.n)
    }
    //对象写法
    ...mapActions({increseOdd:'addOdd',increaseWait:'addWait'})
}
```

4. mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含`$store.commit(xxx)`的函数

```js
methods:{
    //原始写法
    increase(){
        this.$store.commit('add',this.n)
    }
    //对象写法
    ...mapMutations({increase:'add',decrease:'minus'}),
}
```

- mapActions与mapMutations使用时，若需要传递参数，要在模板中绑定事件时传递好参数，否则参数是事件对象

### vue-router
1. 安装vue-router, npm install vue-router
2. 应用插件：Vue.use(VueRouter)
3. 编写router配置项
```js
import VueRouter from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component: About
        },
        {
            path:'/home',
            component: Home
        }
    ]
})
```

4. 实现切换 
```html
<router-link active-class:"active" to "/about">About</router-link>
```
5. 指定展示位置
`<router-view></router-view>`

#### 几个注意点 

1. 路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
2. 通过切换隐藏了的路由组件，默认是被销毁的，需要的时候再去挂载
3. 每个组件都有自己的$route属性，存储着自己的路由信息
4. 整个应用只有一个router，可以通过组建的$router属性获取到

#### 多级路由
1. 配置路由规则,使用children配置项
```js
routes:[
    {
        path:'/about',
        component: About
    },
    {
        path:'/home',
        component: Home,
        children: [   //通过children配置子级路由
            {
                path:'message', //注意子级路由路径不要写/
                component: Message
            },
            {
                path:'news',
                component: News
            }
        ]
    }
]
```

2. 跳转(要写完整路径)
`<router-link to="/home/news">News</router-link>`\

#### 路由的query参数
```html
跳转路由携带query参数, to的模板字符串写法
<router-link to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
跳转路由携带query参数, to的对象写法
<router-link :to="{
    path:'/home/message/detail',
    query: {
        id:m.id,
        title:m.title
    }
}">
    {{m.title}}
</router-link>
```

#### 命名路由
- 作用：可以简化路由的跳转
1. 给路由命名：
```js
{
    path:'/demo',
    component:Demo,
    children:[
        {
            path:'test',
            componet:Test,
            children:[
                {
                    name:'hello',   //给路由命名
                    path:'welcome',
                    component:Hello
                }
            ]
        }
    ]
}
```

2. 简化跳转
```html
<router-link to="/demo/test/welcome">Jump</router-link>
<router-link to="{name:'hello'}">Jump</router-link>
```

#### `<router-link>`的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转的时候默认为push
3. 开启replace模式：`<router-link replace ...>News</router-link>`

#### 编程式路由导航
1. 作用：不借助<router-link>实现路由跳转，让路由跳转更加灵活

2. 编码：

```js
//$router的2个API
this.$router.push({
    path:'/home/message/detail',
    query: {
        id:xxx,
        title:xxx
	}
})

this.$router.replace({
    path:'/home/message/detail',
    query: {
        id:xxx,
        title:xxx
    }
})

this.$router.forward()	//前进
this.$router.back()	//后退
this.$router.go()	//可以指定跳转方向和长度
```

#### 缓存路由组件
1. 作用：让不展示的路由组件保持挂载，不被销毁
2. 编码:
```html
<keep-alive include="News">
	<router-view></router-view>
</keep-alive>
```
如果要保持挂载的组件不止一个，include里面写个数组就行了，把要存的组件名都写在里面

#### 2个新的生命钩子
1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
2. 具体名字：
    activated路由组件被激活时触发
    deactivated路由组件失活时触发

### 路由守卫
- 全局路由守卫  分为前置守卫和后置守卫
- 独享路由守卫
- 组件内守卫
```js
//通过路由规则进入该组件时被调用
beforeRouteEnter(to,from,next){},
//通过路由规则离开该组件时被调用
beforeRouteLeave(to,from,next){}
```
