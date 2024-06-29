// Stat Card Component
import { Box, Typography, Card, CardContent } from "@mui/material";
const StatCard = ({ title, value, change, icon }) => (
  <Card>
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5">{value}</Typography>

        <Typography
          variant="body2"
          color={change.startsWith("+") ? "success.main" : "error.main"}
        >
          {change}
        </Typography>
      </Box>
      <Box
        sx={{ bgcolor: "primary.main", borderRadius: 2, p: 1, color: "white" }}
      >
        {icon}
      </Box>
    </CardContent>
  </Card>
);

export default StatCard;
