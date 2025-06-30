import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <AccountBalanceWalletIcon sx={{ mr: 1 }}></AccountBalanceWalletIcon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              mr: 2,
              letterSpacing: ".3rem",
            }}
          >
            Expense Tracker
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
