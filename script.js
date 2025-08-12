const comparisonData = [
      "ipc_section": "506",
    "ipc_description": "अपराहिक ऄहभरास",
    "bns_section": "351 (2)",
    "bns_description": "अपराहिक ऄहभरास का दण्ड “ असंज्ञे य, जमानतीय, 0 2 वषण सजा ”"
  },
  {
    "chapter": "Offenses Relating to Criminal Intimidation, Insult, Defamation",
    "ipc_section": "506",
    "ipc_description": "अपराहिक ऄहभरास",
    "bns_section": "351 (3)",
    "bns_description": "िमकी यदी मृत् यु या घोर ईपहहत की है तो दण् ड “ असंज्ञे य, जमानतीय, 07 वषण सजा ”"
  },
  {
    "chapter": "Offenses Relating to Criminal Intimidation, Insult, Defamation",
    "ipc_section": "507",
    "ipc_description": "ऄनाम संसूिना द्व ारा अपराहिक ऄहभरास",
    "bns_section": "351 (4)",
    "bns_description": "ऄनाम संसूिना द्व ारा अपराहिक ऄहभरास का दण् ड “ असंज्ञे य, जमानतीय, 0 2 वषण सजा ”"
  },
  {
    "chapter": "Offenses Relating to Criminal Intimidation, Insult, Defamation",
    "ipc_section": "504",
    "ipc_description": "ऄपमाहनत करने के अश्य से ऄपशब्द",
    "bns_section": "352",
    "bns_description": "ऄपमाहनत करने के अश्य से ऄपशब्द का दण्ड “ असंज्ञे य, जमानतीय, 0 2 वषण सजा ”"
  },
  {
    "chapter": "Offenses Relating to Criminal Intimidation, Insult, Defamation",
    "ipc_section": "500",
    "ipc_description": "मानहाहन",
    "bns_section": "356 (2)",
    "bns_description": "मानहाहन का दण्ड “ असंज्ञे य, जमानतीय, 0 2 वषण सजा ”"
  }
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
