import { m } from "framer-motion";
// @mui
import { Stack, Container, Typography } from "@mui/material";
// _mock_
import { _carouselsMembers } from "../../_mock";
// components
import SocialsButton from "../../components/SocialsButton";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

export default function SocialButtons() {
  return (
    <Container component={MotionViewport} sx={{ pb: 10, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ mb: 6, mt: 6, textAlign: "center", color: "#FCBB46" }}
      >
        Your decisions today will define your tomorrow.
      </Typography>
      <m.div variants={varFade().inDown}>
        <Stack alignItems="center" sx={{ mt: 8, mb: 1 }}>
          <SocialsButton sx={{ color: "action.active" }} />
        </Stack>
      </m.div>
    </Container>
  );
}
