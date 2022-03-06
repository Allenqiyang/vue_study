<template>
    <div class="container">
        <h1>Result of the addition: {{sum}}</h1>
        <h4>Amplification of result: {{bigSum}}</h4>
        <h4>I study {{subject}} in {{school}}</h4>
        <h4 style="color:skyblue">number of person is: {{personList.length}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increase(n)">+</button>
        <button @click="decrease(n)">-</button>
        <button @click="increaseOdd(n)">add when result is odd</button>
        <button @click="increaseWait(n)">add after a second</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    name:"Count",
    data() {
        return {
            n:1
        }
    },
    methods:{
        ...mapMutations('countAbout',{increase:'add',decrease:'minus'}),
        ...mapActions('countAbout',{increaseOdd:'addOdd',increaseWait:'addWait'})
    },
    computed:{
        ...mapState('countAbout',['sum','subject','school']),
        ...mapState('personAbout',['personList']),
        ...mapGetters('countAbout',{bigSum: 'bigSum'})
    },
    mounted(){
        /* const x = mapState({sum: 'sum',school: 'school',subject: 'subject'})
        console.log(x) */
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