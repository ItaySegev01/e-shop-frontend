export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const getFilterUrl = (searchFromURI, filter, skipPathName) => {
  const searchParams = new URLSearchParams(searchFromURI);
  const category = searchParams.get('category') || 'all';
  const query = searchParams.get('query') || 'all';
  const price = searchParams.get('price') || 'all';
  const rating = searchParams.get('rating') || 'all';
  const order = searchParams.get('order') || 'newest';
  const page = searchParams.get('page') || 1;

  const filterPage = filter.page || page;
  const filterCategory = filter.category || category;
  const filterQuery = filter.query || query;
  const filterRating = filter.rating || rating;
  const filterPrice = filter.price || price;
  const sortOrder = filter.order || order;
  const link = `${
    skipPathName ? '' : '/search?'
  }category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  return link;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export const validatePassword = (password) => {
  if (!/\s/.test(password)){
    return true;
  }
  return false;
}

export const validatePostalCode = (postalCode) => {
  const pattern = /^\d{7}$/; 
  return pattern.test(postalCode);
}

export const validateString = (string) => {
  if (!/\s/.test(string)){
    return true;
  }
  return false;
}