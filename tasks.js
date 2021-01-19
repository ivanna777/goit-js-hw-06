import users from "./users.js";

// 1.

const getUserNames = users => {
    return users.map(user => user.name);
  };
  console.log(getUserNames(users));
  

  //2.

  const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); 

  //3.

  const getUsersWithGender = (users, gender) => {
      const userWithGender = users
      .filter(user => user.gender === gender)
      .map(user => user.name);
    return userWithGender;
  };
  
  console.log(getUsersWithGender(users, 'male'));

  //4. 

  const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
  };
  
  console.log(getInactiveUsers(users)); 

  //5. 

  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 

  //6.

  const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max)
  };
  
  console.log(getUsersWithAge(users, 20, 30));
  console.log(getUsersWithAge(users, 30, 40));

  //7.

  const calculateTotalBalance = users => {
    const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
    return totalBalance
  };
  
  console.log(calculateTotalBalance(users));

  //8.

  const getUsersWithFriend = (users, friendName) => {
      const usersWithFriends = users
      .filter(user => user.friends.includes(friendName))
      .map(user => user.name);

      return usersWithFriends;




    // const usersWithFriend = users
    // .filter(user => user.friends === friendName)
    // .map(user => user.name);
    // return usersWithFriend;
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


