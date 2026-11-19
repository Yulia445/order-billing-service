// Data Coupling: функція приймає виключно примітивні параметри city та weightKg
function calculateDeliveryCost(city, weightKg) {
    const baseRate = city === "Ivano-Frankivsk" ? 50.0 : 110.0;
    return baseRate + (weightKg * 15.0);
}

//  Окрема функція для стандартного розрахунку з явним параметром taxRate
function processStandardInvoice(amount, city, weightKg, taxRate = 0.20) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = (amount * (1 + taxRate)) + delivery;
    return { status: "PROCESSED", total: Number(total.toFixed(2)) };
}

// Окрема функція для розрахунку без податку (без прапорця modeFlag)
function processTaxExemptInvoice(amount, city, weightKg) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = amount + delivery;
    return { status: "TAX_EXEMPT", total: Number(total.toFixed(2)) };
}

module.exports = {
    calculateDeliveryCost,
    processStandardInvoice,
    processTaxExemptInvoice
};
