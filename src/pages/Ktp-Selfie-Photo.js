import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Text from "@mui/material/Typography";

import CloseIcon from "components/icons/Close";
import TakePhotoIcon from "components/icons/TakePhoto";
import FlipCamera from "components/icons/FlipCamera";

function KtpPhoto(props) {
  const [isTaken, setIsTaken] = React.useState(false);

  return (
    <Box sx={{ background: "rgb(0 0 0 / 77%)" }} minHeight="100vh">
      <Box px="5%">
        <Box display="flex" alignItems="center" gap={0.5} pt={1} mb={2.5}>
          <IconButton
            sx={{
              "& svg": {
                fontSize: "1.3rem",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box position="absolute" bottom="20vh">
          <Box display="flex" justifyContent="center">
            <Box
              width="45vw"
              height="30vh"
              bgcolor="#ffffff21"
              border="1px solid #fff"
              borderRadius="50%"
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              width="90vw"
              height="40vh"
              bgcolor="#ffffff21"
              border="1px solid #fff"
              marginBottom={3}
              borderRadius="50% 50% 0px 0px"
            />
          </Box>
        </Box>

        {!isTaken ? (
          <Box display="flex" justifyContent="center">
            <Box position="absolute" bottom="5vh">
              <IconButton
                size="large"
                sx={{ "& svg": { fontSize: "50px" } }}
                onClick={() => setIsTaken(true)}
              >
                <TakePhotoIcon />
              </IconButton>
            </Box>
            <Box position="absolute" bottom="7.5vh" right="10vw">
              <IconButton>
                <FlipCamera />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box display="flex" justifyContent="center">
            <Box position="absolute" bottom="5vh">
              <Box display="flex" justifyContent="center" gap={5}>
                <IconButton
                  size="large"
                  sx={{
                    "& img": { width: "30px" },
                    "&:hover": { bgcolor: "#fff" },
                    bgcolor: "#fff",
                  }}
                >
                  <img src="/image/rotate-left.png" alt="icon" />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    "& img": { width: "30px" },
                    "&:hover": { bgcolor: "#0F7FEB" },
                    bgcolor: "#0F7FEB",
                  }}
                >
                  <img src="/image/accept.png" alt="icon" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

KtpPhoto.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(KtpPhoto);
