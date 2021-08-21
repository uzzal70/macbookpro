// Memory cost
function memoryCost(memoryId)
{
    const lowestCost = 0;
    const heigestCost = 180;
    const memoryProduct = document.getElementById('extra-memory-cost');
    if (memoryId > 0) {
        memoryProduct.innerText = parseInt(heigestCost);
    }
    else {
        memoryProduct.innerText = parseInt(lowestCost);
    }
}
// Storage cost 
function storageCost(storageId)
{
    const lowBudget = 0;
    const mediumBudget = 100;
    const heigestBudget = 180;
    const storageProduct = document.getElementById('extra-storage-cost');
    if (storageId > 100) {
        storageProduct.innerText = parseInt(heigestBudget);
    }
    else if (storageId > 0) {
        storageProduct.innerText = parseInt(mediumBudget);
    }
    else {
        storageProduct.innerText = parseInt(lowBudget);
    }
}

// Delivery cost 
function deliveryCost(deliveryId)
{
    const slowDelivery = 0;
    const fastDelivery = 20;
    const memoryProduct = document.getElementById('delivery-charge');
    if (deliveryId > 0) {
        memoryProduct.innerText = parseInt(fastDelivery);
    }
    else {
        memoryProduct.innerText = parseInt(slowDelivery);
    }
}

// Memory cost buy Product
document.getElementById('lowest-cost').addEventListener('click', function ()
{
    const lowestCost = 0;
    memoryCost(lowestCost);
    // const lowestCost = 0;
    // const bestProduct = document.getElementById('extra-memory-cost');
    // bestProduct.innerText = parseInt(lowestCost);
})
document.getElementById('high-cost').addEventListener('click', function ()
{
    const heigestCost = 180;
    memoryCost(heigestCost);
    // const highCost = 180;
    // const bestProduct = document.getElementById('extra-memory-cost');
    // bestProduct.innerText = parseInt(highCost);
})

// Storage cost buy Product
document.getElementById('low-budget').addEventListener('click', function ()
{
    const lowBudget = 0;
    storageCost(lowBudget);
})
document.getElementById('medium-budget').addEventListener('click', function ()
{
    const mediumBudget = 100;
    storageCost(mediumBudget);
})
document.getElementById('heigest-budget').addEventListener('click', function ()
{
    const heigestBudget = 180;
    storageCost(heigestBudget);
})

// Delivery cost
document.getElementById('slow-delivery').addEventListener('click', function ()
{
    const slowDelivery = 0;
    deliveryCost(slowDelivery);
})
document.getElementById('fast-delivery').addEventListener('click', function ()
{
    const fastDelivery = 20;
    deliveryCost(fastDelivery);
})


