const initialState = {
    referralsD12: 0,
    referralsD13: 0,
    referralsD17: 0,
    referralsD18: 0,
    referralsE17: 0,
    referralsE18: 0,
    referralsF18: 0,
    referralsG18: 0,
    referralsF17: 0,
    referralsG17: 0,
    referralsH18: 0,
    referralsI18: 0,
    referralsH17: 0,
    referralsI17: 0,
    referralsD22: 0,
    referralsE22: 0,
    referralsF22: 0,
    referralsG22: 0,
    referralsH22: 0,
    referralsI22: 0,
    referralsD23: 0,
    referralsE23: 0,
    referralsF23: 0,
    referralsG23: 0,
    referralsH23: 0,
    referralsI23: 0,
    referralsD25: 0,
    referralsE25: 0,
    referralsF25: 0,
    referralsG25: 0,
    referralsH25: 0,
    referralsI25: 0,
    referralsD26: 0,
    referralsE26: 0,
    referralsF26: 0,
    referralsG26: 0,
    referralsH26: 0,
    referralsI26: 0,
    referralsD28: 0,
    referralsE28: 0,
    referralsF28: 0,
    referralsG28: 0,
    referralsH28: 0,
    referralsI28: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'referralsD12') {
        return {
            ...state, //copying the original state
            referralsD12: parseFloat(action.payload)
        }
    }
    else if (action.type === 'referralsD13') {
        return {
            ...state, //copying the original state
            referralsD13: parseFloat(action.payload)
        }
    }
    else if (action.type === 'referralsImproving') {
        let referralsD12 = action.payload.clientInputsH27;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let clientInputsH41 = action.payload.clientInputsH41;
        if (!isNaN(referralsD12) && !isNaN(state.referralsD13)) {
            let referralsD17 = (parseFloat(referralsD12) * parseFloat(state.referralsD13) / 100).toFixed(2)
            let referralsD18 = ((parseFloat(referralsD12) + parseFloat(referralsD17))).toFixed(2)
            let referralsE17 = ((parseFloat(referralsD12) * parseFloat(4) / 100)).toFixed(2)
            let referralsE18 = ((parseFloat(referralsD12) + parseFloat(referralsE17))).toFixed(2)
            let referralsF18 = (parseFloat(referralsE18 * 4 / 100) + parseFloat(referralsE18)).toFixed(2)
            let referralsG18 = (parseFloat(referralsF18 * 4 / 100) + parseFloat(referralsF18)).toFixed(2)
            let referralsF17 = (parseFloat(referralsF18) - parseFloat(referralsD12)).toFixed(2)
            let referralsG17 = (parseFloat(referralsG18) - parseFloat(referralsD12)).toFixed(2)
            let referralsH18 = (parseFloat(referralsG18 * 4 / 100) + parseFloat(referralsG18)).toFixed(2)
            let referralsI18 = (parseFloat(referralsH18 * 4 / 100) + parseFloat(referralsH18)).toFixed(2)
            let referralsH17 = (parseFloat(referralsH18) - parseFloat(referralsD12)).toFixed(2)
            let referralsI17 = (parseFloat(referralsI18) - parseFloat(referralsD12)).toFixed(2)

            let referralsD22 = (parseFloat(referralsD17) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let referralsE22 = (parseFloat(referralsE17) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let referralsF22 = (parseFloat(referralsF17) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let referralsH22 = (parseFloat(referralsH17) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let referralsG22 = (parseFloat(referralsG17) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let referralsI22 = (parseFloat(referralsI17) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)

            let referralsD23 = (parseFloat(referralsD17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let referralsE23 = (parseFloat(referralsE17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let referralsF23 = (parseFloat(referralsF17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let referralsH23 = (parseFloat(referralsH17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let referralsG23 = (parseFloat(referralsG17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let referralsI23 = (parseFloat(referralsI17) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)

            let referralsD25 = (parseFloat(referralsD17) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let referralsE25 = (parseFloat(referralsE17) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let referralsF25 = (parseFloat(referralsF17) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let referralsH25 = (parseFloat(referralsH17) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let referralsG25 = (parseFloat(referralsG17) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let referralsI25 = (parseFloat(referralsI17) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)

            let referralsD26 = (parseFloat(referralsD17) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let referralsE26 = (parseFloat(referralsE17) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let referralsF26 = (parseFloat(referralsF17) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let referralsH26 = (parseFloat(referralsH17) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let referralsG26 = (parseFloat(referralsG17) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let referralsI26 = (parseFloat(referralsI17) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)

            let referralsD28 = (parseFloat(referralsD23) * parseFloat(clientInputsH41)).toFixed(2)
            let referralsE28 = (parseFloat(referralsE23) * parseFloat(clientInputsH41)).toFixed(2)
            let referralsF28 = (parseFloat(referralsF23) * parseFloat(clientInputsH41)).toFixed(2)
            let referralsH28 = (parseFloat(referralsH23) * parseFloat(clientInputsH41)).toFixed(2)
            let referralsG28 = (parseFloat(referralsG23) * parseFloat(clientInputsH41)).toFixed(2)
            let referralsI28 = (parseFloat(referralsI23) * parseFloat(clientInputsH41)).toFixed(2)


            return {
                ...state, //copying the original state
                referralsD17,
                referralsD18,
                referralsE17,
                referralsE18,
                referralsF18,
                referralsG18,
                referralsF17,
                referralsG17,
                referralsH18,
                referralsI18,
                referralsH17,
                referralsI17,
                referralsD22,
                referralsE22,
                referralsF22,
                referralsG22,
                referralsH22,
                referralsI22,
                referralsD23,
                referralsE23,
                referralsF23,
                referralsG23,
                referralsH23,
                referralsI23,
                referralsD25,
                referralsE25,
                referralsF25,
                referralsG25,
                referralsH25,
                referralsI25,
                referralsD26,
                referralsE26,
                referralsF26,
                referralsG26,
                referralsH26,
                referralsI26,
                referralsD28,
                referralsE28,
                referralsF28,
                referralsG28,
                referralsH28,
                referralsI28,
            }
        }
        else {
            return {
                ...state, //copying the original state
                referralsD17: 0,
                referralsD18: 0,
                referralsE17: 0,
                referralsE18: 0,
                referralsF18: 0,
                referralsG18: 0,
                referralsF17: 0,
                referralsG17: 0,
                referralsH18: 0,
                referralsI18: 0,
                referralsH17: 0,
                referralsI17: 0,
                referralsD22: 0,
                referralsE22: 0,
                referralsF22: 0,
                referralsG22: 0,
                referralsH22: 0,
                referralsI22: 0,
                referralsD23: 0,
                referralsE23: 0,
                referralsF23: 0,
                referralsG23: 0,
                referralsH23: 0,
                referralsI23: 0,
                referralsD25: 0,
                referralsE25: 0,
                referralsF25: 0,
                referralsG25: 0,
                referralsH25: 0,
                referralsI25: 0,
                referralsD26: 0,
                referralsE26: 0,
                referralsF26: 0,
                referralsG26: 0,
                referralsH26: 0,
                referralsI26: 0,
                referralsD28: 0,
                referralsE28: 0,
                referralsF28: 0,
                referralsG28: 0,
                referralsH28: 0,
                referralsI28: 0,
            }
        }
    }
    else {
        return state
    }
}

export default reducer