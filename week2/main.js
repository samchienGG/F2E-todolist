var app = new Vue({
    el:'#app',
    data:{
        district:[
            '全部', '楠梓區', '左營區', '鼓山區', '三民區', '苓雅區', '新興區', '前金區', '鹽埕區', '前鎮區', '旗津區',
            '小港區', '鳳山區', '茂林區', '甲仙區', '六龜區', '杉林區', '美濃區', '內門區', '仁武區', '田寮區',
            '旗山區', '梓官區', '阿蓮區', '湖內區', '岡山區', '茄萣區', '路竹區', '鳥松區', '永安區', '燕巢區',
            '大樹區', '大寮區', '林園區', '彌陀區', '橋頭區', '大社區', '那瑪夏區', '桃源區'
        ],
        selectedLocation:'全部',
        freeTicket:false,
        allDayOpen:false,
        info:[]
    },
    methods:{
        
    },
    computed:{
        data:function () {
            var res = this.info;
            var result = [];
            if (this.freeTicket === true && this.allDayOpen === true) {
                this.info.forEach(function(e) {
                    if (e.Ticketinfo === '免費參觀' && e.Opentime === '全天候開放') {
                        result.push(e); 
                    }
                })
            } else if (this.freeTicket === true && this.allDayOpen === false) {
                this.info.forEach(function(e) {
                    if (e.Ticketinfo === '免費參觀') {
                        result.push(e); 
                    }
                })
            } else if (this.freeTicket === false && this.allDayOpen === true) {
                this.info.forEach(function(e) {
                    if (e.Opentime === '全天候開放') {
                        result.push(e); 
                    }
                })
            } else {
                result = res;
            }
            return result
        },
        sortData:function () {
            if (this.selectedLocation === '全部') {
                return this.data;
            } else {
                var result = [];
                var self = this;
                this.data.forEach(function (e) {
                    if(e.Zone === self.selectedLocation){
                        result.push(e);
                    }
                })
                return result
            }
        },
        addTag:function () {
            if (this.freeTicket === true && this.allDayOpen === true) {
                return ['免費參觀', '全天候開放'];
              }
              else if (this.freeTicket === true && this.allDayOpen === false) {
                return ['免費參觀'];
              }
              else if (this.freeTicket === false && this.allDayOpen === true) {
                return ['全天候開放'];
              }
              else {
                return [];
              }
        }
        

    },
    created:function () {
        $.ajax({
            url:'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',
            type:'get',
            success:function (msg) {
                var data = msg.result.records;
                app.info = data;
            },error:function (xhr, ajaxOptions, thrownError) {
                // alert('失敗')
                console.log(xhr, ajaxOptions, thrownError)
            }
        })        
    }
})



