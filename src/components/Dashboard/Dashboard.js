import React, { useEffect } from "react";
import { useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  console.log(
    "Screen size here:",
    window.innerWidth,
    "Smartphone == ",
    isMobile
  );

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
    <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-36 md:mx-56 justify-center md:justify-around md:mt-28 mt-20 mx-auto text-center max-w-[90vw] ">
      <div className="mx-auto text-center  mb-20 md:mb-0">
        <p className="text-slate-700 font-bold text-2xl md:text-4xl mb-5 gradient-text">
          Simple Line Chart: <br />
          <span className="text-lg md:text-2xl text-slate-800">
            Investment vs Revenue vs sell
          </span>
        </p>
        <LineChart
          width={!isMobile ? 500 : 300}
          height={!isMobile ? 300 : 200}
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
          <Line type="monotone" dataKey="sell" stroke="#FFA500" />
        </LineChart>
      </div>
      <div className="mx-auto text-center  mb-20 md:mb-0 ">
        <p className="text-slate-700 font-bold text-2xl md:text-4xl mb-5 gradient-text">
          Area Chart: <br />
          <span className=" text-2xl text-slate-800">
            Investment vs Revenue
          </span>
        </p>
        <AreaChart
          width={!isMobile ? 500 : 300}
          height={!isMobile ? 300 : 200}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
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

      <div className="mx-auto text-center  mb-20 md:mb-0  ">
        <p className="text-slate-700 font-bold text-2xl md:text-4xl mb-5 gradient-text">
          Bar-Chart: <br />
          <span className=" text-2xl text-slate-800 ">
            Investment vs Revenue
          </span>
        </p>
        <BarChart
          width={!isMobile ? 500 : 300}
          height={!isMobile ? 300 : 200}
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

      <div className="mx-auto text-center  mb-20 md:mb-0  ">
        <p className="text-slate-700 font-bold text-2xl md:text-4xl mb-5 gradient-text">
          Bar-Chart: <br />
          <span className=" text-2xl text-slate-800">
            Investment vs Revenue
          </span>
        </p>
        <BarChart
          width={!isMobile ? 500 : 300}
          height={!isMobile ? 300 : 200}
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
