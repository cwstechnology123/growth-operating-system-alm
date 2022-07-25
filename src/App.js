import { useSelector } from "react-redux";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import PrivateRoute from "./Routes/PrivateRoute";

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Conversion from './pages/Conversion';
import ClientInputs from './pages/ClientInputs';
import BuyingLfetime from './pages/BuyingLfetime';
import AverageTransactionValue from './pages/AverageTransactionValue';
import StateOfBusiness from './pages/StateOfBusiness';
import RevanueGrowthDrivers from './pages/RevanueGrowthDrivers';
import LeadGeneration from './pages/LeadGeneration';
import Referrals from './pages/Referrals';
import PurchaseFrequency from './pages/PurchaseFrequency';
import CustomerAttrition from './pages/CustomerAttrition';
import CustomerReactivation from './pages/CustomerReactivation';
import ProfitMargin from './pages/ProfitMargin';
import The120GrowthBenchmark from './pages/The120GrowthBenchmark';
import GrowthPlanning from './pages/GrowthPlanning';
import CompetitiveAdvantage from './pages/CompetitiveAdvantage';
import FinancialPerformance from './pages/FinancialPerformance';
import CustomerAcquisition from './pages/CustomerAcquisition';
import CustomerRetention from './pages/CustomerRetention';
import CustomerTransactions from './pages/CustomerTransactions';
import Ability from './pages/Ability';
import Agility from './pages/Agility';
import LongTermGrowth from './pages/LongTermGrowth';
import TenFiveThreeOnePlanning from './pages/TenFiveThreeOnePlanning';
import FiveStepStrategy from './pages/FiveStepStrategy';
import BrandScorecard from './pages/BrandScorecard';
import AnnualGrowthPlan from './pages/AnnualGrowthPlan';
import MarketingPlan from './pages/MarketingPlan';
import SalesElevationPlan from './pages/SalesElevationPlan';
import ExecutiveSummary from './pages/ExecutiveSummary';
import ImproveYourScore from './pages/ImproveYourScore';
import GrowthDriverPerformanceOverview from './pages/GrowthDriverPerformanceOverview';
import BenchmarkScoreGapAnalysis from './pages/BenchmarkScoreGapAnalysis';
import CustomerFinancialValue from './pages/CustomerFinancialValue';
import ImpactOfThe120Growth from './pages/ImpactOfThe120Growth';
import CreatingGrowthMomentum from './pages/CreatingGrowthMomentum';
import EquityEvolutionTheBigBonus from './pages/EquityEvolutionTheBigBonus';
import FindingGrowthInYourBusiness from './pages/FindingGrowthInYourBusiness';
import WhatsDrivingGrowth from './pages/WhatsDrivingGrowth';
import CustomerCommunicationPlan from './pages/CustomerCommunicationPlan';
import PyramidOfPurpose from './pages/PyramidOfPurpose';
import GrowthProgressReport from './pages/GrowthProgressReport';
import WhatIsWorkingNow from './pages/WhatIsWorkingNow';
import QuarterlyAndMonthlyPlanning from './pages/QuarterlyAndMonthlyPlanning';
import InnovateOrOptimize from './pages/InnovateOrOptimize';
import StrategicFoundation from './pages/StrategicFoundation';
import CriticalGrowthFactors from './pages/CriticalGrowthFactors';
import StrategyAndInnovationMap from './pages/StrategyAndInnovationMap';
import StrategyUncertaintyMap from './pages/StrategyUncertaintyMap';
import BreakthroughStrategy from './pages/BreakthroughStrategy';
import TheBigSWOT from './pages/TheBigSWOT';
import CustomerPersonas from './pages/CustomerPersonas';
import ValuesMissionGoals from './pages/ValuesMissionGoals';
import Impact120GrowthROI from './pages/Impact120GrowthROI';
import Auth from './pages/Auth';
import Logout from './pages/Logout';
import Profile from './pages/Profile';

