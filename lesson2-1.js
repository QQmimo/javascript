// stage 1
const user = {};

// stage 2
user.name = 'John';

// stage 3
user.surname = 'Smith';

// stage 4
user.name = 'Pete';

// stage 5
delete user.name;

const isEmpty = (obj) => {
  return Object.keys(obj).length  === 0;
}
