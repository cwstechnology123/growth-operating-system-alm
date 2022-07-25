const initialState = {
    profitMarginD12: 0,
    profitMarginD13: 0,
    profitMarginD17: 0,
    profitMarginE17: 0,
    profitMarginF17: 0,
    profitMarginG17: 0,
    profitMarginH17: 0,
    profitMarginI17: 0,
    profitMarginD18: 0,
    profitMarginE18: 0,
    profitMarginF18: 0,
    profitMarginG18: 0,
    profitMarginH18: 0,
    profitMarginI18: 0,
    profitMarginD22: 0,
    profitMarginE22: 0,
    profitMarginF22: 0,
    profitMarginG22: 0,
    profitMarginH22: 0,
    profitMarginI22: 0,
    profitMarginD24: 0,
    profitMarginE24: 0,
    profitMarginF24: 0,
    profitMarginG24: 0,
    profitMarginH24: 0,
    profitMarginI24: 0,
    profitMarginD26: 0,
    profitMarginE26: 0,
    profitMarginF26: 0,
    profitMarginG26: 0,
    profitMarginH26: 0,
    profitMarginI26: 0,
}

const reducer = (state = 0, action) => {
    if (action.type === 'profitMarginD12') {
        return {
            ...state, //copying the original state
            profitMarginD12: parseFloat(action.payload)
        }
    } else if (action.type === 'profitMarginD13') {
        return {
            ...state, //copying the original state
            profitMarginD13: parseFloat(action.payload)
        }
    }
    else if (action.type === 'profitMarginImprovement') {
        let profitMarginD12 = action.payload.profitMarginD12;
        let CustomerFinancialValuesD16 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD16;
        let CustomerFinancialValuesD17 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD17;
        let CustomerFinancialValuesD18 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD18;
        let CustomerFinancialValuesD20 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD20;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let clientInputsH41 = action.payload.clientInputsH41;

        if (!isNaN(profitMarginD12) && !isNaN(state.profitMarginD13)) {
            let profitMarginD17 = (parseFloat(profitMarginD12) * parseFloat(state.profitMarginD13) / 100);
            let profitMarginE17 = (parseFloat(profitMarginD12) * parseFloat(4) / 100).toFixed(2)
            let profitMarginE18 = (parseFloat(profitMarginD12) + parseFloat(profitMarginE17)).toFixed(2)
            let profitMarginF18 = (parseFloat(profitMarginE18) * parseFloat(4) / 100 + parseFloat(profitMarginE18)).toFixed(2)
            let profitMarginG18 = ((parseFloat(profitMarginF18) * parseFloat(4) / 100) + parseFloat(profitMarginF18)).toFixed(2)
            let profitMarginF17 = (parseFloat(profitMarginF18) - parseFloat(profitMarginD12)).toFixed(2)
            let profitMarginG17 = (parseFloat(profitMarginG18) - parseFloat(profitMarginD12)).toFixed(2)
            let profitMarginH18 = ((parseFloat(profitMarginG18) * parseFloat(4) / 100) + parseFloat(profitMarginG18)).toFixed(2)
            let profitMarginH17 = (parseFloat(profitMarginH18) - parseFloat(profitMarginD12)).toFixed(2)
            let profitMarginI18 = ((parseFloat(profitMarginH18) * parseFloat(4) / 100) + parseFloat(profitMarginH18)).toFixed(2)
            let profitMarginI17 = (parseFloat(profitMarginI18) - parseFloat(profitMarginD12)).toFixed(2)
            let profitMarginD18 = (parseFloat(profitMarginD12) + parseFloat(profitMarginD17)).toFixed(2)

            let profitMarginD22 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(profitMarginD17)).toFixed(2)
            let profitMarginE22 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(profitMarginE17)).toFixed(2)
            let profitMarginF22 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(profitMarginF17)).toFixed(2)
            let profitMarginG22 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(profitMarginG17)).toFixed(2)
            let profitMarginH22 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(profitMarginH17)).toFixed(2)
            let profitMarginI22 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(profitMarginI17)).toFixed(2)

            let profitMarginD24 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(profitMarginD17)).toFixed(2)
            let profitMarginE24 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(profitMarginE17)).toFixed(2)
            let profitMarginF24 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(profitMarginF17)).toFixed(2)
            let profitMarginG24 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(profitMarginF17)).toFixed(2)
            let profitMarginH24 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(profitMarginG17)).toFixed(2)
            let profitMarginI24 = (parseFloat(CustomerFinancialValuesD16) * parseFloat(CustomerFinancialValuesD17) * parseFloat(CustomerFinancialValuesD20) * parseFloat(CustomerFinancialValuesD18) * parseFloat(profitMarginI17)).toFixed(2)

            let profitMarginD26 = parseFloat(profitMarginD22) * parseFloat(clientInputsH41).toFixed(2)
            let profitMarginE26 = (parseFloat(profitMarginE22) * parseFloat(clientInputsH41)).toFixed(2)
            let profitMarginF26 = (parseFloat(profitMarginF22) * parseFloat(clientInputsH41)).toFixed(2)
            let profitMarginG26 = (parseFloat(profitMarginG22) * parseFloat(clientInputsH41)).toFixed(2)
            let profitMarginH26 = (parseFloat(profitMarginH22) * parseFloat(clientInputsH41)).toFixed(2)
            let profitMarginI26 = (parseFloat(profitMarginI22) * parseFloat(clientInputsH41)).toFixed(2)
            return {
                ...state, //copying the original state
                profitMarginD17,
                profitMarginE17,
                profitMarginF17,
                profitMarginG17,
                profitMarginH17,
                profitMarginI17,
                profitMarginD18,
                profitMarginE18,
                profitMarginF18,
                profitMarginG18,
                profitMarginH18,
                profitMarginI18,
                profitMarginD22,
                profitMarginE22,
                profitMarginF22,
                profitMarginG22,
                profitMarginH22,
                profitMarginI22,
                profitMarginD24,
                profitMarginE24,
                profitMarginF24,
                profitMarginG24,
                profitMarginH24,
                profitMarginI24,
                profitMarginD26,
                profitMarginE26,
                profitMarginF26,
                profitMarginG26,
                profitMarginH26,
                profitMarginI26,

            }
        }
        else {
            return {
                ...state, //copying the original state
                profitMarginD17: 0,
                profitMarginE17: 0,
                profitMarginF17: 0,
                profitMarginG17: 0,
                profitMarginH17: 0,
                profitMarginI17: 0,
                profitMarginD18: 0,
                profitMarginE18: 0,
                profitMarginF18: 0,
                profitMarginG18: 0,
                profitMarginH18: 0,
                profitMarginI18: 0,
                profitMarginD22: 0,
                profitMarginE22: 0,
                profitMarginF22: 0,
                profitMarginG22: 0,
                profitMarginH22: 0,
                profitMarginI22: 0,
                profitMarginD24: 0,
                profitMarginE24: 0,
                profitMarginF24: 0,
                profitMarginG24: 0,
                profitMarginH24: 0,
                profitMarginI24: 0,
                profitMarginD26: 0,
                profitMarginE26: 0,
                profitMarginF26: 0,
                profitMarginG26: 0,
                profitMarginH26: 0,
                profitMarginI26: 0,
            }

        }


    }
    // else if (action.type === "INITIAL_STATE") {
    //     state = initialState;
    //     return state
    // }
    else {
        return state
    }
}

export default reducer