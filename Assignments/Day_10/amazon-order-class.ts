class Order {
    productName: string
    orderId: string
    price: string

    constructor(productName: string, orderId: string, price: string) {
        this.productName = productName;
        this.orderId = orderId;
        this.price = price;
        console.log(`Order created sucessfully for ${ productName }`)
    }
    async placeOrder(productName: string = this.productName, orderId: string = this.orderId) {
        console.log(`Order placed for ${ productName } with order id ${ orderId }`)
    }
    async cancelOrder(productName: string=this.productName) {
        console.log(`order cancelled for ${ productName }`)

    }
}

const order1 = new Order("iphone16", "ORD123", "85000")
order1.placeOrder()
order1.cancelOrder()