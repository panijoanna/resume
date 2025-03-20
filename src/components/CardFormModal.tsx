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
    <Box className="space-y-4">
      <Button
        variant="contained"
        onClick={handleOpen}
        className="bg-blue-500 hover:bg-blue-700 text-white"
      >
        Add Application
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle className="text-xl font-semibold">
          Add new application
        </DialogTitle>
        <DialogContent>
          <Box className="space-y-4">
            <Box className="mb-4">
              <TextField label="Company" variant="outlined" fullWidth />
            </Box>
            <Box className="mb-4">
              <TextField label="Position" variant="outlined" fullWidth />
            </Box>
            <Box className="mb-4">
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
            <Box className="mb-4">
              <TextField label="Location" variant="outlined" fullWidth />
            </Box>
            <Box className="mb-4">
              <TextField
                label="Salary"
                type="number"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <TextField
                type="date"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <TextField
                label="Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            className="bg-blue-500 hover:bg-blue-700 text-white"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CardFormModal;
