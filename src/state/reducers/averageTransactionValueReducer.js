const initialState = {
    averageTransactionValueD12: 0,
    averageTransactionValueD13: 0,
    averageTransactionValueD17: 0,
    averageTransactionValueE17: 0,
    averageTransactionValueF17: 0,
    averageTransactionValueG17: 0,
    averageTransactionValueH17: 0,
    averageTransactionValueI17: 0,
    averageTransactionValueD18: 0,
    averageTransactionValueE18: 0,
    averageTransactionValueF18: 0,
    averageTransactionValueG18: 0,
    averageTransactionValueH18: 0,
    averageTransactionValueI18: 0,
    averageTransactionValueD22: 0,
    averageTransactionValueE22: 0,
    averageTransactionValueF22: 0,
    averageTransactionValueG22: 0,
    averageTransactionValueH22: 0,
    averageTransactionValueI22: 0,
    averageTransactionValueD23: 0,
    averageTransactionValueE23: 0,
    averageTransactionValueF23: 0,
    averageTransactionValueG23: 0,
    averageTransactionValueH23: 0,
    averageTransactionValueI23: 0,
    averageTransactionValueD25: 0,
    averageTransactionValueE25: 0,
    averageTransactionValueF25: 0,
    averageTransactionValueG25: 0,
    averageTransactionValueH25: 0,
    averageTransactionValueI25: 0,
    averageTransactionValueD26: 0,
    averageTransactionValueE26: 0,
    averageTransactionValueF26: 0,
    averageTransactionValueG26: 0,
    averageTransactionValueH26: 0,
    averageTransactionValueI26: 0,
    averageTransactionValueD28: 0,
    averageTransactionValueE28: 0,
    averageTransactionValueF28: 0,
    averageTransactionValueG28: 0,
    averageTransactionValueH28: 0,
    averageTransactionValueI28: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'averageTransactionValueD12') {
        return {
            ...state, //copying the original state
            averageTransactionValueD12: parseFloat(action.payload)
        }
    }
    else if (action.type === 'averageTransactionValueD13') {
        return {
            ...state, //copying the original state
            averageTransactionValueD13: parseFloat(action.payload)
        }
    }
    else if (action.type === 'averageTransactionValue') {
        let averageTransactionValueD12 = action.payload.averageTransactionValueD12;
        let CustomerFinancialValuesD16 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD16;
        let CustomerFinancialValuesD17 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD17;
        let CustomerFinancialValuesD18 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD18;
        let CustomerFinancialValuesD19 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD19;
        let CustomerFinancialValuesD20 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD20;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let clientInputsH41 = action.payload.clientInputsH41;


        if (!isNaN(averageTransactionValueD12) && !isNaN(state.averageTransactionValueD13)) {
            let averageTransactionValueD17 = (parseFloat(averageTransactionValueD12) * parseFloat(state.averageTransactionValueD13)/100).toFixed(2)
            let averageTransactionValueE17 = (parseFloat(averageTransactionValueD12) * parseFloat(4)/100).toFixed(2)
            let averageTransactionValueE18 = (parseFloat(averageTransactionValueD12) + parseFloat(averageTransactionValueE17)).toFixed(2)
            let averageTransactionValueF18 = (parseFloat(averageTransactionValueE18) * parseFloat(4)/100 + parseFloat(averageTransactionValueE18)).toFixed(2)
            let averageTransactionValueG18 = ((parseFloat(averageTransactionValueF18) * parseFloat(4)/100) + parseFloat(averageTransactionValueF18)).toFixed(2)
            let averageTransactionValueF17 = (parseFloat(averageTransactionValueF18) - parseFloat(averageTransactionValueD12)).toFixed(2)
            let averageTransactionValueG17 = (parseFloat(averageTransactionValueG18) - parseFloat(averageTransactionValueD12)).toFixed(2)
            let averageTransactionValueH18 = ((parseFloat(averageTransactionValueG18) * parseFloat(4)/100) + parseFloat(averageTransactionValueG18)).toFixed(2)
            let averageTransactionValueH17 = (parseFloat(averageTransactionValueH18) - parseFloat(averageTransactionValueD12)).toFixed(2)
            let averageTransactionValueI18 = ((parseFloat(averageTransactionValueH18) * parseFloat(4)/100) + parseFloat(averageTransactionValueH18)).toFixed(2)
            let averageTransactionValueI17 = (parseFloat(averageTransactionValueI18) - parseFloat(averageTransactionValueD12)).toFixed(2)
            let averageTransactionValueD18 = (parseFloat(averageTransactionValueD12) + parseFloat(averageTransactionValueD17)).toFixed(2)
            
            let averageTransactionValueD22 = (parseFloat(averageTransactionValueD17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)
            let averageTransactionValueE22 = (parseFloat(averageTransactionValueE17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)
            let averageTransactionValueF22 = (parseFloat(averageTransactionValueF17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)
            let averageTransactionValueG22 = (parseFloat(averageTransactionValueG17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)
            let averageTransactionValueH22 = (parseFloat(averageTransactionValueH17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)
            let averageTransactionValueI22 = (parseFloat(averageTransactionValueI17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20)).toFixed(2)
           
            let averageTransactionValueD23 = (parseFloat(averageTransactionValueD17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueE23 = (parseFloat(averageTransactionValueE17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueF23 = (parseFloat(averageTransactionValueF17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueG23 = (parseFloat(averageTransactionValueG17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueH23 = (parseFloat(averageTransactionValueH17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueI23 = (parseFloat(averageTransactionValueI17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)

            let averageTransactionValueD25 = (parseFloat(averageTransactionValueD17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)
            let averageTransactionValueE25 = (parseFloat(averageTransactionValueE17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)
            let averageTransactionValueF25 = (parseFloat(averageTransactionValueF17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)
            let averageTransactionValueG25 = (parseFloat(averageTransactionValueG17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)
            let averageTransactionValueH25 = (parseFloat(averageTransactionValueH17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)
            let averageTransactionValueI25 = (parseFloat(averageTransactionValueI17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18)).toFixed(2)

            let averageTransactionValueD26 = (parseFloat(averageTransactionValueD17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueE26 = (parseFloat(averageTransactionValueE17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueF26 = (parseFloat(averageTransactionValueF17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueG26 = (parseFloat(averageTransactionValueG17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueH26 = (parseFloat(averageTransactionValueH17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)
            let averageTransactionValueI26 = (parseFloat(averageTransactionValueI17) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(CustomerFinancialValuesD19)/100).toFixed(2)

            let averageTransactionValueD28 = parseFloat(averageTransactionValueD23) * parseFloat(clientInputsH41).toFixed(2)
            let averageTransactionValueE28 = (parseFloat(averageTransactionValueE23) * parseFloat(clientInputsH41)).toFixed(2)
            let averageTransactionValueF28 = (parseFloat(averageTransactionValueF23) * parseFloat(clientInputsH41)).toFixed(2)
            let averageTransactionValueG28 = (parseFloat(averageTransactionValueG23) * parseFloat(clientInputsH41)).toFixed(2)
            let averageTransactionValueH28 = (parseFloat(averageTransactionValueH23) * parseFloat(clientInputsH41)).toFixed(2)
            let averageTransactionValueI28 = (parseFloat(averageTransactionValueI23) * parseFloat(clientInputsH41)).toFixed(2)

        
            return {
                ...state, //copying the original state
                averageTransactionValueD17,
                averageTransactionValueE17,
                averageTransactionValueF17,
                averageTransactionValueG17,
                averageTransactionValueH17,
                averageTransactionValueI17,
                averageTransactionValueD18,
                averageTransactionValueE18,
                averageTransactionValueF18,
                averageTransactionValueG18,
                averageTransactionValueH18,
                averageTransactionValueI18,
                averageTransactionValueD22,
                averageTransactionValueE22,
                averageTransactionValueF22,
                averageTransactionValueG22,
                averageTransactionValueH22,
                averageTransactionValueI22,
                averageTransactionValueD23,
                averageTransactionValueE23,
                averageTransactionValueF23,
                averageTransactionValueG23,
                averageTransactionValueH23,
                averageTransactionValueI23,
                averageTransactionValueD25,
                averageTransactionValueE25,
                averageTransactionValueF25,
                averageTransactionValueG25,
                averageTransactionValueH25,
                averageTransactionValueI25,
                averageTransactionValueD26,
                averageTransactionValueE26,
                averageTransactionValueF26,
                averageTransactionValueG26,
                averageTransactionValueH26,
                averageTransactionValueI26,
                averageTransactionValueD28,
                averageTransactionValueE28,
                averageTransactionValueF28,
                averageTransactionValueG28,
                averageTransactionValueH28,
                averageTransactionValueI28,
            }
        }
        else {
            return {
                ...state, //copying the original state
                averageTransactionValueD17: 0,
                averageTransactionValueE17: 0,
                averageTransactionValueF17: 0,
                averageTransactionValueG17: 0,
                averageTransactionValueH17: 0,
                averageTransactionValueI17: 0,
                averageTransactionValueD18: 0,
                averageTransactionValueE18: 0,
                averageTransactionValueF18: 0,
                averageTransactionValueG18: 0,
                averageTransactionValueH18: 0,
                averageTransactionValueI18: 0,
                averageTransactionValueD22: 0,
                averageTransactionValueE22: 0,
                averageTransactionValueF22: 0,
                averageTransactionValueG22: 0,
                averageTransactionValueH22: 0,
                averageTransactionValueI22: 0,
                averageTransactionValueD23: 0,
                averageTransactionValueE23: 0,
                averageTransactionValueF23: 0,
                averageTransactionValueG23: 0,
                averageTransactionValueH23: 0,
                averageTransactionValueI23: 0,
                averageTransactionValueD25: 0,
                averageTransactionValueE25: 0,
                averageTransactionValueF25: 0,
                averageTransactionValueG25: 0,
                averageTransactionValueH25: 0,
                averageTransactionValueI25: 0,
                averageTransactionValueD26: 0,
                averageTransactionValueE26: 0,
                averageTransactionValueF26: 0,
                averageTransactionValueG26: 0,
                averageTransactionValueH26: 0,
                averageTransactionValueI26: 0,
                averageTransactionValueD28: 0,
                averageTransactionValueE28: 0,
                averageTransactionValueF28: 0,
                averageTransactionValueG28: 0,
                averageTransactionValueH28: 0,
                averageTransactionValueI28: 0,
            }
        }
    }
    else {
        return state
    }
}

export default reducer

