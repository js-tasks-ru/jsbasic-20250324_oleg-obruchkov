function truncate(str, maxlength) {
  /*
  if (str.length <= maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "…";
  }
  */

  if (str.length <= maxlength) {
    return str;
  }

  return str.slice(0, maxlength - 1) + "…";
}
