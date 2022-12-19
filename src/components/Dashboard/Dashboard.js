import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

import { BarChart, Bar, Cell } from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 24100,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 42300,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 72600,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 52900,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 60100,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 67000,
      revenue: 61000,
    },
  ];
  return (
    <div className=" md:grid md:grid-cols-2 md:gap-36 md:mx-56 md:justify-around mt-44 ">
      <div className=" ">
        <p className="text-slate-700 font-bold text-4xl mb-5">
          {" "}
          Simple Line Chart: <br />
          <span className="text-2xl text-slate-800">
            {" "}
            Investment vs Revenue vs sell
          </span>{" "}
        </p>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className=" ">
        <p className="text-slate-700 font-bold text-4xl mb-5">
          {" "}
          Area Chart: <br />
          <span className=" text-2xl text-slate-800">
            {" "}
            Investment vs Revenue
          </span>{" "}
        </p>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>

      <div className=" ">
        <p className="text-slate-700 font-bold text-4xl mb-5">
          {" "}
          Bar-Chart: <br />
          <span className=" text-2xl text-slate-800">
            {" "}
            Investment vs Revenue
          </span>{" "}
        </p>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className=" ">
        <p className="text-slate-700 font-bold text-4xl mb-5">
          {" "}
          Bar-Chart: <br />
          <span className=" text-2xl text-slate-800">
            {" "}
            Investment vs Revenue
          </span>{" "}
        </p>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" background={{ fill: "#eee" }} />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
