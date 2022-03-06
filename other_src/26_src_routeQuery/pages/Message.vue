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
            </li>
        </ul>
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
    }
}
</script>

<style>

</style>