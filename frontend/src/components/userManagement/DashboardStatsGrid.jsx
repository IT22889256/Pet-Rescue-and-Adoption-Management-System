import React from "react";
import { IoPeople } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { FaTasks, FaHome } from "react-icons/fa";
export default function DashboardStatsGrid() {
  return (
    <div>
      <div className="text-2xl p-1">Overview</div>
      <div className="flex gap-4">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <div className="flex items-center">
              <iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660bdbdf-d62c-4da7-89b2-621f9f8035f9&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <FaTasks className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <div className="flex items-center">
              <iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=661ae212-235e-4a52-80a1-03a4b7cf8f5b&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <MdOutlinePets className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <div className="flex items-center">
              <iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=661ae342-a0f0-4a31-899c-8a44f9e2bdab&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
