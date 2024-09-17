"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { TotalAmountSpent: 0, Clicks: 0, CPC: 0, Impressions: 80, date: "Week 01" },
  {
    TotalAmountSpent: 40,
    Clicks: 18,
    CPC: 5,
    Impressions: 62,
    date: "Week 02",
  },
  {
    TotalAmountSpent: 66,
    Clicks: 27,
    CPC: 5,
    Impressions: 57,
    date: "Week 03",
  },
  {
    TotalAmountSpent: 76,
    Clicks: 30,
    CPC: 7,
    Impressions: 61,
    date: "Week 04",
  },
  {
    TotalAmountSpent: 70,
    Clicks: 28,
    CPC: 14,
    Impressions: 68,
    date: "Week 05",
  },
  {
    TotalAmountSpent: 60,
    Clicks: 24,
    CPC: 25,
    Impressions: 70,
    date: "Week 06",
  },
  {
    TotalAmountSpent: 50,
    Clicks: 27,
    CPC: 45,
    Impressions: 60,
    date: "Week 07",
  },
  {
    TotalAmountSpent: 45,
    Clicks: 45,
    CPC: 61,
    Impressions: 40,
    date: "Week 08",
  },
  {
    TotalAmountSpent: 60,
    Clicks: 60,
    CPC: 75,
    Impressions: 20,
    date: "Week 09",
  },
  {
    TotalAmountSpent: 77,
    Clicks: 70,
    CPC: 84,
    Impressions: 0,
    date: "Week 10",
  },
];
// const CustomTooltip = ({TotalAmountSpent, Clicks, CPC, Impressions }) =>
//    {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`Total Amount Spent`}</p>
//           <p className="intro">{`Impressions`}</p>
//           <p className="desc">Anything you want can be displayed here.</p>
//         </div>
//       );
//     }

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          // right: 30,
          // left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis dataKey="TotalAmountSpent" />
        <Tooltip />
        <Line
          dataKey="TotalAmountSpent"
          type="monotone"
          name="Total Amount Spent"
          stroke="#FF5D5D"
          strokeWidth={3}
        />
        <Line
          dataKey="Impressions"
          type="monotone"
          name="Impressions"
          stroke="#77C5FD"
          strokeWidth={3}
        />
        <Line
          dataKey="Clicks"
          type="monotone"
          name="Clicks"
          stroke="#FFA800"
          strokeWidth={3}
        />
        <Line
          dataKey="CPC"
          type="monotone"
          name="CPC"
          stroke="#27AE60"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
