const initialState = {
    CustomerFinancialValuesD16: 1000,
    CustomerFinancialValuesD17: 10,
    CustomerFinancialValuesD18: 5,
    CustomerFinancialValuesD19: 35,
    CustomerFinancialValuesD20: 1000,
    CustomerFinancialValuesD24: 10000,
    CustomerFinancialValuesD25: 3500,
    CustomerFinancialValuesD26: 50000,
    CustomerFinancialValuesD27: 17500,
    CustomerFinancialValuesE24: 10816,
    CustomerFinancialValuesE25: 3937.02,
    CustomerFinancialValuesE26: 56243.20,
    CustomerFinancialValuesE27: 20472.52,
    CustomerFinancialValuesF24: 11698.59,
    CustomerFinancialValuesF25: 4428.62,
    CustomerFinancialValuesF26: 63265.95,
    CustomerFinancialValuesF27: 23949.96,
    CustomerFinancialValuesG24: 12653.19,
    CustomerFinancialValuesG25: 4981.59,
    CustomerFinancialValuesG26: 71165.59,
    CustomerFinancialValuesG27: 28018.06,
    CustomerFinancialValuesH24: 13685.69,
    CustomerFinancialValuesH25: 5603.61,
    CustomerFinancialValuesH26: 80051.61,
    CustomerFinancialValuesH27: 32777.17,
    CustomerFinancialValuesI24: 14802.44,
    CustomerFinancialValuesI25: 6303.30,
    CustomerFinancialValuesI26: 90047.18,
    CustomerFinancialValuesI27: 38344.66,
}
const reducer = (state = initialState, action) => {
    if (action.type === "INITIAL_STATE") {
        state = initialState;
        return state
    } else {
        return state
    }

}

export default reducer