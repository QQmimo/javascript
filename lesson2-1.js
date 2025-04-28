// stage 1
const user = {};

// stage 2
user.Name = 'John';

// stage 3
user.Surname = 'Smith';

// stage 4
user.Name = 'Pete';

// stage 5
delete user.name;

const isEmpty = (obj) => {
  return Object.keys(obj).length  === 0;
}
