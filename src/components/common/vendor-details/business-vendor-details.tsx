import { Box, Typography, Chip } from '@mui/material';
import { BusinessVendor } from '../../../services/vendors/types';
import {
  formatDate,
  formatAmount,
  formatAccountStatus,
  getAccountStatusChipProps,
} from '../../../utils/formatters';

type BusinessVendorDetailsProps = {
  vendor: BusinessVendor;
};

export const BusinessVendorDetails = ({
  vendor,
}: BusinessVendorDetailsProps) => {
  return (
    <>
      {/* Amount and Date in row */}
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

      {/* Status and Exchange Rate in row */}
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
            size='medium'
            {...getAccountStatusChipProps(vendor.accountStatus)}
            sx={{ marginTop: 0.5 }}
          />
        </Box>
        {vendor.exchangeRate && (
          <Box>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                letterSpacing: '1px',
              }}
            >
              EXCHANGE RATE:
            </Typography>
            <Typography variant='body1'>
              $1=€{vendor.exchangeRate.to.value.toFixed(4)}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Account Number */}
      {vendor.accountNumber && (
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
            ACCOUNT NUMBER
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
              {vendor.accountNumber}
            </Typography>
          </Box>
        </Box>
      )}

      {/* Paid By */}
      {vendor.paidBy && (
        <Box>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: '1px',
              paddingBottom: '12px',
            }}
          >
            PAID BY:
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontWeight: 400,
              fontSize: '18px',
              letterSpacing: '0.15px',
            }}
          >
            {vendor.paidBy}
          </Typography>
        </Box>
      )}

      {/* Payments */}
      <Box>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ fontWeight: 400, fontSize: '14px', letterSpacing: '1px' }}
        >
          PAYMENTS:
        </Typography>
        <Typography variant='body1' sx={{ paddingTop: '12px' }}>
          {/* added missing data */}3 out of 4
        </Typography>
      </Box>
    </>
  );
};
