import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default function DialogBox({
  open,
  handleClose,
  dialogBody,
  dialogHeader,
  gifUrl,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
            maxWidth: 500,
            width: "90%",
            overflow: "hidden",
          },
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          background: "linear-gradient(135deg, #2f2f90, #6a5acd)",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          py: 2,
        }}
      >
        {dialogHeader}
      </DialogTitle>
      
      <DialogContent sx={{ textAlign: "center", px: 3, py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <img
            src={gifUrl}
            alt="dialog gif"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
              paddingTop: "10px",
            }}
          />
        </Box>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: "1rem", color: "text.secondary" }}
        >
          {dialogBody}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            borderRadius: "20px",
            px: 3,
            borderColor: "#2f2f90",
            color: "#2f2f90",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#2f2f90",
              color: "white",
            },
          }}
        >
          Disagree
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            borderRadius: "20px",
            px: 3,
            background: "linear-gradient(135deg, #2f2f90, #6a5acd)",
            fontWeight: "bold",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "0.2s",
            },
          }}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
