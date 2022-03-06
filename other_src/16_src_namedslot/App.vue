<template>
    <div class="container">
        <Category title="Foods">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="https://www.baidu.com/">More food</a>
        </Category>
        <Category title="Games">
            <ul slot="center">
                <li v-for="(game,index) in games" :key="index">{{game}}</li>
            </ul>
            <div slot="footer" class="foot">
                <a href="https://www.baidu.com/">Console games</a>
                <a href="https://www.baidu.com/">Online games</a>
            </div>
        </Category>
        <Category title="Films">    
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template slot="footer">
                <div class="foot">
                    <a href="https://www.baidu.com/">Disney</a>
                    <a href="https://www.baidu.com/">Marvel</a>
                    <a href="https://www.baidu.com/">FOX</a>
                </div>
                <h4>Welcome watch!</h4>
            </template>
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
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    img{
        width:100%;
    }
    video{
        width:100%;
    }
    h4{
        text-align: center;
    }
</style>