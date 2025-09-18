import { Box, Typography, Chip } from '@mui/material';
import { IndependentVendor } from '../../../services/vendors/types';
import {
  formatDate,
  formatAmount,
  formatAccountStatus,
  getAccountStatusChipProps,
} from '../../../utils/formatters';

type IndependentVendorDetailsProps = {
  vendor: IndependentVendor;
};

export const IndependentVendorDetails = ({
  vendor,
}: IndependentVendorDetailsProps) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontWeight: 400, fontSize: '14px', letterSpacing: '1px' }}
          >
            AMOUNT:
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 500 }}>
            {formatAmount(vendor.amount)}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontWeight: 400, fontSize: '14px', letterSpacing: '1px' }}
          >
            DATE:
          </Typography>
          <Typography variant='body1'>{formatDate(vendor.date)}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontWeight: 400, fontSize: '14px', letterSpacing: '1px' }}
          >
            STATUS:
          </Typography>
          <Chip
            label={formatAccountStatus(vendor.accountStatus)}
            size='small'
            {...getAccountStatusChipProps(vendor.accountStatus)}
            sx={{ marginTop: 0.5 }}
          />
        </Box>
      </Box>

      <Box>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ fontWeight: 400, fontSize: '14px', letterSpacing: '1px' }}
        >
          COMMENT:
        </Typography>
        <Typography variant='body1' sx={{ marginTop: 0.5 }}>
          {vendor.comment}
        </Typography>
      </Box>

      <Box
        sx={{
          border: '1px solid rgba(156, 39, 176, 0.3)',
          borderRadius: 2,
        }}
      >
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            paddingTop: '12px',
            paddingLeft: '8px',
            letterSpacing: '1px',
          }}
        >
          PHONE NUMBER
        </Typography>
        <Box
          sx={{
            borderRadius: 1,
            padding: 1,
            marginTop: 0.5,
          }}
        >
          <Typography
            variant='body2'
            sx={{
              color: 'secondary.main',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
            }}
          >
            {vendor.phoneNumber}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
