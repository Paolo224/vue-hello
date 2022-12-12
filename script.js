const { crateApp } = Vue

.createApp({
    data(){
        return {
            message : 'Hello Vue3',
            img : './img/vue.png',
            imgSize : 'img-fluid'
        }
    }
}).mount('#app');