// new import file
import RevenueGrowthTools from './pages/RevenueGrowthTools';
import GrowthOptionScorecard from './pages/GrowthOptionScorecard';
import WhatsWorkingNow from './pages/WhatsWorkingNow';
import FindTheLowHangingFruit from './pages/FindTheLowHangingFruit';
import CustomerTransformationModel from './pages/CustomerTransformationModel';
import ReferralStrategyWorksheet from './pages/ReferralStrategyWorksheet';
import OpportunityRankingAnalysis from './pages/OpportunityRankingAnalysis';
import ProjectPrioritizationMatrix from './pages/ProjectPrioritizationMatrix';
import SynergyScoringWorksheet from './pages/SynergyScoringWorksheet';
import AllianceEvaluationWorksheet from './pages/AllianceEvaluationWorksheet';
import SalesCallObjectives from './pages/SalesCallObjectives';
import AccountPenetrationMatrix from './pages/AccountPenetrationMatrix';
import ObjectionResolutionWorksheet from './pages/ObjectionResolutionWorksheet';
import TargetAccountListPrioritization from './pages/TargetAccountListPrioritization';
import TargetAccountPlanning from './pages/TargetAccountPlanning';
import ValueFirstStrategyDevelopment from './pages/ValueFirstStrategyDevelopment';
import InnovationConceptDevelopment from './pages/InnovationConceptDevelopment';
import SCAMPERIdeation from './pages/SCAMPERIdeation';
import PAINstorming from './pages/PAINstorming';
import OutcomeDrivenInnovation from './pages/OutcomeDrivenInnovation';
import SixThinkingHats from './pages/SixThinkingHats';
import AgileInnovation from './pages/AgileInnovation';
import InnovationRankingMatrix from './pages/InnovationRankingMatrix';
import JobsToBeDone from './pages/JobsToBeDone';
import InsightsToActionToImpactWorksheet from './pages/InsightsToActionToImpactWorksheet';
import DisruptiveInnovation from './pages/DisruptiveInnovation';
import StepCaseForChange from './pages/StepCaseForChange';
import OptimizationAccelerator from './pages/OptimizationAccelerator';
import CustomerRetentionloop from './pages/CustomerRetentionloop';
import NetPromoterScore from './pages/NetPromoterScore';
import CustomerJourneyMapping from './pages/CustomerJourneyMapping';
import VoiceOfTheCustomerTable from './pages/VoiceOfTheCustomerTable';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contents" element={<PrivateRoute><Main /></PrivateRoute>} />
        <Route path="conversion" element={<PrivateRoute><Conversion /></PrivateRoute>} />
        <Route path="client-inputs" element={<PrivateRoute><ClientInputs /></PrivateRoute>} />
        <Route path="buying-lifetime" element={<PrivateRoute><BuyingLfetime /></PrivateRoute>} />
        <Route path="average-transaction-value" element={<PrivateRoute><AverageTransactionValue /></PrivateRoute>} />
        <Route path="state-of-business" element={<PrivateRoute><StateOfBusiness /></PrivateRoute>} />
        <Route path="/benchmark-scorecard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/revenue-growth-drivers" element={<PrivateRoute><RevanueGrowthDrivers /></PrivateRoute>} />
        <Route path="/lead-generation" element={<PrivateRoute><LeadGeneration /></PrivateRoute>} />
        <Route path="/referrals" element={<PrivateRoute><Referrals /></PrivateRoute>} />
        <Route path="/purchase-frequency" element={<PrivateRoute><PurchaseFrequency /></PrivateRoute>} />
        <Route path="/customer-attrition" element={<PrivateRoute><CustomerAttrition /></PrivateRoute>} />
        <Route path="/customer-reactivation" element={<PrivateRoute><CustomerReactivation /></PrivateRoute>} />
        <Route path="/profit-margin" element={<PrivateRoute><ProfitMargin /></PrivateRoute>} />
        <Route path="/120-growth-benchmark" element={<PrivateRoute><The120GrowthBenchmark /></PrivateRoute>} />
        <Route path="/growth-planning" element={<PrivateRoute><GrowthPlanning /></PrivateRoute>} />
        <Route path="/competitive-advantage" element={<PrivateRoute><CompetitiveAdvantage /></PrivateRoute>} />
        <Route path="/financial-performance" element={<PrivateRoute><FinancialPerformance /></PrivateRoute>} />
        <Route path="/customer-acquisition" element={<PrivateRoute><CustomerAcquisition /></PrivateRoute>} />
        <Route path="/customer-retention" element={<PrivateRoute><CustomerRetention /></PrivateRoute>} />
        <Route path="/customer-transactions" element={<PrivateRoute><CustomerTransactions /></PrivateRoute>} />
        <Route path="/ability" element={<PrivateRoute><Ability /></PrivateRoute>} />
        <Route path="/agility" element={<PrivateRoute><Agility /></PrivateRoute>} />
        <Route path="/long-term-growth" element={<PrivateRoute><LongTermGrowth /></PrivateRoute>} />
        <Route path="/10-5-3-1-Planning" element={<PrivateRoute><TenFiveThreeOnePlanning /></PrivateRoute>} />
        <Route path="/five-step-strategy" element={<PrivateRoute><FiveStepStrategy /></PrivateRoute>} />
        <Route path="/brand-scorecard" element={<PrivateRoute><BrandScorecard /></PrivateRoute>} />
        <Route path="/annual-growth-plan" element={<PrivateRoute><AnnualGrowthPlan /></PrivateRoute>} />
        <Route path="/marketing-plan" element={<PrivateRoute><MarketingPlan /></PrivateRoute>} />
        <Route path="/sales-elevation-plan" element={<PrivateRoute><SalesElevationPlan /></PrivateRoute>} />
        <Route path="/executive-summary" element={<PrivateRoute><ExecutiveSummary /></PrivateRoute>} />
        <Route path="/improve-your-score" element={<PrivateRoute><ImproveYourScore /></PrivateRoute>} />
        <Route path="/growth-driver-performance-overview" element={<PrivateRoute><GrowthDriverPerformanceOverview /></PrivateRoute>} />
        <Route path="/benchmark-score-gap-analysis" element={<PrivateRoute><BenchmarkScoreGapAnalysis /></PrivateRoute>} />
        <Route path="/customer-financial-value" element={<PrivateRoute><CustomerFinancialValue /></PrivateRoute>} />
        <Route path="/impact-of-the-120-growth" element={<PrivateRoute><ImpactOfThe120Growth /></PrivateRoute>} />
        <Route path="/creating-growth-momentum" element={<PrivateRoute><CreatingGrowthMomentum /></PrivateRoute>} />
        <Route path="/equity-evolution" element={<PrivateRoute><EquityEvolutionTheBigBonus /></PrivateRoute>} />
        <Route path="/finding-growth-in-your-business" element={<PrivateRoute><FindingGrowthInYourBusiness /></PrivateRoute>} />
        <Route path="/what-is-driving-growth" element={<PrivateRoute><WhatsDrivingGrowth /></PrivateRoute>} />
        <Route path="/customer-communication-plan" element={<PrivateRoute><CustomerCommunicationPlan /></PrivateRoute>} />
        <Route path="/pyramid-of-purpose" element={<PrivateRoute><PyramidOfPurpose /></PrivateRoute>} />
        <Route path="/growth-progress-report" element={<PrivateRoute><GrowthProgressReport /></PrivateRoute>} />
        <Route path="/what-is-working-now" element={<PrivateRoute><WhatIsWorkingNow /></PrivateRoute>} />
        <Route path="/quarterly-and-monthly-planning" element={<PrivateRoute><QuarterlyAndMonthlyPlanning /></PrivateRoute>} />
        <Route path="/innovate-or-optimize" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/strategic-foundation" element={<PrivateRoute><StrategicFoundation /></PrivateRoute>} />
        <Route path="/critical-growth-factors" element={<PrivateRoute><CriticalGrowthFactors /></PrivateRoute>} />
        <Route path="/strategy-and-innovation-map" element={<PrivateRoute><StrategyAndInnovationMap /></PrivateRoute>} />
        <Route path="/strategy-uncertainty-map" element={<PrivateRoute><StrategyUncertaintyMap /></PrivateRoute>} />
        <Route path="/break-through-strategy" element={<PrivateRoute><BreakthroughStrategy /></PrivateRoute>} />
        <Route path="/the-big-SWOT" element={<PrivateRoute><TheBigSWOT /></PrivateRoute>} />
        <Route path="/customer-personas" element={<PrivateRoute><CustomerPersonas /></PrivateRoute>} />
        <Route path="/values-mission-goals" element={<PrivateRoute><ValuesMissionGoals /></PrivateRoute>} />
        <Route path="/120-growth-roi" element={<PrivateRoute><Impact120GrowthROI /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

        {/* new route add  */}
        <Route path="/revenue-growth-tools" element={<PrivateRoute><RevenueGrowthTools/></PrivateRoute>} />
        <Route path="/growth-option-scorecard" element={<PrivateRoute><GrowthOptionScorecard/></PrivateRoute>} />
        <Route path="/whats-working-now" element={<PrivateRoute><WhatsWorkingNow/></PrivateRoute>} />
        <Route path="/find-the-Low-Hanging-Fruit" element={<PrivateRoute><FindTheLowHangingFruit/></PrivateRoute>} />
        <Route path="/customer-transformation-model" element={<PrivateRoute><CustomerTransformationModel/></PrivateRoute>} />
        <Route path="/referral-strategy-worksheet" element={<PrivateRoute><ReferralStrategyWorksheet/></PrivateRoute>} />
        <Route path="/opportunity-ranking-analysis" element={<PrivateRoute><OpportunityRankingAnalysis/></PrivateRoute>} />
        <Route path="/project-prioritization-matrix" element={<PrivateRoute><ProjectPrioritizationMatrix/></PrivateRoute>} />
        <Route path="/synergy-scoring-worksheet" element={<PrivateRoute><SynergyScoringWorksheet/></PrivateRoute>} />
        <Route path="/alliance-evaluation-worksheet" element={<PrivateRoute><AllianceEvaluationWorksheet/></PrivateRoute>} />
        <Route path="/sales-call-objectives" element={<PrivateRoute><SalesCallObjectives/></PrivateRoute>} />
        <Route path="/account-penetration-matrix" element={<PrivateRoute><AccountPenetrationMatrix/></PrivateRoute>} />
        <Route path="/objection-resolution-worksheet" element={<PrivateRoute><ObjectionResolutionWorksheet/></PrivateRoute>} />
        <Route path="/target-account-list-prioritization" element={<PrivateRoute><TargetAccountListPrioritization/></PrivateRoute>} />
        <Route path="/target-account-planning" element={<PrivateRoute><TargetAccountPlanning/></PrivateRoute>} />
        <Route path="/value-first-strategy-development" element={<PrivateRoute><ValueFirstStrategyDevelopment/></PrivateRoute>} />
        <Route path="/innovation-concept-development" element={<PrivateRoute><InnovationConceptDevelopment/></PrivateRoute>} />
        <Route path="/SCAMPER-Ideation" element={<PrivateRoute><SCAMPERIdeation/></PrivateRoute>} />
        <Route path="/PAINstorming" element={<PrivateRoute><PAINstorming/></PrivateRoute>} />
        <Route path="/outcome-driven-innovation" element={<PrivateRoute><OutcomeDrivenInnovation/></PrivateRoute>} />
        <Route path="/six-thinking-hats" element={<PrivateRoute><SixThinkingHats/></PrivateRoute>} />
        <Route path="/agile-innovation" element={<PrivateRoute><AgileInnovation/></PrivateRoute>} />
        <Route path="/innovation-ranking-matrix" element={<PrivateRoute><InnovationRankingMatrix/></PrivateRoute>} />
        <Route path="/jobs-to-be-done" element={<PrivateRoute><JobsToBeDone/></PrivateRoute>} />
        <Route path="/insights-to-action-to-impact-worksheet" element={<PrivateRoute><InsightsToActionToImpactWorksheet/></PrivateRoute>} />
        <Route path="/disruptive-innovation" element={<PrivateRoute><DisruptiveInnovation/></PrivateRoute>} />
        <Route path="/7-step-case-for-change" element={<PrivateRoute><StepCaseForChange/></PrivateRoute>} />
        <Route path="/optimization-accelerator" element={<PrivateRoute><OptimizationAccelerator/></PrivateRoute>} />
        <Route path="/customer-retention-loop" element={<PrivateRoute><CustomerRetentionloop/></PrivateRoute>} />
        <Route path="/net-promoter-score" element={<PrivateRoute><NetPromoterScore/></PrivateRoute>} />
        <Route path="/customer-journey-mapping" element={<PrivateRoute><CustomerJourneyMapping/></PrivateRoute>} />
        <Route path="/voice-of-the-customer-table" element={<PrivateRoute><VoiceOfTheCustomerTable/></PrivateRoute>} />


        <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />

        <Route path="/" element={
          <ProtectedRoute>
            <Auth />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
