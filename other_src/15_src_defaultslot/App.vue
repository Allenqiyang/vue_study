<template>
    <div class="container">
        <Category title="Foods">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="Games">
            <ul>
                <li v-for="(game,index) in games" :key="index">{{game}}</li>
            </ul>
        </Category>
        <Category title="Films">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'

export default {
    name: "App",
    components: {Category},
    data(){
        return {
            games:['PUBG','CSGO','BATTLE FIELD']
        }
    }
};
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
    img{
        width:100%;
    }
    video{
        width:100%;
    }
</style>