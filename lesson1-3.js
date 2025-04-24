// stage 1
console.log('JAVASCRIPT'.toLowerCase());

// stage 2
let text = 'javascript';
console.log(`${text[0].toUpperCase()}${text.substring(1)}`);

//stage 3
const truncate = (str, maxLength) => {
  const dotes = '...';
  if (str.length > maxLength - dotes.length) {
    return `${str.substring(0, maxLength - dotes.length)}${dotes}`;
  }
  return str;
}
