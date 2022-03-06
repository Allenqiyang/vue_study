<template>
    <div class="container">
        <h1>Result of the addition:{{sum}}</h1>
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
export default {
    name:"Count",
    data() {
        return {
            sum: 0,
            n:1
        }
    },
    methods:{
        increase(){
            this.sum+=this.n
        },
        decrease(){
            this.sum-=this.n
        },
        increseOdd(){
            if(this.n%2){
                this.sum+=this.n
            }
        },
        increseWait(){
            setTimeout(()=>{
                this.sum+=this.n
            },1000)
        }
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