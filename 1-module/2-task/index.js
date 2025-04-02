/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name === null) return false;
  let newName = name.trim();
  return newName !== "" && !newName.includes(" ") && newName.length >= 4;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
