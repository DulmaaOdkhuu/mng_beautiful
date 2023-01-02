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
import { _content } from "../../_mock";
// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import { MotionViewport, varFade } from "../../components/animate";

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

export default function AboutContent() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={3} sx={{ height: "100%" }}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={3} sx={{ pr: { md: 7 } }}>
              <m.div variants={varFade().inRight}>
                <Image
                  alt="our office 2"
                  src="/assets/illustrations/illustration_dashboard.png"
                  ratio="1/1"
                  sx={{ borderRadius: 2 }}
                />
              </m.div>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3, textAlign: "center" }}>
                More Than 1,000 Hours of Content!
              </Typography>
            </m.div>

            <Box
              sx={{
                my: 5,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {_content.map((progress) => (
                <m.div key={progress.label} variants={varFade().inLeft}>
                  <ProgressItem progress={progress} />
                </m.div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="our office 2"
                src="/assets/illustrations/illustration_dashboard.png"
                ratio="1/1"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
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
