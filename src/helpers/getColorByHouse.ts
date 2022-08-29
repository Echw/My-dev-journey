export const getColorByHouse = (house: string): string => {
  switch (house) {
    case 'Gryffindor':
      return '#a20003';
    case 'Slytherin':
      return '#1A472A';
    case 'Hufflepuff':
      return '#FFD800';
    case 'Ravenclaw':
      return '#0E1A40';
    default:
      return '#afafaf';
  }
};
