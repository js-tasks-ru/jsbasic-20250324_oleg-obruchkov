/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement("table");
    this.createHeader();
    this.createBody();
    this.renderRows();
    this.initEvents();
  }

  createHeader() {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    const headers = ["Имя", "Возраст", "Зарплата", "Город", ""];

    headers.forEach((item) => {
      const th = document.createElement("th");
      th.textContent = item;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    this.elem.appendChild(thead);
  }

  createBody() {
    const tbody = document.createElement("tbody");
    this.tbody = tbody;
    this.elem.appendChild(tbody);
  }

  createRow(user) {
    const fields = ["name", "age", "salary", "city"];
    const tr = document.createElement("tr");

    fields.forEach((field) => {
      const td = document.createElement("td");
      td.textContent = user[field];
      tr.appendChild(td);
    });

    const td = document.createElement("td");
    const btn = document.createElement("button");

    btn.textContent = "X";
    td.appendChild(btn);
    tr.appendChild(td);
    return tr;
  }

  renderRows() {
    this.rows.forEach((user) => {
      this.tbody.appendChild(this.createRow(user));
    });
  }

  initEvents() {
    this.tbody.addEventListener("click", (event) => {
      if (event.target.tagName !== "BUTTON") return;
      const row = event.target.closest("tr");
      row.remove();
    });
  }
}
