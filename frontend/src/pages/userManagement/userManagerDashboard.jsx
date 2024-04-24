import React from "react";
import DashboardStatsGrid from "../../components/userManagement/DashboardStatsGrid";
import RescueChart from "../../components/petManager/RescueChart";
import RecentVerificationRequests from "../../components/userManagement/RecentVerificationRequests";
import RescueRequstsChart from "../../components/petManager/RescueRequestPieChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <RescueChart />
        <RescueRequstsChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentVerificationRequests />
      </div>
    </div>
  );
}
