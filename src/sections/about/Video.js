import PropTypes from "prop-types";
import { m } from "framer-motion";
import ReactPlayer from "react-player";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  LinearProgress,
} from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// utils
import { fPercent } from "../../utils/formatNumber";
// _mock_
import { _community } from "../../_mock";
// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import { MotionViewport, varFade } from "../../components/animate";
import { he } from "date-fns/locale";
import { flexbox } from "@mui/system";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function Video() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <Box
      sx={{
        my: 5,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=v7AYKMP6rOE"
        width={1280}
        height={720}
      />
      <Typography variant="h4" sx={{ mb: 6, mt: 6, textAlign: "center" }}>
        Stream & Download the Entire Library of Videos & Classes Anywhere
        Anytime!
      </Typography>
    </Box>
  );
}

// ----------------------------------------------------------------------
