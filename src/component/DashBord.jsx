import { Container, TextField } from "@mui/material";
import { Inputs } from "./Inputs";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { TableUser } from "./TableUser";




export const DashBord = () => {
  return (
    <Container maxWidth={false} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <nav style={{ display: 'flex', alignItems: 'center', padding: '1rem', justifyContent: 'center' }}>
      <ContactMailIcon sx={{ color: 'black', fontSize: 30 }} />
        <h1>User Management System</h1>
    
      </nav>
<Inputs/>
<TableUser/>
    </Container>
  );
};
