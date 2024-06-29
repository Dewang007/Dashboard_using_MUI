import React from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";
import SalesOverview from "./SalesOverview";
import ActiveUsers from "./ActiveUsers";
import StatCard from "./StatCard";
import InfoCard from "./InfoCard";
import BarChart from "./BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Main Dashboard Component
const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Stat Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Today's Money"
            value="$53,000"
            change="+55%"
            icon=<AttachMoneyIcon />
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Today's Users"
            value="2,300"
            change="+3%"
            icon=<PeopleIcon />
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="New Clients"
            value="+3,462"
            change="-2%"
            icon=<BusinessCenterIcon />
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Sales"
            value="$103,430"
            change="+5%"
            icon=<ShoppingCartIcon />
          />
        </Grid>

        {/* Info Cards */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }}>
            <InfoCard
              title="Built by developers"
              subtitle="Soft UI Dashboard"
              description="From colors, cards, typography to complex elements, you will find the full documentation."
            />
            <CardMedia
              component="img"
              sx={{ width: 140 }}
              image="./rocket.png"
              alt="image here"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }}>
            <InfoCard
              title="Work with the rockets"
              subtitle="Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first."
              darkMode={true}
            />
            <CardMedia
              component="img"
              sx={{ width: 140 }}
              image="./rocket.png"
              alt="image here"
            />
          </Card>
        </Grid>

        {/* Active Users and Sales Overview */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BarChart borderRadius={10} />
            <ActiveUsers />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <SalesOverview />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
