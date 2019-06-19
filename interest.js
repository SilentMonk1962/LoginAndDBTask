//console.log(Date.parse(new Date('19 06 19')));

//console.log(Date.parse('19-06-19'));
//console.log(Date.parse("2019-01-17"));

const calculateAdvanceCost=(invoiceDateFromOrderPage,EPD,invoiceAmount,ROI)=>{
    let today= Date.parse(new Date()); 
    let payDaycycle=EPD*24*60*60*1000
    let invoiceDate=Date.parse(invoiceDateFromOrderPage);
    let expectedPayoutDate=invoiceDate + payDaycycle; 
    console.log(new Date(expectedPayoutDate));
    const diffTime = Math.abs(expectedPayoutDate- today);
    const daysRemainingforPayment = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let InterestMultiplier=ROI/365 
    if (daysRemainingforPayment<90){ 
    var munimBrokerage=Math.max(0.3,(0.01*daysRemainingforPayment));// it sets the value of brokerage to minimum of 0.3
}
else{
    var munimBrokerage=Math.min(0.9,(0.01*daysRemainingforPayment));// it sets our borkerage to max 0.9
}
    let advanceCostInterestPercent=daysRemainingforPayment*InterestMultiplier; //1009*0.049
    let overallMultiplier=munimBrokerage+advanceCostInterestPercent //
    const advancecostTotal=Math.round((overallMultiplier/100)*invoiceAmount)
    //console.log(advancecostTotal);
    console.log(`Difference between today and Expected Payout Days is ${daysRemainingforPayment} days and estimated cost for taking advance on this invoice is ₹ ${advancecostTotal} only.`)

}

calculateAdvanceCost('2019-05-17',45,100000,18)

