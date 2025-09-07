import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const Skills = ({ skills, deleteSkill, addSkill }) => {
  return (
    <Container maxWidth={false} sx={{ py: 6, textAlign: "center", pt:0 }}>

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#2f2f90", mb: 2 }}
      >
        Skills & Technologies
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Tools I use to build performant, scalable, and user-friendly applications.
      </Typography>

  
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            onDelete={() => deleteSkill(skill)}
            sx={{
              fontSize: "0.9rem",
              px: 2,
              py: 1,
              borderRadius: "20px",
              bgcolor: "primary.light",
              color: "white",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "primary.main",
                transform: "scale(1.05)",
                transition: "0.2s"
              }
            }}
          />
        ))}
        <Chip
          icon={<AddIcon />}
          label="Add Skill"
          onClick={addSkill}
          sx={{
            fontSize: "0.9rem",
            px: 2,
            py: 1,
            borderRadius: "20px",
            border: "2px dashed #2f2f90",
            color: "#2f2f90",
            "&:hover": {
              bgcolor: "#e8eaf6",
              transform: "scale(1.05)",
              transition: "0.2s"
            }
          }}
        />
      </Stack>
    </Container>
  );
};

export default Skills;
