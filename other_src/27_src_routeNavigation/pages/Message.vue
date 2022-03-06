<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link :to="{
                    path:'/home/message/detail',
                    query: {
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push check</button>
                <button @click="replaceShow(m)">replace check</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Message",
    data() {
        return {
            messageList: [
                {id:'001', title:"message1"},
                {id:'002', title:"message2"},
                {id:'003', title:"message3"}
            ]
        }
    },
    methods: {
        pushShow(m){
            this.$router.push({
                path:'/home/message/detail',
                query: {
                    id:m.id,
                    title:m.title
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                path:'/home/message/detail',
                query: {
                    id:m.id,
                    title:m.title
                }
            })
        }
    }
}
</script>

<style>

</style>