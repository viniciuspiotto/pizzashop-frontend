import DayOrdersAmountCard from "./dayOrdersAmountCard";
import MonthCanceledOrdersAmountCard from "./monthCanceledOrdersAmountCard";
import MonthOrdersAmountCard from "./monthOrdersAmountCard";
import MonthRevenueCard from "./monthRevenueCard";
import RevenueChart from "./revenueChart";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="row-span-2 grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>
      <div className="grid grid-cols-8 gap-4">
        <RevenueChart />
      </div>
    </div>
  );
}

export default Dashboard;
