function showSalary(users, age) {
  let result = [];
  for (const user of users) {
    if (user.age <= age) {
      result.push(user.name + ", " + user.balance);
    }
  }
  return result.join("\n");
}
