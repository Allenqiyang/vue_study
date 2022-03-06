<template>
    <div class="container">
        <Category title="Games">
            <template scope="category">
                <ul>
                    <li v-for="(game,index) in category.games" :key="index">{{game}}</li>
                </ul>
            </template>
        </Category>
        <Category title="Games">
            <template scope="category">
                <ol>
                    <li v-for="(game,index) in category.games" :key="index">{{game}}</li>
                </ol>
                <h4>{{category.msg}}</h4>
            </template>
        </Category>
        <Category title="Games">
            <template scope="category">
                <h4 v-for="(game,index) in category.games" :key="index">{{game}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'

export default {
    name: "App",
    components: {Category},
}
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