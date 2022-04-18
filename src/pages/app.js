import React, { memo } from "react";
import { connect } from "react-redux";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App(props) {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box bgcolor="#E9E9E9" padding={5}>
        <Text color="#7E7E7E">Logo Placeholder</Text>
      </Box>

      <Box
        position="absolute"
        bottom={10}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Text>E-KYC Powered by</Text>
        <img src="/image/logo-pcs.png" alt="logo" width="60px" />
      </Box>
    </Box>
  );
}

App.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
