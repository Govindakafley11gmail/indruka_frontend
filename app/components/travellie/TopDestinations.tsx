"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
const destinations = [
  {
    name: "Tokyo, Japan",
    percentage: 35,
    participants: "2,456",
    color: "#3b82f6",
  },
  {
    name: "Sydney, Australia",
    percentage: 28,
    participants: "2,456",
    color: "#93c5fd",
  },
  {
    name: "Paris, France",
    percentage: 22,
    participants: "2,456",
    color: "#bfdbfe",
  },
  {
    name: "Venice, Italy",
    percentage: 15,
    participants: "2,456",
    color: "#dbeafe",
  },
];

export function TopDestinations() {
  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-5">
        <CardTitle className="text-sm font-semibold text-gray-800">
          Top Destinations
        </CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-3 text-xs border-gray-200 rounded-lg gap-1 text-gray-600"
        >
          This Month <ChevronDown className="w-3 h-3" />
        </Button>
      </CardHeader>
      <CardContent className="px-5 pb-4">
        <div className="flex items-center gap-4">
          {/* Donut Chart */}
          <div className="w-32 h-32 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
  formatter={(value) => {
    if (value === undefined || value === null) return ["0%", "Share"]

    const v = Array.isArray(value) ? value[0] : value
    return [`${Number(v)}%`, "Share"]
  }}
/>
                <Pie
                  data={destinations}
                  cx="50%"
                  cy="50%"
                  innerRadius={38}
                  outerRadius={58}
                  paddingAngle={3}
                  dataKey="percentage"
                >
                  {destinations.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2.5 flex-1">
            {destinations.map((dest) => (
              <div key={dest.name} className="flex items-start gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0 mt-0.5"
                  style={{ backgroundColor: dest.color }}
                />
                <div>
                  <p className="text-xs font-medium text-gray-700 leading-tight">
                    {dest.name} ({dest.percentage}%)
                  </p>
                  <p className="text-xs text-gray-400">
                    {dest.participants} Participants
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
