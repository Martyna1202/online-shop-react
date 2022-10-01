const getProducts = async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    //Alles was returned wird wird automatisch zum promise
    return json;
    //setProducts(json) -> muss nicht aufgelöst werden, da in Json das array schon drinsteckt, nur wenn es returned wird wird es zum Promise, das liegt and der Async function
}

const getProductById = async (id) =>{
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const json = await res.json();
    //Alles was returned wird wird automatisch zum promise
    return json;
    //setProducts(json) -> muss nicht aufgelöst werden da in Json das array schon drinsteckt, nur wenn es returned wird wird es zum Promise, das liegt and der Async function
}

export { getProducts, getProductById}

 