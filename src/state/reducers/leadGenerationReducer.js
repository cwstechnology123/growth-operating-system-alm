const initialState = {
    leadGenerationD20 : 0,
    leadGenerationD21 : 0,
    leadGenerationE20 : 0,
    leadGenerationE21 : 0,
    leadGenerationF20 : 0,
    leadGenerationF21 : 0,
    leadGenerationG20 : 0,
    leadGenerationG21 : 0,
    leadGenerationH20 : 0,
    leadGenerationH21 : 0,
    leadGenerationI20 : 0,
    leadGenerationI21 : 0,
    leadGenerationD25 : 0,
    leadGenerationD26 : 0,
    leadGenerationE25 : 0,
    leadGenerationE26 : 0,
    leadGenerationF25 : 0,
    leadGenerationF26 : 0,
    leadGenerationG25 : 0,
    leadGenerationG26 : 0,
    leadGenerationH25 : 0,
    leadGenerationH26 : 0,
    leadGenerationI25 : 0,
    leadGenerationI26 : 0,
    leadGenerationD28 : 0,
    leadGenerationD29 : 0,
    leadGenerationE28 : 0,
    leadGenerationE29 : 0,
    leadGenerationF28 : 0,
    leadGenerationF29 : 0,
    leadGenerationG28 : 0,
    leadGenerationG29 : 0,
    leadGenerationH28 : 0,
    leadGenerationH29 : 0,
    leadGenerationI28 : 0,
    leadGenerationI29 : 0,
    leadGenerationD31 : 0,
    leadGenerationE31 : 0,
    leadGenerationF31 : 0,
    leadGenerationG31 : 0,
    leadGenerationH31 : 0,
    leadGenerationI31 : 0
}

