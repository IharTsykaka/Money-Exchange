module.exports = function makeExchange(currency) {
   let objCurrensy = {}
   
   let curH = 50;
   let curQ = 25;
   let curD = 10;
   let curN = 5;
   let curP = 1;
   
   if(currency <= 0) return {};
   if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

   let resH = Math.floor(currency/curH);
   if (resH > 0) {
    objCurrensy.H = resH;
    currency -= (curH*resH) 
   }
   let resQ = Math.floor(currency/curQ);
   if (resQ > 0) {
    objCurrensy.Q= resQ;
    currency -= (curQ*resQ) 
   }
   let resD = Math.floor(currency/curD);
   if (resD > 0) {
    objCurrensy.D = resD;
    currency -= (curD*resD) 
   }
   let resN = Math.floor(currency/curN);
   if (resN > 0) {
    objCurrensy.N = resN;
    currency -= (curN*resN) 
   }
   let resP = Math.floor(currency/curP);
   if (resP > 0) objCurrensy.P = resP;     
   
   return objCurrensy;
}
