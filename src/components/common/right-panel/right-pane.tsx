import { Drawer } from '@mui/material';
import { useRightPane } from './context';
import { FC, useEffect } from 'react';

export const RightPane: FC = () => {
  const { close, width, Component, isOpen } = useRightPane();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById('drawer');
      if (drawer && !drawer.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Drawer
      id='drawer'
      anchor='right'
      open={isOpen}
      onClose={close}
      variant='persistent'
      sx={{
        flexShrink: 0,
        top: '64px', // Height of AppBar
        height: 'calc(100vh - 64px)', // Full height minus AppBar
        '& .MuiDrawer-paper': {
          width: '354px',
          border: 'none',
          filter: 'drop-shadow(0px 20px 40px rgba(172, 177, 182, 0.30))',
          overflow: 'visible',
          top: '64px', // Position below AppBar
          height: 'calc(100vh - 64px)', // Full height minus AppBar
        },
      }}
    >
      {Component}
    </Drawer>
  );
};
