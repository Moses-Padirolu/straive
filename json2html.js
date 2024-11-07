export default function json2html(data) {
  const headers = Object.keys(data[0]);

  let table = `<table data-user="mosespadirolu007@gmail.com">
    <thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>
    <tbody>`;

  data.forEach(row => {
    table += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  });

  table += `</tbody></table>`;
  return table;
}
