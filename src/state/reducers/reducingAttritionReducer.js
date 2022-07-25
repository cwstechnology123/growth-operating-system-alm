const initialState = {
    reducingAttritionD16 : 0,
    reducingAttritionD17 : 0,
    reducingAttritionD18 : 0,
    reducingAttritionD19 : 0,
    reducingAttritionD23 : 0,
    reducingAttritionE23 : 0,
    reducingAttritionF23 : 0,
    reducingAttritionG23 : 0,
    reducingAttritionH23 : 0,
    reducingAttritionI23 : 0,
    reducingAttritionD24 : 0,
    reducingAttritionE24 : 0,
    reducingAttritionF24 : 0,
    reducingAttritionG24 : 0,
    reducingAttritionH24 : 0,
    reducingAttritionI24 : 0,
    reducingAttritionD25 : 0,
    reducingAttritionE25 : 0,
    reducingAttritionF25 : 0,
    reducingAttritionG25 : 0,
    reducingAttritionH25 : 0,
    reducingAttritionI25 : 0,
    reducingAttritionD26 : 0,
    reducingAttritionE26 : 0,
    reducingAttritionF26 : 0,
    reducingAttritionG26 : 0,
    reducingAttritionH26 : 0,
    reducingAttritionI26 : 0,
    reducingAttritionD30 : 0,
    reducingAttritionE30 : 0,
    reducingAttritionF30 : 0,
    reducingAttritionG30 : 0,
    reducingAttritionH30 : 0,
    reducingAttritionI30 : 0,
    reducingAttritionD31 : 0,
    reducingAttritionE31 : 0,
    reducingAttritionF31 : 0,
    reducingAttritionG31 : 0,
    reducingAttritionH31 : 0,
    reducingAttritionI31 : 0,
    reducingAttritionD33 : 0,
    reducingAttritionE33 : 0,
    reducingAttritionF33 : 0,
    reducingAttritionG33 : 0,
    reducingAttritionH33 : 0,
    reducingAttritionI33 : 0,
    reducingAttritionD34 : 0,
    reducingAttritionE34 : 0,
    reducingAttritionF34 : 0,
    reducingAttritionG34 : 0,
    reducingAttritionH34 : 0,
    reducingAttritionI34 : 0,
    reducingAttritionD36 : 0,
    reducingAttritionE36 : 0,
    reducingAttritionF36 : 0,
    reducingAttritionG36 : 0,
    reducingAttritionH36 : 0,
    reducingAttritionI36 : 0,
}

