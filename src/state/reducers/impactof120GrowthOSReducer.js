import sum from "../../utils/sum";
const initialState = {
    // impactof120GrowthOSG26: 240,
    // impactof120GrowthOSH26: 268,
    // impactof120GrowthOSI26: 321,
    // impactof120GrowthOSJ26: 401,
    // impactof120GrowthOSK26: 513,

    impactof120GrowthOSE11: 0,
    impactof120GrowthOSF11: 0,
    impactof120GrowthOSG11: 0,
    impactof120GrowthOSH11: 0,
    impactof120GrowthOSI11: 0,
    impactof120GrowthOSJ11: 0,
    impactof120GrowthOSK11: 0,
    impactof120GrowthOSE12: 0,
    impactof120GrowthOSF12: 0,
    impactof120GrowthOSG12: 0,
    impactof120GrowthOSH12: 0,
    impactof120GrowthOSI12: 0,
    impactof120GrowthOSJ12: 0,
    impactof120GrowthOSK12: 0,
    impactof120GrowthOSE13: 0,
    impactof120GrowthOSF13: 0,
    impactof120GrowthOSG13: 0,
    impactof120GrowthOSH13: 0,
    impactof120GrowthOSI13: 0,
    impactof120GrowthOSJ13: 0,
    impactof120GrowthOSK13: 0,
    impactof120GrowthOSF14: 0,
    impactof120GrowthOSG14: 0,
    impactof120GrowthOSH14: 0,
    impactof120GrowthOSI14: 0,
    impactof120GrowthOSJ14: 0,
    impactof120GrowthOSK14: 0,
    impactof120GrowthOSE15: 0,
    impactof120GrowthOSF15: 0,
    impactof120GrowthOSG15: 0,
    impactof120GrowthOSH15: 0,
    impactof120GrowthOSI15: 0,
    impactof120GrowthOSJ15: 0,
    impactof120GrowthOSK15: 0,
    impactof120GrowthOSE16: 0,
    impactof120GrowthOSF16: 0,
    impactof120GrowthOSG16: 0,
    impactof120GrowthOSH16: 0,
    impactof120GrowthOSI16: 0,
    impactof120GrowthOSJ16: 0,
    impactof120GrowthOSK16: 0,
    impactof120GrowthOSF18: 0,
    impactof120GrowthOSG18: 0,
    impactof120GrowthOSH18: 0,
    impactof120GrowthOSI18: 0,
    impactof120GrowthOSJ18: 0,
    impactof120GrowthOSK18: 0,
    impactof120GrowthOSF19: 0,
    impactof120GrowthOSG19: 0,
    impactof120GrowthOSH19: 0,
    impactof120GrowthOSI19: 0,
    impactof120GrowthOSJ19: 0,
    impactof120GrowthOSK19: 0,
    impactof120GrowthOSF20: 0,
    impactof120GrowthOSG20: 0,
    impactof120GrowthOSH20: 0,
    impactof120GrowthOSI20: 0,
    impactof120GrowthOSJ20: 0,
    impactof120GrowthOSK20: 0,
    impactof120GrowthOSF21: 0,
    impactof120GrowthOSG21: 0,
    impactof120GrowthOSH21: 0,
    impactof120GrowthOSI21: 0,
    impactof120GrowthOSJ21: 0,
    impactof120GrowthOSK21: 0,
    impactof120GrowthOSF27: 0,
    impactof120GrowthOSE23: 0,
    impactof120GrowthOSE27: 0,
    impactof120GrowthOSF23: 0,
    impactof120GrowthOSG23: 0,
    impactof120GrowthOSF24: 0,
    impactof120GrowthOSG24: 0,
    impactof120GrowthOSH24: 0,
    impactof120GrowthOSI24: 0,
    impactof120GrowthOSJ24: 0,
    impactof120GrowthOSK24: 0,
    impactof120GrowthOSF25: 0,
    impactof120GrowthOSG25: 0,
    impactof120GrowthOSG26: 0,
    impactof120GrowthOSG27: 0,
    impactof120GrowthOSH23: 0,
    impactof120GrowthOSH25: 0,
    impactof120GrowthOSH26: 0,
    impactof120GrowthOSH27: 0,
    impactof120GrowthOSI23: 0,
    impactof120GrowthOSI25: 0,
    impactof120GrowthOSI26: 0,
    impactof120GrowthOSI27: 0,
    impactof120GrowthOSJ23: 0,
    impactof120GrowthOSJ26: 0,
    impactof120GrowthOSJ25: 0,
    impactof120GrowthOSJ27: 0,
    impactof120GrowthOSK23: 0,
    impactof120GrowthOSK25: 0,
    impactof120GrowthOSF26: 0,
    impactof120GrowthOSK26: 0,
    impactof120GrowthOSK27: 0,
    impactof120GrowthOSE32: 0,
    impactof120GrowthOSF32: 0,
    impactof120GrowthOSG32: 0,
    impactof120GrowthOSH32: 0,
    impactof120GrowthOSI32: 0,
    impactof120GrowthOSJ32: 0,
    impactof120GrowthOSK32: 0,
    impactof120GrowthOSE33: 0,
    impactof120GrowthOSF33: 0,
    impactof120GrowthOSG33: 0,
    impactof120GrowthOSH33: 0,
    impactof120GrowthOSI33: 0,
    impactof120GrowthOSJ33: 0,
    impactof120GrowthOSK33: 0,
    impactof120GrowthOSE34: 0,
    impactof120GrowthOSF34: 0,
    impactof120GrowthOSG34: 0,
    impactof120GrowthOSH34: 0,
    impactof120GrowthOSI34: 0,
    impactof120GrowthOSJ34: 0,
    impactof120GrowthOSK34: 0,
    impactof120GrowthOSE35: 0,
    impactof120GrowthOSF35: 0,
    impactof120GrowthOSG35: 0,
    impactof120GrowthOSH35: 0,
    impactof120GrowthOSI35: 0,
    impactof120GrowthOSJ35: 0,
    impactof120GrowthOSK35: 0,
    impactof120GrowthOSE36: 0,
    impactof120GrowthOSF36: 0,
    impactof120GrowthOSG36: 0,
    impactof120GrowthOSH36: 0,
    impactof120GrowthOSI36: 0,
    impactof120GrowthOSJ36: 0,
    impactof120GrowthOSK36: 0,
    impactof120GrowthOSE37: 0,
    impactof120GrowthOSF37: 0,
    impactof120GrowthOSG37: 0,
    impactof120GrowthOSH37: 0,
    impactof120GrowthOSI37: 0,
    impactof120GrowthOSJ37: 0,
    impactof120GrowthOSK37: 0,
    impactof120GrowthOSE42: 0,
    impactof120GrowthOSF42: 0,
    impactof120GrowthOSG42: 0,
    impactof120GrowthOSH42: 0,
    impactof120GrowthOSI42: 0,
    impactof120GrowthOSJ42: 0,
    impactof120GrowthOSK42: 0,
    impactof120GrowthOSL42: 0,
    impactof120GrowthOSM42: 0,
    impactof120GrowthOSN42: 0,
    impactof120GrowthOSO42: 0,
    impactof120GrowthOSE43: 0,
    impactof120GrowthOSF43: 0,
    impactof120GrowthOSG43: 0,
    impactof120GrowthOSH43: 0,
    impactof120GrowthOSI43: 0,
    impactof120GrowthOSJ43: 0,
    impactof120GrowthOSK43: 0,
    impactof120GrowthOSL43: 0,
    impactof120GrowthOSM43: 0,
    impactof120GrowthOSN43: 0,
    impactof120GrowthOSO43: 0,
    impactof120GrowthOSE48: 0,
    impactof120GrowthOSF48: 0,
    impactof120GrowthOSG48: 0,
    impactof120GrowthOSH48: 0,
    impactof120GrowthOSI48: 0,
    impactof120GrowthOSJ48: 0,
    impactof120GrowthOSK48: 0,
    impactof120GrowthOSE49: 0,
    impactof120GrowthOSF49: 0,
    impactof120GrowthOSG49: 0,
    impactof120GrowthOSH49: 0,
    impactof120GrowthOSI49: 0,
    impactof120GrowthOSJ49: 0,
    impactof120GrowthOSK49: 0,
    impactof120GrowthOSE50: 0,
    impactof120GrowthOSF50: 0,
    impactof120GrowthOSG50: 0,
    impactof120GrowthOSH50: 0,
    impactof120GrowthOSI50: 0,
    impactof120GrowthOSJ50: 0,
    impactof120GrowthOSK50: 0,
    impactof120GrowthOSE51: 0,
    impactof120GrowthOSF51: 0,
    impactof120GrowthOSG51: 0,
    impactof120GrowthOSH51: 0,
    impactof120GrowthOSI51: 0,
    impactof120GrowthOSJ51: 0,
    impactof120GrowthOSK51: 0,
    impactof120GrowthOSST42: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'impactof120GrowthOSE26') {
        return {
            ...state, //copying the original state
            impactof120GrowthOSE26: parseFloat(action.payload)
        }
    } else if (action.type === 'impactof120GrowthOSAll') {

        const { leadGeneration, conversion, referrals, reducingAttrition, buyingLifeTime, customerReactivation, CustomerFinancialValues, purchaseFrequency, averageTransactionValue, profitMargin, clientInputs, impactof120GrowthOSE26 } = action.payload

        const { leadGenerationD15, leadGenerationD21, leadGenerationE21, leadGenerationF21, leadGenerationG21, leadGenerationH21, leadGenerationI21 } = leadGeneration

        const { conversionD13, conversionD18, conversionE18, conversionF18, conversionG18, conversionH18, conversionI18, conversionD26, conversionE26, conversionF26, conversionG26, conversionH26, conversionI26 } = conversion

        const { referralsD12, referralsD18, referralsE18, referralsF18, referralsG18, referralsH18, referralsI18 } = referrals

        const { reducingAttritionD26, reducingAttritionE26, reducingAttritionF26, reducingAttritionG26, reducingAttritionH26, reducingAttritionI26, reducingAttritionD23, reducingAttritionE23, reducingAttritionF23, reducingAttritionG23, reducingAttritionH23, reducingAttritionI23 } = reducingAttrition

        const { buyingLifeTimeD19, buyingLifeTimeE19, buyingLifeTimeF19, buyingLifeTimeG19, buyingLifeTimeH19, buyingLifeTimeI19, buyingLifeTimeD18, buyingLifeTimeE18, buyingLifeTimeF18, buyingLifeTimeG18, buyingLifeTimeH18, buyingLifeTimeI18 } = buyingLifeTime

        const { customerReactivationD18, customerReactivationE18, customerReactivationF18, customerReactivationG18, customerReactivationH18, customerReactivationI18 } = customerReactivation

        const { CustomerFinancialValuesD20, CustomerFinancialValuesD24, CustomerFinancialValuesD25, CustomerFinancialValuesD26, CustomerFinancialValuesD27 } = CustomerFinancialValues

        const { purchaseFrequencyD12, purchaseFrequencyD18, purchaseFrequencyE18, purchaseFrequencyF18, purchaseFrequencyG18, purchaseFrequencyH18, purchaseFrequencyI18 } = purchaseFrequency

        const { averageTransactionValueD12, averageTransactionValueD18, averageTransactionValueE18, averageTransactionValueF18, averageTransactionValueG18, averageTransactionValueH18, averageTransactionValueI18 } = averageTransactionValue

        const { profitMarginD12, profitMarginD18, profitMarginE18, profitMarginF18, profitMarginG18, profitMarginH18, profitMarginI18 } = profitMargin

        const { clientInputsH41 } = clientInputs

        let impactof120GrowthOSE11 = parseFloat(leadGenerationD15).toFixed(2);
        let impactof120GrowthOSF11 = parseFloat(leadGenerationD21).toFixed(2);
        let impactof120GrowthOSG11 = parseFloat(leadGenerationE21).toFixed(2);
        let impactof120GrowthOSH11 = parseFloat(leadGenerationF21).toFixed(2);
        let impactof120GrowthOSI11 = parseFloat(leadGenerationG21).toFixed(2);
        let impactof120GrowthOSJ11 = parseFloat(leadGenerationH21).toFixed(2);
        let impactof120GrowthOSK11 = parseFloat(leadGenerationI21).toFixed(2);

        let impactof120GrowthOSE12 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF12 = parseFloat(conversionD18).toFixed(2);
        let impactof120GrowthOSG12 = parseFloat(conversionE18).toFixed(2);
        let impactof120GrowthOSH12 = parseFloat(conversionF18).toFixed(2);
        let impactof120GrowthOSI12 = parseFloat(conversionG18).toFixed(2);
        let impactof120GrowthOSJ12 = parseFloat(conversionH18).toFixed(2);
        let impactof120GrowthOSK12 = parseFloat(conversionI18).toFixed(2);

        let impactof120GrowthOSE13 = (parseFloat(impactof120GrowthOSE11) * parseFloat(impactof120GrowthOSE12)).toFixed(2);
        let impactof120GrowthOSF13 = (parseFloat(impactof120GrowthOSF11) * parseFloat(impactof120GrowthOSF12)).toFixed(2);
        let impactof120GrowthOSG13 = (parseFloat(impactof120GrowthOSG11) * parseFloat(impactof120GrowthOSG12)).toFixed(2);
        let impactof120GrowthOSH13 = (parseFloat(impactof120GrowthOSH11) * parseFloat(impactof120GrowthOSH12)).toFixed(2);
        let impactof120GrowthOSI13 = (parseFloat(impactof120GrowthOSI11) * parseFloat(impactof120GrowthOSI12)).toFixed(2);
        let impactof120GrowthOSJ13 = (parseFloat(impactof120GrowthOSJ11) * parseFloat(impactof120GrowthOSJ12)).toFixed(2);
        let impactof120GrowthOSK13 = (parseFloat(impactof120GrowthOSK11) * parseFloat(impactof120GrowthOSK12)).toFixed(2);

        //let impactof120GrowthOSE14 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF14 = parseFloat(conversionD26).toFixed(2);
        let impactof120GrowthOSG14 = parseFloat(conversionE26).toFixed(2);
        let impactof120GrowthOSH14 = (parseFloat(conversionF26) + parseFloat(impactof120GrowthOSG14)).toFixed(2);
        let impactof120GrowthOSI14 = (parseFloat(conversionG26) + parseFloat(impactof120GrowthOSH14)).toFixed(2);
        let impactof120GrowthOSJ14 = (parseFloat(conversionH26) + parseFloat(impactof120GrowthOSI14)).toFixed(2);
        let impactof120GrowthOSK14 = parseFloat(conversionI26).toFixed(2);

        let impactof120GrowthOSE15 = parseFloat(referralsD12).toFixed(2);
        let impactof120GrowthOSF15 = parseFloat(referralsD18).toFixed(2);
        let impactof120GrowthOSG15 = parseFloat(referralsE18).toFixed(2);
        let impactof120GrowthOSH15 = parseFloat(referralsF18).toFixed(2);
        let impactof120GrowthOSI15 = parseFloat(referralsG18).toFixed(2);
        let impactof120GrowthOSJ15 = parseFloat(referralsH18).toFixed(2);
        let impactof120GrowthOSK15 = (parseFloat(referralsI18) + parseFloat(impactof120GrowthOSJ15)).toFixed(2);

        let impactof120GrowthOSE16 = parseFloat(sum(impactof120GrowthOSE13, impactof120GrowthOSE15)).toFixed(2);
        let impactof120GrowthOSF16 = parseFloat(sum(impactof120GrowthOSF13, impactof120GrowthOSF14, impactof120GrowthOSF15)).toFixed(2);
        let impactof120GrowthOSG16 = parseFloat(sum(impactof120GrowthOSG13, impactof120GrowthOSG14, impactof120GrowthOSG15)).toFixed(2);
        let impactof120GrowthOSH16 = parseFloat(sum(impactof120GrowthOSH13, impactof120GrowthOSH14, impactof120GrowthOSH15)).toFixed(2);
        let impactof120GrowthOSI16 = parseFloat(sum(impactof120GrowthOSI13, impactof120GrowthOSI14, impactof120GrowthOSI15)).toFixed(2);
        let impactof120GrowthOSJ16 = parseFloat(sum(impactof120GrowthOSJ13, impactof120GrowthOSJ14, impactof120GrowthOSJ15)).toFixed(2);
        let impactof120GrowthOSK16 = parseFloat(sum(impactof120GrowthOSK13, impactof120GrowthOSK14, impactof120GrowthOSK15)).toFixed(2);

        //let impactof120GrowthOSE18 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF18 = parseFloat(reducingAttritionD26).toFixed(2);
        let impactof120GrowthOSG18 = parseFloat(reducingAttritionE26).toFixed(2);
        let impactof120GrowthOSH18 = parseFloat(reducingAttritionF26).toFixed(2);
        let impactof120GrowthOSI18 = parseFloat(reducingAttritionG26).toFixed(2);
        let impactof120GrowthOSJ18 = parseFloat(reducingAttritionH26).toFixed(2);
        let impactof120GrowthOSK18 = parseFloat(reducingAttritionI26).toFixed(2);

        //let impactof120GrowthOSE19 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF19 = parseFloat(buyingLifeTimeD19).toFixed(2);
        let impactof120GrowthOSG19 = parseFloat(buyingLifeTimeE19).toFixed(2);
        let impactof120GrowthOSH19 = parseFloat(buyingLifeTimeF19).toFixed(2);
        let impactof120GrowthOSI19 = parseFloat(buyingLifeTimeG19).toFixed(2);
        let impactof120GrowthOSJ19 = parseFloat(buyingLifeTimeH19).toFixed(2);
        let impactof120GrowthOSK19 = parseFloat(buyingLifeTimeI19).toFixed(2);

        //let impactof120GrowthOSE20 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF20 = parseFloat(customerReactivationD18).toFixed(2);
        let impactof120GrowthOSG20 = parseFloat(customerReactivationE18).toFixed(2);
        let impactof120GrowthOSH20 = parseFloat(customerReactivationF18).toFixed(2);
        let impactof120GrowthOSI20 = parseFloat(customerReactivationG18).toFixed(2);
        let impactof120GrowthOSJ20 = parseFloat(customerReactivationH18).toFixed(2);
        let impactof120GrowthOSK20 = parseFloat(customerReactivationI18).toFixed(2);

        let impactof120GrowthOSF21 = parseFloat(sum(impactof120GrowthOSF18, impactof120GrowthOSF14, impactof120GrowthOSF20)).toFixed(2);
        let impactof120GrowthOSG21 = parseFloat(sum(impactof120GrowthOSG18, impactof120GrowthOSG14, impactof120GrowthOSG20)).toFixed(2);
        let impactof120GrowthOSH21 = parseFloat(sum(impactof120GrowthOSH18, impactof120GrowthOSH14, impactof120GrowthOSH20)).toFixed(2);
        let impactof120GrowthOSI21 = parseFloat(sum(impactof120GrowthOSI18, impactof120GrowthOSI14, impactof120GrowthOSI20)).toFixed(2);
        let impactof120GrowthOSJ21 = parseFloat(sum(impactof120GrowthOSJ18, impactof120GrowthOSJ14, impactof120GrowthOSJ20)).toFixed(2);
        let impactof120GrowthOSK21 = parseFloat(sum(impactof120GrowthOSK18, impactof120GrowthOSK14, impactof120GrowthOSK20)).toFixed(2);

        //------
        let impactof120GrowthOSF27 = (parseFloat(impactof120GrowthOSF16) + parseFloat(impactof120GrowthOSF21)).toFixed(2);
        let impactof120GrowthOSE23 = parseFloat(CustomerFinancialValuesD20).toFixed(2);
        let impactof120GrowthOSE27 = (parseFloat(impactof120GrowthOSE23) - parseFloat(impactof120GrowthOSE26)).toFixed(2);

        let impactof120GrowthOSF23 = parseFloat(impactof120GrowthOSE27).toFixed(2);
        let impactof120GrowthOSG23 = parseFloat(impactof120GrowthOSE27).toFixed(2);

        //let impactof120GrowthOSE24 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF24 = (parseFloat(impactof120GrowthOSF16) + parseFloat(impactof120GrowthOSF21)).toFixed(2);
        let impactof120GrowthOSG24 = (parseFloat(impactof120GrowthOSG16) + parseFloat(impactof120GrowthOSG21)).toFixed(2);
        let impactof120GrowthOSH24 = (parseFloat(impactof120GrowthOSH16) + parseFloat(impactof120GrowthOSH21)).toFixed(2);
        let impactof120GrowthOSI24 = (parseFloat(impactof120GrowthOSI16) + parseFloat(impactof120GrowthOSI21)).toFixed(2);
        let impactof120GrowthOSJ24 = (parseFloat(impactof120GrowthOSJ16) + parseFloat(impactof120GrowthOSJ21)).toFixed(2);
        let impactof120GrowthOSK24 = (parseFloat(impactof120GrowthOSK16) + parseFloat(impactof120GrowthOSK21)).toFixed(2);

        //let impactof120GrowthOSE25 = parseFloat(conversionD13).toFixed(2);
        let impactof120GrowthOSF25 = parseFloat(sum(impactof120GrowthOSF23, impactof120GrowthOSF24)).toFixed(2);
        let impactof120GrowthOSG25 = parseFloat(sum(impactof120GrowthOSG23, impactof120GrowthOSG24)).toFixed(2);
        let impactof120GrowthOSG26 = (parseFloat(impactof120GrowthOSG23) * parseFloat(reducingAttritionE23)).toFixed(2);
        let impactof120GrowthOSG27 = (parseFloat(impactof120GrowthOSG25) - parseFloat(impactof120GrowthOSG26)).toFixed(2);
        let impactof120GrowthOSH23 = parseFloat(impactof120GrowthOSG27).toFixed(2);


        let impactof120GrowthOSH25 = parseFloat(sum(impactof120GrowthOSH23, impactof120GrowthOSH24)).toFixed(2);
        let impactof120GrowthOSH26 = (parseFloat(impactof120GrowthOSH23) * parseFloat(reducingAttritionF23)).toFixed(2);
        let impactof120GrowthOSH27 = (parseFloat(impactof120GrowthOSH25) - parseFloat(impactof120GrowthOSH26)).toFixed(2);


        let impactof120GrowthOSI23 = parseFloat(impactof120GrowthOSH27).toFixed(2);
        let impactof120GrowthOSI25 = parseFloat(sum(impactof120GrowthOSI23, impactof120GrowthOSI24)).toFixed(2);
        let impactof120GrowthOSI26 = (parseFloat(impactof120GrowthOSI23) * parseFloat(reducingAttritionG23)).toFixed(2);
        let impactof120GrowthOSI27 = (parseFloat(impactof120GrowthOSI25) - parseFloat(impactof120GrowthOSI26)).toFixed(2);
        let impactof120GrowthOSJ23 = parseFloat(impactof120GrowthOSI27).toFixed(2);


        let impactof120GrowthOSJ26 = (parseFloat(impactof120GrowthOSJ23) * parseFloat(reducingAttritionH23)).toFixed(2);
        let impactof120GrowthOSJ25 = parseFloat(sum(impactof120GrowthOSJ23, impactof120GrowthOSJ24)).toFixed(2);
        let impactof120GrowthOSJ27 = (parseFloat(impactof120GrowthOSJ25) - parseFloat(impactof120GrowthOSJ26)).toFixed(2);
        let impactof120GrowthOSK23 = parseFloat(impactof120GrowthOSJ27).toFixed(2);
        let impactof120GrowthOSK25 = parseFloat(sum(impactof120GrowthOSK23, impactof120GrowthOSK24)).toFixed(2);

        //let impactof120GrowthOSE26 = (parseFloat(impactof120GrowthOSE11) * parseFloat(impactof120GrowthOSE12)).toFixed(2);
        let impactof120GrowthOSF26 = (parseFloat(impactof120GrowthOSF23) * parseFloat(reducingAttritionD23)).toFixed(2);
        let impactof120GrowthOSK26 = (parseFloat(impactof120GrowthOSK23) * parseFloat(reducingAttritionI23)).toFixed(2);
        let impactof120GrowthOSK27 = (parseFloat(impactof120GrowthOSK25) - parseFloat(impactof120GrowthOSK26)).toFixed(2);

        let impactof120GrowthOSE32 = parseFloat(purchaseFrequencyD12).toFixed(2);
        let impactof120GrowthOSF32 = parseFloat(purchaseFrequencyD18).toFixed(2);
        let impactof120GrowthOSG32 = parseFloat(purchaseFrequencyE18).toFixed(2);
        let impactof120GrowthOSH32 = parseFloat(purchaseFrequencyF18).toFixed(2);
        let impactof120GrowthOSI32 = parseFloat(purchaseFrequencyG18).toFixed(2);
        let impactof120GrowthOSJ32 = parseFloat(purchaseFrequencyH18).toFixed(2);
        let impactof120GrowthOSK32 = parseFloat(purchaseFrequencyI18).toFixed(2);

        let impactof120GrowthOSE33 = parseFloat(averageTransactionValueD12).toFixed(2);
        let impactof120GrowthOSF33 = parseFloat(averageTransactionValueD18).toFixed(2);
        let impactof120GrowthOSG33 = parseFloat(averageTransactionValueE18).toFixed(2);
        let impactof120GrowthOSH33 = parseFloat(averageTransactionValueF18).toFixed(2);
        let impactof120GrowthOSI33 = parseFloat(averageTransactionValueG18).toFixed(2);
        let impactof120GrowthOSJ33 = parseFloat(averageTransactionValueH18).toFixed(2);
        let impactof120GrowthOSK33 = parseFloat(averageTransactionValueI18).toFixed(2);

        let impactof120GrowthOSE34 = parseFloat(profitMarginD12).toFixed(2);
        let impactof120GrowthOSF34 = parseFloat(profitMarginD18).toFixed(2);
        let impactof120GrowthOSG34 = parseFloat(profitMarginE18).toFixed(2);
        let impactof120GrowthOSH34 = parseFloat(profitMarginF18).toFixed(2);
        let impactof120GrowthOSI34 = parseFloat(profitMarginG18).toFixed(2);
        let impactof120GrowthOSJ34 = parseFloat(profitMarginH18).toFixed(2);
        let impactof120GrowthOSK34 = parseFloat(profitMarginI18).toFixed(2);

        let impactof120GrowthOSE35 = (parseFloat(impactof120GrowthOSE23) * parseFloat(impactof120GrowthOSE32) * parseFloat(impactof120GrowthOSE33)).toFixed(2);
        let impactof120GrowthOSF35 = (parseFloat(impactof120GrowthOSF27) * parseFloat(impactof120GrowthOSF32) * parseFloat(impactof120GrowthOSF33)).toFixed(2);
        let impactof120GrowthOSG35 = (parseFloat(impactof120GrowthOSG27) * parseFloat(impactof120GrowthOSG32) * parseFloat(impactof120GrowthOSG33)).toFixed(2);
        let impactof120GrowthOSH35 = (parseFloat(impactof120GrowthOSH27) * parseFloat(impactof120GrowthOSH32) * parseFloat(impactof120GrowthOSH33)).toFixed(2);
        let impactof120GrowthOSI35 = (parseFloat(impactof120GrowthOSI27) * parseFloat(impactof120GrowthOSI32) * parseFloat(impactof120GrowthOSI33)).toFixed(2);
        let impactof120GrowthOSJ35 = (parseFloat(impactof120GrowthOSJ27) * parseFloat(impactof120GrowthOSJ32) * parseFloat(impactof120GrowthOSJ33)).toFixed(2);
        let impactof120GrowthOSK35 = (parseFloat(impactof120GrowthOSK27) * parseFloat(impactof120GrowthOSK32) * parseFloat(impactof120GrowthOSK33)).toFixed(2);

        let impactof120GrowthOSE36 = (parseFloat(impactof120GrowthOSE23) * parseFloat(impactof120GrowthOSE32) * parseFloat(impactof120GrowthOSE33) * parseFloat(impactof120GrowthOSE34)).toFixed(2);
        let impactof120GrowthOSF36 = (parseFloat(impactof120GrowthOSF27) * parseFloat(impactof120GrowthOSF32) * parseFloat(impactof120GrowthOSF33) * parseFloat(impactof120GrowthOSF34)).toFixed(2);
        let impactof120GrowthOSG36 = (parseFloat(impactof120GrowthOSG27) * parseFloat(impactof120GrowthOSG32) * parseFloat(impactof120GrowthOSG33) * parseFloat(impactof120GrowthOSG34)).toFixed(2);
        let impactof120GrowthOSH36 = (parseFloat(impactof120GrowthOSH27) * parseFloat(impactof120GrowthOSH32) * parseFloat(impactof120GrowthOSH33) * parseFloat(impactof120GrowthOSH33)).toFixed(2);
        let impactof120GrowthOSI36 = (parseFloat(impactof120GrowthOSI27) * parseFloat(impactof120GrowthOSI32) * parseFloat(impactof120GrowthOSI33) * parseFloat(impactof120GrowthOSI34)).toFixed(2);
        let impactof120GrowthOSJ36 = (parseFloat(impactof120GrowthOSJ27) * parseFloat(impactof120GrowthOSJ32) * parseFloat(impactof120GrowthOSJ33) * parseFloat(impactof120GrowthOSJ34)).toFixed(2);
        let impactof120GrowthOSK36 = (parseFloat(impactof120GrowthOSK27) * parseFloat(impactof120GrowthOSK32) * parseFloat(impactof120GrowthOSK33) * parseFloat(impactof120GrowthOSK34)).toFixed(2);

        let impactof120GrowthOSE37 = (parseFloat(impactof120GrowthOSE36) * parseFloat(clientInputsH41)).toFixed(2);
        let impactof120GrowthOSF37 = (parseFloat(impactof120GrowthOSF36) * parseFloat(clientInputsH41)).toFixed(2);
        let impactof120GrowthOSG37 = (parseFloat(impactof120GrowthOSG26) * parseFloat(clientInputsH41)).toFixed(2);
        let impactof120GrowthOSH37 = (parseFloat(impactof120GrowthOSH36) * parseFloat(clientInputsH41)).toFixed(2);
        let impactof120GrowthOSI37 = (parseFloat(impactof120GrowthOSI36) * parseFloat(clientInputsH41)).toFixed(2);
        let impactof120GrowthOSJ37 = (parseFloat(impactof120GrowthOSJ36) * parseFloat(clientInputsH41)).toFixed(2);
        let impactof120GrowthOSK37 = (parseFloat(impactof120GrowthOSK36) * parseFloat(clientInputsH41)).toFixed(2);

        let impactof120GrowthOSE42 = (parseFloat(10000000)).toFixed(2);
        let impactof120GrowthOSF42 = (parseFloat(impactof120GrowthOSG35)).toFixed(2);
        let impactof120GrowthOSG42 = ((parseFloat(impactof120GrowthOSF42) - parseFloat(impactof120GrowthOSE42)) / parseFloat(impactof120GrowthOSF42)).toFixed(2);
        let impactof120GrowthOSH42 = (parseFloat(impactof120GrowthOSH35)).toFixed(2);
        let impactof120GrowthOSI42 = ((parseFloat(impactof120GrowthOSH42) - parseFloat(impactof120GrowthOSF42)) / parseFloat(impactof120GrowthOSF42)).toFixed(2);
        let impactof120GrowthOSJ42 = (parseFloat(impactof120GrowthOSI35)).toFixed(2);
        let impactof120GrowthOSK42 = ((parseFloat(impactof120GrowthOSJ42) - parseFloat(impactof120GrowthOSH42)) / parseFloat(impactof120GrowthOSH42)).toFixed(2);
        let impactof120GrowthOSL42 = (parseFloat(impactof120GrowthOSJ35)).toFixed(2);
        let impactof120GrowthOSM42 = ((parseFloat(impactof120GrowthOSL42) - parseFloat(impactof120GrowthOSJ42)) / parseFloat(impactof120GrowthOSJ42)).toFixed(2);
        let impactof120GrowthOSN42 = (parseFloat(impactof120GrowthOSK35)).toFixed(2);
        let impactof120GrowthOSO42 = ((parseFloat(impactof120GrowthOSN42) - parseFloat(impactof120GrowthOSL42)) / parseFloat(impactof120GrowthOSL42)).toFixed(2);

        let impactof120GrowthOSE43 = (parseFloat(3500000)).toFixed(2);
        let impactof120GrowthOSF43 = (parseFloat(impactof120GrowthOSG36)).toFixed(2);
        let impactof120GrowthOSG43 = ((parseFloat(impactof120GrowthOSF43) - parseFloat(impactof120GrowthOSE43)) / parseFloat(impactof120GrowthOSF43)).toFixed(2);
        let impactof120GrowthOSH43 = (parseFloat(impactof120GrowthOSH36)).toFixed(2);
        let impactof120GrowthOSI43 = ((parseFloat(impactof120GrowthOSH43) - parseFloat(impactof120GrowthOSF43)) / parseFloat(impactof120GrowthOSF43)).toFixed(2);
        let impactof120GrowthOSJ43 = (parseFloat(impactof120GrowthOSI35)).toFixed(2);
        let impactof120GrowthOSK43 = ((parseFloat(impactof120GrowthOSJ43) - parseFloat(impactof120GrowthOSH43)) / parseFloat(impactof120GrowthOSH43)).toFixed(2);
        let impactof120GrowthOSL43 = (parseFloat(impactof120GrowthOSJ35)).toFixed(2);
        let impactof120GrowthOSM43 = ((parseFloat(impactof120GrowthOSL43) - parseFloat(impactof120GrowthOSJ43)) / parseFloat(impactof120GrowthOSJ43)).toFixed(2);
        let impactof120GrowthOSN43 = (parseFloat(impactof120GrowthOSK35)).toFixed(2);
        let impactof120GrowthOSO43 = ((parseFloat(impactof120GrowthOSN43) - parseFloat(impactof120GrowthOSL43)) / parseFloat(impactof120GrowthOSL43)).toFixed(2);

        let impactof120GrowthOSE48 = parseFloat(CustomerFinancialValuesD24).toFixed(2);
        let impactof120GrowthOSF48 = (parseFloat(impactof120GrowthOSF32) * parseFloat(impactof120GrowthOSF33)).toFixed(2);
        let impactof120GrowthOSG48 = (parseFloat(impactof120GrowthOSG32) * parseFloat(impactof120GrowthOSG33)).toFixed(2);
        let impactof120GrowthOSH48 = (parseFloat(impactof120GrowthOSH32) * parseFloat(impactof120GrowthOSH33)).toFixed(2);
        let impactof120GrowthOSI48 = (parseFloat(impactof120GrowthOSI32) * parseFloat(impactof120GrowthOSI33)).toFixed(2);
        let impactof120GrowthOSJ48 = (parseFloat(impactof120GrowthOSJ32) * parseFloat(impactof120GrowthOSJ33)).toFixed(2);
        let impactof120GrowthOSK48 = (parseFloat(impactof120GrowthOSK32) * parseFloat(impactof120GrowthOSK33)).toFixed(2);

        let impactof120GrowthOSE49 = parseFloat(CustomerFinancialValuesD25).toFixed(2);
        let impactof120GrowthOSF49 = (parseFloat(impactof120GrowthOSF32) * parseFloat(impactof120GrowthOSF33) * parseFloat(impactof120GrowthOSF34)).toFixed(2);
        let impactof120GrowthOSG49 = (parseFloat(impactof120GrowthOSG32) * parseFloat(impactof120GrowthOSG33) * parseFloat(impactof120GrowthOSG34)).toFixed(2);
        let impactof120GrowthOSH49 = (parseFloat(impactof120GrowthOSH32) * parseFloat(impactof120GrowthOSH33) * parseFloat(impactof120GrowthOSH34)).toFixed(2);
        let impactof120GrowthOSI49 = (parseFloat(impactof120GrowthOSI32) * parseFloat(impactof120GrowthOSI33) * parseFloat(impactof120GrowthOSI34)).toFixed(2);
        let impactof120GrowthOSJ49 = (parseFloat(impactof120GrowthOSJ32) * parseFloat(impactof120GrowthOSJ33) * parseFloat(impactof120GrowthOSJ34)).toFixed(2);
        let impactof120GrowthOSK49 = (parseFloat(impactof120GrowthOSK32) * parseFloat(impactof120GrowthOSK33) * parseFloat(impactof120GrowthOSK34)).toFixed(2);

        let impactof120GrowthOSE50 = parseFloat(CustomerFinancialValuesD26).toFixed(2);
        let impactof120GrowthOSF50 = (parseFloat(impactof120GrowthOSF32) * parseFloat(impactof120GrowthOSF33) * parseFloat(buyingLifeTimeD18)).toFixed(2);
        let impactof120GrowthOSG50 = (parseFloat(impactof120GrowthOSG32) * parseFloat(impactof120GrowthOSG33) * parseFloat(buyingLifeTimeE18)).toFixed(2);
        let impactof120GrowthOSH50 = (parseFloat(impactof120GrowthOSH32) * parseFloat(impactof120GrowthOSH33) * parseFloat(buyingLifeTimeF18)).toFixed(2);
        let impactof120GrowthOSI50 = (parseFloat(impactof120GrowthOSI32) * parseFloat(impactof120GrowthOSI33) * parseFloat(buyingLifeTimeG18)).toFixed(2);
        let impactof120GrowthOSJ50 = (parseFloat(impactof120GrowthOSJ32) * parseFloat(impactof120GrowthOSJ33) * parseFloat(buyingLifeTimeH18)).toFixed(2);
        let impactof120GrowthOSK50 = (parseFloat(impactof120GrowthOSK32) * parseFloat(impactof120GrowthOSK33) * parseFloat(buyingLifeTimeI18)).toFixed(2);

        let impactof120GrowthOSE51 = parseFloat(CustomerFinancialValuesD27).toFixed(2);
        let impactof120GrowthOSF51 = (parseFloat(impactof120GrowthOSF32) * parseFloat(impactof120GrowthOSF33) * parseFloat(impactof120GrowthOSF34) * parseFloat(buyingLifeTimeD18)).toFixed(2);
        let impactof120GrowthOSG51 = (parseFloat(impactof120GrowthOSG32) * parseFloat(impactof120GrowthOSG33) * parseFloat(impactof120GrowthOSG34) * parseFloat(buyingLifeTimeE18)).toFixed(2);
        let impactof120GrowthOSH51 = (parseFloat(impactof120GrowthOSH32) * parseFloat(impactof120GrowthOSH33) * parseFloat(impactof120GrowthOSH34) * parseFloat(buyingLifeTimeF18)).toFixed(2);
        let impactof120GrowthOSI51 = (parseFloat(impactof120GrowthOSI32) * parseFloat(impactof120GrowthOSI33) * parseFloat(impactof120GrowthOSI34) * parseFloat(buyingLifeTimeG18)).toFixed(2);
        let impactof120GrowthOSJ51 = (parseFloat(impactof120GrowthOSJ32) * parseFloat(impactof120GrowthOSJ33) * parseFloat(impactof120GrowthOSJ34) * parseFloat(buyingLifeTimeH18)).toFixed(2);
        let impactof120GrowthOSK51 = (parseFloat(impactof120GrowthOSK32) * parseFloat(impactof120GrowthOSK33) * parseFloat(impactof120GrowthOSK34) * parseFloat(buyingLifeTimeI18)).toFixed(2);

        let impactof120GrowthOSST42 =  ((parseFloat(impactof120GrowthOSN42) / parseFloat(impactof120GrowthOSE42)) ^ (1/5) - 1).toFixed(2);



        return {
            ...state, //copying the original state
            impactof120GrowthOSE11: (impactof120GrowthOSE11 != 'NaN') ? impactof120GrowthOSE11 : 0,
            impactof120GrowthOSF11: (impactof120GrowthOSF11 != 'NaN') ? impactof120GrowthOSF11 : 0,
            impactof120GrowthOSG11: (impactof120GrowthOSG11 != 'NaN') ? impactof120GrowthOSG11 : 0,
            impactof120GrowthOSH11: (impactof120GrowthOSH11 != 'NaN') ? impactof120GrowthOSH11 : 0,
            impactof120GrowthOSI11: (impactof120GrowthOSI11 != 'NaN') ? impactof120GrowthOSI11 : 0,
            impactof120GrowthOSJ11: (impactof120GrowthOSJ11 != 'NaN') ? impactof120GrowthOSJ11 : 0,
            impactof120GrowthOSK11: (impactof120GrowthOSK11 != 'NaN') ? impactof120GrowthOSK11 : 0,
            impactof120GrowthOSE12: (impactof120GrowthOSE12 != 'NaN') ? impactof120GrowthOSE12 : 0,
            impactof120GrowthOSF12: (impactof120GrowthOSF12 != 'NaN') ? impactof120GrowthOSF12 : 0,
            impactof120GrowthOSG12: (impactof120GrowthOSG12 != 'NaN') ? impactof120GrowthOSG12 : 0,
            impactof120GrowthOSH12: (impactof120GrowthOSH12 != 'NaN') ? impactof120GrowthOSH12 : 0,
            impactof120GrowthOSI12: (impactof120GrowthOSI12 != 'NaN') ? impactof120GrowthOSI12 : 0,
            impactof120GrowthOSJ12: (impactof120GrowthOSJ12 != 'NaN') ? impactof120GrowthOSJ12 : 0,
            impactof120GrowthOSK12: (impactof120GrowthOSK12 != 'NaN') ? impactof120GrowthOSK12 : 0,
            impactof120GrowthOSE13: (impactof120GrowthOSE13 != 'NaN') ? impactof120GrowthOSE13 : 0,
            impactof120GrowthOSF13: (impactof120GrowthOSF13 != 'NaN') ? impactof120GrowthOSF13 : 0,
            impactof120GrowthOSG13: (impactof120GrowthOSG13 != 'NaN') ? impactof120GrowthOSG13 : 0,
            impactof120GrowthOSH13: (impactof120GrowthOSH13 != 'NaN') ? impactof120GrowthOSH13 : 0,
            impactof120GrowthOSI13: (impactof120GrowthOSI13 != 'NaN') ? impactof120GrowthOSI13 : 0,
            impactof120GrowthOSJ13: (impactof120GrowthOSJ13 != 'NaN') ? impactof120GrowthOSJ13 : 0,
            impactof120GrowthOSK13: (impactof120GrowthOSK13 != 'NaN') ? impactof120GrowthOSK13 : 0,
            impactof120GrowthOSF14: (impactof120GrowthOSF14 != 'NaN') ? impactof120GrowthOSF14 : 0,
            impactof120GrowthOSG14: (impactof120GrowthOSG14 != 'NaN') ? impactof120GrowthOSG14 : 0,
            impactof120GrowthOSH14: (impactof120GrowthOSH14 != 'NaN') ? impactof120GrowthOSH14 : 0,
            impactof120GrowthOSI14: (impactof120GrowthOSI14 != 'NaN') ? impactof120GrowthOSI14 : 0,
            impactof120GrowthOSJ14: (impactof120GrowthOSJ14 != 'NaN') ? impactof120GrowthOSJ14 : 0,
            impactof120GrowthOSK14: (impactof120GrowthOSK14 != 'NaN') ? impactof120GrowthOSK14 : 0,
            impactof120GrowthOSE15: (impactof120GrowthOSE15 != 'NaN') ? impactof120GrowthOSE15 : 0,
            impactof120GrowthOSF15: (impactof120GrowthOSF15 != 'NaN') ? impactof120GrowthOSF15 : 0,
            impactof120GrowthOSG15: (impactof120GrowthOSG15 != 'NaN') ? impactof120GrowthOSG15 : 0,
            impactof120GrowthOSH15: (impactof120GrowthOSH15 != 'NaN') ? impactof120GrowthOSH15 : 0,
            impactof120GrowthOSI15: (impactof120GrowthOSI15 != 'NaN') ? impactof120GrowthOSI15 : 0,
            impactof120GrowthOSJ15: (impactof120GrowthOSJ15 != 'NaN') ? impactof120GrowthOSJ15 : 0,
            impactof120GrowthOSK15: (impactof120GrowthOSK15 != 'NaN') ? impactof120GrowthOSK15 : 0,
            impactof120GrowthOSE16: (impactof120GrowthOSE16 != 'NaN') ? impactof120GrowthOSE16 : 0,
            impactof120GrowthOSF16: (impactof120GrowthOSF16 != 'NaN') ? impactof120GrowthOSF16 : 0,
            impactof120GrowthOSG16: (impactof120GrowthOSG16 != 'NaN') ? impactof120GrowthOSG16 : 0,
            impactof120GrowthOSH16: (impactof120GrowthOSH16 != 'NaN') ? impactof120GrowthOSH16 : 0,
            impactof120GrowthOSI16: (impactof120GrowthOSI16 != 'NaN') ? impactof120GrowthOSI16 : 0,
            impactof120GrowthOSJ16: (impactof120GrowthOSJ16 != 'NaN') ? impactof120GrowthOSJ16 : 0,
            impactof120GrowthOSK16: (impactof120GrowthOSK16 != 'NaN') ? impactof120GrowthOSK16 : 0,
            impactof120GrowthOSF18: (impactof120GrowthOSF18 != 'NaN') ? impactof120GrowthOSF18 : 0,
            impactof120GrowthOSG18: (impactof120GrowthOSG18 != 'NaN') ? impactof120GrowthOSG18 : 0,
            impactof120GrowthOSH18: (impactof120GrowthOSH18 != 'NaN') ? impactof120GrowthOSH18 : 0,
            impactof120GrowthOSI18: (impactof120GrowthOSI18 != 'NaN') ? impactof120GrowthOSI18 : 0,
            impactof120GrowthOSJ18: (impactof120GrowthOSJ18 != 'NaN') ? impactof120GrowthOSJ18 : 0,
            impactof120GrowthOSK18: (impactof120GrowthOSK18 != 'NaN') ? impactof120GrowthOSK18 : 0,
            impactof120GrowthOSF19: (impactof120GrowthOSF19 != 'NaN') ? impactof120GrowthOSF19 : 0,
            impactof120GrowthOSG19: (impactof120GrowthOSG19 != 'NaN') ? impactof120GrowthOSG19 : 0,
            impactof120GrowthOSH19: (impactof120GrowthOSH19 != 'NaN') ? impactof120GrowthOSH19 : 0,
            impactof120GrowthOSI19: (impactof120GrowthOSI19 != 'NaN') ? impactof120GrowthOSI19 : 0,
            impactof120GrowthOSJ19: (impactof120GrowthOSJ19 != 'NaN') ? impactof120GrowthOSJ19 : 0,
            impactof120GrowthOSK19: (impactof120GrowthOSK19 != 'NaN') ? impactof120GrowthOSK19 : 0,
            impactof120GrowthOSF20: (impactof120GrowthOSF20 != 'NaN') ? impactof120GrowthOSF20 : 0,
            impactof120GrowthOSG20: (impactof120GrowthOSG20 != 'NaN') ? impactof120GrowthOSG20 : 0,
            impactof120GrowthOSH20: (impactof120GrowthOSH20 != 'NaN') ? impactof120GrowthOSH20 : 0,
            impactof120GrowthOSI20: (impactof120GrowthOSI20 != 'NaN') ? impactof120GrowthOSI20 : 0,
            impactof120GrowthOSJ20: (impactof120GrowthOSJ20 != 'NaN') ? impactof120GrowthOSJ20 : 0,
            impactof120GrowthOSK20: (impactof120GrowthOSK20 != 'NaN') ? impactof120GrowthOSK20 : 0,
            impactof120GrowthOSF21: (impactof120GrowthOSF21 != 'NaN') ? impactof120GrowthOSF21 : 0,
            impactof120GrowthOSG21: (impactof120GrowthOSG21 != 'NaN') ? impactof120GrowthOSG21 : 0,
            impactof120GrowthOSH21: (impactof120GrowthOSH21 != 'NaN') ? impactof120GrowthOSH21 : 0,
            impactof120GrowthOSI21: (impactof120GrowthOSI21 != 'NaN') ? impactof120GrowthOSI21 : 0,
            impactof120GrowthOSJ21: (impactof120GrowthOSJ21 != 'NaN') ? impactof120GrowthOSJ21 : 0,
            impactof120GrowthOSK21: (impactof120GrowthOSK21 != 'NaN') ? impactof120GrowthOSK21 : 0,
            impactof120GrowthOSF27: (impactof120GrowthOSF27 != 'NaN') ? impactof120GrowthOSF27 : 0,
            impactof120GrowthOSE23: (impactof120GrowthOSE23 != 'NaN') ? impactof120GrowthOSE23 : 0,
            impactof120GrowthOSE27: (impactof120GrowthOSE27 != 'NaN') ? impactof120GrowthOSE27 : 0,
            impactof120GrowthOSF23: (impactof120GrowthOSF23 != 'NaN') ? impactof120GrowthOSF23 : 0,
            impactof120GrowthOSG23: (impactof120GrowthOSG23 != 'NaN') ? impactof120GrowthOSG23 : 0,
            impactof120GrowthOSF24: (impactof120GrowthOSF24 != 'NaN') ? impactof120GrowthOSF24 : 0,
            impactof120GrowthOSG24: (impactof120GrowthOSG24 != 'NaN') ? impactof120GrowthOSG24 : 0,
            impactof120GrowthOSH24: (impactof120GrowthOSH24 != 'NaN') ? impactof120GrowthOSH24 : 0,
            impactof120GrowthOSI24: (impactof120GrowthOSI24 != 'NaN') ? impactof120GrowthOSI24 : 0,
            impactof120GrowthOSJ24: (impactof120GrowthOSJ24 != 'NaN') ? impactof120GrowthOSJ24 : 0,
            impactof120GrowthOSK24: (impactof120GrowthOSK24 != 'NaN') ? impactof120GrowthOSK24 : 0,
            impactof120GrowthOSF25: (impactof120GrowthOSF25 != 'NaN') ? impactof120GrowthOSF25 : 0,
            impactof120GrowthOSG25: (impactof120GrowthOSG25 != 'NaN') ? impactof120GrowthOSG25 : 0,
            impactof120GrowthOSG26: (impactof120GrowthOSG26 != 'NaN') ? impactof120GrowthOSG26 : 0,
            impactof120GrowthOSG27: (impactof120GrowthOSG27 != 'NaN') ? impactof120GrowthOSG27 : 0,
            impactof120GrowthOSH23: (impactof120GrowthOSH23 != 'NaN') ? impactof120GrowthOSH23 : 0,
            impactof120GrowthOSH25: (impactof120GrowthOSH25 != 'NaN') ? impactof120GrowthOSH25 : 0,
            impactof120GrowthOSH26: (impactof120GrowthOSH26 != 'NaN') ? impactof120GrowthOSH26 : 0,
            impactof120GrowthOSH27: (impactof120GrowthOSH27 != 'NaN') ? impactof120GrowthOSH27 : 0,
            impactof120GrowthOSI23: (impactof120GrowthOSI23 != 'NaN') ? impactof120GrowthOSI23 : 0,
            impactof120GrowthOSI25: (impactof120GrowthOSI25 != 'NaN') ? impactof120GrowthOSI25 : 0,
            impactof120GrowthOSI26: (impactof120GrowthOSI26 != 'NaN') ? impactof120GrowthOSI26 : 0,
            impactof120GrowthOSI27: (impactof120GrowthOSI27 != 'NaN') ? impactof120GrowthOSI27 : 0,
            impactof120GrowthOSJ23: (impactof120GrowthOSJ23 != 'NaN') ? impactof120GrowthOSJ23 : 0,
            impactof120GrowthOSJ26: (impactof120GrowthOSJ26 != 'NaN') ? impactof120GrowthOSJ26 : 0,
            impactof120GrowthOSJ25: (impactof120GrowthOSJ25 != 'NaN') ? impactof120GrowthOSJ25 : 0,
            impactof120GrowthOSJ27: (impactof120GrowthOSJ27 != 'NaN') ? impactof120GrowthOSJ27 : 0,
            impactof120GrowthOSK23: (impactof120GrowthOSK23 != 'NaN') ? impactof120GrowthOSK23 : 0,
            impactof120GrowthOSK25: (impactof120GrowthOSK25 != 'NaN') ? impactof120GrowthOSK25 : 0,
            impactof120GrowthOSF26: (impactof120GrowthOSF26 != 'NaN') ? impactof120GrowthOSF26 : 0,
            impactof120GrowthOSK26: (impactof120GrowthOSK26 != 'NaN') ? impactof120GrowthOSK26 : 0,
            impactof120GrowthOSK27: (impactof120GrowthOSK27 != 'NaN') ? impactof120GrowthOSK27 : 0,
            impactof120GrowthOSE32: (impactof120GrowthOSE32 != 'NaN') ? impactof120GrowthOSE32 : 0,
            impactof120GrowthOSF32: (impactof120GrowthOSF32 != 'NaN') ? impactof120GrowthOSF32 : 0,
            impactof120GrowthOSG32: (impactof120GrowthOSG32 != 'NaN') ? impactof120GrowthOSG32 : 0,
            impactof120GrowthOSH32: (impactof120GrowthOSH32 != 'NaN') ? impactof120GrowthOSH32 : 0,
            impactof120GrowthOSI32: (impactof120GrowthOSI32 != 'NaN') ? impactof120GrowthOSI32 : 0,
            impactof120GrowthOSJ32: (impactof120GrowthOSJ32 != 'NaN') ? impactof120GrowthOSJ32 : 0,
            impactof120GrowthOSK32: (impactof120GrowthOSK32 != 'NaN') ? impactof120GrowthOSK32 : 0,
            impactof120GrowthOSE33: (impactof120GrowthOSE33 != 'NaN') ? impactof120GrowthOSE33 : 0,
            impactof120GrowthOSF33: (impactof120GrowthOSF33 != 'NaN') ? impactof120GrowthOSF33 : 0,
            impactof120GrowthOSG33: (impactof120GrowthOSG33 != 'NaN') ? impactof120GrowthOSG33 : 0,
            impactof120GrowthOSH33: (impactof120GrowthOSH33 != 'NaN') ? impactof120GrowthOSH33 : 0,
            impactof120GrowthOSI33: (impactof120GrowthOSI33 != 'NaN') ? impactof120GrowthOSI33 : 0,
            impactof120GrowthOSJ33: (impactof120GrowthOSJ33 != 'NaN') ? impactof120GrowthOSJ33 : 0,
            impactof120GrowthOSK33: (impactof120GrowthOSK33 != 'NaN') ? impactof120GrowthOSK33 : 0,
            impactof120GrowthOSE34: (impactof120GrowthOSE34 != 'NaN') ? impactof120GrowthOSE34 : 0,
            impactof120GrowthOSF34: (impactof120GrowthOSF34 != 'NaN') ? impactof120GrowthOSF34 : 0,
            impactof120GrowthOSG34: (impactof120GrowthOSG34 != 'NaN') ? impactof120GrowthOSG34 : 0,
            impactof120GrowthOSH34: (impactof120GrowthOSH34 != 'NaN') ? impactof120GrowthOSH34 : 0,
            impactof120GrowthOSI34: (impactof120GrowthOSI34 != 'NaN') ? impactof120GrowthOSI34 : 0,
            impactof120GrowthOSJ34: (impactof120GrowthOSJ34 != 'NaN') ? impactof120GrowthOSJ34 : 0,
            impactof120GrowthOSK34: (impactof120GrowthOSK34 != 'NaN') ? impactof120GrowthOSK34 : 0,
            impactof120GrowthOSE35: (impactof120GrowthOSE35 != 'NaN') ? impactof120GrowthOSE35 : 0,
            impactof120GrowthOSF35: (impactof120GrowthOSF35 != 'NaN') ? impactof120GrowthOSF35 : 0,
            impactof120GrowthOSG35: (impactof120GrowthOSG35 != 'NaN') ? impactof120GrowthOSG35 : 0,
            impactof120GrowthOSH35: (impactof120GrowthOSH35 != 'NaN') ? impactof120GrowthOSH35 : 0,
            impactof120GrowthOSI35: (impactof120GrowthOSI35 != 'NaN') ? impactof120GrowthOSI35 : 0,
            impactof120GrowthOSJ35: (impactof120GrowthOSJ35 != 'NaN') ? impactof120GrowthOSJ35 : 0,
            impactof120GrowthOSK35: (impactof120GrowthOSK35 != 'NaN') ? impactof120GrowthOSK35 : 0,
            impactof120GrowthOSE36: (impactof120GrowthOSE36 != 'NaN') ? impactof120GrowthOSE36 : 0,
            impactof120GrowthOSF36: (impactof120GrowthOSF36 != 'NaN') ? impactof120GrowthOSF36 : 0,
            impactof120GrowthOSG36: (impactof120GrowthOSG36 != 'NaN') ? impactof120GrowthOSG36 : 0,
            impactof120GrowthOSH36: (impactof120GrowthOSH36 != 'NaN') ? impactof120GrowthOSH36 : 0,
            impactof120GrowthOSI36: (impactof120GrowthOSI36 != 'NaN') ? impactof120GrowthOSI36 : 0,
            impactof120GrowthOSJ36: (impactof120GrowthOSJ36 != 'NaN') ? impactof120GrowthOSJ36 : 0,
            impactof120GrowthOSK36: (impactof120GrowthOSK36 != 'NaN') ? impactof120GrowthOSK36 : 0,
            impactof120GrowthOSE37: (impactof120GrowthOSE37 != 'NaN') ? impactof120GrowthOSE37 : 0,
            impactof120GrowthOSF37: (impactof120GrowthOSF37 != 'NaN') ? impactof120GrowthOSF37 : 0,
            impactof120GrowthOSG37: (impactof120GrowthOSG37 != 'NaN') ? impactof120GrowthOSG37 : 0,
            impactof120GrowthOSH37: (impactof120GrowthOSH37 != 'NaN') ? impactof120GrowthOSH37 : 0,
            impactof120GrowthOSI37: (impactof120GrowthOSI37 != 'NaN') ? impactof120GrowthOSI37 : 0,
            impactof120GrowthOSJ37: (impactof120GrowthOSJ37 != 'NaN') ? impactof120GrowthOSJ37 : 0,
            impactof120GrowthOSK37: (impactof120GrowthOSK37 != 'NaN') ? impactof120GrowthOSK37 : 0,
            impactof120GrowthOSE42: (impactof120GrowthOSE42 != 'NaN') ? impactof120GrowthOSE42 : 0,
            impactof120GrowthOSF42: (impactof120GrowthOSF42 != 'NaN') ? impactof120GrowthOSF42 : 0,
            impactof120GrowthOSG42: (impactof120GrowthOSG42 != 'NaN') ? impactof120GrowthOSG42 : 0,
            impactof120GrowthOSH42: (impactof120GrowthOSH42 != 'NaN') ? impactof120GrowthOSH42 : 0,
            impactof120GrowthOSI42: (impactof120GrowthOSI42 != 'NaN') ? impactof120GrowthOSI42 : 0,
            impactof120GrowthOSJ42: (impactof120GrowthOSJ42 != 'NaN') ? impactof120GrowthOSJ42 : 0,
            impactof120GrowthOSK42: (impactof120GrowthOSK42 != 'NaN') ? impactof120GrowthOSK42 : 0,
            impactof120GrowthOSL42: (impactof120GrowthOSL42 != 'NaN') ? impactof120GrowthOSL42 : 0,
            impactof120GrowthOSM42: (impactof120GrowthOSM42 != 'NaN') ? impactof120GrowthOSM42 : 0,
            impactof120GrowthOSN42: (impactof120GrowthOSN42 != 'NaN') ? impactof120GrowthOSN42 : 0,
            impactof120GrowthOSO42: (impactof120GrowthOSO42 != 'NaN') ? impactof120GrowthOSO42 : 0,
            impactof120GrowthOSE43: (impactof120GrowthOSE43 != 'NaN') ? impactof120GrowthOSE43 : 0,
            impactof120GrowthOSF43: (impactof120GrowthOSF43 != 'NaN') ? impactof120GrowthOSF43 : 0,
            impactof120GrowthOSG43: (impactof120GrowthOSG43 != 'NaN') ? impactof120GrowthOSG43 : 0,
            impactof120GrowthOSH43: (impactof120GrowthOSH43 != 'NaN') ? impactof120GrowthOSH43 : 0,
            impactof120GrowthOSI43: (impactof120GrowthOSI43 != 'NaN') ? impactof120GrowthOSI43 : 0,
            impactof120GrowthOSJ43: (impactof120GrowthOSJ43 != 'NaN') ? impactof120GrowthOSJ43 : 0,
            impactof120GrowthOSK43: (impactof120GrowthOSK43 != 'NaN') ? impactof120GrowthOSK43 : 0,
            impactof120GrowthOSL43: (impactof120GrowthOSL43 != 'NaN') ? impactof120GrowthOSL43 : 0,
            impactof120GrowthOSM43: (impactof120GrowthOSM43 != 'NaN') ? impactof120GrowthOSM43 : 0,
            impactof120GrowthOSN43: (impactof120GrowthOSN43 != 'NaN') ? impactof120GrowthOSN43 : 0,
            impactof120GrowthOSO43: (impactof120GrowthOSO43 != 'NaN') ? impactof120GrowthOSO43 : 0,
            impactof120GrowthOSE48: (impactof120GrowthOSE48 != 'NaN') ? impactof120GrowthOSE48 : 0,
            impactof120GrowthOSF48: (impactof120GrowthOSF48 != 'NaN') ? impactof120GrowthOSF48 : 0,
            impactof120GrowthOSG48: (impactof120GrowthOSG48 != 'NaN') ? impactof120GrowthOSG48 : 0,
            impactof120GrowthOSH48: (impactof120GrowthOSH48 != 'NaN') ? impactof120GrowthOSH48 : 0,
            impactof120GrowthOSI48: (impactof120GrowthOSI48 != 'NaN') ? impactof120GrowthOSI48 : 0,
            impactof120GrowthOSJ48: (impactof120GrowthOSJ48 != 'NaN') ? impactof120GrowthOSJ48 : 0,
            impactof120GrowthOSK48: (impactof120GrowthOSK48 != 'NaN') ? impactof120GrowthOSK48 : 0,
            impactof120GrowthOSE49: (impactof120GrowthOSE49 != 'NaN') ? impactof120GrowthOSE49 : 0,
            impactof120GrowthOSF49: (impactof120GrowthOSF49 != 'NaN') ? impactof120GrowthOSF49 : 0,
            impactof120GrowthOSG49: (impactof120GrowthOSG49 != 'NaN') ? impactof120GrowthOSG49 : 0,
            impactof120GrowthOSH49: (impactof120GrowthOSH49 != 'NaN') ? impactof120GrowthOSH49 : 0,
            impactof120GrowthOSI49: (impactof120GrowthOSI49 != 'NaN') ? impactof120GrowthOSI49 : 0,
            impactof120GrowthOSJ49: (impactof120GrowthOSJ49 != 'NaN') ? impactof120GrowthOSJ49 : 0,
            impactof120GrowthOSK49: (impactof120GrowthOSK49 != 'NaN') ? impactof120GrowthOSK49 : 0,
            impactof120GrowthOSE50: (impactof120GrowthOSE50 != 'NaN') ? impactof120GrowthOSE50 : 0,
            impactof120GrowthOSF50: (impactof120GrowthOSF50 != 'NaN') ? impactof120GrowthOSF50 : 0,
            impactof120GrowthOSG50: (impactof120GrowthOSG50 != 'NaN') ? impactof120GrowthOSG50 : 0,
            impactof120GrowthOSH50: (impactof120GrowthOSH50 != 'NaN') ? impactof120GrowthOSH50 : 0,
            impactof120GrowthOSI50: (impactof120GrowthOSI50 != 'NaN') ? impactof120GrowthOSI50 : 0,
            impactof120GrowthOSJ50: (impactof120GrowthOSJ50 != 'NaN') ? impactof120GrowthOSJ50 : 0,
            impactof120GrowthOSK50: (impactof120GrowthOSK50 != 'NaN') ? impactof120GrowthOSK50 : 0,
            impactof120GrowthOSE51: (impactof120GrowthOSE51 != 'NaN') ? impactof120GrowthOSE51 : 0,
            impactof120GrowthOSF51: (impactof120GrowthOSF51 != 'NaN') ? impactof120GrowthOSF51 : 0,
            impactof120GrowthOSG51: (impactof120GrowthOSG51 != 'NaN') ? impactof120GrowthOSG51 : 0,
            impactof120GrowthOSH51: (impactof120GrowthOSH51 != 'NaN') ? impactof120GrowthOSH51 : 0,
            impactof120GrowthOSI51: (impactof120GrowthOSI51 != 'NaN') ? impactof120GrowthOSI51 : 0,
            impactof120GrowthOSJ51: (impactof120GrowthOSJ51 != 'NaN') ? impactof120GrowthOSJ51 : 0,
            impactof120GrowthOSK51: (impactof120GrowthOSK51 != 'NaN') ? impactof120GrowthOSK51 : 0,
            impactof120GrowthOSST42: (impactof120GrowthOSST42 != 'NaN') ? impactof120GrowthOSST42 : 0,
        }
    } else {
        return state
    }

}

export default reducer