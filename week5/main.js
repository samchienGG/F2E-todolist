

// Vue.component('counter-component', {
//     data:function() {
//         return {
//             counter: 0
//         }
//     },
//     template: `
//     <button @click="counter+= 1">{{ counter }}</button>
//     `
// })


var app = new Vue({
    el: '#page',
    data: {
        pages: [
            'img/storyboard-1.png',
            'img/storyboard-2.png',
            'img/storyboard-3.png',
            'img/storyboard-4.png',
            'img/storyboard-5.png',
            'img/storyboard-6.png',
            'img/storyboard-7.png',
            'img/storyboard-8.png',
            'img/storyboard-9.png',
            'img/storyboard-10.png',
            'img/storyboard-11.png',
            'img/storyboard-12.png'
        ],
        comicViewSrc: '',
        pageIndex: 0,
        pagesMax: 12,
        sliderStyle: {
            transform: 'translateX(-50px)'
        }
    },
    methods: {
        control_pre: function () {
            if (this.pageIndex > 0) {
                this.pageIndex--;
                this.comicViewSrc = this.pages[this.pageIndex];
            } else if (this.pageIndex == 0) {
                this.pageIndex = 0
            }
            var x = -100 * this.pageIndex - 50 + 'px';
            this.sliderStyle = {
                transform: `translateX(${x})`
            }
        },
        control_next: function () {
            var max = this.pagesMax - 1;
            if (this.pageIndex == max) {
                this.pageIndex = 11
            } else if (this.pageIndex < max) {
                this.pageIndex++;
                this.comicViewSrc = this.pages[this.pageIndex];
            }
            var x = -100 * this.pageIndex - 50 + 'px';
            this.sliderStyle = {
                transform: `translateX(${x})`
            }
        },
        handelMiniPage: function(index) {
            this.pageIndex = index;
            this.comicViewSrc = this.pages[this.pageIndex];
            var x = -100 * this.pageIndex - 50 + 'px';
            this.sliderStyle = {
                transform: `translateX(${x})`
            }
        }
    },
    computed: {
        
    },
    mounted() {
        this.comicViewSrc = this.pages[0];
    }
});