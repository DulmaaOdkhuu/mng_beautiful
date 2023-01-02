import PropTypes from "prop-types";
import { m } from "framer-motion";
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

export default function Karma() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Box
        sx={{
          mb: 10,
          position: "relative",
          overflow: "hidden",
          height: "100%",
          maxHeight: "400px",
        }}
      >
        <Image
          src="https://minimal-assets-api-dev.vercel.app/assets/images/about/vision.jpg"
          alt="about-vision"
          effect="black-and-white"
        />

        <Box
          sx={{
            bottom: { xs: 24, md: 80 },
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            position: "absolute",
            justifyContent: "center",
          }}
        >
          <m.div variants={varFade().in}>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", color: "white" }}
            >
              Boho Beautiful Karma Projects
            </Typography>
          </m.div>
          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mx: "140px",
                color: "white",
                fontWeight: "fontWeightMedium",
              }}
            >
              We not only serve ourselves and our community members, but more
              importantly a higher cause. Boho Beautiful’s Karma Projects are an
              opportunity for the community to vote for and support causes that
              serve people, animals, or the Earth. and so much more.
            </Typography>
          </m.div>
        </Box>
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">
          {" "}
          <Iconify
            icon={"bi:check-circle"}
            width={32}
            height={32}
            sx={{ mr: 1 }}
          />
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
      </Box>
      {/* <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
          "&.MuiLinearProgress-determinate": { bgcolor: "divider" },
        }}
      /> */}
    </Box>
  );
}
