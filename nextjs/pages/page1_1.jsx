import { useState } from "react";
import { Container, Typography, Button, Stack } from "@mui/material";

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Typography variant="h5">Counter with Increment & Decrement</Typography>
      <Typography sx={{ my: 2 }}>Count: {count}</Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>

        <Button variant="outlined"
          color="secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </Stack>
    </Container>
  );
}
