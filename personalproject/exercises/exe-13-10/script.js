const products=[];
const cart=[];
const orders=[];
const customers[];

const bottle1= {
    name:"Retro",
    price: 20,
    id:1,
    available:true,
    picture:"bottle_retro.jpg",
    desc:"info bottel",
    details: {
        color:"whith",
        volume_1: 1,
        material: "steel",
        sustainabilty:"",
        isolation_h:"24h hot or cold"

    }
};
console.log(bottle1);
products.push(bottle1);
console.log(2,products);
addToCart(1);
console.log(3,cart);
addToCart(1);
console.log(3,cart);

//To Do:declare bottle 2 to n and push them to products list

function addToCart(productID){
    // check if product ist already in the cart
    cart.forEach(function(product){
        //if it is ,increase quntity by 
        if(productID===product.product.id){
            product.quntity++;
            productInList=true;

        }
    })
    
    //if not
    if(!productInList){
        cart.push({
            id: productID,
            quntity:1
        });
    }
    
}
function isNewCustomer(email){
   
    customers.forEach(function(customer){
       
        if(email===customer.email){
           return  false

        }
        return  true;
    })
}
function creatacustomer(customer){
    customers.push({
        id: customers.length+1,
        email:customer.email,
        fname:customer.name,
        lname:customer.lname,
    });//to do :add all needed info
}

function getProductInfo(){
    cart.forEach(function(item){
        let productID = item.id;
        let productQuntity = item.quntity;
        products.forEach(function(product){
            const obj ={};
            let productID = item.id;
            if(product.id ===productID){
                product
            }
        })
    })
}
const order = {
    id:orders.length+1,
    date: new Date().toISOString(),
    customerID: customerID,
    total: total,
    pr
    PaymentMethod: FormData.PaymentMethod,
    shippingAddress: {

    },
    status:"new"
}
clearcart()
cart[];
function createOrder(){
    if(isNewCustomer()){
        creatacustomer();
    }
    let customerID = get
    //cart info
    //product info: calculation the total
    //form info - split 
    //new_orderID, orderDate
      

    /**
     * 1. check if customer already exists in List Customers
     * 2. if customers exists: customerID to sotre it later in the order(conncting)
     * 6. create new object in orders with 
     * *orderID
     * *OrderDate
     * *customerID
     * *total
     * *productInfos
     * *shippingAdress
     * *Status (new & unpid, confirm & paid , processed, delivered,returned,canceled)
     * 
     */
}
