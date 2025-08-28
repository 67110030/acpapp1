import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
  Grid
} from "@mui/material";


export default function Page1_1() {
  // State for all form fields
  const [formData, setFormData] = useState({
    borrowerName: "",
    borrowerEmail: "",
    bookTitle: "",
    isbn: "",
    borrowDate: "",
    dueDate: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

    // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      [
        "Borrow Transaction Submitted:",
        `Borrower: ${formData.borrowerName} (${formData.borrowerEmail})`,
        `Book: ${formData.bookTitle} [ISBN: ${formData.isbn}]`,
        `Borrow Date: ${formData.borrowDate}`,
        `Due Date: ${formData.dueDate}`
      ].join("\\n")
    );
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Library — Borrow Book
      </Typography>

      {/* Form for borrow transaction */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            {/* Borrower Name */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Borrower Name"
                name="borrowerName"
                value={formData.borrowerName}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>

            {/* Borrower Email */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Borrower Email"
                type="email"
                name="borrowerEmail"
                value={formData.borrowerEmail}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>

            {/* Book Title */}
            <Grid item xs={12} md={8}>
              <TextField
                label="Book Title"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>

            {/* ISBN */}
            <Grid item xs={12} md={4}>
              <TextField
                label="ISBN"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>

            {/* Borrow Date */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Borrow Date"
                type="date"
                name="borrowDate"
                value={formData.borrowDate}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>

            {/* Due Date */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Due Date"
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Submit Borrow
          </Button>
        </Stack>
      </form>
    </Container>
  );

}
