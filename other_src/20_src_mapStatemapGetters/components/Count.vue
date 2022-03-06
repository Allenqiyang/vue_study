<template>
    <div class="container">
        <h1>Result of the addition: {{sum}}</h1>
        <h4>Amplification of result: {{bigSum}}</h4>
        <h4>I study {{subject}} in {{school}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increseOdd">add when result is odd</button>
        <button @click="increseWait">add after a second</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:"Count",
    data() {
        return {
            n:1
        }
    },
    methods:{
        increase(){
            this.$store.commit('add',this.n)    //越过action直接mutation那就是commit了,不是dispatch
        },
        decrease(){
            this.$store.commit('minus',this.n)
        },
        increseOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        increseWait(){
            setTimeout(()=>{
                this.$store.dispatch('addWait',this.n)
            },1000)
        }
    },
    computed:{
        /* sum(){
            return this.$store.state.sum
        },
        school(){
            return $store.state.school
        },
        subject(){
            return $store.state.subject
        }, */
        ...mapState({sum: 'sum',school: 'school',subject: 'subject'}),
        ...mapGetters({bigSum: 'bigSum'})
        /* bigSum(){
            return this.$store.getters.bigSum
        } */
    },
    mounted(){
        const x = mapState({sum: 'sum',school: 'school',subject: 'subject'})
        console.log(x)
    }
}
</script>

<style>
    button{
        margin-left:6px;
    }
    .container{
        text-align:center;
    }
</style>