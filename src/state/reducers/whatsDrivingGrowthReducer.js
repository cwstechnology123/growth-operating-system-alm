import sum from "../../utils/sum";
const initialState = {
    whatsDrivingGrowthD17: 0,
    whatsDrivingGrowthF17: 0,
    whatsDrivingGrowthD18: 0,
    whatsDrivingGrowthF18: 0,
    whatsDrivingGrowthD19: 0,
    whatsDrivingGrowthF19: 0,
    whatsDrivingGrowthD20: 0,
    whatsDrivingGrowthF20: 0,
    whatsDrivingGrowthD22: 0,
    whatsDrivingGrowthF22: 0,
    whatsDrivingGrowthD23: 0,
    whatsDrivingGrowthF23: 0,

}
const reducer = (state = initialState, action) => {
    if (action.type === 'whatsDrivingGrowthE17') {
        // console.log("first")
        // console.log(action.payload)
        return {
            ...state,
            whatsDrivingGrowthE17: parseFloat(action.payload)
        }
    } else if (action.type === 'whatsDrivingGrowthE18') {
        return {
            ...state,
            whatsDrivingGrowthE18: parseFloat(action.payload)
        }
    } else if (action.type === 'whatsDrivingGrowthE19') {
        return {
            ...state,
            whatsDrivingGrowthE19: parseFloat(action.payload)
        }
    } else if (action.type === 'whatsDrivingGrowthE20') {
        return {
            ...state,
            whatsDrivingGrowthE20: parseFloat(action.payload)
        }
    } else if (action.type === 'whatsDrivingGrowthImproving') {

        const { clientInputsH16, clientInputsH30, clientInputsH33, clientInputsH36 } = action.payload
        const { whatsDrivingGrowthE17, whatsDrivingGrowthE18, whatsDrivingGrowthE19, whatsDrivingGrowthE20 } = state
        if (!isNaN(whatsDrivingGrowthE17) || !isNaN(whatsDrivingGrowthE18) || !isNaN(whatsDrivingGrowthE19) || !isNaN(whatsDrivingGrowthE20)) {
            let whatsDrivingGrowthD17 = (parseFloat(clientInputsH16)).toFixed(2)
            let whatsDrivingGrowthF17 = ((parseFloat(whatsDrivingGrowthD17)) * (parseFloat(whatsDrivingGrowthE17) / 100) + parseFloat(whatsDrivingGrowthD17)).toFixed(2)

            let whatsDrivingGrowthD18 = (parseFloat(clientInputsH30) / parseFloat(clientInputsH16)).toFixed(2)
            let whatsDrivingGrowthF18 = ((parseFloat(whatsDrivingGrowthD18)) * (parseFloat(whatsDrivingGrowthE18) / 100) + parseFloat(whatsDrivingGrowthD18)).toFixed(2)

            let whatsDrivingGrowthD19 = (parseFloat(clientInputsH33)).toFixed(2)
            let whatsDrivingGrowthF19 = ((parseFloat(whatsDrivingGrowthD19)) * (parseFloat(whatsDrivingGrowthE19) / 100) + parseFloat(whatsDrivingGrowthD19)).toFixed(2)

            let whatsDrivingGrowthD20 = (parseFloat(clientInputsH36)).toFixed(2)
            let whatsDrivingGrowthF20 = ((parseFloat(whatsDrivingGrowthD20)) * (parseFloat(whatsDrivingGrowthE20) / 100) + parseFloat(whatsDrivingGrowthD20)).toFixed(2)

            let whatsDrivingGrowthD22 = ((parseFloat(whatsDrivingGrowthD17)) * parseFloat(whatsDrivingGrowthD18) * parseFloat(whatsDrivingGrowthD19)).toFixed(2)
            let whatsDrivingGrowthF22 = ((parseFloat(whatsDrivingGrowthF17)) * parseFloat(whatsDrivingGrowthF18) * parseFloat(whatsDrivingGrowthF19)).toFixed(2)

            let whatsDrivingGrowthD23 = ((parseFloat(whatsDrivingGrowthD17)) * parseFloat(whatsDrivingGrowthD18) * parseFloat(whatsDrivingGrowthD19) * (whatsDrivingGrowthD20)).toFixed(2)
            let whatsDrivingGrowthF23 = ((parseFloat(whatsDrivingGrowthF17)) * parseFloat(whatsDrivingGrowthF18) * parseFloat(whatsDrivingGrowthF19) * parseFloat(whatsDrivingGrowthF20)).toFixed(2)



            return {
                ...state,
                whatsDrivingGrowthD17: (whatsDrivingGrowthD17 != 'NaN') ? whatsDrivingGrowthD17 : 0,
                whatsDrivingGrowthF17: (whatsDrivingGrowthF17 != 'NaN') ? whatsDrivingGrowthF17 : 0,
                whatsDrivingGrowthD18: (whatsDrivingGrowthD18 != 'NaN') ? whatsDrivingGrowthD18 : 0,
                whatsDrivingGrowthF18: (whatsDrivingGrowthF18 != 'NaN') ? whatsDrivingGrowthF18 : 0,
                whatsDrivingGrowthD19: (whatsDrivingGrowthD19 != 'NaN') ? whatsDrivingGrowthD19 : 0,
                whatsDrivingGrowthF19: (whatsDrivingGrowthF19 != 'NaN') ? whatsDrivingGrowthF19 : 0,
                whatsDrivingGrowthD20: (whatsDrivingGrowthD20 != 'NaN') ? whatsDrivingGrowthD20 : 0,
                whatsDrivingGrowthF20: (whatsDrivingGrowthF20 != 'NaN') ? whatsDrivingGrowthF20 : 0,
                whatsDrivingGrowthD22: (whatsDrivingGrowthD22 != 'NaN') ? whatsDrivingGrowthD22 : 0,
                whatsDrivingGrowthF22: (whatsDrivingGrowthF22 != 'NaN') ? whatsDrivingGrowthF22 : 0,
                whatsDrivingGrowthD23: (whatsDrivingGrowthD23 != 'NaN') ? whatsDrivingGrowthD23 : 0,
                whatsDrivingGrowthF23: (whatsDrivingGrowthF23 != 'NaN') ? whatsDrivingGrowthF23 : 0,

            }
        }
        else {
            return {
                ...state, //copying the original state
                whatsDrivingGrowthD17: 0,
                whatsDrivingGrowthF17: 0,
                whatsDrivingGrowthD18: 0,
                whatsDrivingGrowthF18: 0,
                whatsDrivingGrowthD19: 0,
                whatsDrivingGrowthF19: 0,
                whatsDrivingGrowthD20: 0,
                whatsDrivingGrowthF20: 0,
                whatsDrivingGrowthD22: 0,
                whatsDrivingGrowthF22: 0,
                whatsDrivingGrowthD23: 0,
                whatsDrivingGrowthF23: 0,

            }
        }
    }
    else {
        return state
    }
}

export default reducer