import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CategoryIcon from "@mui/icons-material/Category";

const ActiveUsers = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Active Users</Typography>
      <Typography variant="body2" color="text.secondary">
        (+23%) than last week
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {[
          {
            icon: GroupIcon,
            label: "Users",
            value: "36K",
          },
          {
            icon: AdsClickIcon,
            label: "Clicks",
            value: "2M",
          },
          {
            icon: ReceiptIcon,
            label: "Sales",
            value: "435$",
          },
          {
            icon: CategoryIcon,
            label: "Items",
            value: "43",
          },
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Grid item xs={3} key={index} >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    mr: 1,
                  }}
                />
                <IconComponent />
                <Typography variant="body2">{item.label}</Typography>
              </Box>
              <Typography variant="h6">{item.value}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </CardContent>
  </Card>
);

export default ActiveUsers;
