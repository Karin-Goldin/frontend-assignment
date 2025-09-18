import { AccountStatus } from '../services/vendors/types';

export const formatAccountStatus = (status: AccountStatus): string => {
  switch (status) {
    case AccountStatus.Active:
      return 'Active';
    case AccountStatus.Inactive:
      return 'Inactive';
    case AccountStatus.Pending:
      return 'Pending Approval';
    case AccountStatus.Suspended:
      return 'Suspended';
    default:
      return 'Unknown';
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

export const getAccountStatusChipProps = (status: AccountStatus) => {
  switch (status) {
    case AccountStatus.Active:
      return {
        color: 'default' as const,
        variant: 'filled' as const,
      };
    case AccountStatus.Inactive:
      return {
        color: 'default' as const,
        variant: 'outlined' as const,
      };
    case AccountStatus.Pending:
      return {
        color: 'secondary' as const,
        variant: 'filled' as const,
      };
    case AccountStatus.Suspended:
      return {
        color: 'warning' as const,
        variant: 'filled' as const,
      };
    default:
      return {
        color: 'default' as const,
        variant: 'outlined' as const,
      };
  }
};
