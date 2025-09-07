import { Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const projects = [
  {
    title: "Kalido Demo",
    video: "/kalido_demo.mp4",
    description: "Showcasing opportunity management features built with React and Redux."
  },
  {
    title: "ContractPodAI Demo",
    video: "/ContractPodAi_demo.mp4",
    description: "Contract automation workflow built with Vue.js and Tailwind."
  }
];

const Experience = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#2f2f90", mb: 4 }}
      >
        My Work
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 }
              }}
            >
              <CardMedia
                component="video"
                controls
                src={project.video}
                sx={{
                  height: 250,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
