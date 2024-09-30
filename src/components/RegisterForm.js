import { Grid, TextField, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const RegisterForm = ({ formValues, handleChange, formErrors }) => (
  <Grid container component="form">
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Your Name"
        name="name"
        value={formValues?.name}
        onChange={handleChange}
        error={!!formErrors.name}
        helperText={formErrors.name}
        margin="normal"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formValues?.email}
        onChange={handleChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
        margin="normal"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formValues?.password}
        onChange={handleChange}
        error={!!formErrors.password}
        helperText={formErrors.password}
        margin="normal"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Repeat your password"
        name="confirmPassword"
        type="password"
        value={formValues?.confirmPassword}
        onChange={handleChange}
        error={!!formErrors.confirmPassword}
        helperText={formErrors.confirmPassword}
        margin="normal"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  </Grid>
);

export default RegisterForm;
