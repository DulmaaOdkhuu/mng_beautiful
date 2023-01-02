// @mui
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
// sections
import {
  AboutHero,
  AboutWhat,
  Tools,
  AboutCommunity,
  AboutTeam,
  AboutVision,
  Karma,
  Video,
  AboutContent,
  AboutTestimonials,
  SocialButtons,
} from "../sections/about";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="HomePage">
      <RootStyle>
        <AboutHero />
        <Video />
        <AboutWhat />
        <Tools />
        <AboutCommunity />
        <Karma />
        <AboutContent />
        <AboutContent />
        {/* <AboutVision /> */}
        {/* <Divider
          orientation="vertical"
          sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
        /> */}
        <AboutTeam />
        <Tools />
        <AboutTestimonials />
        <SocialButtons />
      </RootStyle>
    </Page>
  );
}
