function getAdditionalCost(inputId, priceValue) {
    document.getElementById(inputId).innerText = priceValue;
    getTotalPrice();
}

// setting value of 8GB memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    getAdditionalCost('memory-extra-cost', '0');
});
// setting value of 16GB memory
document.getElementById('memory-16gb').addEventListener('click', function () {
    getAdditionalCost('memory-extra-cost', '180');
});
// setting value of 256GB SSD
document.getElementById('ssd-256gb').addEventListener('click', function () {
    getAdditionalCost('storage-extra-cost', '0');
});
// setting value of 512GB SSD
document.getElementById('ssd-512gb').addEventListener('click', function () {
    getAdditionalCost('storage-extra-cost', '100');
});
// setting value of 1TB SSD
document.getElementById('ssd-1tb').addEventListener('click', function () {
    getAdditionalCost('storage-extra-cost', '180');
});
// free delivery charge
document.getElementById('free-charge-btn').addEventListener('click', function () {
    getAdditionalCost('delivery-charge', '0');
});
// include delivery charge
document.getElementById('include-charge-btn').addEventListener('click', function () {
    getAdditionalCost('delivery-charge', '20');
});

//keyup
document.getElementById('voucher-code-input').addEventListener('keyup', function () {
    const voucherCode = document.getElementById('voucher-code-input').value;

    if (voucherCode == 'stevekaku') {
        document.getElementById('voucher-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('voucher-btn').setAttribute('disabled', true);
    }
});

//change
document.getElementById('voucher-code-input').addEventListener('change', function () {
    const voucherCode = document.getElementById('voucher-code-input').value;

    if (voucherCode == 'stevekaku') {
        document.getElementById('voucher-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('voucher-btn').setAttribute('disabled', true);
    }
});
// handle voucher button
document.getElementById('voucher-btn').addEventListener('click', function () {
    const voucherCode = document.getElementById('voucher-code-input').value;
    if (voucherCode == 'stevekaku') {
        const previousPrice = document.getElementById('total-price').innerText;
        const previousPriceValue = parseFloat(previousPrice);
        const newVoucherPrice = previousPriceValue - previousPriceValue * 20 / 100;
        document.getElementById('voucher-total-price').innerText = newVoucherPrice;
    }
});

// calculate total price
function getTotalPrice() {
    const memoryCostText = document.getElementById('memory-extra-cost').innerText;
    const memoryCostValue = parseInt(memoryCostText);
    const ssdCostText = document.getElementById('storage-extra-cost').innerText;
    const ssdCostValue = parseInt(ssdCostText);
    const deliveryChargeText = document.getElementById('delivery-charge').innerText;
    const deliveryChargeValue = parseInt(deliveryChargeText);
    // summing all costs
    const totalPrice = 1299 + memoryCostValue + ssdCostValue + deliveryChargeValue;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('voucher-total-price').innerText = totalPrice;
}
