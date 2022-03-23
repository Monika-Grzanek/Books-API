module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const arrayFullname = fullName.split(' ');
  if(arrayFullname.length !== 2 ) return 'Error';
  const [ firstName, lastName ] = arrayFullname;
  if(!firstName || !lastName) return false;
  return (firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()) ;
};
