import sum from "../../utils/sum";
const initialState = {
    customerReactivationD12: 0,
    customerReactivationD13: 0,
    customerReactivationD17: 0,
    customerReactivationE17: 0,
    customerReactivationF17: 0,
    customerReactivationG17: 0,
    customerReactivationH17: 0,
    customerReactivationI17: 0,
    customerReactivationD18: 0,
    customerReactivationE18: 0,
    customerReactivationF18: 0,
    customerReactivationG18: 0,
    customerReactivationH18: 0,
    customerReactivationI18: 0,
    customerReactivationD22: 0,
    customerReactivationE22: 0,
    customerReactivationF22: 0,
    customerReactivationG22: 0,
    customerReactivationH22: 0,
    customerReactivationI22: 0,
    customerReactivationD23: 0,
    customerReactivationE23: 0,
    customerReactivationF23: 0,
    customerReactivationG23: 0,
    customerReactivationH23: 0,
    customerReactivationI23: 0,
    customerReactivationD25: 0,
    customerReactivationE25: 0,
    customerReactivationF25: 0,
    customerReactivationG25: 0,
    customerReactivationH25: 0,
    customerReactivationI25: 0,
    customerReactivationD26: 0,
    customerReactivationE26: 0,
    customerReactivationF26: 0,
    customerReactivationG26: 0,
    customerReactivationH26: 0,
    customerReactivationI26: 0,
    customerReactivationD28: 0,
    customerReactivationE28: 0,
    customerReactivationF28: 0,
    customerReactivationG28: 0,
    customerReactivationH28: 0,
    customerReactivationI28: 0,
    customerReactivationD31: 0,
    customerReactivationD32: 0,
    customerReactivationD33: 0,
    customerReactivationD34: 0,
    customerReactivationD35: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'customerReactivationD12') {
        return {
            ...state, //copying the original state
            customerReactivationD12: parseFloat(action.payload)
        }
    }
    else if (action.type === 'customerReactivationD13') {
        return {
            ...state, //copying the original state
            customerReactivationD13: parseFloat(action.payload)
        }
    }
    else if (action.type === 'customerReactivation') {
        let customerReactivationD12 = action.payload.customerReactivationD12;
        let impactof120GrowthOSG26 = action.payload.impactof120GrowthOS.impactof120GrowthOSG26;
        let impactof120GrowthOSH26 = action.payload.impactof120GrowthOS.impactof120GrowthOSH26;
        let impactof120GrowthOSI26 = action.payload.impactof120GrowthOS.impactof120GrowthOSI26;
        let impactof120GrowthOSJ26 = action.payload.impactof120GrowthOS.impactof120GrowthOSJ26;
        let CustomerFinancialValuesD16 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD16;
        let CustomerFinancialValuesD18 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD18;
        let CustomerFinancialValuesD19 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD19;
        let CustomerFinancialValuesD20 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD20;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let clientInputsH41 = action.payload.clientInputsH41;


        if (!isNaN(customerReactivationD12) && !isNaN(state.customerReactivationD13)) {
            let customerReactivationD17 = (parseFloat(customerReactivationD12)).toFixed(2)
            let customerReactivationE17 = (parseFloat(customerReactivationD12)).toFixed(2)
            let customerReactivationF17 = (parseFloat(customerReactivationE17) + parseFloat(impactof120GrowthOSG26)).toFixed(2)
            let customerReactivationG17 = (parseFloat(customerReactivationF17) + parseFloat(impactof120GrowthOSH26)).toFixed(2)
            let customerReactivationH17 = (parseFloat(customerReactivationG17) + parseFloat(impactof120GrowthOSI26)).toFixed(2)
            let customerReactivationI17 = (parseFloat(customerReactivationH17) + parseFloat(impactof120GrowthOSJ26)).toFixed(2)

            let customerReactivationD18 = (parseFloat(customerReactivationD12) * parseFloat(state.customerReactivationD13) / 100).toFixed(2)
            let customerReactivationE18 = (parseFloat(customerReactivationD12) * parseFloat(4) / 100).toFixed(2)
            let customerReactivationF18 = (parseFloat(customerReactivationF17) * parseFloat(4) / 100).toFixed(2)
            let customerReactivationG18 = (parseFloat(customerReactivationG17) * parseFloat(4) / 100).toFixed(2)
            let customerReactivationH18 = (parseFloat(customerReactivationH17) * parseFloat(4) / 100).toFixed(2)
            let customerReactivationI18 = (parseFloat(customerReactivationI17) * parseFloat(4) / 100).toFixed(2)

            let customerReactivationD22 = (parseFloat(customerReactivationD18) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let customerReactivationE22 = (parseFloat(customerReactivationE18) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let customerReactivationF22 = (parseFloat(customerReactivationF18) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let customerReactivationG22 = (parseFloat(customerReactivationG18) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let customerReactivationH22 = (parseFloat(customerReactivationH18) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)
            let customerReactivationI22 = (parseFloat(customerReactivationI18) * parseFloat(CustomerFinancialValuesD24)).toFixed(2)

            let customerReactivationD23 = (parseFloat(customerReactivationD18) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let customerReactivationE23 = (parseFloat(customerReactivationE18) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let customerReactivationF23 = (parseFloat(customerReactivationF18) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let customerReactivationG23 = (parseFloat(customerReactivationG18) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let customerReactivationH23 = (parseFloat(customerReactivationH18) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)
            let customerReactivationI23 = (parseFloat(customerReactivationI18) * parseFloat(CustomerFinancialValuesD25)).toFixed(2)

            let customerReactivationD25 = (parseFloat(customerReactivationD18) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let customerReactivationE25 = (parseFloat(customerReactivationE18) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let customerReactivationF25 = (parseFloat(customerReactivationF18) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let customerReactivationG25 = (parseFloat(customerReactivationG18) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let customerReactivationH25 = (parseFloat(customerReactivationH18) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)
            let customerReactivationI25 = (parseFloat(customerReactivationI18) * parseFloat(CustomerFinancialValuesD26)).toFixed(2)

            let customerReactivationD26 = (parseFloat(customerReactivationD18) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let customerReactivationE26 = (parseFloat(customerReactivationE18) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let customerReactivationF26 = (parseFloat(customerReactivationF18) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let customerReactivationG26 = (parseFloat(customerReactivationG18) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let customerReactivationH26 = (parseFloat(customerReactivationH18) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)
            let customerReactivationI26 = (parseFloat(customerReactivationI18) * parseFloat(CustomerFinancialValuesD27)).toFixed(2)

            let customerReactivationD28 = parseFloat(customerReactivationD23) * parseFloat(clientInputsH41).toFixed(2)
            let customerReactivationE28 = (parseFloat(customerReactivationE23) * parseFloat(clientInputsH41)).toFixed(2)
            let customerReactivationF28 = (parseFloat(customerReactivationF23) * parseFloat(clientInputsH41)).toFixed(2)
            let customerReactivationG28 = (parseFloat(customerReactivationG23) * parseFloat(clientInputsH41)).toFixed(2)
            let customerReactivationH28 = (parseFloat(customerReactivationH23) * parseFloat(clientInputsH41)).toFixed(2)
            let customerReactivationI28 = (parseFloat(customerReactivationI23) * parseFloat(clientInputsH41)).toFixed(2)

            let customerReactivationD31 = sum(parseFloat(customerReactivationE28), parseFloat(customerReactivationF28), parseFloat(customerReactivationG28), parseFloat(customerReactivationH28), parseFloat(customerReactivationI28)).toFixed(2)

            let customerReactivationD32 = sum(parseFloat(customerReactivationE26), parseFloat(customerReactivationF26), parseFloat(customerReactivationG26), parseFloat(customerReactivationH26), parseFloat(customerReactivationI26)).toFixed(2)

            let customerReactivationD33 = sum(parseFloat(customerReactivationE25), parseFloat(customerReactivationF25), parseFloat(customerReactivationG25), parseFloat(customerReactivationH25), parseFloat(customerReactivationI25)).toFixed(2)

            let customerReactivationD34 = sum(parseFloat(customerReactivationE23), parseFloat(customerReactivationF23), parseFloat(customerReactivationG23), parseFloat(customerReactivationH23), parseFloat(customerReactivationI23)).toFixed(2)

            let customerReactivationD35 = sum(parseFloat(customerReactivationE22), parseFloat(customerReactivationF22), parseFloat(customerReactivationG22), parseFloat(customerReactivationH22), parseFloat(customerReactivationI22)).toFixed(2)




            return {
                ...state, //copying the original state
                customerReactivationD17,
                customerReactivationE17,
                customerReactivationF17,
                customerReactivationG17,
                customerReactivationH17,
                customerReactivationI17,
                customerReactivationD18,
                customerReactivationE18,
                customerReactivationF18,
                customerReactivationG18,
                customerReactivationH18,
                customerReactivationI18,
                customerReactivationD22,
                customerReactivationE22,
                customerReactivationF22,
                customerReactivationG22,
                customerReactivationH22,
                customerReactivationI22,
                customerReactivationD23,
                customerReactivationE23,
                customerReactivationF23,
                customerReactivationG23,
                customerReactivationH23,
                customerReactivationI23,
                customerReactivationD25,
                customerReactivationE25,
                customerReactivationF25,
                customerReactivationG25,
                customerReactivationH25,
                customerReactivationI25,
                customerReactivationD26,
                customerReactivationE26,
                customerReactivationF26,
                customerReactivationG26,
                customerReactivationH26,
                customerReactivationI26,
                customerReactivationD28,
                customerReactivationE28,
                customerReactivationF28,
                customerReactivationG28,
                customerReactivationH28,
                customerReactivationI28,
                customerReactivationD31,
                customerReactivationD32,
                customerReactivationD33,
                customerReactivationD34,
                customerReactivationD35,

            }
        }
        else {
            return {
                ...state, //copying the original state
                customerReactivationD17: 0,
                customerReactivationE17: 0,
                customerReactivationF17: 0,
                customerReactivationG17: 0,
                customerReactivationH17: 0,
                customerReactivationI17: 0,
                customerReactivationD18: 0,
                customerReactivationE18: 0,
                customerReactivationF18: 0,
                customerReactivationG18: 0,
                customerReactivationH18: 0,
                customerReactivationI18: 0,
                customerReactivationD22: 0,
                customerReactivationE22: 0,
                customerReactivationF22: 0,
                customerReactivationG22: 0,
                customerReactivationH22: 0,
                customerReactivationI22: 0,
                customerReactivationD23: 0,
                customerReactivationE23: 0,
                customerReactivationF23: 0,
                customerReactivationG23: 0,
                customerReactivationH23: 0,
                customerReactivationI23: 0,
                customerReactivationD25: 0,
                customerReactivationE25: 0,
                customerReactivationF25: 0,
                customerReactivationG25: 0,
                customerReactivationH25: 0,
                customerReactivationI25: 0,
                customerReactivationD26: 0,
                customerReactivationE26: 0,
                customerReactivationF26: 0,
                customerReactivationG26: 0,
                customerReactivationH26: 0,
                customerReactivationI26: 0,
                customerReactivationD28: 0,
                customerReactivationE28: 0,
                customerReactivationF28: 0,
                customerReactivationG28: 0,
                customerReactivationH28: 0,
                customerReactivationI28: 0,
                customerReactivationD31: 0,
                customerReactivationD32: 0,
                customerReactivationD33: 0,
                customerReactivationD34: 0,
                customerReactivationD35: 0,
            }
        }
    }
    else {
        return state
    }
}

export default reducer

