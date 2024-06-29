import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
const InfoCard = ({ title, subtitle, description, image, darkMode }) => (
  <Card
    sx={{
      bgcolor: darkMode ? "primary.dark" : "background.paper",
      color: darkMode ? "white" : "text.primary",
    }}
  >
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {subtitle}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{ color: darkMode ? "white" : "primary.main" }}
      >
        Read More
      </Button>
    </CardContent>
    {image && (
      <CardMedia component="img" height="140" image={image} alt={title} />
    )}
  </Card>
);

export default InfoCard;
