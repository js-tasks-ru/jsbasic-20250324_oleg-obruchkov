function highlight(table) {
  const bodyRows = table.tBodies[0];

  for (let i = 0; i < bodyRows.rows.length; i++) {
    const row = bodyRows.rows[i];
    const statusCell = row.cells[3];
    const status = statusCell.getAttribute("data-available");
    const genderCell = row.cells[2];
    const ageCell = row.cells[1];

    if (status === "true") {
      row.classList.add("available");
    } else if (status === "false") {
      row.classList.add("unavailable");
    } else {
      row.hidden = true;
    }

    row.classList.add(genderCell.textContent === "m" ? "male" : "female");

    if (Number(ageCell.textContent) < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
