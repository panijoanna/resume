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

interface CardFormModalProps {
  addNewJobCards: (
    company: string,
    position: string,
    status: string,
    location: string,
    salary: number,
    date: string,
    notes: string
  ) => void;
}

const CardFormModal = ({ addNewJobCards }: CardFormModalProps) => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [salary, setSalary] = useState<number | "">("");
  const [date, setDate] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnSubmit = () => {
    addNewJobCards(
      company,
      position,
      status,
      location,
      salary as number,
      date,
      notes
    );
    setCompany("");
    setPosition("");
    setStatus("");
    setLocation("");
    setSalary("");
    setDate("");
    setNotes("");
    handleClose();
  };

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
              <TextField
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                margin="dense"
                label="Company"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <TextField
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                label="Position"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <FormControl fullWidth variant="outlined">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  labelId="status-label"
                  label="Status"
                >
                  <MenuItem value="applied">Applied</MenuItem>
                  <MenuItem value="interview">Interview</MenuItem>
                  <MenuItem value="offer">Offer</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="mb-4">
              <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Location"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <TextField
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                label="Salary"
                type="number"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <TextField
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box className="mb-4">
              <TextField
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
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
            onClick={handleOnSubmit}
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
