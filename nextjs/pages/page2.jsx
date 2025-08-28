import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Chip
} from "@mui/material";

const rows = [
  {
    id: 1001,
    borrowerName: "Alice Johnson",
    borrowerEmail: "alice@example.com",
    bookTitle: "Clean Code",
    isbn: "9780132350884",
    borrowDate: "2025-08-01",
    dueDate: "2025-08-15",
    status: "On Time"
  },
  {
    id: 1002,
    borrowerName: "Bob Smith",
    borrowerEmail: "bob@example.com",
    bookTitle: "You Don't Know JS",
    isbn: "9781491904244",
    borrowDate: "2025-08-05",
    dueDate: "2025-08-10",
    status: "Overdue"
  },
  {
    id: 1003,
    borrowerName: "Carol Lee",
    borrowerEmail: "carol@example.com",
    bookTitle: "Designing Data-Intensive Applications",
    isbn: "9781449373320",
    borrowDate: "2025-08-10",
    dueDate: "2025-08-24",
    status: "On Time"
  }
];

export default function Page2() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Library — Borrow Records
      </Typography>

      <Paper elevation={1}>
        <Table aria-label="borrow-records">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Borrower</TableCell>
              <TableCell>Book</TableCell>
              <TableCell>Borrowed On</TableCell>
              <TableCell>Due On</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} hover>
                <TableCell>{r.id}</TableCell>
                <TableCell>
                  {r.borrowerName}
                  <br />
                  <Typography variant="caption" component="span">
                    {r.borrowerEmail}
                  </Typography>
                </TableCell>
                <TableCell>
                  {r.bookTitle}
                  <br />
                  <Typography variant="caption" component="span">
                    ISBN: {r.isbn}
                  </Typography>
                </TableCell>
                <TableCell>{r.borrowDate}</TableCell>
                <TableCell>{r.dueDate}</TableCell>
                <TableCell>
                  <Chip
                    label={r.status}
                    color={r.status === "Overdue" ? "error" : "success"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
