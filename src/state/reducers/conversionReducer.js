const initialState = {
    conversionD18 : 0,
    conversionE18 : 0, 
    conversionF18 : 0, 
    conversionG18 : 0, 
    conversionH18 : 0, 
    conversionI18 : 0,
    conversionD19 : 0, 
    conversionE19 : 0, 
    conversionF19 : 0, 
    conversionG19 : 0, 
    conversionH19 : 0, 
    conversionI19 : 0,
    conversionD23 : 0, 
    conversionE23 : 0,
    conversionF23 : 0,
    conversionG23 : 0,
    conversionH23 : 0,
    conversionI23 : 0,
    conversionD24 : 0,
    conversionE24 : 0,
    conversionF24 : 0, 
    conversionG24 : 0, 
    conversionH24 : 0,
    conversionI24 : 0, 
    conversionD25 : 0,
    conversionE25 : 0,
    conversionF25 : 0,
    conversionG25 : 0,
    conversionH25 : 0,
    conversionI25 : 0,
    conversionD26 : 0, 
    conversionE26 : 0,
    conversionF26 : 0,
    conversionG26 : 0,
    conversionH26 : 0,
    conversionI26 : 0,
    conversionD28 : 0,
    conversionE28 : 0,
    conversionF28 : 0,
    conversionG28 : 0,
    conversionH28 : 0,
    conversionI28 : 0,
    conversionD33 : 0,
    conversionE33 : 0,
    conversionF33 : 0,
    conversionG33 : 0,
    conversionH33 : 0,
    conversionI33 : 0,
    conversionD34 : 0,
    conversionE34 : 0,
    conversionF34 : 0,
    conversionG34 : 0,
    conversionH34 : 0,
    conversionI34 : 0,
    conversionD36 : 0,
    conversionE36 : 0,
    conversionF36 : 0,
    conversionG36 : 0,
    conversionH36 : 0,
    conversionI36 : 0,
    conversionD37 : 0,
    conversionE37 : 0,
    conversionF37 : 0,
    conversionG37 : 0,
    conversionH37 : 0,
    conversionI37 : 0,
    conversionD39 : 0,
    conversionE39 : 0,
    conversionF39 : 0,
    conversionG39 : 0,
    conversionH39 : 0,
    conversionI39 : 0

}
const reducer = (state = initialState, action) =>{
    if(action.type === 'conversionD13'){
        return { 
            ...state, //copying the original state
            conversionD13 : parseFloat(action.payload)
        }
    }
    else if(action.type === 'conversionD14'){
        return { 
            ...state, //copying the original state
            conversionD14 : parseFloat(action.payload)
        }
    }
    else if(action.type === 'conversionRateImprovement'){
        let conversionD13 = action.payload.conversionD13;
        let leadGenerationE21 = action.payload.leadGenerationE21;
        let leadGenerationF21 = action.payload.leadGenerationF21;
        let leadGenerationG21 = action.payload.leadGenerationG21;
        let leadGenerationH21 = action.payload.leadGenerationH21;
        let CustomerFinancialValuesD24 = action.payload.CustomerFinancialValuesD24;
        let CustomerFinancialValuesD25 = action.payload.CustomerFinancialValuesD25;
        let CustomerFinancialValuesD26 = action.payload.CustomerFinancialValuesD26;
        let CustomerFinancialValuesD27 = action.payload.CustomerFinancialValuesD27;

        if(!isNaN(conversionD13) && !isNaN(state.conversionD14)){
            let conversionD18 = (parseFloat(conversionD13) + parseFloat(conversionD13)*parseFloat(state.conversionD14)/100).toFixed(2);
            let conversionE18 = (conversionD13/100 * (1 + 4/100)) * 100;
            let conversionF18 = (parseFloat(conversionE18)/100 * (1 + 4/100)) * 100;
            let conversionG18 = (parseFloat(conversionF18)/100 * (1 + 4/100)) * 100;
            let conversionH18 = (parseFloat(conversionG18)/100 * (1 + 4/100)) * 100;
            let conversionI18 = (parseFloat(conversionH18)/100 * (1 + 4/100)) * 100;

            let conversionD19 = (parseFloat(conversionD18) - parseFloat(conversionD13))/100 * parseInt(action.payload.clientInputsH25);
            let conversionE19 = (parseFloat(state.conversionE18) - conversionD13) / 100 * parseInt(action.payload.clientInputsH25);
            let conversionF19 = (parseFloat(state.conversionF18) - conversionD13) / 100 * parseInt(action.payload.clientInputsH25);
            let conversionG19 = (parseFloat(state.conversionG18) - conversionD13) / 100 * parseInt(action.payload.clientInputsH25);
            let conversionH19 = (parseFloat(state.conversionH18) - conversionD13) / 100 * parseInt(action.payload.clientInputsH25);
            let conversionI19 = (parseFloat(state.conversionI18) - conversionD13) / 100 * parseInt(action.payload.clientInputsH25);

            let conversionD23 = action.payload.clientInputsH21;
            let conversionE23 = action.payload.clientInputsH21;
            let conversionF23 =  (parseFloat(leadGenerationE21) - parseFloat(leadGenerationE21) * parseFloat(conversionE18) / 100);
            let conversionG23 =  parseFloat(leadGenerationF21) - (parseFloat(leadGenerationF21) * parseFloat(conversionF18) / 100);
            let conversionH23 =  parseFloat(leadGenerationG21) - (parseFloat(leadGenerationG21) * parseFloat(conversionG18) / 100);
            let conversionI23 =  parseFloat(leadGenerationH21) - (parseFloat(leadGenerationH21) * parseFloat(conversionH18) / 100);

            let conversionD24 = 0;
            let conversionD25 = parseFloat(conversionD23) + parseFloat(conversionD24);
            let conversionE24 = 0;
            let conversionE25 = parseFloat(conversionE23) + parseFloat(conversionE24);
            let conversionF24 = parseFloat(conversionD25) / 2 ;
            let conversionF25 = parseFloat(conversionF23) + parseFloat(conversionF24);
            let conversionG24 = parseFloat(conversionF25) / 2 ;
            let conversionG25 = parseFloat(conversionG23) + parseFloat(conversionG24);
            let conversionH24 = parseFloat(conversionG25) / 2 ;
            let conversionH25 = parseFloat(conversionH23) + parseFloat(conversionH24);
            let conversionI24 = parseFloat(conversionH25) / 2 ;
            let conversionI25 = parseFloat(conversionI23) + parseFloat(conversionI24);

            let conversionD26 = (parseFloat(conversionD25) * state.conversionD14 / 100);
            let conversionE26 = parseFloat(conversionE25) * 4/100;
            let conversionF26 = (parseFloat(conversionF25) * 4/100) + parseFloat(conversionE26);
            let conversionG26 = (parseFloat(conversionG25) * 4/100) + parseFloat(conversionF26);
            let conversionH26 = (parseFloat(conversionH25) * 4/100) + parseFloat(conversionG26);
            let conversionI26 = (parseFloat(conversionI25) * 4/100) + parseFloat(conversionH26);

            let conversionD28 =  parseFloat(conversionD19) + parseFloat(conversionD26);
            let conversionE28 = parseFloat(conversionE19) + parseFloat(conversionE26);
            let conversionF28 = parseFloat(conversionF19) + parseFloat(conversionF26);
            let conversionG28 = parseFloat(conversionG19) + parseFloat(conversionG26);
            let conversionH28 = parseFloat(conversionH19) + parseFloat(conversionH26);
            let conversionI28 = parseFloat(conversionI19) + parseFloat(conversionI26);

            let conversionD33 =  parseFloat(conversionD28) + parseFloat(CustomerFinancialValuesD24);
            let conversionD34 =  parseFloat(conversionD28) + parseFloat(CustomerFinancialValuesD25);
            let conversionE33 =  parseFloat(conversionE28) + parseFloat(CustomerFinancialValuesD24);
            let conversionE34 =  parseFloat(conversionE28) + parseFloat(CustomerFinancialValuesD25);
            let conversionF33 =  parseFloat(conversionF28) + parseFloat(CustomerFinancialValuesD24);
            let conversionF34 =  parseFloat(conversionF28) + parseFloat(CustomerFinancialValuesD25);
            let conversionG33 =  parseFloat(conversionG28) + parseFloat(CustomerFinancialValuesD24);
            let conversionG34 =  parseFloat(conversionG28) + parseFloat(CustomerFinancialValuesD25);
            let conversionH33 =  parseFloat(conversionH28) + parseFloat(CustomerFinancialValuesD24);
            let conversionH34 =  parseFloat(conversionH28) + parseFloat(CustomerFinancialValuesD25);
            let conversionI33 =  parseFloat(conversionI28) + parseFloat(CustomerFinancialValuesD24);
            let conversionI34 =  parseFloat(conversionI28) + parseFloat(CustomerFinancialValuesD25);

            let conversionD36 =  parseFloat(conversionD28) + parseFloat(CustomerFinancialValuesD26);
            let conversionD37 =  parseFloat(conversionD28) + parseFloat(CustomerFinancialValuesD27);
            let conversionE36 =  parseFloat(conversionE28) + parseFloat(CustomerFinancialValuesD26);
            let conversionE37 =  parseFloat(conversionE28) + parseFloat(CustomerFinancialValuesD27);
            let conversionF36 =  parseFloat(conversionF28) + parseFloat(CustomerFinancialValuesD26);
            let conversionF37 =  parseFloat(conversionF28) + parseFloat(CustomerFinancialValuesD27);
            let conversionG36 =  parseFloat(conversionG28) + parseFloat(CustomerFinancialValuesD26);
            let conversionG37 =  parseFloat(conversionG28) + parseFloat(CustomerFinancialValuesD27);
            let conversionH36 =  parseFloat(conversionH28) + parseFloat(CustomerFinancialValuesD26);
            let conversionH37 =  parseFloat(conversionH28) + parseFloat(CustomerFinancialValuesD27);
            let conversionI36 =  parseFloat(conversionI28) + parseFloat(CustomerFinancialValuesD26);
            let conversionI37 =  parseFloat(conversionI28) + parseFloat(CustomerFinancialValuesD27);

            let conversionD39 =  parseFloat(conversionD34) * parseFloat(action.payload.clientInputsH41);
            let conversionE39 = parseFloat(conversionE34) * parseFloat(action.payload.clientInputsH41);
            let conversionF39 = parseFloat(conversionF34) * parseFloat(action.payload.clientInputsH41);
            let conversionG39 = parseFloat(conversionG34) * parseFloat(action.payload.clientInputsH41);
            let conversionH39 = parseFloat(conversionH34) * parseFloat(action.payload.clientInputsH41);
            let conversionI39 = parseFloat(conversionI34) * parseFloat(action.payload.clientInputsH41);

            return { 
                ...state, //copying the original state
                conversionD18 : (conversionD18 != 'NaN') ? conversionD18 : 0,
                conversionE18 : (conversionE18 != 'NaN') ? conversionE18 : 0, 
                conversionF18 : (conversionF18 != 'NaN') ? conversionF18 : 0, 
                conversionG18 : (conversionG18 != 'NaN') ? conversionG18 : 0, 
                conversionH18 : (conversionH18 != 'NaN') ? conversionH18 : 0, 
                conversionI18 : (conversionI18 != 'NaN') ? conversionI18 : 0,
                conversionD19 : (conversionD19 != 'NaN') ? conversionD19 : 0, 
                conversionE19 : (conversionE19 != 'NaN') ? conversionE19 : 0, 
                conversionF19 : (conversionF19 != 'NaN') ? conversionF19 : 0, 
                conversionG19 : (conversionG19 != 'NaN') ? conversionG19 : 0, 
                conversionH19 : (conversionH19 != 'NaN') ? conversionH19 : 0, 
                conversionI19 : (conversionI19 != 'NaN') ? conversionI19 : 0,
                conversionD23 : (conversionD23 != 'NaN') ? conversionD23 : 0, 
                conversionE23 : (conversionE23 != 'NaN') ? conversionE23 : 0,
                conversionF23 : (conversionF23 != 'NaN') ? conversionF23 : 0,
                conversionG23 : (conversionG23 != 'NaN') ? conversionG23 : 0,
                conversionH23 : (conversionH23 != 'NaN') ? conversionH23 : 0,
                conversionI23 : (conversionI23 != 'NaN') ? conversionI23 : 0,
                conversionD24 : (conversionD24 != 'NaN') ? conversionD24 : 0,
                conversionE24 : (conversionE24 != 'NaN') ? conversionE24 : 0,
                conversionF24 : (conversionF24 != 'NaN') ? conversionF24 : 0, 
                conversionG24 : (conversionG24 != 'NaN') ? conversionG24 : 0, 
                conversionH24 : (conversionH24 != 'NaN') ? conversionH24 : 0,
                conversionI24 : (conversionI24 != 'NaN') ? conversionI24 : 0, 
                conversionD25 : (conversionD25 != 'NaN') ? conversionD25 : 0,
                conversionE25 : (conversionE25 != 'NaN') ? conversionE25 : 0,
                conversionF25 : (conversionF25 != 'NaN') ? conversionF25 : 0,
                conversionG25 : (conversionG25 != 'NaN') ? conversionG25 : 0,
                conversionH25 : (conversionH25 != 'NaN') ? conversionH25 : 0,
                conversionI25 : (conversionI25 != 'NaN') ? conversionI25 : 0,
                conversionD26 : (conversionD26 != 'NaN') ? conversionD26 : 0, 
                conversionE26 : (conversionE26 != 'NaN') ? conversionE26 : 0,
                conversionF26 : (conversionF26 != 'NaN') ? conversionF26 : 0,
                conversionG26 : (conversionG26 != 'NaN') ? conversionG26 : 0,
                conversionH26 : (conversionH26 != 'NaN') ? conversionH26 : 0,
                conversionI26 : (conversionI26 != 'NaN') ? conversionI26 : 0,
                conversionD28 : (conversionD28 != 'NaN') ? conversionD28 : 0,
                conversionE28 : (conversionE28 != 'NaN') ? conversionE28 : 0,
                conversionF28 : (conversionF28 != 'NaN') ? conversionF28 : 0,
                conversionG28 : (conversionG28 != 'NaN') ? conversionG28 : 0,
                conversionH28 : (conversionH28 != 'NaN') ? conversionH28 : 0,
                conversionI28 : (conversionI28 != 'NaN') ? conversionI28 : 0,
                conversionD33 : (conversionD33 != 'NaN') ? conversionD33 : 0,
                conversionE33 : (conversionE33 != 'NaN') ? conversionE33 : 0,
                conversionF33 : (conversionF33 != 'NaN') ? conversionF33 : 0,
                conversionG33 : (conversionG33 != 'NaN') ? conversionG33 : 0,
                conversionH33 : (conversionH33 != 'NaN') ? conversionH33 : 0,
                conversionI33 : (conversionI33 != 'NaN') ? conversionI33 : 0,
                conversionD34 : (conversionD34 != 'NaN') ? conversionD34 : 0,
                conversionE34 : (conversionE34 != 'NaN') ? conversionE34 : 0,
                conversionF34 : (conversionF34 != 'NaN') ? conversionF34 : 0,
                conversionG34 : (conversionG34 != 'NaN') ? conversionG34 : 0,
                conversionH34 : (conversionH34 != 'NaN') ? conversionH34 : 0,
                conversionI34 : (conversionI34 != 'NaN') ? conversionI34 : 0,
                conversionD36 : (conversionD36 != 'NaN') ? conversionD36 : 0,
                conversionE36 : (conversionE36 != 'NaN') ? conversionE36 : 0,
                conversionF36 : (conversionF36 != 'NaN') ? conversionF36 : 0,
                conversionG36 : (conversionG36 != 'NaN') ? conversionG36 : 0,
                conversionH36 : (conversionH36 != 'NaN') ? conversionH36 : 0,
                conversionI36 : (conversionI36 != 'NaN') ? conversionI36 : 0,
                conversionD37 : (conversionD37 != 'NaN') ? conversionD37 : 0,
                conversionE37 : (conversionE37 != 'NaN') ? conversionE37 : 0,
                conversionF37 : (conversionF37 != 'NaN') ? conversionF37 : 0,
                conversionG37 : (conversionG37 != 'NaN') ? conversionG37 : 0,
                conversionH37 : (conversionH37 != 'NaN') ? conversionH37 : 0,
                conversionI37 : (conversionI37 != 'NaN') ? conversionI37 : 0,
                conversionD39 : (conversionD39 != 'NaN') ? conversionD39 : 0,
                conversionE39 : (conversionE39 != 'NaN') ? conversionE39 : 0,
                conversionF39 : (conversionF39 != 'NaN') ? conversionF39 : 0,
                conversionG39 : (conversionG39 != 'NaN') ? conversionG39 : 0,
                conversionH39 : (conversionH39 != 'NaN') ? conversionH39 : 0,
                conversionI39 : (conversionI39 != 'NaN') ? conversionI39 : 0
            }
        }
        else{
            return { 
                ...state, //copying the original state
                conversionD18 : 0,
                conversionE18 : 0, 
                conversionF18 : 0, 
                conversionG18 : 0, 
                conversionH18 : 0, 
                conversionI18 : 0,
                conversionD19 : 0, 
                conversionE19 : 0, 
                conversionF19 : 0, 
                conversionG19 : 0, 
                conversionH19 : 0, 
                conversionI19 : 0,
                conversionD23 : 0, 
                conversionE23 : 0,
                conversionF23 : 0,
                conversionG23 : 0,
                conversionH23 : 0,
                conversionI23 : 0,
                conversionD24 : 0,
                conversionE24 : 0,
                conversionF24 : 0, 
                conversionG24 : 0, 
                conversionH24 : 0,
                conversionI24 : 0, 
                conversionD25 : 0,
                conversionE25 : 0,
                conversionF25 : 0,
                conversionG25 : 0,
                conversionH25 : 0,
                conversionI25 : 0,
                conversionD26 : 0, 
                conversionE26 : 0,
                conversionF26 : 0,
                conversionG26 : 0,
                conversionH26 : 0,
                conversionI26 : 0,
                conversionD28 : 0,
                conversionE28 : 0,
                conversionF28 : 0,
                conversionG28 : 0,
                conversionH28 : 0,
                conversionI28 : 0,
                conversionD33 : 0,
                conversionE33 : 0,
                conversionF33 : 0,
                conversionG33 : 0,
                conversionH33 : 0,
                conversionI33 : 0,
                conversionD34 : 0,
                conversionE34 : 0,
                conversionF34 : 0,
                conversionG34 : 0,
                conversionH34 : 0,
                conversionI34 : 0,
                conversionD36 : 0,
                conversionE36 : 0,
                conversionF36 : 0,
                conversionG36 : 0,
                conversionH36 : 0,
                conversionI36 : 0,
                conversionD37 : 0,
                conversionE37 : 0,
                conversionF37 : 0,
                conversionG37 : 0,
                conversionH37 : 0,
                conversionI37 : 0,
                conversionD39 : 0,
                conversionE39 : 0,
                conversionF39 : 0,
                conversionG39 : 0,
                conversionH39 : 0,
                conversionI39 : 0
            }
        }
    }
    else{
        return state
    }
}

export default reducer