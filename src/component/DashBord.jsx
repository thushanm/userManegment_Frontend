import { Container, TextField } from "@mui/material";
import { Inputs } from "./Inputs";


export const DashBord = () => {
  return (
    <Container maxWidth={false} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <nav style={{ display: 'flex', alignItems: 'center', padding: '1rem', justifyContent: 'center' }}>
        <img src="/src/assets/images (2).png" alt="LOGO" style={{ width: '10%' }} />
        <h1>User Management System</h1>
      </nav>
<Inputs/>
    </Container>
  );
};
