import { Box, Chip, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Table } from '../common/table/table';
import { useRightPane } from '../common/right-panel/context';
import { fetchVendors } from '../../services/vendors/api';
import {
  BusinessVendor,
  IndependentVendor,
  VendorType,
} from '../../services/vendors/types';
import {
  formatAccountStatus,
  formatDate,
  formatAmount,
  getAccountStatusChipProps,
} from '../../utils/formatters';
import { VendorDetails } from '../common/vendor-details/vendor-details';
import avatar1 from '../../assets/avatar-1.png';
import avatar2 from '../../assets/avatar-2.png';
import avatar3 from '../../assets/avatar-3.png';
import avatar4 from '../../assets/avatar-4.png';
import avatar5 from '../../assets/avatar-5.png';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const getAvatarForName = (name: string): string => {
  const index = name.length % avatars.length;
  return avatars[index];
};

export const VendorsPage = () => {
  const { open } = useRightPane();
  const [vendors, setVendors] = useState<
    (BusinessVendor | IndependentVendor)[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVendors = async () => {
      try {
        const data = await fetchVendors();
        setVendors(data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVendors();
  }, []);

  if (loading) {
    return <Box>Loading vendors...</Box>;
  }

  return (
    <Box
      sx={{
        padding: '24px 12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          maxWidth: '95vw',
          marginLeft: '-36px',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 600,
            fontSize: '34px',
            lineHeight: '124%',
            letterSpacing: '0.25px',
            color: 'rgba(0, 0, 0, 0.87)',
            marginBottom: '40px',
            paddingLeft: '4px',
          }}
        >
          Business Checking
        </Typography>
        <Table
          itemIdentifier='name'
          columns={['name', 'date', 'vendor', 'accountStatus', 'amount']}
          items={vendors}
          onRowClick={(vendor) => open(<VendorDetails vendor={vendor} />)}
          headCell={{
            render: (column) => {
              const columnLabels: { [key: string]: string } = {
                name: 'Name',
                date: 'Date',
                vendor: 'Vendor',
                accountStatus: 'Account status',
                amount: 'Amount',
              };

              if (column === 'name') {
                return (
                  <Box sx={{ paddingLeft: '24px' }}>{columnLabels[column]}</Box>
                );
              }

              return columnLabels[column] || column;
            },
            props: {
              sx: {
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '0.17px',
                fontFamily: 'Roboto, sans-serif',
              },
            },
          }}
          bodyCell={{
            render: (row, column) => {
              switch (column) {
                case 'name':
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        paddingLeft: '24px',
                        marginRight: '-50px',
                      }}
                    >
                      <Avatar
                        src={getAvatarForName(row.name)}
                        alt={row.name}
                        sx={{ width: 32, height: 32 }}
                      />
                      {row.name}
                    </Box>
                  );
                case 'date':
                  return formatDate(row.date);
                case 'vendor':
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        marginRight: '25px',
                      }}
                    >
                      {row.vendorType === VendorType.business ? (
                        <ApartmentIcon
                          sx={{ color: 'gray', fontSize: '24px' }}
                        />
                      ) : (
                        <PersonIcon sx={{ color: 'gray', fontSize: '24px' }} />
                      )}
                      {row.vendor}
                    </Box>
                  );
                case 'accountStatus':
                  return (
                    <Box sx={{ marginRight: '50px' }}>
                      <Chip
                        label={formatAccountStatus(row.accountStatus)}
                        size='medium'
                        {...getAccountStatusChipProps(row.accountStatus)}
                      />
                    </Box>
                  );
                case 'amount':
                  return (
                    <Box sx={{ marginRight: '100px' }}>
                      {formatAmount(row.amount)}
                    </Box>
                  );
                default:
                  return row[column as keyof typeof row];
              }
            },
          }}
        />
      </Box>
    </Box>
  );
};
