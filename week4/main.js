var app = new Vue({
    el:'.container',
    data:{
        arrowIsActive:true
    },
    methods:{
        handlerArrow:function () {
            this.arrowIsActive = !this.arrowIsActive;
            window.scroll({
                top:0,
                behavior: "smooth" 
            })
        }
    }
})
            