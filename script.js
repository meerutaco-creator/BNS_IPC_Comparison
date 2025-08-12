const comparisonData = [
  {
    bns_section: "BNS 101",
    bns_desc: "Punishment for murder",
    ipc_section: "IPC 302",
    ipc_desc: "Punishment for murder"
  },
  {
    bns_section: "BNS 102",
    bns_desc: "Attempt to murder",
    ipc_section: "IPC 307",
    ipc_desc: "Attempt to murder"
  },
];

function renderTable(data) {
  const tbody = document.querySelector('#comparison-table tbody');
  tbody.innerHTML = '';
  data.forEach(row => {
    tbody.innerHTML += `
      <tr>
        <td>${row.bns_section}</td>
        <td>${row.bns_desc}</td>
        <td>${row.ipc_section}</td>
        <td>${row.ipc_desc}</td>
      </tr>
    `;
  });
}

renderTable(comparisonData);

// Search functionality
document.getElementById('search').addEventListener('input', function() {
  const val = this.value.toLowerCase();
  const filtered = comparisonData.filter(row =>
    row.bns_section.toLowerCase().includes(val) ||
    row.bns_desc.toLowerCase().includes(val) ||
    row.ipc_section.toLowerCase().includes(val) ||
    row.ipc_desc.toLowerCase().includes(val)
  );
  renderTable(filtered);
});