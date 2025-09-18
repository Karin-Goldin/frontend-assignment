import { Box, Typography, Divider } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import {
  BusinessVendor,
  IndependentVendor,
  VendorType,
} from '../../../services/vendors/types';
import { BusinessVendorDetails } from './business-vendor-details';
import { IndependentVendorDetails } from './independent-vendor-details';

type VendorDetailsProps = {
  vendor: BusinessVendor | IndependentVendor;
};

const getAddress = (vendor: BusinessVendor | IndependentVendor): string => {
  return vendor.address || '';
};

export const VendorDetails = ({ vendor }: VendorDetailsProps) => {
  const address = getAddress(vendor);

  return (
    <Box
      sx={{ padding: '24px', minHeight: '100%', backgroundColor: '#fafafa' }}
    >
      {/* Header with vendor name and icon */}
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}
      >
        {vendor.vendorType === VendorType.business ? (
          <ApartmentIcon sx={{ color: 'gray', fontSize: '24px' }} />
        ) : (
          <PersonIcon sx={{ color: 'gray', fontSize: '24px' }} />
        )}
        <Box>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 500,
              fontSize: '24px',
              marginLeft: '2px',
            }}
          >
            {vendor.vendor}
          </Typography>
        </Box>
      </Box>

      {/* Address */}
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{ marginBottom: 3 }}
      >
        {address}
      </Typography>

      <Divider sx={{ marginBottom: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {vendor.vendorType === VendorType.business ? (
          <BusinessVendorDetails vendor={vendor as BusinessVendor} />
        ) : (
          <IndependentVendorDetails vendor={vendor as IndependentVendor} />
        )}
      </Box>
    </Box>
  );
};