const reducer = (state = initialState, action) =>{
    if(action.type === 'reducingAttritionD12'){
        return { 
            ...state, //copying the original state
            reducingAttritionD12 : parseFloat(action.payload)
        }
    }
    else if(action.type === 'reducingAttritionD13'){
        return { 
            ...state, //copying the original state
            reducingAttritionD13 : parseFloat(action.payload)
        }
    }
    else if(action.type === 'reducingAttritionImprovement'){
        let CustomerFinancialValuesD20 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD20;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValues.CustomerFinancialValuesD27;

        let impactof120GrowthOSH23 = action.payload.impactof120GrowthOSH23;
        let impactof120GrowthOSI23 = action.payload.impactof120GrowthOSI23;
        let impactof120GrowthOSJ23 = action.payload.impactof120GrowthOSJ23;
        let impactof120GrowthOSK23 = action.payload.impactof120GrowthOSK23;  

        if(!isNaN(action.payload.reducingAttritionD12) && !isNaN(state.reducingAttritionD13)){

            let reducingAttritionD16 = CustomerFinancialValuesD20;
            let reducingAttritionD17 = Math.round((parseFloat(reducingAttritionD16) * parseFloat(action.payload.reducingAttritionD12) / 100), 2);
            let reducingAttritionD18 = Math.round(parseFloat(reducingAttritionD17) * parseFloat(CustomerFinancialValuesD24));
            let reducingAttritionD19 = Math.round(parseFloat(reducingAttritionD17) * parseFloat(CustomerFinancialValuesD25));
            
            let reducingAttritionD23 = (parseFloat(action.payload.reducingAttritionD12) / 100) * (1 - parseFloat(state.reducingAttritionD13) / 100 ) * 100;
            let reducingAttritionE23 = (parseFloat(action.payload.reducingAttritionD12) / 100) * (1 - 4 / 100 ) * 100;
            let reducingAttritionF23 = (parseFloat(reducingAttritionE23) / 100) * (1 - 4 / 100 ) * 100;
            let reducingAttritionG23 = (parseFloat(reducingAttritionF23) / 100) * (1 - 4 / 100 ) * 100;
            let reducingAttritionH23 = (parseFloat(reducingAttritionG23) / 100) * (1 - 4 / 100 ) * 100;
            let reducingAttritionI23 = (parseFloat(reducingAttritionH23) / 100) * (1 - 4 / 100 ) * 100;

            let reducingAttritionD24 = reducingAttritionD16;
            let reducingAttritionE24 = reducingAttritionD16;
            let reducingAttritionF24 = reducingAttritionD16;
            let reducingAttritionG24 = reducingAttritionD16;
            let reducingAttritionH24 = reducingAttritionD16;
            let reducingAttritionI24 = reducingAttritionD16;

            let reducingAttritionD25 = parseFloat(reducingAttritionD24) * parseFloat(reducingAttritionD23);
            let reducingAttritionE25 = parseFloat(reducingAttritionE24) * parseFloat(reducingAttritionE23);
            let reducingAttritionF25 = parseFloat(reducingAttritionF24) * parseFloat(impactof120GrowthOSH23);
            let reducingAttritionG25 = parseFloat(reducingAttritionG24) * parseFloat(impactof120GrowthOSI23);
            let reducingAttritionH25 = parseFloat(reducingAttritionH24) * parseFloat(impactof120GrowthOSJ23);
            let reducingAttritionI25 = parseFloat(reducingAttritionI24) * parseFloat(impactof120GrowthOSK23);

            let reducingAttritionD26 = (parseFloat(action.payload.reducingAttritionD12) - parseFloat(reducingAttritionD23)) * parseFloat(reducingAttritionD24) / 100;
            let reducingAttritionE26 = (parseFloat(action.payload.reducingAttritionD12) - parseFloat(reducingAttritionE23)) * parseFloat(reducingAttritionE24) / 100;
            let reducingAttritionF26 = (parseFloat(action.payload.reducingAttritionD12) - parseFloat(reducingAttritionF23)) * parseFloat(reducingAttritionF24) / 100;
            let reducingAttritionG26 = (parseFloat(action.payload.reducingAttritionD12) - parseFloat(reducingAttritionG23)) * parseFloat(reducingAttritionG24) / 100;
            let reducingAttritionH26 = (parseFloat(action.payload.reducingAttritionD12) - parseFloat(reducingAttritionH23)) * parseFloat(reducingAttritionH24) / 100;
            let reducingAttritionI26 = (parseFloat(action.payload.reducingAttritionD12) - parseFloat(reducingAttritionI23)) * parseFloat(reducingAttritionI24) / 100;

            let reducingAttritionD30 = parseFloat(reducingAttritionD26) * parseFloat(CustomerFinancialValuesD24);
            let reducingAttritionD31 = parseFloat(reducingAttritionD26) * parseFloat(CustomerFinancialValuesD25);
            let reducingAttritionE30 = parseFloat(reducingAttritionE26) * parseFloat(CustomerFinancialValuesD24);
            let reducingAttritionE31 = parseFloat(reducingAttritionE26) * parseFloat(CustomerFinancialValuesD25);
            let reducingAttritionF30 = parseFloat(reducingAttritionF26) * parseFloat(CustomerFinancialValuesD24);
            let reducingAttritionF31 = parseFloat(reducingAttritionF26) * parseFloat(CustomerFinancialValuesD25);
            let reducingAttritionG30 = parseFloat(reducingAttritionG26) * parseFloat(CustomerFinancialValuesD24);
            let reducingAttritionG31 = parseFloat(reducingAttritionG26) * parseFloat(CustomerFinancialValuesD25);
            let reducingAttritionH30 = parseFloat(reducingAttritionH26) * parseFloat(CustomerFinancialValuesD24);
            let reducingAttritionH31 = parseFloat(reducingAttritionH26) * parseFloat(CustomerFinancialValuesD25);
            let reducingAttritionI30 = parseFloat(reducingAttritionI26) * parseFloat(CustomerFinancialValuesD24);
            let reducingAttritionI31 = parseFloat(reducingAttritionI26) * parseFloat(CustomerFinancialValuesD25);

            let reducingAttritionD33 = parseFloat(reducingAttritionD26) * parseFloat(CustomerFinancialValuesD26);
            let reducingAttritionD34 = parseFloat(reducingAttritionD26) * parseFloat(CustomerFinancialValuesD27);
            let reducingAttritionE33 = parseFloat(reducingAttritionE26) * parseFloat(CustomerFinancialValuesD26);
            let reducingAttritionE34 = parseFloat(reducingAttritionE26) * parseFloat(CustomerFinancialValuesD27);
            let reducingAttritionF33 = parseFloat(reducingAttritionF26) * parseFloat(CustomerFinancialValuesD26);
            let reducingAttritionF34 = parseFloat(reducingAttritionF26) * parseFloat(CustomerFinancialValuesD27);
            let reducingAttritionG33 = parseFloat(reducingAttritionG26) * parseFloat(CustomerFinancialValuesD26);
            let reducingAttritionG34 = parseFloat(reducingAttritionG26) * parseFloat(CustomerFinancialValuesD27);
            let reducingAttritionH33 = parseFloat(reducingAttritionH26) * parseFloat(CustomerFinancialValuesD26);
            let reducingAttritionH34 = parseFloat(reducingAttritionH26) * parseFloat(CustomerFinancialValuesD27);
            let reducingAttritionI33 = parseFloat(reducingAttritionI26) * parseFloat(CustomerFinancialValuesD26);
            let reducingAttritionI34 = parseFloat(reducingAttritionI26) * parseFloat(CustomerFinancialValuesD27);

            let reducingAttritionD36 = parseFloat(reducingAttritionD31) * parseFloat(action.payload.clientInputsH41);
            let reducingAttritionE36 = parseFloat(reducingAttritionE31) * parseFloat(action.payload.clientInputsH41);
            let reducingAttritionF36 = parseFloat(reducingAttritionF31) * parseFloat(action.payload.clientInputsH41);
            let reducingAttritionG36 = parseFloat(reducingAttritionG31) * parseFloat(action.payload.clientInputsH41);
            let reducingAttritionH36 = parseFloat(reducingAttritionH31) * parseFloat(action.payload.clientInputsH41);
            let reducingAttritionI36 = parseFloat(reducingAttritionI31) * parseFloat(action.payload.clientInputsH41);

            return { 
                ...state, //copying the original state
                reducingAttritionD16 : (reducingAttritionD16 != 'NaN') ? reducingAttritionD16 : 0,
                reducingAttritionD17 : (reducingAttritionD17 != 'NaN') ? reducingAttritionD17 : 0,
                reducingAttritionD18 : (reducingAttritionD18 != 'NaN') ? reducingAttritionD18 : 0,
                reducingAttritionD19 : (reducingAttritionD19 != 'NaN') ? reducingAttritionD19 : 0,
                reducingAttritionD23 : (reducingAttritionD23 != 'NaN') ? reducingAttritionD23 : 0,
                reducingAttritionE23 : (reducingAttritionE23 != 'NaN') ? reducingAttritionE23 : 0,
                reducingAttritionF23 : (reducingAttritionF23 != 'NaN') ? reducingAttritionF23 : 0,
                reducingAttritionG23 : (reducingAttritionG23 != 'NaN') ? reducingAttritionG23 : 0,
                reducingAttritionH23 : (reducingAttritionH23 != 'NaN') ? reducingAttritionH23 : 0,
                reducingAttritionI23 : (reducingAttritionI23 != 'NaN') ? reducingAttritionI23 : 0,
                reducingAttritionD24 : (reducingAttritionD24 != 'NaN') ? reducingAttritionD24 : 0,
                reducingAttritionE24 : (reducingAttritionE24 != 'NaN') ? reducingAttritionE24 : 0,
                reducingAttritionF24 : (reducingAttritionF24 != 'NaN') ? reducingAttritionF24 : 0,
                reducingAttritionG24 : (reducingAttritionG24 != 'NaN') ? reducingAttritionG24 : 0,
                reducingAttritionH24 : (reducingAttritionH24 != 'NaN') ? reducingAttritionH24 : 0,
                reducingAttritionI24 : (reducingAttritionI24 != 'NaN') ? reducingAttritionI24 : 0,
                reducingAttritionD25 : (reducingAttritionD25 != 'NaN') ? reducingAttritionD25 : 0,
                reducingAttritionE25 : (reducingAttritionE25 != 'NaN') ? reducingAttritionE25 : 0,
                reducingAttritionF25 : (reducingAttritionF25 != 'NaN') ? reducingAttritionF25 : 0,
                reducingAttritionG25 : (reducingAttritionG25 != 'NaN') ? reducingAttritionG25 : 0,
                reducingAttritionH25 : (reducingAttritionH25 != 'NaN') ? reducingAttritionH25 : 0,
                reducingAttritionI25 : (reducingAttritionI25 != 'NaN') ? reducingAttritionI25 : 0,
                reducingAttritionD26 : (reducingAttritionD26 != 'NaN') ? reducingAttritionD26 : 0,
                reducingAttritionE26 : (reducingAttritionE26 != 'NaN') ? reducingAttritionE26 : 0,
                reducingAttritionF26 : (reducingAttritionF26 != 'NaN') ? reducingAttritionF26 : 0,
                reducingAttritionG26 : (reducingAttritionG26 != 'NaN') ? reducingAttritionG26 : 0,
                reducingAttritionH26 : (reducingAttritionH26 != 'NaN') ? reducingAttritionH26 : 0,
                reducingAttritionI26 : (reducingAttritionI26 != 'NaN') ? reducingAttritionI26 : 0,
                reducingAttritionD30 : (reducingAttritionD30 != 'NaN') ? reducingAttritionD30 : 0,
                reducingAttritionE30 : (reducingAttritionE30 != 'NaN') ? reducingAttritionE30 : 0,
                reducingAttritionF30 : (reducingAttritionF30 != 'NaN') ? reducingAttritionF30 : 0,
                reducingAttritionG30 : (reducingAttritionG30 != 'NaN') ? reducingAttritionG30 : 0,
                reducingAttritionH30 : (reducingAttritionH30 != 'NaN') ? reducingAttritionH30 : 0,
                reducingAttritionI30 : (reducingAttritionI30 != 'NaN') ? reducingAttritionI30 : 0,
                reducingAttritionD31 : (reducingAttritionD31 != 'NaN') ? reducingAttritionD31 : 0,
                reducingAttritionE31 : (reducingAttritionE31 != 'NaN') ? reducingAttritionE31 : 0,
                reducingAttritionF31 : (reducingAttritionF31 != 'NaN') ? reducingAttritionF31 : 0,
                reducingAttritionG31 : (reducingAttritionG31 != 'NaN') ? reducingAttritionG31 : 0,
                reducingAttritionH31 : (reducingAttritionH31 != 'NaN') ? reducingAttritionH31 : 0,
                reducingAttritionI31 : (reducingAttritionI31 != 'NaN') ? reducingAttritionI31 : 0,
                reducingAttritionD33 : (reducingAttritionD33 != 'NaN') ? reducingAttritionD33 : 0,
                reducingAttritionE33 : (reducingAttritionE33 != 'NaN') ? reducingAttritionE33 : 0,
                reducingAttritionF33 : (reducingAttritionF33 != 'NaN') ? reducingAttritionF33 : 0,
                reducingAttritionG33 : (reducingAttritionG33 != 'NaN') ? reducingAttritionG33 : 0,
                reducingAttritionH33 : (reducingAttritionH33 != 'NaN') ? reducingAttritionH33 : 0,
                reducingAttritionI33 : (reducingAttritionI33 != 'NaN') ? reducingAttritionI33 : 0,
                reducingAttritionD34 : (reducingAttritionD34 != 'NaN') ? reducingAttritionD34 : 0,
                reducingAttritionE34 : (reducingAttritionE34 != 'NaN') ? reducingAttritionE34 : 0,
                reducingAttritionF34 : (reducingAttritionF34 != 'NaN') ? reducingAttritionF34 : 0,
                reducingAttritionG34 : (reducingAttritionG34 != 'NaN') ? reducingAttritionG34 : 0,
                reducingAttritionH34 : (reducingAttritionH34 != 'NaN') ? reducingAttritionH34 : 0,
                reducingAttritionI34 : (reducingAttritionI34 != 'NaN') ? reducingAttritionI34 : 0,
                reducingAttritionD36 : (reducingAttritionD36 != 'NaN') ? reducingAttritionD36 : 0,
                reducingAttritionE36 : (reducingAttritionE36 != 'NaN') ? reducingAttritionE36 : 0,
                reducingAttritionF36 : (reducingAttritionF36 != 'NaN') ? reducingAttritionF36 : 0,
                reducingAttritionG36 : (reducingAttritionG36 != 'NaN') ? reducingAttritionG36 : 0,
                reducingAttritionH36 : (reducingAttritionH36 != 'NaN') ? reducingAttritionH36 : 0,
                reducingAttritionI36 : (reducingAttritionI36 != 'NaN') ? reducingAttritionI36 : 0,
            }
        }
        else{
            return { 
                ...state, //copying the original state
                reducingAttritionD16 : 0,
                reducingAttritionD17 : 0,
                reducingAttritionD18 : 0,
                reducingAttritionD19 : 0,
                reducingAttritionD23 : 0,
                reducingAttritionE23 : 0,
                reducingAttritionF23 : 0,
                reducingAttritionG23 : 0,
                reducingAttritionH23 : 0,
                reducingAttritionI23 : 0,
                reducingAttritionD24 : 0,
                reducingAttritionE24 : 0,
                reducingAttritionF24 : 0,
                reducingAttritionG24 : 0,
                reducingAttritionH24 : 0,
                reducingAttritionI24 : 0,
                reducingAttritionD25 : 0,
                reducingAttritionE25 : 0,
                reducingAttritionF25 : 0,
                reducingAttritionG25 : 0,
                reducingAttritionH25 : 0,
                reducingAttritionI25 : 0,
                reducingAttritionD26 : 0,
                reducingAttritionE26 : 0,
                reducingAttritionF26 : 0,
                reducingAttritionG26 : 0,
                reducingAttritionH26 : 0,
                reducingAttritionI26 : 0,
                reducingAttritionD30 : 0,
                reducingAttritionE30 : 0,
                reducingAttritionF30 : 0,
                reducingAttritionG30 : 0,
                reducingAttritionH30 : 0,
                reducingAttritionI30 : 0,
                reducingAttritionD31 : 0,
                reducingAttritionE31 : 0,
                reducingAttritionF31 : 0,
                reducingAttritionG31 : 0,
                reducingAttritionH31 : 0,
                reducingAttritionI31 : 0,
                reducingAttritionD33 : 0,
                reducingAttritionE33 : 0,
                reducingAttritionF33 : 0,
                reducingAttritionG33 : 0,
                reducingAttritionH33 : 0,
                reducingAttritionI33 : 0,
                reducingAttritionD34 : 0,
                reducingAttritionE34 : 0,
                reducingAttritionF34 : 0,
                reducingAttritionG34 : 0,
                reducingAttritionH34 : 0,
                reducingAttritionI34 : 0,
                reducingAttritionD36 : 0,
                reducingAttritionE36 : 0,
                reducingAttritionF36 : 0,
                reducingAttritionG36 : 0,
                reducingAttritionH36 : 0,
                reducingAttritionI36 : 0,
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