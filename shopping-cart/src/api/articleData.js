
const data = [
    {
        "id": "de90bce5-0cf9-49b8-b45b-53468289df68",
        "title":"PlayStation 5",
        "description":"The new Sony PlayStation 5 is now available!",
        "price":499.99,
        "isDiscount":false,
        "isAvailable": true,
        "inStock":5,
        "imageUrl":"https://m.media-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
        "altImageUrl": "https://image.shutterstock.com/image-illustration/technique-puzzle-complexity-difficulty-problems-260nw-1831072243.jpg",
        "amount": 0,
        "categories": ["Hardware","Technique"],
        "paymentPos": ["PayPal","Klarna","CreditCard","AmericanExpress"],
        "departmentId": "234"
    },
    {
        "id": "a74041fc-f1bc-4d68-a904-39e8ac0ecb03",
        "title":"PlayStation 4",
        "description":"The old Sony PlayStation 4 is not available!",
        "price":299.99,
        "isDiscount":false,
        "isAvailable": false,
        "inStock":0,
        "imageUrl":"https://m.media-amazon.com/images/I/81nDSzyHhCL._SL1500_.jpg",
        "altImageUrl": "https://image.shutterstock.com/image-illustration/technique-puzzle-complexity-difficulty-problems-260nw-1831072243.jpg",
        "amount": 0,
        "categories": ["Hardware","Technique"],
        "paymentPos": ["CreditCard","AmericanExpress"],
        "departmentId": "234"
    },
    {
        "id": "0dfcc6fe-2a84-4172-acac-764e1c6b018f",
        "title":"XBOX 360",
        "description":"The old Microsoft XBOX 360 is not available!",
        "price":249.99,
        "isDiscount":false,
        "isAvailable": false,
        "inStock":0,
        "imageUrl":"https://m.media-amazon.com/images/I/51dqWQajrYL._SL1300_.jpg",
        "altImageUrl": "https://image.shutterstock.com/image-illustration/technique-puzzle-complexity-difficulty-problems-260nw-1831072243.jpg",
        "amount": 0,
        "categories": ["Hardware","Technique"],
        "paymentPos": ["PayPal","Klarna"],
        "departmentId": "234"
    },
    {
        "id": "c6ef0aa5-333d-4031-8d15-f1b5274b6388",
        "title":"XBOX Series X",
        "description":"The new Microsoft XBOX Series X is now available!",
        "price":449.99,
        "isDiscount":true,
        "isAvailable": true,
        "inStock":49,
        "imageUrl":"https://compass-ssl.xbox.com/assets/b7/41/b7414f03-9878-4ed3-a9a4-b4ab8f19ca97.jpg?n=0202999-Hero-M.jpg",
        "altImageUrl": "https://image.shutterstock.com/image-illustration/technique-puzzle-complexity-difficulty-problems-260nw-1831072243.jpg",
        "amount": 0,
        "categories": ["Hardware","Technique"],
        "paymentPos": ["PayPal","AmericanExpress"],
        "departmentId": "234"
    },
    {
        "id": "de90bce5-0cf9-49b8-b45b-53468289df69",
        "title":"Nintendo Switch",
        "description":"The new Nintendo Switch now available!",
        "price":349.99,
        "isDiscount":false,
        "isAvailable": true,
        "inStock":9,
        "imageUrl":"https://m.media-amazon.com/images/I/71r5EDssKdL._SL1500_.jpg",
        "altImageUrl": "https://image.shutterstock.com/image-illustration/technique-puzzle-complexity-difficulty-problems-260nw-1831072243.jpg",
        "amount": 0,
        "categories": ["Hardware","Technique"],
        "paymentPos": ["PayPal"],
        "departmentId": "234"
    }
]

//  zeige Daten aus der "api" an, hier Daten-Array
function getProducts(){
    return data;
}

//  finde das Produkt anhand der ID 
function getProductById(id) {
    let foundProduct = data.find(product=> product.id === id);
    return foundProduct;
}

function getProductBySearchValue(searchValue){
    return data.filter(product =>{
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })
}


function getProductByCategory(searchValue){
    let foundCategory = data.filter((product)=> product.categories);
    console.log(foundCategory)
    return foundCategory
}




export { getProducts, getProductById, getProductBySearchValue, getProductByCategory } 