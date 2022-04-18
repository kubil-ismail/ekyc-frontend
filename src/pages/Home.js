import React from "react";
import { connect } from "react-redux";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import background from "assets/images/background.svg";
import backdrop1 from "assets/images/backdrop-1.svg";
import { Button } from "@mui/material";

const stepList = ["Foto KTP", "Foto Wajah", "Foto KTP dan wajah"];

function Home() {
  return (
    <Box sx={{ overflowx: "hidden" }}>
      <Box
        sx={{
          backgroundImage: `url('${background}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        bgcolor="#F6F7F9"
        minHeight="100vh"
        p="5%"
      >
        <Text variant="h4" component="h1" gutterBottom>
          Selamat Datang
        </Text>
        <Text color="#676767" fontSize="12px">
          Layanan E-KYC membantu anda untuk memverifikasi diri dengan lebih
          mudah dan aman.
        </Text>

        <Box
          sx={{
            backgroundImage: `url('${backdrop1}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          display="flex"
          justifyContent="center"
          mb={2}
        >
          <img src={"/image/g10.png"} alt="vector" width="70%" />
        </Box>

        <Card variant="outlined" sx={{ mb: 4 }}>
          <CardContent sx={{ p: 3, pt: 3, pb: "10px !important" }}>
            <Text>
              Silahkan lakukan hal-hal di bawah untuk dapat menyelesaikan
              verifikasimu
            </Text>

            <Timeline sx={{ "& li:before": { display: "none" }, px: 0, pb: 0 }}>
              {stepList.map((item, index) => (
                <TimelineItem
                  key={`list-item-${++index}`}
                  sx={{
                    minHeight: stepList?.length - 1 !== index ? "60px" : "0px",
                  }}
                >
                  <TimelineSeparator>
                    {/* <TimelineConnector /> */}
                    <TimelineDot
                      variant="outlined"
                      sx={{
                        width: "15px",
                        height: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0px",
                      }}
                    >
                      <Text>{++index}</Text>
                    </TimelineDot>
                    {stepList?.length !== index ? <TimelineConnector /> : <></>}
                  </TimelineSeparator>
                  <TimelineContent sx={{ px: 2, py: 0 }}>
                    <Text variant="h6" sx={{ fontWeight: 500 }}>
                      {item}
                    </Text>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </CardContent>
        </Card>

        <Text align="center" color="#A9A9A9" fontSize="11px" sx={{ mb: 2 }}>
          Kami menjamin keamanan data dan privasi Pengguna.
        </Text>
        <Button variant="contained" color="primary" size="medium" fullWidth>
          Mulai Verifikasi
        </Button>
      </Box>
    </Box>
  );
}

Home.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
