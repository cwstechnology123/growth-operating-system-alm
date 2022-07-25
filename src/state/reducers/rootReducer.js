import { combineReducers } from "redux";
import clientInputsReducer from "./clientInputsReducer";
import conversionReducer from "./conversionReducer";
import leadGenerationReducer from "./leadGenerationReducer";
import storage from 'redux-persist/lib/storage';
import referralsReducer from "./referralsReducer";
import CustomerFinancialValuesReducer from "./CustomerFinancialValuesReducer";
import purchaseFrequencyReducer from "./purchaseFrequencyReducer";
import buyingLifeTimeReducer from "./buyingLifeTimeReducer";
import profitMarginReducer from "./profitMarginReducer";
import customerReactivation from "./customerReactivationReducer";
import impactof120GrowthOS from "./impactof120GrowthOSReducer";
import averageTransactionValue from "./averageTransactionValueReducer";
import reducingAttrition from "./reducingAttritionReducer";
import creatingGrowthMomentum from "./creatingGrowthMomentumReducer";
import findingGrowthInYourBusiness from "./findingGrowthInYourBusinessReducer";
import whatsDrivingGrowth from "./whatsDrivingGrowthReducer";

const appReducer = combineReducers({
    clientInputs: clientInputsReducer,
    conversion: conversionReducer,
    leadGeneration: leadGenerationReducer,
    referrals: referralsReducer,
    CustomerFinancialValues: CustomerFinancialValuesReducer,
    purchaseFrequency: purchaseFrequencyReducer,
    buyingLifeTime: buyingLifeTimeReducer,
    profitMargin: profitMarginReducer,
    customerReactivation,
    impactof120GrowthOS,
    averageTransactionValue,
    reducingAttrition, 
    creatingGrowthMomentum,
    findingGrowthInYourBusiness,
    whatsDrivingGrowth,
})
  
const reducers = (state, action) => {
    if (action.type === "RESET") {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root')
        return appReducer(undefined, action);
    }
    return appReducer(state, action)
}

export default reducers