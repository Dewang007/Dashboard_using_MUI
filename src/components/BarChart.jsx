import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Stack from "@mui/material/Stack";

export default function BorderRadius() {
  const [layout, setLayout] = React.useState("vertical");
  const [radius, setRadius] = React.useState(10);

  return (
    <Stack direction="column" sx={{ width: "100%", maxWidth: 600 }}>
      <BarChart
        series={[{ dataKey: "low", layout, stack: "stack", color: "#ffffff" }]}
        {...(layout === "vertical" ? chartSettingsV : chartSettingsH)}
        borderRadius={radius}
        sx={{
          backgroundColor: "#262b49",
          borderRadius: 2
        }}
      />
    </Stack>
  );
}

const dataset = [
  [7, "First"],
  [5, "Second"],
  [10, "Third"],
  [6, "Fourth"],
  [2, "fifth"],
  [3, "sixth"],
  [8, "seventh"],
  [1, "eighth"],
  [10, "ninth"],
].map(([low, order]) => ({
  low,
  order,
}));
const chartSettingsH = {
  dataset,
  height: 220,
  width: 600,
  yAxis: [{ scaleType: "band" }],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
  slotProps: {
    legend: {
      direction: "row",
      position: { vertical: "bottom", horizontal: "middle" },
      padding: -5,
    },
  },
};
const chartSettingsV = {
  ...chartSettingsH,
  xAxis: [{ scaleType: "band", dataKey: "order" }],
  yAxis: undefined,
};
