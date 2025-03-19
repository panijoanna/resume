import {
  Button,
  DialogActions,
  FormControl,
  DialogContent,
  Dialog,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  DialogTitle,
  Box,
} from "@mui/material";
import { useState } from "react";

const CardFormModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Add Application
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add new application</DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <TextField label="Company" variant="outlined" fullWidth />
          </Box>
          <Box mb={2}>
            <TextField label="Position" variant="outlined" fullWidth />
          </Box>
          <Box mb={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="status-label">Status</InputLabel>
              <Select labelId="status-label" label="Status">
                <MenuItem value="applied">Applied</MenuItem>
                <MenuItem value="interview">Interview</MenuItem>
                <MenuItem value="offer">Offer</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={2}>
            <TextField label="Location" variant="outlined" fullWidth />
          </Box>
          <Box mb={2}>
            <TextField
              label="Salary"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField type="date" variant="outlined" fullWidth />
          </Box>
          <Box mb={2}>
            <TextField
              label="Notes"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CardFormModal;
