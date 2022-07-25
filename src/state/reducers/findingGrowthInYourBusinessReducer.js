import sum from "../../utils/sum";
const initialState = {
    findingGrowthInYourBusinessD17: 0,
    findingGrowthInYourBusinessF17: 0,
    findingGrowthInYourBusinessD18: 0,
    findingGrowthInYourBusinessF18: 0,
    findingGrowthInYourBusinessD19: 0,
    findingGrowthInYourBusinessF19: 0,
    findingGrowthInYourBusinessD20: 0,
    findingGrowthInYourBusinessF20: 0,
    findingGrowthInYourBusinessD22: 0,
    findingGrowthInYourBusinessF22: 0,
    findingGrowthInYourBusinessD23: 0,
    findingGrowthInYourBusinessF23: 0,

}
const reducer = (state = initialState, action) => {
    if (action.type === 'findingGrowthInYourBusinessE17') {
        // console.log("first")
        // console.log(action.payload)
        return {
            ...state,
            findingGrowthInYourBusinessE17: parseFloat(action.payload)
        }
    } else if (action.type === 'findingGrowthInYourBusinessE18') {
        return {
            ...state,
            findingGrowthInYourBusinessE18: parseFloat(action.payload)
        }
    } else if (action.type === 'findingGrowthInYourBusinessE19') {
        return {
            ...state,
            findingGrowthInYourBusinessE19: parseFloat(action.payload)
        }
    } else if (action.type === 'findingGrowthInYourBusinessE20') {
        return {
            ...state,
            findingGrowthInYourBusinessE20: parseFloat(action.payload)
        }
    } else if (action.type === 'findingGrowthInYourBusinessImproving') {

        const { clientInputsH16, clientInputsH30, clientInputsH33, clientInputsH36 } = action.payload
        const { findingGrowthInYourBusinessE17, findingGrowthInYourBusinessE18, findingGrowthInYourBusinessE19, findingGrowthInYourBusinessE20 } = state
        if (!isNaN(findingGrowthInYourBusinessE17) || !isNaN(findingGrowthInYourBusinessE18) || !isNaN(findingGrowthInYourBusinessE19) || !isNaN(findingGrowthInYourBusinessE20)) {
            let findingGrowthInYourBusinessD17 = (parseFloat(clientInputsH16)).toFixed(2)
            let findingGrowthInYourBusinessF17 = ((parseFloat(findingGrowthInYourBusinessD17)) * (parseFloat(findingGrowthInYourBusinessE17) / 100) + parseFloat(findingGrowthInYourBusinessD17)).toFixed(2)

            let findingGrowthInYourBusinessD18 = (parseFloat(clientInputsH30) / parseFloat(clientInputsH16)).toFixed(2)
            let findingGrowthInYourBusinessF18 = ((parseFloat(findingGrowthInYourBusinessD18)) * (parseFloat(findingGrowthInYourBusinessE18) / 100) + parseFloat(findingGrowthInYourBusinessD18)).toFixed(2)

            let findingGrowthInYourBusinessD19 = (parseFloat(clientInputsH33)).toFixed(2)
            let findingGrowthInYourBusinessF19 = ((parseFloat(findingGrowthInYourBusinessD19)) * (parseFloat(findingGrowthInYourBusinessE19) / 100) + parseFloat(findingGrowthInYourBusinessD19)).toFixed(2)

            let findingGrowthInYourBusinessD20 = (parseFloat(clientInputsH36)).toFixed(2)
            let findingGrowthInYourBusinessF20 = ((parseFloat(findingGrowthInYourBusinessD20)) * (parseFloat(findingGrowthInYourBusinessE20) / 100) + parseFloat(findingGrowthInYourBusinessD20)).toFixed(2)

            let findingGrowthInYourBusinessD22 = ((parseFloat(findingGrowthInYourBusinessD17)) * parseFloat(findingGrowthInYourBusinessD18) * parseFloat(findingGrowthInYourBusinessD19)).toFixed(2)
            let findingGrowthInYourBusinessF22 = ((parseFloat(findingGrowthInYourBusinessF17)) * parseFloat(findingGrowthInYourBusinessF18) * parseFloat(findingGrowthInYourBusinessF19)).toFixed(2)

            let findingGrowthInYourBusinessD23 = ((parseFloat(findingGrowthInYourBusinessD17)) * parseFloat(findingGrowthInYourBusinessD18) * parseFloat(findingGrowthInYourBusinessD19) * (findingGrowthInYourBusinessD20)).toFixed(2)
            let findingGrowthInYourBusinessF23 = ((parseFloat(findingGrowthInYourBusinessF17)) * parseFloat(findingGrowthInYourBusinessF18) * parseFloat(findingGrowthInYourBusinessF19) * parseFloat(findingGrowthInYourBusinessF20)).toFixed(2)



            return {
                ...state,
                findingGrowthInYourBusinessD17: (findingGrowthInYourBusinessD17 != 'NaN') ? findingGrowthInYourBusinessD17 : 0,
                findingGrowthInYourBusinessF17: (findingGrowthInYourBusinessF17 != 'NaN') ? findingGrowthInYourBusinessF17 : 0,
                findingGrowthInYourBusinessD18: (findingGrowthInYourBusinessD18 != 'NaN') ? findingGrowthInYourBusinessD18 : 0,
                findingGrowthInYourBusinessF18: (findingGrowthInYourBusinessF18 != 'NaN') ? findingGrowthInYourBusinessF18 : 0,
                findingGrowthInYourBusinessD19: (findingGrowthInYourBusinessD19 != 'NaN') ? findingGrowthInYourBusinessD19 : 0,
                findingGrowthInYourBusinessF19: (findingGrowthInYourBusinessF19 != 'NaN') ? findingGrowthInYourBusinessF19 : 0,
                findingGrowthInYourBusinessD20: (findingGrowthInYourBusinessD20 != 'NaN') ? findingGrowthInYourBusinessD20 : 0,
                findingGrowthInYourBusinessF20: (findingGrowthInYourBusinessF20 != 'NaN') ? findingGrowthInYourBusinessF20 : 0,
                findingGrowthInYourBusinessD22: (findingGrowthInYourBusinessD22 != 'NaN') ? findingGrowthInYourBusinessD22 : 0,
                findingGrowthInYourBusinessF22: (findingGrowthInYourBusinessF22 != 'NaN') ? findingGrowthInYourBusinessF22 : 0,
                findingGrowthInYourBusinessD23: (findingGrowthInYourBusinessD23 != 'NaN') ? findingGrowthInYourBusinessD23 : 0,
                findingGrowthInYourBusinessF23: (findingGrowthInYourBusinessF23 != 'NaN') ? findingGrowthInYourBusinessF23 : 0,

            }
        }
        else {
            return {
                ...state, //copying the original state
                findingGrowthInYourBusinessD17: 0,
                findingGrowthInYourBusinessF17: 0,
                findingGrowthInYourBusinessD18: 0,
                findingGrowthInYourBusinessF18: 0,
                findingGrowthInYourBusinessD19: 0,
                findingGrowthInYourBusinessF19: 0,
                findingGrowthInYourBusinessD20: 0,
                findingGrowthInYourBusinessF20: 0,
                findingGrowthInYourBusinessD22: 0,
                findingGrowthInYourBusinessF22: 0,
                findingGrowthInYourBusinessD23: 0,
                findingGrowthInYourBusinessF23: 0,

            }
        }
    }
    else {
        return state
    }
}

export default reducer