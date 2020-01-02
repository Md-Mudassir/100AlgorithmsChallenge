const addBorder = (picture: string[]): any => {
  let wall = '*'.repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  return picture;
};

console.log(addBorder(['abc', 'ded']));
