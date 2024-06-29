// Sales Overview Component
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Card, CardContent } from "@mui/material";

const SalesOverview = () => {
  const value1 = [50, 150, 300, 220, 500, 250, 400];
  const value2 = [20, 80, 200, 250, 400, 300, 200];
  const xLabels = ["Apr", "May", "Jun", "July", "Aug", "Sep", "oct"];
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h6">Sales overview</Typography>
            <Typography variant="body2" color="success.main">
              (+4%) more in 2024
            </Typography>
          </Box>
        </Box>

        <LineChart
          width={500}
          height={300}
          series={[
            { data: value2, yAxisKey: "leftAxisId" },
            { data: value1, yAxisKey: "rightAxisId" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
          rightAxis="rightAxisId"
        />
      </CardContent>
    </Card>
  );
};

export default SalesOverview;
