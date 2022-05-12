export const getFilter = state => state.filter.filter;

export const getFilteredContacts = (data, filter) => {
  return data.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter),
  );
};
