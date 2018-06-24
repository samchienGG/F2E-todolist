var app = new Vue({
    el: '.orders',
    data: {
        action: false,
        // thData: [
        //     'Customer',
        //     'ProductList',
        //     'Total',
        //     'Add to Cart',
        //     'Check-out',
        //     'Address',
        //     'Status'
        // ],
        Customer: true,
        ProductList: true,
        Total: true,
        AddtoCart: true,
        Checkout: true,
        Address: true,
        Status: true,
        allData: [],
        allBox: false
    },
    methods: {
        allBoxIsActive: function () {
            if (this.allBox == false) {

                for (let i = 0; i < this.allData.length; i++) {
                    this.allData[i].boxIsActive = true;
                }
                this.allBox = true;
            } else {
                for (let i = 0; i < this.allData.length; i++) {
                    this.allData[i].boxIsActive = false;
                }
                this.allBox = false;
            }
        },
        aa: function (item) {
            if(item.itemState == 'Done'){
                return 'Done';
            }
        }
    },
    computed: {
        fakeData: function () {
            for (let i = 0; i < 6; i++) {
                var fakeName = faker.name.findName();
                var fakeProductName = faker.commerce.productName();
                var fakeCount = Math.ceil(Math.random() * 10);
                var pastDate = faker.date.past();
                var pastday = pastDate.getDate();
                var pastmonth = pastDate.getMonth() + 1;
                var pastyear = pastDate.getFullYear();
                var fakepast = pastyear + '/' + pastmonth + '/' + pastday;
                var futureDate = faker.date.future();
                var futureday = futureDate.getDate();
                var futuremonth = futureDate.getMonth() + 1;
                var futureyear = futureDate.getFullYear();
                var fakefuture = futureyear + '/' + futuremonth + '/' + futureday;
                var fakeAddress = faker.address.streetAddress();
                var fakeItemPrice = Math.round(faker.commerce.price());
                var total = fakeItemPrice * fakeCount;
                var tagState = [
                    'Paid',
                    'Unpaid',
                    'Shipping',
                    'Done'
                ]
                this.allData.push({
                    name: fakeName,
                    ProductList: fakeProductName,
                    count: fakeCount,
                    itemPrice: '$' + fakeItemPrice,
                    AddtoCart: fakepast,
                    Checkout: fakefuture,
                    address: fakeAddress,
                    boxIsActive: false,
                    total: total,
                    itemState: tagState[Math.floor(Math.random() * tagState.length)]
                })
            }
            return this.allData;
        }
        
    }
})