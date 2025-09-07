import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import aditiImage from "./images/aditi.jpg";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import {Link} from  'react-router-dom'

const AboutMe = () => {
  const viewResume = () => {
    window.open("https://docs.google.com/document/d/1O9PVAN1AY-Ji4mMw99jI9FNHzrKUCnREQ8Vq1_JIvOE", "_blank");
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 8 },
          py: { xs: 6, md: 10 },
          color: "white",
        }}
      >
       
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "60%",
            background:
              "linear-gradient(270deg, #2f2f90, #6a5acd, #90caf9, #2f2f90)",
            backgroundSize: "800% 800%",
            animation: "moveGradient 20s ease infinite",
            zIndex: 0,
          }}
        />

        <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #ffffff, #b3e5fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              Hi, I’m Aditi Joshi
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "grey.200", fontWeight: 500, mb: 2 }}
            >
              Senior Frontend Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "white", maxWidth: "80%", lineHeight: 1.6 }}
            >
              6+ years building performant, scalable, and user-friendly
              applications with Vue, React, and modern web technologies.
            </Typography>

            <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center" }}>
              
                <Button
                to="/contact"
                  variant="outlined"
                  startIcon={<ArticleIcon />}
                  onClick={viewResume}
                  sx={{
                  backgroundColor: "white",
                  borderColor: "#0063cc",
                  color: "#0063cc",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  px: 3,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                  "&:hover": {
                    backgroundColor: "#0063cc",
                    color: "white",
                    transform: "scale(1.05)",
                    transition: "0.2s",
                  },
                }}
              >
                View Resume
              </Button>
              <Link to="/contact">
              <Button
                variant="contained"
                startIcon={<ContactPageIcon />}
                sx={{
                  borderRadius: "30px",
                  px: 3,
                  fontWeight: "bold",
                  boxShadow: "0px 6px 16px rgba(0,0,0,0.25)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "0.2s",
                  },
                }}
              >
                Contact Me
              </Button>
              </Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                p: 2,
                background:
                  "linear-gradient(135deg, #ffffff, #90caf9, #2f2f90)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              }}
            >
              <Avatar
                alt="Aditi Joshi"
                src={aditiImage}
                sx={{
                  width: 250,
                  height: 250,
                  border: "6px solid white",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.08) rotate(2deg)",
                    boxShadow: "0px 12px 30px rgba(0,0,0,0.4)",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <style>
          {`
            @keyframes moveGradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </Box>
    </Container>
  );
};

export default AboutMe;
