function sumSalary(salaries) {
  let sum = 0,
    notNumberCount = 0;

  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      sum += salaries[key];
    } else {
      notNumberCount += 1;
    }
  }

  return notNumberCount !== Object.keys(salaries).length ? sum : 0;
}
