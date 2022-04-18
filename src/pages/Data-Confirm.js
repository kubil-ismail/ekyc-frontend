import React from "react";
import { connect } from "react-redux";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import background from "assets/images/background.svg";
import { Button, IconButton, TextField } from "@mui/material";
import ArrowLeft from "components/icons/ArrowLeft";

function DataConfirm() {
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
          <Text sx={{ fontSize: "1rem", fontWeight: 300 }}>
            Konfirmasi Data
          </Text>
        </Box>

        <Box mb={1}>
          <Text fontWeight="500">
            Silahkan cek kembali data yang telah terisi di bawah dan pastikan
            sesuai dengan KTP.
          </Text>
        </Box>

        <Card variant="outlined" sx={{ borderRadius: "8px" }}>
          <CardContent>
            <Text>NIK</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Nama</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Tempat Lahir</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Tanggal Lahir</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Jenis Kelamin</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Alamat</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>RT/RW</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Kelurahan / Desa</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Kecamatan</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Agama</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Pekerjaan</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />

            <Text>Kewarganegaraan</Text>
            <TextField sx={{ mb: 2 }} variant="standard" required fullWidth />
          </CardContent>
        </Card>

        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "8px", mt: 2 }}
          fullWidth
        >
          Lanjut
        </Button>
      </Box>
    </Box>
  );
}

DataConfirm.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataConfirm);
