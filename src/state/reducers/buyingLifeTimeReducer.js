const initialState = {
    buyingLifeTimeD12: 0,
    buyingLifeTimeD13: 0,
    buyingLifeTimeD17: 0,
    buyingLifeTimeD18: 0,
    buyingLifeTimeE17: 0,
    buyingLifeTimeE18: 0,
    buyingLifeTimeF18: 0,
    buyingLifeTimeG18: 0,
    buyingLifeTimeF17: 0,
    buyingLifeTimeG17: 0,
    buyingLifeTimeH18: 0,
    buyingLifeTimeI18: 0,
    buyingLifeTimeH17: 0,
    buyingLifeTimeI17: 0,
    buyingLifeTimeD19: 0,
    buyingLifeTimeE19: 0,
    buyingLifeTimeF19: 0,
    buyingLifeTimeG19: 0,
    buyingLifeTimeH19: 0,
    buyingLifeTimeI19: 0,
    buyingLifeTimeD23: 0,
    buyingLifeTimeE23: 0,
    buyingLifeTimeF23: 0,
    buyingLifeTimeG23: 0,
    buyingLifeTimeH23: 0,
    buyingLifeTimeI23: 0,
    buyingLifeTimeD24: 0,
    buyingLifeTimeE24: 0,
    buyingLifeTimeF24: 0,
    buyingLifeTimeG24: 0,
    buyingLifeTimeH24: 0,
    buyingLifeTimeI24: 0,
    buyingLifeTimeD26: 0,
    buyingLifeTimeE26: 0,
    buyingLifeTimeF26: 0,
    buyingLifeTimeG26: 0,
    buyingLifeTimeH26: 0,
    buyingLifeTimeI26: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'buyingLifeTimeD12') {
        return {
            ...state, //copying the original state
            buyingLifeTimeD12: parseFloat(action.payload)
        }
    }
    else if (action.type === 'buyingLifeTimeD13') {
        return {
            ...state, //copying the original state
            buyingLifeTimeD13: parseFloat(action.payload)
        }
    }
    else if (action.type === 'buyingLifeTimeImprovements') {
        let buyingLifeTimeD12 = action.payload.buyingLifeTimeD12;
        let CustomerFinancialValuesD20 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD20;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let clientInputsH41 = action.payload.clientInputsH41;

        if (!isNaN(buyingLifeTimeD12) && !isNaN(state.buyingLifeTimeD13)) {
            let buyingLifeTimeD17 = (parseFloat(buyingLifeTimeD12) * parseFloat(state.buyingLifeTimeD13) / 100).toFixed(2)
            let buyingLifeTimeE18 = ((parseFloat(buyingLifeTimeD12) * parseFloat(4) / 100) + buyingLifeTimeD12).toFixed(2)
            let buyingLifeTimeE17 = ((parseFloat(buyingLifeTimeE18) - parseFloat(buyingLifeTimeD12))).toFixed(2)
            let buyingLifeTimeF18 = (parseFloat(buyingLifeTimeE18 * 4 / 100) + parseFloat(buyingLifeTimeE18)).toFixed(2)
            let buyingLifeTimeF17 = (parseFloat(buyingLifeTimeF18) - parseFloat(buyingLifeTimeD12)).toFixed(2)
            let buyingLifeTimeG18 = (parseFloat(buyingLifeTimeF18 * 4 / 100) + parseFloat(buyingLifeTimeF18)).toFixed(2)
            let buyingLifeTimeD18 = ((parseFloat(buyingLifeTimeD12) + parseFloat(buyingLifeTimeD17))).toFixed(2)
            let buyingLifeTimeG17 = (parseFloat(buyingLifeTimeG18) - parseFloat(buyingLifeTimeD12)).toFixed(2)
            let buyingLifeTimeH18 = (parseFloat(buyingLifeTimeG18 * 4 / 100) + parseFloat(buyingLifeTimeG18)).toFixed(2)
            let buyingLifeTimeI18 = (parseFloat(buyingLifeTimeH18 * 4 / 100) + parseFloat(buyingLifeTimeH18)).toFixed(2)
            let buyingLifeTimeH17 = (parseFloat(buyingLifeTimeH18) - parseFloat(buyingLifeTimeD12)).toFixed(2)
            let buyingLifeTimeI17 = (parseFloat(buyingLifeTimeI18) - parseFloat(buyingLifeTimeD12)).toFixed(2)
            let buyingLifeTimeD19 = (parseFloat(buyingLifeTimeD17) * parseFloat(CustomerFinancialValuesD20) / parseFloat(buyingLifeTimeD18)).toFixed(2)
            let buyingLifeTimeE19 = (parseFloat(buyingLifeTimeE17) * parseFloat(CustomerFinancialValuesD20) / parseFloat(buyingLifeTimeE18)).toFixed(2)
            let buyingLifeTimeF19 = (parseFloat(buyingLifeTimeF17) * parseFloat(CustomerFinancialValuesD20) / parseFloat(buyingLifeTimeF18)).toFixed(2)
            let buyingLifeTimeG19 = (parseFloat(buyingLifeTimeG17) * parseFloat(CustomerFinancialValuesD20) / parseFloat(buyingLifeTimeG18)).toFixed(2)
            let buyingLifeTimeH19 = (parseFloat(buyingLifeTimeH17) * parseFloat(CustomerFinancialValuesD20) / parseFloat(buyingLifeTimeG18)).toFixed(2)
            let buyingLifeTimeI19 = (parseFloat(buyingLifeTimeI17) * parseFloat(CustomerFinancialValuesD20) / parseFloat(buyingLifeTimeH18)).toFixed(2)

            let buyingLifeTimeD23 = (parseFloat(buyingLifeTimeD19) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let buyingLifeTimeE23 = (parseFloat(buyingLifeTimeE19) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let buyingLifeTimeF23 = (parseFloat(buyingLifeTimeF19) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let buyingLifeTimeG23 = (parseFloat(buyingLifeTimeG19) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let buyingLifeTimeH23 = (parseFloat(buyingLifeTimeH19) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let buyingLifeTimeI23 = (parseFloat(buyingLifeTimeI19) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)

            let buyingLifeTimeD24 = (parseFloat(buyingLifeTimeD19) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let buyingLifeTimeE24 = (parseFloat(buyingLifeTimeE19) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let buyingLifeTimeF24 = (parseFloat(buyingLifeTimeF19) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let buyingLifeTimeG24 = (parseFloat(buyingLifeTimeG19) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let buyingLifeTimeH24 = (parseFloat(buyingLifeTimeH19) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let buyingLifeTimeI24 = (parseFloat(buyingLifeTimeI19) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)

            let buyingLifeTimeD26 = (parseFloat(buyingLifeTimeD24) * parseFloat(clientInputsH41)).toFixed(2)
            let buyingLifeTimeE26 = (parseFloat(buyingLifeTimeE24) * parseFloat(clientInputsH41)).toFixed(2)
            let buyingLifeTimeF26 = (parseFloat(buyingLifeTimeF24) * parseFloat(clientInputsH41)).toFixed(2)
            let buyingLifeTimeG26 = (parseFloat(buyingLifeTimeG24) * parseFloat(clientInputsH41)).toFixed(2)
            let buyingLifeTimeH26 = (parseFloat(buyingLifeTimeH24) * parseFloat(clientInputsH41)).toFixed(2)
            let buyingLifeTimeI26 = (parseFloat(buyingLifeTimeI24) * parseFloat(clientInputsH41)).toFixed(2)




            return {
                ...state, //copying the original state
                buyingLifeTimeD17: (buyingLifeTimeD17 != 'NaN') ? buyingLifeTimeD17 : 0,
                buyingLifeTimeD18: (buyingLifeTimeD18 != 'NaN') ? buyingLifeTimeD18 : 0,
                buyingLifeTimeE17: (buyingLifeTimeE17 != 'NaN') ? buyingLifeTimeE17 : 0,
                buyingLifeTimeE18: (buyingLifeTimeE18 != 'NaN') ? buyingLifeTimeE18 : 0,
                buyingLifeTimeF18: (buyingLifeTimeF18 != 'NaN') ? buyingLifeTimeF18 : 0,
                buyingLifeTimeG18: (buyingLifeTimeG18 != 'NaN') ? buyingLifeTimeG18 : 0,
                buyingLifeTimeF17: (buyingLifeTimeF17 != 'NaN') ? buyingLifeTimeF17 : 0,
                buyingLifeTimeG17: (buyingLifeTimeG17 != 'NaN') ? buyingLifeTimeG17 : 0,
                buyingLifeTimeH18: (buyingLifeTimeH18 != 'NaN') ? buyingLifeTimeH18 : 0,
                buyingLifeTimeI18: (buyingLifeTimeI18 != 'NaN') ? buyingLifeTimeI18 : 0,
                buyingLifeTimeH17: (buyingLifeTimeH17 != 'NaN') ? buyingLifeTimeH17 : 0,
                buyingLifeTimeI17: (buyingLifeTimeI17 != 'NaN') ? buyingLifeTimeI17 : 0,
                buyingLifeTimeD19: (buyingLifeTimeD19 != 'NaN') ? buyingLifeTimeD19 : 0,
                buyingLifeTimeE19: (buyingLifeTimeE19 != 'NaN') ? buyingLifeTimeE19 : 0,
                buyingLifeTimeF19: (buyingLifeTimeF19 != 'NaN') ? buyingLifeTimeF19 : 0,
                buyingLifeTimeG19: (buyingLifeTimeG19 != 'NaN') ? buyingLifeTimeG19 : 0,
                buyingLifeTimeH19: (buyingLifeTimeH19 != 'NaN') ? buyingLifeTimeH19 : 0,
                buyingLifeTimeI19: (buyingLifeTimeI19 != 'NaN') ? buyingLifeTimeI19 : 0,
                buyingLifeTimeD23: (buyingLifeTimeD23 != 'NaN') ? buyingLifeTimeD23 : 0,
                buyingLifeTimeE23: (buyingLifeTimeE23 != 'NaN') ? buyingLifeTimeE23 : 0,
                buyingLifeTimeF23: (buyingLifeTimeF23 != 'NaN') ? buyingLifeTimeF23 : 0,
                buyingLifeTimeG23: (buyingLifeTimeG23 != 'NaN') ? buyingLifeTimeG23 : 0,
                buyingLifeTimeH23: (buyingLifeTimeH23 != 'NaN') ? buyingLifeTimeH23 : 0,
                buyingLifeTimeI23: (buyingLifeTimeI23 != 'NaN') ? buyingLifeTimeI23 : 0,
                buyingLifeTimeD24: (buyingLifeTimeD24 != 'NaN') ? buyingLifeTimeD24 : 0,
                buyingLifeTimeE24: (buyingLifeTimeE24 != 'NaN') ? buyingLifeTimeE24 : 0,
                buyingLifeTimeF24: (buyingLifeTimeF24 != 'NaN') ? buyingLifeTimeF24 : 0,
                buyingLifeTimeG24: (buyingLifeTimeG24 != 'NaN') ? buyingLifeTimeG24 : 0,
                buyingLifeTimeH24: (buyingLifeTimeH24 != 'NaN') ? buyingLifeTimeH24 : 0,
                buyingLifeTimeI24: (buyingLifeTimeI24 != 'NaN') ? buyingLifeTimeI24 : 0,
                buyingLifeTimeD26: (buyingLifeTimeD26 != 'NaN') ? buyingLifeTimeD26 : 0,
                buyingLifeTimeE26: (buyingLifeTimeE26 != 'NaN') ? buyingLifeTimeE26 : 0,
                buyingLifeTimeF26: (buyingLifeTimeF26 != 'NaN') ? buyingLifeTimeF26 : 0,
                buyingLifeTimeG26: (buyingLifeTimeG26 != 'NaN') ? buyingLifeTimeG26 : 0,
                buyingLifeTimeH26: (buyingLifeTimeH26 != 'NaN') ? buyingLifeTimeH26 : 0,
                buyingLifeTimeI26: (buyingLifeTimeI26 != 'NaN') ? buyingLifeTimeI26 : 0,

            }
        }
        else {
            return {
                ...state, //copying the original state
                buyingLifeTimeD17: 0,
                buyingLifeTimeD18: 0,
                buyingLifeTimeE17: 0,
                buyingLifeTimeE18: 0,
                buyingLifeTimeF18: 0,
                buyingLifeTimeG18: 0,
                buyingLifeTimeF17: 0,
                buyingLifeTimeG17: 0,
                buyingLifeTimeH18: 0,
                buyingLifeTimeI18: 0,
                buyingLifeTimeH17: 0,
                buyingLifeTimeI17: 0,
                buyingLifeTimeD19: 0,
                buyingLifeTimeE19: 0,
                buyingLifeTimeF19: 0,
                buyingLifeTimeG19: 0,
                buyingLifeTimeH19: 0,
                buyingLifeTimeI19: 0,
                buyingLifeTimeD23: 0,
                buyingLifeTimeE23: 0,
                buyingLifeTimeF23: 0,
                buyingLifeTimeG23: 0,
                buyingLifeTimeH23: 0,
                buyingLifeTimeI23: 0,
                buyingLifeTimeD24: 0,
                buyingLifeTimeE24: 0,
                buyingLifeTimeF24: 0,
                buyingLifeTimeG24: 0,
                buyingLifeTimeH24: 0,
                buyingLifeTimeI24: 0,
                buyingLifeTimeD26: 0,
                buyingLifeTimeE26: 0,
                buyingLifeTimeF26: 0,
                buyingLifeTimeG26: 0,
                buyingLifeTimeH26: 0,
                buyingLifeTimeI26: 0,
            }
        }
    }
    else {
        return state
    }
}

export default reducer