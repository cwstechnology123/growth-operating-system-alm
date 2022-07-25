import sum from "../../utils/sum";
const initialState = {
    creatingGrowthMomentumK10: 0,
    creatingGrowthMomentumI12: 0,
    creatingGrowthMomentumJ12: 0,
    creatingGrowthMomentumK12: 0,
    creatingGrowthMomentumL12: 0,
    creatingGrowthMomentumI13: 0,
    creatingGrowthMomentumJ13: 0,
    creatingGrowthMomentumK13: 0,
    creatingGrowthMomentumL13: 0,
    creatingGrowthMomentumM13: 0,
    creatingGrowthMomentumI14: 0,
    creatingGrowthMomentumJ14: 0,
    creatingGrowthMomentumK14: 0,
    creatingGrowthMomentumL14: 0,
    creatingGrowthMomentumM14: 0,
    creatingGrowthMomentumI15: 0,
    creatingGrowthMomentumJ15: 0,
    creatingGrowthMomentumK15: 0,
    creatingGrowthMomentumL15: 0,
    creatingGrowthMomentumM15: 0,
    creatingGrowthMomentumI16: 0,
    creatingGrowthMomentumJ16: 0,
    creatingGrowthMomentumK16: 0,
    creatingGrowthMomentumL16: 0,
    creatingGrowthMomentumM16: 0,
    creatingGrowthMomentumI17: 0,
    creatingGrowthMomentumJ17: 0,
    creatingGrowthMomentumK17: 0,
    creatingGrowthMomentumL17: 0,
    creatingGrowthMomentumM17: 0,
    creatingGrowthMomentumI18: 0,
    creatingGrowthMomentumJ18: 0,
    creatingGrowthMomentumK18: 0,
    creatingGrowthMomentumL18: 0,
    creatingGrowthMomentumM18: 0,
    creatingGrowthMomentumI19: 0,
    creatingGrowthMomentumJ19: 0,
    creatingGrowthMomentumK19: 0,
    creatingGrowthMomentumL19: 0,
    creatingGrowthMomentumM19: 0,
    creatingGrowthMomentumI20: 0,
    creatingGrowthMomentumJ20: 0,
    creatingGrowthMomentumK20: 0,
    creatingGrowthMomentumL20: 0,
    creatingGrowthMomentumM20: 0,
    creatingGrowthMomentumI21: 0,
    creatingGrowthMomentumJ21: 0,
    creatingGrowthMomentumK21: 0,
    creatingGrowthMomentumL21: 0,
    creatingGrowthMomentumM21: 0,
    creatingGrowthMomentumI22: 0,
    creatingGrowthMomentumJ22: 0,
    creatingGrowthMomentumK22: 0,
    creatingGrowthMomentumL22: 0,
    creatingGrowthMomentumM22: 0,
}
const reducer = (state = initialState, action) => {
    if (action.type === 'creatingGrowthMomentumM12') {
        return {
            ...state, //copying the original state
            creatingGrowthMomentumM12: parseFloat(action.payload)
        }
    }
    else if (action.type === 'creatingGrowthMomentumQuarterlyImprovement') {
        const { creatingGrowthMomentumM12, clientInputs, impactof120GrowthOS } = action.payload
        const { clientInputsD13, clientInputsD11, clientInputsF11 } = clientInputs
        const { impactof120GrowthOSST42, impactof120GrowthOSE42, impactof120GrowthOSF42, impactof120GrowthOSH42, impactof120GrowthOSJ42, impactof120GrowthOSL42, impactof120GrowthOSN42 } = impactof120GrowthOS

        if (!isNaN(creatingGrowthMomentumM12)) {

            let creatingGrowthMomentumK10 = (parseFloat(impactof120GrowthOSST42)).toFixed(2)
            let creatingGrowthMomentumI12 = (parseFloat(clientInputsD13)).toFixed(2)
            let creatingGrowthMomentumJ12 = (parseFloat(clientInputsD11)).toFixed(2)
            let creatingGrowthMomentumK12 = ((parseFloat(creatingGrowthMomentumJ12) - parseFloat(creatingGrowthMomentumI12) / 2)).toFixed(2)
            let creatingGrowthMomentumL12 = (parseFloat(clientInputsF11)).toFixed(2)

            let creatingGrowthMomentumI13 = (parseFloat(impactof120GrowthOSE42)).toFixed(2)
            let creatingGrowthMomentumJ13 = (parseFloat(impactof120GrowthOSF42)).toFixed(2)
            let creatingGrowthMomentumK13 = (parseFloat(creatingGrowthMomentumJ13) - parseFloat(creatingGrowthMomentumI13)).toFixed(2)
            let creatingGrowthMomentumL13 = ((parseFloat(creatingGrowthMomentumJ13) - parseFloat(creatingGrowthMomentumI13) / parseFloat(creatingGrowthMomentumI13))).toFixed(2)
            let creatingGrowthMomentumM13 = (parseFloat(creatingGrowthMomentumK13) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI14 = (parseFloat(creatingGrowthMomentumJ13)).toFixed(2)
            let creatingGrowthMomentumJ14 = (parseFloat(impactof120GrowthOSH42)).toFixed(2)
            let creatingGrowthMomentumK14 = (parseFloat(creatingGrowthMomentumJ14) - parseFloat(creatingGrowthMomentumI14)).toFixed(2)
            let creatingGrowthMomentumL14 = ((parseFloat(creatingGrowthMomentumJ14) - parseFloat(creatingGrowthMomentumI14) / parseFloat(creatingGrowthMomentumI14))).toFixed(2)
            let creatingGrowthMomentumM14 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI15 = (parseFloat(creatingGrowthMomentumJ14)).toFixed(2)
            let creatingGrowthMomentumJ15 = (parseFloat(impactof120GrowthOSJ42)).toFixed(2)
            let creatingGrowthMomentumK15 = (parseFloat(creatingGrowthMomentumJ15) - parseFloat(creatingGrowthMomentumI15)).toFixed(2)
            let creatingGrowthMomentumL15 = ((parseFloat(creatingGrowthMomentumJ15) - parseFloat(creatingGrowthMomentumI15) / parseFloat(creatingGrowthMomentumI15))).toFixed(2)
            let creatingGrowthMomentumM15 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI16 = (parseFloat(creatingGrowthMomentumJ15)).toFixed(2)
            let creatingGrowthMomentumJ16 = (parseFloat(impactof120GrowthOSL42)).toFixed(2)
            let creatingGrowthMomentumK16 = (parseFloat(creatingGrowthMomentumJ16) - parseFloat(creatingGrowthMomentumI16)).toFixed(2)
            let creatingGrowthMomentumL16 = ((parseFloat(creatingGrowthMomentumJ16) - parseFloat(creatingGrowthMomentumI16) / parseFloat(creatingGrowthMomentumI16))).toFixed(2)
            let creatingGrowthMomentumM16 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI17 = (parseFloat(creatingGrowthMomentumJ16)).toFixed(2)
            let creatingGrowthMomentumJ17 = (parseFloat(impactof120GrowthOSN42)).toFixed(2)
            let creatingGrowthMomentumK17 = (parseFloat(creatingGrowthMomentumJ17) - parseFloat(creatingGrowthMomentumI17)).toFixed(2)
            let creatingGrowthMomentumL17 = ((parseFloat(creatingGrowthMomentumJ17) - parseFloat(creatingGrowthMomentumI17) / parseFloat(creatingGrowthMomentumI17))).toFixed(2)
            let creatingGrowthMomentumM17 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16, creatingGrowthMomentumK17)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI18 = (parseFloat(creatingGrowthMomentumJ17)).toFixed(2)
            let creatingGrowthMomentumJ18 = (parseFloat(creatingGrowthMomentumI18) * parseFloat(creatingGrowthMomentumK10) + parseFloat(creatingGrowthMomentumI18)).toFixed(2)
            let creatingGrowthMomentumK18 = (parseFloat(creatingGrowthMomentumJ18) - parseFloat(creatingGrowthMomentumI18)).toFixed(2)
            let creatingGrowthMomentumL18 = ((parseFloat(creatingGrowthMomentumJ18) - parseFloat(creatingGrowthMomentumI18) / parseFloat(creatingGrowthMomentumI18))).toFixed(2)
            let creatingGrowthMomentumM18 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16, creatingGrowthMomentumK17, creatingGrowthMomentumK18)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI19 = (parseFloat(creatingGrowthMomentumJ18)).toFixed(2)
            let creatingGrowthMomentumJ19 = (parseFloat(creatingGrowthMomentumI19) * parseFloat(creatingGrowthMomentumK10) + parseFloat(creatingGrowthMomentumI19)).toFixed(2)
            let creatingGrowthMomentumK19 = (parseFloat(creatingGrowthMomentumJ19) - parseFloat(creatingGrowthMomentumI19)).toFixed(2)
            let creatingGrowthMomentumL19 = ((parseFloat(creatingGrowthMomentumJ19) - parseFloat(creatingGrowthMomentumI19) / parseFloat(creatingGrowthMomentumI19))).toFixed(2)
            let creatingGrowthMomentumM19 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16, creatingGrowthMomentumK17, creatingGrowthMomentumK18, creatingGrowthMomentumK19)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI20 = (parseFloat(creatingGrowthMomentumJ19)).toFixed(2)
            let creatingGrowthMomentumJ20 = (parseFloat(creatingGrowthMomentumI20) * parseFloat(creatingGrowthMomentumK10) + parseFloat(creatingGrowthMomentumI20)).toFixed(2)
            let creatingGrowthMomentumK20 = (parseFloat(creatingGrowthMomentumJ20) - parseFloat(creatingGrowthMomentumI20)).toFixed(2)
            let creatingGrowthMomentumL20 = ((parseFloat(creatingGrowthMomentumJ20) - parseFloat(creatingGrowthMomentumI20) / parseFloat(creatingGrowthMomentumI20))).toFixed(2)
            let creatingGrowthMomentumM20 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16, creatingGrowthMomentumK17, creatingGrowthMomentumK18, creatingGrowthMomentumK19, creatingGrowthMomentumK20)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI21 = (parseFloat(creatingGrowthMomentumJ20)).toFixed(2)
            let creatingGrowthMomentumJ21 = (parseFloat(creatingGrowthMomentumI21) * parseFloat(creatingGrowthMomentumK10) + parseFloat(creatingGrowthMomentumI21)).toFixed(2)
            let creatingGrowthMomentumK21 = (parseFloat(creatingGrowthMomentumJ21) - parseFloat(creatingGrowthMomentumI21)).toFixed(2)
            let creatingGrowthMomentumL21 = ((parseFloat(creatingGrowthMomentumJ21) - parseFloat(creatingGrowthMomentumI21) / parseFloat(creatingGrowthMomentumI21))).toFixed(2)
            let creatingGrowthMomentumM21 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16, creatingGrowthMomentumK17, creatingGrowthMomentumK18, creatingGrowthMomentumK19, creatingGrowthMomentumK20, creatingGrowthMomentumK21)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)

            let creatingGrowthMomentumI22 = (parseFloat(creatingGrowthMomentumJ21)).toFixed(2)
            let creatingGrowthMomentumJ22 = (parseFloat(creatingGrowthMomentumI22) * parseFloat(creatingGrowthMomentumK10) + parseFloat(creatingGrowthMomentumI22)).toFixed(2)
            let creatingGrowthMomentumK22 = (parseFloat(creatingGrowthMomentumJ22) - parseFloat(creatingGrowthMomentumI22)).toFixed(2)
            let creatingGrowthMomentumL22 = ((parseFloat(creatingGrowthMomentumJ22) - parseFloat(creatingGrowthMomentumI22) / parseFloat(creatingGrowthMomentumI22))).toFixed(2)
            let creatingGrowthMomentumM22 = ((sum(creatingGrowthMomentumK13, creatingGrowthMomentumK14, creatingGrowthMomentumK15, creatingGrowthMomentumK16, creatingGrowthMomentumK17, creatingGrowthMomentumK18, creatingGrowthMomentumK19, creatingGrowthMomentumK20, creatingGrowthMomentumK21, creatingGrowthMomentumK21)) / parseFloat(creatingGrowthMomentumI13)).toFixed(2)




            return {
                ...state, //copying the original state
                creatingGrowthMomentumK10: (creatingGrowthMomentumK10 != 'NaN') ? creatingGrowthMomentumK10 : 0,
                creatingGrowthMomentumI12: (creatingGrowthMomentumI12 != 'NaN') ? creatingGrowthMomentumI12 : 0,
                creatingGrowthMomentumJ12: (creatingGrowthMomentumJ12 != 'NaN') ? creatingGrowthMomentumJ12 : 0,
                creatingGrowthMomentumK12: (creatingGrowthMomentumK12 != 'NaN') ? creatingGrowthMomentumK12 : 0,
                creatingGrowthMomentumL12: (creatingGrowthMomentumL12 != 'NaN') ? creatingGrowthMomentumL12 : 0,
                creatingGrowthMomentumI13: (creatingGrowthMomentumI13 != 'NaN') ? creatingGrowthMomentumI13 : 0,
                creatingGrowthMomentumJ13: (creatingGrowthMomentumJ13 != 'NaN') ? creatingGrowthMomentumJ13 : 0,
                creatingGrowthMomentumK13: (creatingGrowthMomentumK13 != 'NaN') ? creatingGrowthMomentumK13 : 0,
                creatingGrowthMomentumL13: (creatingGrowthMomentumL13 != 'NaN') ? creatingGrowthMomentumL13 : 0,
                creatingGrowthMomentumM13: (creatingGrowthMomentumM13 != 'NaN') ? creatingGrowthMomentumM13 : 0,
                creatingGrowthMomentumI14: (creatingGrowthMomentumI14 != 'NaN') ? creatingGrowthMomentumI14 : 0,
                creatingGrowthMomentumJ14: (creatingGrowthMomentumJ14 != 'NaN') ? creatingGrowthMomentumJ14 : 0,
                creatingGrowthMomentumK14: (creatingGrowthMomentumK14 != 'NaN') ? creatingGrowthMomentumK14 : 0,
                creatingGrowthMomentumL14: (creatingGrowthMomentumL14 != 'NaN') ? creatingGrowthMomentumL14 : 0,
                creatingGrowthMomentumM14: (creatingGrowthMomentumM14 != 'NaN') ? creatingGrowthMomentumM14 : 0,
                creatingGrowthMomentumI15: (creatingGrowthMomentumI15 != 'NaN') ? creatingGrowthMomentumI15 : 0,
                creatingGrowthMomentumJ15: (creatingGrowthMomentumJ15 != 'NaN') ? creatingGrowthMomentumJ15 : 0,
                creatingGrowthMomentumK15: (creatingGrowthMomentumK15 != 'NaN') ? creatingGrowthMomentumK15 : 0,
                creatingGrowthMomentumL15: (creatingGrowthMomentumL15 != 'NaN') ? creatingGrowthMomentumL15 : 0,
                creatingGrowthMomentumM15: (creatingGrowthMomentumM15 != 'NaN') ? creatingGrowthMomentumM15 : 0,
                creatingGrowthMomentumI16: (creatingGrowthMomentumI16 != 'NaN') ? creatingGrowthMomentumI16 : 0,
                creatingGrowthMomentumJ16: (creatingGrowthMomentumJ16 != 'NaN') ? creatingGrowthMomentumJ16 : 0,
                creatingGrowthMomentumK16: (creatingGrowthMomentumK16 != 'NaN') ? creatingGrowthMomentumK16 : 0,
                creatingGrowthMomentumL16: (creatingGrowthMomentumL16 != 'NaN') ? creatingGrowthMomentumL16 : 0,
                creatingGrowthMomentumM16: (creatingGrowthMomentumM16 != 'NaN') ? creatingGrowthMomentumM16 : 0,
                creatingGrowthMomentumI17: (creatingGrowthMomentumI17 != 'NaN') ? creatingGrowthMomentumI17 : 0,
                creatingGrowthMomentumJ17: (creatingGrowthMomentumJ17 != 'NaN') ? creatingGrowthMomentumJ17 : 0,
                creatingGrowthMomentumK17: (creatingGrowthMomentumK17 != 'NaN') ? creatingGrowthMomentumK17 : 0,
                creatingGrowthMomentumL17: (creatingGrowthMomentumL17 != 'NaN') ? creatingGrowthMomentumL17 : 0,
                creatingGrowthMomentumM17: (creatingGrowthMomentumM17 != 'NaN') ? creatingGrowthMomentumM17 : 0,
                creatingGrowthMomentumI18: (creatingGrowthMomentumI18 != 'NaN') ? creatingGrowthMomentumI18 : 0,
                creatingGrowthMomentumJ18: (creatingGrowthMomentumJ18 != 'NaN') ? creatingGrowthMomentumJ18 : 0,
                creatingGrowthMomentumK18: (creatingGrowthMomentumK18 != 'NaN') ? creatingGrowthMomentumK18 : 0,
                creatingGrowthMomentumL18: (creatingGrowthMomentumL18 != 'NaN') ? creatingGrowthMomentumL18 : 0,
                creatingGrowthMomentumM18: (creatingGrowthMomentumM18 != 'NaN') ? creatingGrowthMomentumM18 : 0,
                creatingGrowthMomentumI19: (creatingGrowthMomentumI19 != 'NaN') ? creatingGrowthMomentumI19 : 0,
                creatingGrowthMomentumJ19: (creatingGrowthMomentumJ19 != 'NaN') ? creatingGrowthMomentumJ19 : 0,
                creatingGrowthMomentumK19: (creatingGrowthMomentumK19 != 'NaN') ? creatingGrowthMomentumK19 : 0,
                creatingGrowthMomentumL19: (creatingGrowthMomentumL19 != 'NaN') ? creatingGrowthMomentumL19 : 0,
                creatingGrowthMomentumM19: (creatingGrowthMomentumM19 != 'NaN') ? creatingGrowthMomentumM19 : 0,
                creatingGrowthMomentumI20: (creatingGrowthMomentumI20 != 'NaN') ? creatingGrowthMomentumI20 : 0,
                creatingGrowthMomentumJ20: (creatingGrowthMomentumJ20 != 'NaN') ? creatingGrowthMomentumJ20 : 0,
                creatingGrowthMomentumK20: (creatingGrowthMomentumK20 != 'NaN') ? creatingGrowthMomentumK20 : 0,
                creatingGrowthMomentumL20: (creatingGrowthMomentumL20 != 'NaN') ? creatingGrowthMomentumL20 : 0,
                creatingGrowthMomentumM20: (creatingGrowthMomentumM20 != 'NaN') ? creatingGrowthMomentumM20 : 0,
                creatingGrowthMomentumI21: (creatingGrowthMomentumI21 != 'NaN') ? creatingGrowthMomentumI21 : 0,
                creatingGrowthMomentumJ21: (creatingGrowthMomentumJ21 != 'NaN') ? creatingGrowthMomentumJ21 : 0,
                creatingGrowthMomentumK21: (creatingGrowthMomentumK21 != 'NaN') ? creatingGrowthMomentumK21 : 0,
                creatingGrowthMomentumL21: (creatingGrowthMomentumL21 != 'NaN') ? creatingGrowthMomentumL21 : 0,
                creatingGrowthMomentumM21: (creatingGrowthMomentumM21 != 'NaN') ? creatingGrowthMomentumM21 : 0,
                creatingGrowthMomentumI22: (creatingGrowthMomentumI22 != 'NaN') ? creatingGrowthMomentumI22 : 0,
                creatingGrowthMomentumJ22: (creatingGrowthMomentumJ22 != 'NaN') ? creatingGrowthMomentumJ22 : 0,
                creatingGrowthMomentumK22: (creatingGrowthMomentumK22 != 'NaN') ? creatingGrowthMomentumK22 : 0,
                creatingGrowthMomentumL22: (creatingGrowthMomentumL22 != 'NaN') ? creatingGrowthMomentumL22 : 0,
                creatingGrowthMomentumM22: (creatingGrowthMomentumM22 != 'NaN') ? creatingGrowthMomentumM22 : 0,

            }
        }
        else {
            return {
                ...state, //copying the original state

            }
        }
    }
    else {
        return state
    }
}

export default reducer