const reducer = (state = initialState, action) =>{
    if(action.type === 'leadGenerationD15'){
        //console.log(action);
        return { 
            ...state, //copying the original state
            leadGenerationD15 : (action.payload) ? parseFloat(action.payload) : 0
        }
    }
    else if(action.type === 'leadGenerationD16'){
        //console.log(action);
        return { 
            ...state, //copying the original state
            leadGenerationD16 : (action.payload) ? parseFloat(action.payload) : 0
        }
    }
    else if(action.type === 'leadGenerationImprovement'){
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesE24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesE24;
        let CustomerFinancialValuesE25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesE25;
        let CustomerFinancialValuesF24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesF24;
        let CustomerFinancialValuesF25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesF25;
        let CustomerFinancialValuesG24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesG24;
        let CustomerFinancialValuesG25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesG25;
        let CustomerFinancialValuesH24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesH24;
        let CustomerFinancialValuesH25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesH25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let CustomerFinancialValuesE26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesE27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;
        let CustomerFinancialValuesF26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesF26;
        let CustomerFinancialValuesF27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesF27;
        let CustomerFinancialValuesG26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesG26;
        let CustomerFinancialValuesG27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesG27;
        let CustomerFinancialValuesH26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesH26;
        let CustomerFinancialValuesH27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesH27;

        let clientInputsH26 = action.payload.clientInputsH26;
        let clientInputsH41 = action.payload.clientInputsH41;
        if(!isNaN(state.leadGenerationD15) && !isNaN(state.leadGenerationD16)){
            let leadGenerationD20 = Math.round(parseFloat(state.leadGenerationD15) * parseFloat(state.leadGenerationD16)/100);
            let leadGenerationD21 = Math.round(parseFloat(state.leadGenerationD15) + parseFloat(leadGenerationD20));
            let leadGenerationE20 = Math.round(parseFloat(state.leadGenerationD15) * 4 / 100);
            let leadGenerationE21 = Math.round(parseFloat(state.leadGenerationD15) + parseFloat(leadGenerationE20));
            let leadGenerationF20 = Math.round(parseFloat(leadGenerationE21) * 4 / 100 + parseFloat(leadGenerationE20));
            let leadGenerationF21 = Math.round(parseFloat(leadGenerationE21) + parseFloat(leadGenerationF20));
            let leadGenerationG20 = Math.round(parseFloat(leadGenerationF21) * 4 / 100 + parseFloat(leadGenerationF20));
            let leadGenerationG21 = Math.round(parseFloat(leadGenerationF21) + parseFloat(leadGenerationG20));
            let leadGenerationH20 = Math.round(parseFloat(leadGenerationG21) * 4 / 100 + parseFloat(leadGenerationG20));
            let leadGenerationH21 = Math.round(parseFloat(leadGenerationG21) + parseFloat(leadGenerationH20));
            let leadGenerationI20 = Math.round(parseFloat(leadGenerationH21) * 4 / 100 + parseFloat(leadGenerationH20));
            let leadGenerationI21 = Math.round(parseFloat(leadGenerationH21) + parseFloat(leadGenerationI20));

            let leadGenerationD25 = Math.round(parseFloat(leadGenerationD20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD24));
            let leadGenerationD26 = Math.round(parseFloat(leadGenerationD20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD25));
            let leadGenerationE25 = Math.round(parseFloat(leadGenerationE20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD24));
            let leadGenerationE26 = Math.round(parseFloat(leadGenerationE20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD25));
            let leadGenerationF25 = Math.round(parseFloat(leadGenerationF20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesE24));
            let leadGenerationF26 = Math.round(parseFloat(leadGenerationF20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesE25));
            let leadGenerationG25 = Math.round(parseFloat(leadGenerationG20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesF24));
            let leadGenerationG26 = Math.round(parseFloat(leadGenerationG20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesF25));
            let leadGenerationH25 = Math.round(parseFloat(leadGenerationH20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesG24));
            let leadGenerationH26 = Math.round(parseFloat(leadGenerationH20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesG25));
            let leadGenerationI25 = Math.round(parseFloat(leadGenerationI20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesH24));
            let leadGenerationI26 = Math.round(parseFloat(leadGenerationI20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesH25));

            let leadGenerationD28 = Math.round(parseFloat(leadGenerationD20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD26));
            let leadGenerationD29 = Math.round(parseFloat(leadGenerationD20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD27));
            let leadGenerationE28 = Math.round(parseFloat(leadGenerationE20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD26));
            let leadGenerationE29 = Math.round(parseFloat(leadGenerationE20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesD27));
            let leadGenerationF28 = Math.round(parseFloat(leadGenerationF20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesE26));
            let leadGenerationF29 = Math.round(parseFloat(leadGenerationF20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesE27));
            let leadGenerationG28 = Math.round(parseFloat(leadGenerationG20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesF26));
            let leadGenerationG29 = Math.round(parseFloat(leadGenerationG20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesF27));
            let leadGenerationH28 = Math.round(parseFloat(leadGenerationH20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesG26));
            let leadGenerationH29 = Math.round(parseFloat(leadGenerationH20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesG27));
            let leadGenerationI28 = Math.round(parseFloat(leadGenerationI20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesH26));
            let leadGenerationI29 = Math.round(parseFloat(leadGenerationI20) * parseFloat(clientInputsH26) / 100 * parseFloat(CustomerFinancialValuesH27));

            let leadGenerationD31 = Math.round(parseFloat(leadGenerationD26) * parseFloat(clientInputsH41));
            let leadGenerationE31 = Math.round(parseFloat(leadGenerationE26) * parseFloat(clientInputsH41));
            let leadGenerationF31 = Math.round(parseFloat(leadGenerationF26) * parseFloat(clientInputsH41));
            let leadGenerationG31 = Math.round(parseFloat(leadGenerationG26) * parseFloat(clientInputsH41));
            let leadGenerationH31 = Math.round(parseFloat(leadGenerationH26) * parseFloat(clientInputsH41));
            let leadGenerationI31 = Math.round(parseFloat(leadGenerationI26) * parseFloat(clientInputsH41));

            return { 
                ...state, //copying the original state
                leadGenerationD20 : (leadGenerationD20 != 'NaN') ? leadGenerationD20 : 0,
                leadGenerationD21 : (leadGenerationD21 != 'NaN') ? leadGenerationD21 : 0,
                leadGenerationE20 : (leadGenerationE20 != 'NaN') ? leadGenerationE20 : 0,
                leadGenerationE21 : (leadGenerationE21 != 'NaN') ? leadGenerationE21 : 0,
                leadGenerationF20 : (leadGenerationF20 != 'NaN') ? leadGenerationF20 : 0,
                leadGenerationF21 : (leadGenerationF21 != 'NaN') ? leadGenerationF21 : 0,
                leadGenerationG20 : (leadGenerationG20 != 'NaN') ? leadGenerationG20 : 0,
                leadGenerationG21 : (leadGenerationG21 != 'NaN') ? leadGenerationG21 : 0,
                leadGenerationH20 : (leadGenerationH20 != 'NaN') ? leadGenerationH20 : 0,
                leadGenerationH21 : (leadGenerationH21 != 'NaN') ? leadGenerationH21 : 0,
                leadGenerationI20 : (leadGenerationI20 != 'NaN') ? leadGenerationI20 : 0,
                leadGenerationI21 : (leadGenerationI21 != 'NaN') ? leadGenerationI21 : 0,
                leadGenerationD25 : (leadGenerationD25 != 'NaN') ? leadGenerationD25 : 0,
                leadGenerationD26 : (leadGenerationD26 != 'NaN') ? leadGenerationD26 : 0,
                leadGenerationE25 : (leadGenerationE25 != 'NaN') ? leadGenerationE25 : 0,
                leadGenerationE26 : (leadGenerationE26 != 'NaN') ? leadGenerationE26 : 0,
                leadGenerationF25 : (leadGenerationF25 != 'NaN') ? leadGenerationF25 : 0,
                leadGenerationF26 : (leadGenerationF26 != 'NaN') ? leadGenerationF26 : 0,
                leadGenerationG25 : (leadGenerationG25 != 'NaN') ? leadGenerationG25 : 0,
                leadGenerationG26 : (leadGenerationG26 != 'NaN') ? leadGenerationG26 : 0,
                leadGenerationH25 : (leadGenerationH25 != 'NaN') ? leadGenerationH25 : 0,
                leadGenerationH26 : (leadGenerationH26 != 'NaN') ? leadGenerationH26 : 0,
                leadGenerationI25 : (leadGenerationI25 != 'NaN') ? leadGenerationI25 : 0,
                leadGenerationI26 : (leadGenerationI26 != 'NaN') ? leadGenerationI26 : 0,
                leadGenerationD28 : (leadGenerationD28 != 'NaN') ? leadGenerationD28 : 0,
                leadGenerationD29 : (leadGenerationD29 != 'NaN') ? leadGenerationD29 : 0,
                leadGenerationE28 : (leadGenerationE28 != 'NaN') ? leadGenerationE28 : 0,
                leadGenerationE29 : (leadGenerationE29 != 'NaN') ? leadGenerationE29 : 0,
                leadGenerationF28 : (leadGenerationF28 != 'NaN') ? leadGenerationF28 : 0,
                leadGenerationF29 : (leadGenerationF29 != 'NaN') ? leadGenerationF29 : 0,
                leadGenerationG28 : (leadGenerationG28 != 'NaN') ? leadGenerationG28 : 0,
                leadGenerationG29 : (leadGenerationG29 != 'NaN') ? leadGenerationG29 : 0,
                leadGenerationH28 : (leadGenerationH28 != 'NaN') ? leadGenerationH28 : 0,
                leadGenerationH29 : (leadGenerationH29 != 'NaN') ? leadGenerationH29 : 0,
                leadGenerationI28 : (leadGenerationI28 != 'NaN') ? leadGenerationI28 : 0,
                leadGenerationI29 : (leadGenerationI29 != 'NaN') ? leadGenerationI29 : 0,
                leadGenerationD31 : (leadGenerationD31 != 'NaN') ? leadGenerationD31 : 0,
                leadGenerationE31 : (leadGenerationE31 != 'NaN') ? leadGenerationE31 : 0,
                leadGenerationF31 : (leadGenerationF31 != 'NaN') ? leadGenerationF31 : 0,
                leadGenerationG31 : (leadGenerationG31 != 'NaN') ? leadGenerationG31 : 0,
                leadGenerationH31 : (leadGenerationH31 != 'NaN') ? leadGenerationH31 : 0,
                leadGenerationI31 : (leadGenerationI31 != 'NaN') ? leadGenerationI31 : 0
            }
        }
        else{
            return { 
                ...state, //copying the original state
                leadGenerationD20 : 0,
                leadGenerationD21 : 0,
                leadGenerationE20 : 0,
                leadGenerationE21 : 0,
                leadGenerationF20 : 0,
                leadGenerationF21 : 0,
                leadGenerationG20 : 0,
                leadGenerationG21 : 0,
                leadGenerationH20 : 0,
                leadGenerationH21 : 0,
                leadGenerationI20 : 0,
                leadGenerationI21 : 0,
                leadGenerationD25 : 0,
                leadGenerationD26 : 0,
                leadGenerationE25 : 0,
                leadGenerationE26 : 0,
                leadGenerationF25 : 0,
                leadGenerationF26 : 0,
                leadGenerationG25 : 0,
                leadGenerationG26 : 0,
                leadGenerationH25 : 0,
                leadGenerationH26 : 0,
                leadGenerationI25 : 0,
                leadGenerationI26 : 0,
                leadGenerationD28 : 0,
                leadGenerationD29 : 0,
                leadGenerationE28 : 0,
                leadGenerationE29 : 0,
                leadGenerationF28 : 0,
                leadGenerationF29 : 0,
                leadGenerationG28 : 0,
                leadGenerationG29 : 0,
                leadGenerationH28 : 0,
                leadGenerationH29 : 0,
                leadGenerationI28 : 0,
                leadGenerationI29 : 0,
                leadGenerationD31 : 0,
                leadGenerationE31 : 0,
                leadGenerationF31 : 0,
                leadGenerationG31 : 0,
                leadGenerationH31 : 0,
                leadGenerationI31 : 0
            }

        }

        
    }
    // else if (action.type === "INITIAL_STATE") {
    //     state = initialState;
    //     return state
    // }
    else{
        return state
    }
}

export default reducer