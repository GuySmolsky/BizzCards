import React from "react";
import {
  Typography,
  Box,
  Grid,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import Language from "@mui/icons-material/Language";
import LocationOn from "@mui/icons-material/LocationOn";

const CardDetailsContent = ({ card }) => {
  const getAddressString = () => {
    const address = card.address;
    if (!address) return "";

    const parts = [];
    if (address.street && address.houseNumber) {
      parts.push(`${address.street} ${address.houseNumber}`);
    }
    if (address.city) parts.push(address.city);
    if (address.state) parts.push(address.state);
    if (address.country) parts.push(address.country);

    return parts.join(", ");
  };
  const getStaticMapUrl = () => {
    const addressString = getAddressString();
    if (!addressString) return "";
    const encodedAddress = encodeURIComponent(addressString);
    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=15&size=400x300&markers=color:red%7C${encodedAddress}&key=MY_API_KEY`;
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <Phone />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1" fontWeight="500">
                    {card.phone}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <Email />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="500"
                    sx={{ wordBreak: "break-word" }}
                  >
                    {card.email}
                  </Typography>
                </Box>
              </Box>
              {card.web && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    <Language />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Website
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      component="a"
                      href={card.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {card.web}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Location
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <LocationOn />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Address
                </Typography>
                <Typography variant="body1" fontWeight="500">
                  {card.address?.street} {card.address?.houseNumber}
                  <br />
                  {card.address?.city}
                  {card.address?.state && `, ${card.address.state}`}
                  {card.address?.zip && ` ${card.address.zip}`}
                  <br />
                  {card.address?.country}
                </Typography>
              </Box>
            </Box>
            {getAddressString() && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Map Location
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                    position: "relative",
                  }}
                >
                  <img
                    src={getStaticMapUrl()}
                    alt="Business Location Map"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <Box
                    sx={{
                      display: "none",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "grey.100",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <LocationOn sx={{ fontSize: 40, color: "primary.main" }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                    >
                      {getAddressString()}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      component="a"
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(
                        getAddressString()
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      View on Google Maps
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default CardDetailsContent;
