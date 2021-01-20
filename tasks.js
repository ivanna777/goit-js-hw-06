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
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker'));
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); 


  // 9.

  const getNamesSortedByFriendsCount = users => {
    const sortedName = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
    return sortedName;
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  
  //10. 

  const getSortedUniqueSkills = users => {
    return users
    .reduce((allSkills, user) => {
      const skills = user.skills.filter(skill => !allSkills.includes(skill));

      return [...allSkills, ...skills];
    }, [])
    .sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


  



