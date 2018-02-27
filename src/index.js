module.exports = function makeExchange(currency) {
    obj = {};
    if (currency < 1) {
        return obj;
    }
    if (currency > 10000) {
        obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return obj;
    }
    else {
        while (currency != 0) {
            if (currency >= 50) {
                obj["H"] = Math.floor(currency / 50);
                currency -= obj["H"] * 50;
            }
            if (currency >= 25) {
                obj["Q"] = Math.floor(currency / 25);
                currency -= obj["Q"] * 25;
            }
            if (currency >= 10) {
                obj["D"] = Math.floor(currency / 10);
                currency -= obj["D"] * 10;
            }
            if (currency >= 5) {
                obj["N"] = Math.floor(currency / 5);
                currency -= obj["N"] * 5;
            }
            if (currency >= 1) {
                obj["P"] = currency;
                currency = 0;
            }
            return obj;
        }
    }
}
