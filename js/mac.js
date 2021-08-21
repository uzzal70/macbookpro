// Memory cost
function memoryCost(memoryId)
{
    const memoryProduct = document.getElementById('memory-cost');
    if (memoryId > 0) {
        memoryProduct.innerText = parseInt(memoryId);
    }
    else {
        memoryProduct.innerText = parseInt(memoryId);
    }
    totalCalculate();
}
// Storage cost 
function storageCost(storageId)
{
    const storageProduct = document.getElementById('storage-cost');
    if (storageId > 100) {
        storageProduct.innerText = parseInt(storageId);
    }
    else if (storageId > 0) {
        storageProduct.innerText = parseInt(storageId);
    }
    else {
        storageProduct.innerText = parseInt(storageId);
    }
    totalCalculate();
}

// Delivery cost 
function deliveryCost(deliveryId)
{
    const deliveryProduct = document.getElementById('delivery-cost');
    if (deliveryId > 0) {
        deliveryProduct.innerText = parseInt(deliveryId);
    }
    else {
        deliveryProduct.innerText = parseInt(deliveryId);
    }
    totalCalculate();
}

function getVelue(product)
{
    const productCost = document.getElementById(product + '-cost').innerText;
    const prouductPrice = parseInt(productCost);
    return prouductPrice;
}

function totalCalculate()
{
    const memoryPrice = getVelue('memory');
    const storagePrice = getVelue('storage');
    const deliveryCost = getVelue('delivery');
    const totalBestPrice = document.getElementById('best-price');
    const totalText = totalBestPrice.innerText;
    const bestPrice = parseInt(totalText);
    const totalPrice = memoryPrice + storagePrice + deliveryCost + bestPrice;
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
    // Last total cost
    const totalField = document.getElementById('total-cost');
    totalField.innerText = totalPrice;

}
// 20% Discount
function discountTotal()
{
    const matchCode = document.getElementById('cupon-code');
    if (matchCode.value == 'stevekaku') {
        const TotalPriceText = document.getElementById('total-price');
        const TotalPrice = parseFloat(TotalPriceText.innerText)
        const discount = TotalPrice / 5;
        const discountedTotal = TotalPrice - discount;
        document.getElementById('total-cost').innerText = discountedTotal;
        matchCode.value = '';
    }
}
// Memory cost buy Product
document.getElementById('lowest-cost').addEventListener('click', function ()
{
    memoryCost(0);
});
document.getElementById('heigest-cost').addEventListener('click', function ()
{
    memoryCost(180);
});
// Storage cost buy Product
document.getElementById('low-budget').addEventListener('click', function ()
{
    storageCost(0);
});
document.getElementById('medium-budget').addEventListener('click', function ()
{
    storageCost(100);
});
document.getElementById('heigest-budget').addEventListener('click', function ()
{
    storageCost(180);
});

// Delivery cost
document.getElementById('slow-delivery').addEventListener('click', function ()
{
    deliveryCost(0);
});
document.getElementById('fast-delivery').addEventListener('click', function ()
{
    deliveryCost(20);
});
document.getElementById('apply-btn').addEventListener('click', function ()
{
    discountTotal();
});
