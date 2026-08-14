export const formatDate = (value) => {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleString('en-PK', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return value;
  }
};
