<template>
    <div>
        <button @click="isShow=true">pop up window</button>
        <teleport to='body'>
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>I'm a window</h3>
                    <h4>the dialog is open</h4>
                    <h4>information is here</h4>
                    <button @click="isShow=false">close window</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Dialog',
    setup(){
        let isShow = ref(false)
        return {isShow}
    }
}
</script>

<style>
.mask {
    position: absolute;
    top: 0;left: 0;bottom: 0;right: 0;
    background-color:rgba(0, 0, 0, 0.5)
}
.dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: aquamarine;
}
</style>