const initialState = {
    clientInputsD11: 0,
    clientInputsD12: 0,
    clientInputsD13: 0,
    clientInputsE11: 0,
    clientInputsE12: 0,
    clientInputsF11: 0,
    clientInputsH16: 0,
    clientInputsH17: 0,
    clientInputsH18: 0,
    clientInputsH19: 0,
    clientInputsH20: 0,
    clientInputsH21: 0,
    clientInputsH23: 0,
    clientInputsH24: 0,
    clientInputsH25: 0,
    clientInputsH26: 0,
    clientInputsH27: 0,
    clientInputsH30: 0,
    clientInputsH31: 0,
    clientInputsH32: 0,
    clientInputsH33: 0,
    clientInputsH36: 0,
    clientInputsH37: 0,
    clientInputsH38: 0,
    clientInputsH41: 0
}

const reducer = (state = initialState, action) =>{
    if(action.type === 'clientInputsD11'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsD11 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsD11 : 0
            }
        }
    }
    else if(action.type === 'clientInputsD12'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsD12 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsD12 : 0
            }
        }
    }
    else if(action.type === 'clientInputsD13'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsD13 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsD13 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH16'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH16 : parseFloat(action.payload),
                clientInputsH23 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH16 : 0,
                clientInputsH23 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH17'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH17 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH17 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH18'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH18 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH18 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH19'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH19 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH19 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH20'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH20 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH20 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH21'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH21 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH21 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH22'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH22 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH22 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH24'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH24 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH24 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH25'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH25 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH25 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH26'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH26 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH26 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH27'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH27 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH27 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH30'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH30 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH30 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH31'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH31 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH31 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH32'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH32 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH32 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH33'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH33 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH33 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH36'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH36 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH36 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH37'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH37 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH37 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH38'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH38 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH38 : 0
            }
        }
    }
    else if(action.type === 'clientInputsH41'){
        if(action.payload !== '' && action.payload !== null && action.payload !== undefined){
            return { 
                ...state, //copying the original state
                clientInputsH41 : parseFloat(action.payload)
            }
        }
        else{
            return {
                ...state,
                clientInputsH41 : 0
            }
        }
    }
    else if(action.type === 'clientInputsGrowthRate'){
        let PrevAbsoluteChange = parseFloat(state.clientInputsD12) - parseFloat(state.clientInputsD13);
        let PresentAbsoluteChange = parseFloat(state.clientInputsD11) - parseFloat(state.clientInputsD12);
        let PrevGrowthRate = (PrevAbsoluteChange / state.clientInputsD13) * 100;
        let PresentGrowthRate = (PresentAbsoluteChange / state.clientInputsD12) * 100;
        PrevGrowthRate = parseFloat(state.clientInputsD12) > parseFloat(state.clientInputsD13) ? PrevGrowthRate : 0;
        PresentGrowthRate = parseFloat(state.clientInputsD11) > parseFloat(state.clientInputsD12) ? PresentGrowthRate : 0;
        if(!isNaN(PrevGrowthRate) && !isNaN(PresentGrowthRate)){
            PrevGrowthRate = parseFloat(state.clientInputsD12) > parseFloat(state.clientInputsD13) ? PrevGrowthRate.toFixed(2) : 0;
            PresentGrowthRate = parseFloat(state.clientInputsD11) > parseFloat(state.clientInputsD12) ? PresentGrowthRate.toFixed(2) : 0;
        }
        return { 
            ...state, //copying the original state
            clientInputsE11 : PresentGrowthRate,
            clientInputsE12 : PrevGrowthRate
        }
    }
    else if(action.type === 'clientInputsCAGR'){
        let CAGRValue = 0;
        if(!isNaN(state.clientInputsD11) && !isNaN(state.clientInputsD13) && state.clientInputsD11 !== 0 && state.clientInputsD13 !== 0){
            let annualSalesRatio = parseFloat(state.clientInputsD11) / parseFloat(state.clientInputsD13);
            CAGRValue = (Math.pow(annualSalesRatio, 0.5) - 1) * 100;
            CAGRValue = CAGRValue > 0 ? CAGRValue.toFixed(2) : 0;
        }
        return { 
            ...state, //copying the original state
            clientInputsF11 : CAGRValue
        }
    }
    else{
        return state
    }
}

export default reducer