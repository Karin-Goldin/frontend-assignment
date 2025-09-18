import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode } from 'react';
import { RightPaneProvider } from '../common/right-panel/context';
import { RightPane } from '../common/right-panel';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => (
  <Box
    sx={{
      flexGrow: 1,
      backgroundColor: '#F5F5F5',
      minHeight: '100vh',
    }}
  >
    <RightPaneProvider>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Frontend Assignment
          </Typography>
        </Toolbar>
      </AppBar>
      <Box ml={8} mt={4}>
        {children}
      </Box>
      <RightPane />
    </RightPaneProvider>
  </Box>
);
