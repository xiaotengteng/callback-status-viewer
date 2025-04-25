fetch('data/callback.json')
  .then(response => response.json())
  .then(data => {
    const table = document.querySelector('#callbackTable tbody');
    data.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.payid}</td>
        <td>${row.client_id}</td>
        <td>${row.operator_ref}</td>
        <td>${row.status}</td>
        <td>${row.timestamp}</td>
      `;
      table.appendChild(tr);
    });
  });
