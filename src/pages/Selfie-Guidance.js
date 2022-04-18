import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Text from "@mui/material/Typography";
import Card from "@mui/material/Card";

import background from "assets/images/background-2.svg";
import ArrowLeft from "components/icons/ArrowLeft";
import { Button, CardContent, Alert } from "@mui/material";

function SelfiGuidance(props) {
  const [isError, setIsError] = React.useState(false);

  return (
    <Box
      sx={{
        backgroundImage: `url('${background}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        overflow: "hidden",
      }}
      bgcolor="#F6F7F9"
      minHeight="100vh"
    >
      <Box px="5%">
        <Box display="flex" alignItems="center" gap={0.5} pt={1} mb={2.5}>
          <IconButton
            sx={{
              "& svg": {
                fontSize: "1.3rem",
              },
            }}
          >
            <ArrowLeft />
          </IconButton>
          <Text sx={{ fontSize: "1rem", fontWeight: 300 }}>Foto Diri</Text>
        </Box>

        <Box display="flex" justifyContent="center" mb={2}>
          <img src={"/image/profile.png"} alt="vector" width="40%" />
        </Box>

        <Box mt={3} mb={2}>
          {isError && (
            <Alert severity="error" onClose={() => {}} sx={{ mb: 2 }}>
              Foto KTP blur / tidak fokus. Mohon untuk mengambil foto ulang.
            </Alert>
          )}
          <Text variant="h5" gutterBottom>
            Foto Diri
          </Text>
          <Text color="#676767" variant="body2">
            Ikuti panduan di bawah ini agar verifikasimu berhasil.
          </Text>
        </Box>

        <Card variant="outlined">
          <CardContent sx={{ p: 2, px: 4, pb: "10px !important" }}>
            <Box
              component="ul"
              sx={{
                margin: 0,
                padding: 0,
                "& li": {
                  mb: 1,
                  color: "#676767",
                },
              }}
            >
              {[
                "Tidak memakai aksesoris yang menutupi wajah seperti kacamata & masker.",
                "Pastikan wajahmu terlihat jelas.",
                "Pastikan foto memiliki penerangan yang baik.",
              ].map((item, index) => (
                <Text component="li" key={`item-list-${index}`}>
                  {item}
                </Text>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Box position="absolute" bottom="3vh" width="90%">
          <Button variant="contained" color="primary" size="medium" fullWidth>
            Ambil Foto
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

SelfiGuidance.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SelfiGuidance);
