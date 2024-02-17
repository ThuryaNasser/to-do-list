import { Box, CircularProgress } from '@mui/material';

const SuspenseLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress />
  </Box>
);

export default SuspenseLoader;
