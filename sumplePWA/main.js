if('service worker' in navigator){
    navigator.serviceWorker.register('service_worker.js').then(function(registration){
        console.log('ServiceWorker registration succsessful with scope: ',registration.scope)
    }).catch(function(err){
        console.log('ServiceWorker registration failed', err)
    })
}


var vue = new Vue({
    el: '#app',
    data(){
        return{
            message: 'Hello.Vue!'
        }
    },
    methods: {
        reverseMessage(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})