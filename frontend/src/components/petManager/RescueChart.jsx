import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Rejected: 2,
    Accepted: 7,
  },
  {
    name: "Feb",
    Rejected: 4,
    Accepted: 2,
  },
  {
    name: "Mar",
    Rejected: 10,
    Accepted: 7,
  },
  {
    name: "Apr",
    Rejected: 2,
    Accepted: 3,
  },
  {
    name: "May",
    Rejected: 8,
    Accepted: 4,
  },
  {
    name: "Jun",
    Rejected: 7,
    Accepted: 6,
  },
  {
    name: "July",
    Rejected: 4,
    Accepted: 6,
  },
  {
    name: "Aug",
    Rejected: 4,
    Accepted: 3,
  },
  {
    name: "Sep",
    Rejected: 1,
    Accepted: 9,
  },
  {
    name: "Oct",
    Rejected: 4,
    Accepted: 10,
  },
  {
    name: "Nov",
    Rejected: 4,
    Accepted: 9,
  },
  {
    name: "Dec",
    Rejected: 4,
    Accepted: 5,
  },
];

export default function RescueChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Rescue Requests</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Accepted" fill="#0ea5e9" />
            <Bar dataKey="Rejected" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
