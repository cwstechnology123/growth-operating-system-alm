const initialState = {
    purchaseFrequencyD12: 0,
    purchaseFrequencyD13: 0,
    purchaseFrequencyD17: 0,
    purchaseFrequencyD18: 0,
    purchaseFrequencyE17: 0,
    purchaseFrequencyE18: 0,
    purchaseFrequencyF18: 0,
    purchaseFrequencyG18: 0,
    purchaseFrequencyF17: 0,
    purchaseFrequencyG17: 0,
    purchaseFrequencyH18: 0,
    purchaseFrequencyI18: 0,
    purchaseFrequencyH17: 0,
    purchaseFrequencyI17: 0,
    purchaseFrequencyD22: 0,
    purchaseFrequencyE22: 0,
    purchaseFrequencyF22: 0,
    purchaseFrequencyG22: 0,
    purchaseFrequencyH22: 0,
    purchaseFrequencyI22: 0,
    purchaseFrequencyD23: 0,
    purchaseFrequencyE23: 0,
    purchaseFrequencyF23: 0,
    purchaseFrequencyG23: 0,
    purchaseFrequencyH23: 0,
    purchaseFrequencyI23: 0,
    purchaseFrequencyD25: 0,
    purchaseFrequencyE25: 0,
    purchaseFrequencyF25: 0,
    purchaseFrequencyG25: 0,
    purchaseFrequencyH25: 0,
    purchaseFrequencyI25: 0,
    purchaseFrequencyD26: 0,
    purchaseFrequencyE26: 0,
    purchaseFrequencyF26: 0,
    purchaseFrequencyG26: 0,
    purchaseFrequencyH26: 0,
    purchaseFrequencyI26: 0,
    purchaseFrequencyD28: 0,
    purchaseFrequencyE28: 0,
    purchaseFrequencyF28: 0,
    purchaseFrequencyG28: 0,
    purchaseFrequencyH28: 0,
    purchaseFrequencyI28: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'purchaseFrequencyD12') {
        return {
            ...state, //copying the original state
            purchaseFrequencyD12: parseFloat(action.payload)
        }
    }
    else if (action.type === 'purchaseFrequencyD13') {
        return {
            ...state, //copying the original state
            purchaseFrequencyD13: parseFloat(action.payload)
        }
    }
    else if (action.type === 'purchaseFrequencyIncreasingPurchase') {
        let purchaseFrequencyD12 = action.payload.purchaseFrequencyD12;
        let CustomerFinancialValuesD16 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD16;
        let CustomerFinancialValuesD18 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD18;
        let CustomerFinancialValuesD19 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD19;
        let CustomerFinancialValuesD20 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD20;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let clientInputsH41 = action.payload.clientInputsH41;


        if (!isNaN(purchaseFrequencyD12) && !isNaN(state.purchaseFrequencyD13)) {
            let purchaseFrequencyD17 = (parseFloat(purchaseFrequencyD12) * parseFloat(state.purchaseFrequencyD13) / 100).toFixed(2)
            let purchaseFrequencyD18 = ((parseFloat(purchaseFrequencyD12) + parseFloat(purchaseFrequencyD17))).toFixed(2)
            let purchaseFrequencyE17 = ((parseFloat(purchaseFrequencyD12) * parseFloat(4) / 100)).toFixed(2)
            let purchaseFrequencyE18 = ((parseFloat(purchaseFrequencyD12) + parseFloat(purchaseFrequencyE17))).toFixed(2)
            let purchaseFrequencyF18 = (parseFloat(purchaseFrequencyE18 * 4 / 100) + parseFloat(purchaseFrequencyE18)).toFixed(2)
            let purchaseFrequencyG18 = (parseFloat(purchaseFrequencyF18 * 4 / 100) + parseFloat(purchaseFrequencyF18)).toFixed(2)
            let purchaseFrequencyF17 = (parseFloat(purchaseFrequencyF18) - parseFloat(purchaseFrequencyD12)).toFixed(2)
            let purchaseFrequencyG17 = (parseFloat(purchaseFrequencyG18) - parseFloat(purchaseFrequencyD12)).toFixed(2)
            let purchaseFrequencyH18 = (parseFloat(purchaseFrequencyG18 * 4 / 100) + parseFloat(purchaseFrequencyG18)).toFixed(2)
            let purchaseFrequencyI18 = (parseFloat(purchaseFrequencyH18 * 4 / 100) + parseFloat(purchaseFrequencyH18)).toFixed(2)
            let purchaseFrequencyH17 = (parseFloat(purchaseFrequencyH18) - parseFloat(purchaseFrequencyD12)).toFixed(2)
            let purchaseFrequencyI17 = (parseFloat(purchaseFrequencyI18) - parseFloat(purchaseFrequencyD12)).toFixed(2)

            let purchaseFrequencyD22 = (parseFloat(purchaseFrequencyD17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)

            let purchaseFrequencyE22 = (parseFloat(purchaseFrequencyE17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)

            let purchaseFrequencyF22 = ((parseFloat(purchaseFrequencyF18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)

            let purchaseFrequencyH22 = ((parseFloat(purchaseFrequencyH18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)

            let purchaseFrequencyG22 = ((parseFloat(purchaseFrequencyG18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)

            let purchaseFrequencyI22 = ((parseFloat(purchaseFrequencyI18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)

            let purchaseFrequencyD23 = (parseFloat(purchaseFrequencyD17) * (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20)) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyE23 = (parseFloat(purchaseFrequencyE17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyF23 = ((parseFloat(purchaseFrequencyF18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyH23 = (parseFloat(purchaseFrequencyH17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)

            let purchaseFrequencyG23 = ((parseFloat(purchaseFrequencyG18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyI23 = ((parseFloat(purchaseFrequencyI18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyD25 = (parseFloat(purchaseFrequencyD17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let purchaseFrequencyE25 = (parseFloat(purchaseFrequencyE17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let purchaseFrequencyF25 = ((parseFloat(purchaseFrequencyF18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let purchaseFrequencyH25 = ((parseFloat(purchaseFrequencyH18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let purchaseFrequencyG25 = ((parseFloat(purchaseFrequencyG18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let purchaseFrequencyI25 = ((parseFloat(purchaseFrequencyI18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let purchaseFrequencyD26 = (parseFloat(purchaseFrequencyD17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyE26 = (parseFloat(purchaseFrequencyE17) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyF26 = ((parseFloat(purchaseFrequencyF18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyH26 = ((parseFloat(purchaseFrequencyH18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyG26 = ((parseFloat(purchaseFrequencyG18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyI26 = ((parseFloat(purchaseFrequencyI18) - parseFloat(purchaseFrequencyD12)) * parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19) / 100).toFixed(2)

            let purchaseFrequencyD28 = (parseFloat(purchaseFrequencyD23) * parseFloat(clientInputsH41)).toFixed(2)
            let purchaseFrequencyE28 = (parseFloat(purchaseFrequencyE23) * parseFloat(clientInputsH41)).toFixed(2)
            let purchaseFrequencyF28 = (parseFloat(purchaseFrequencyF23) * parseFloat(clientInputsH41)).toFixed(2)
            let purchaseFrequencyH28 = (parseFloat(purchaseFrequencyH23) * parseFloat(clientInputsH41)).toFixed(2)
            let purchaseFrequencyG28 = (parseFloat(purchaseFrequencyG23) * parseFloat(clientInputsH41)).toFixed(2)
            let purchaseFrequencyI28 = (parseFloat(purchaseFrequencyI23) * parseFloat(clientInputsH41)).toFixed(2)


            return {
                ...state, //copying the original state
                purchaseFrequencyD17,
                purchaseFrequencyD18,
                purchaseFrequencyE17,
                purchaseFrequencyE18,
                purchaseFrequencyF18,
                purchaseFrequencyG18,
                purchaseFrequencyF17,
                purchaseFrequencyG17,
                purchaseFrequencyH18,
                purchaseFrequencyI18,
                purchaseFrequencyH17,
                purchaseFrequencyI17,
                purchaseFrequencyD22,
                purchaseFrequencyE22,
                purchaseFrequencyF22,
                purchaseFrequencyG22,
                purchaseFrequencyH22,
                purchaseFrequencyI22,
                purchaseFrequencyD23,
                purchaseFrequencyE23,
                purchaseFrequencyF23,
                purchaseFrequencyG23,
                purchaseFrequencyH23,
                purchaseFrequencyI23,
                purchaseFrequencyD25,
                purchaseFrequencyE25,
                purchaseFrequencyF25,
                purchaseFrequencyG25,
                purchaseFrequencyH25,
                purchaseFrequencyI25,
                purchaseFrequencyD26,
                purchaseFrequencyE26,
                purchaseFrequencyF26,
                purchaseFrequencyG26,
                purchaseFrequencyH26,
                purchaseFrequencyI26,
                purchaseFrequencyD28,
                purchaseFrequencyE28,
                purchaseFrequencyF28,
                purchaseFrequencyG28,
                purchaseFrequencyH28,
                purchaseFrequencyI28,
            }
        }
        else {
            return {
                ...state, //copying the original state
                purchaseFrequencyD17: 0,
                purchaseFrequencyD18: 0,
                purchaseFrequencyE17: 0,
                purchaseFrequencyE18: 0,
                purchaseFrequencyF18: 0,
                purchaseFrequencyG18: 0,
                purchaseFrequencyF17: 0,
                purchaseFrequencyG17: 0,
                purchaseFrequencyH18: 0,
                purchaseFrequencyI18: 0,
                purchaseFrequencyH17: 0,
                purchaseFrequencyI17: 0,
                purchaseFrequencyD22: 0,
                purchaseFrequencyE22: 0,
                purchaseFrequencyF22: 0,
                purchaseFrequencyG22: 0,
                purchaseFrequencyH22: 0,
                purchaseFrequencyI22: 0,
                purchaseFrequencyD23: 0,
                purchaseFrequencyE23: 0,
                purchaseFrequencyF23: 0,
                purchaseFrequencyG23: 0,
                purchaseFrequencyH23: 0,
                purchaseFrequencyI23: 0,
                purchaseFrequencyD25: 0,
                purchaseFrequencyE25: 0,
                purchaseFrequencyF25: 0,
                purchaseFrequencyG25: 0,
                purchaseFrequencyH25: 0,
                purchaseFrequencyI25: 0,
                purchaseFrequencyD26: 0,
                purchaseFrequencyE26: 0,
                purchaseFrequencyF26: 0,
                purchaseFrequencyG26: 0,
                purchaseFrequencyH26: 0,
                purchaseFrequencyI26: 0,
                purchaseFrequencyD28: 0,
                purchaseFrequencyE28: 0,
                purchaseFrequencyF28: 0,
                purchaseFrequencyG28: 0,
                purchaseFrequencyH28: 0,
                purchaseFrequencyI28: 0,
            }
        }
    }
    else {
        return state
    }
}

export default reducer