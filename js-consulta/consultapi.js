const token = "38b03c6f0470007df7139e7a080f00deec467e14857c251f923c1bcbbd0504b0";

// Función para consultar DNI
async function consultarDni(dni) {
  const response = await fetch("https://apiperu.dev/api/dni", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ dni })
  });
  return await response.json();
}

// Función para consultar RUC
async function consultarRuc(ruc) {
  const response = await fetch("https://apiperu.dev/api/ruc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ ruc })
  });
  return await response.json();
}

// Consulta por DNI
document.getElementById("formDni").addEventListener("submit", async e => {
  e.preventDefault();
  const dni = document.getElementById("dni").value.trim();
  if (dni.length !== 8 || isNaN(dni)) return alert("DNI inválido");

  const data = await consultarDni(dni);
  if (data.success) {
    const d = data.data;
    document.getElementById("resultadoDni").innerHTML = `
      <p><strong>DNI:</strong> ${d.numero}</p>
      <p><strong>Nombre Completo:</strong> ${d.nombre_completo}</p>
      <p><strong>Apellido Paterno:</strong> ${d.apellido_paterno}</p>
      <p><strong>Apellido Materno:</strong> ${d.apellido_materno}</p>
      <p><strong>Nombres:</strong> ${d.nombres}</p>
      <p><strong>Código de Verificación:</strong> ${d.codigo_verificacion}</p>
    `;
    document.getElementById("dniResultadoCard").style.display = "block";
  } else {
    alert("No se encontraron datos para el DNI ingresado");
  }
});

// Consulta por RUC
document.getElementById("formRuc").addEventListener("submit", async e => {
  e.preventDefault();
  const ruc = document.getElementById("ruc").value.trim();
  if (ruc.length !== 11 || isNaN(ruc)) return alert("RUC inválido");

  const data = await consultarRuc(ruc);
  if (data.success) {
    const d = data.data;
    document.getElementById("resultadoRuc").innerHTML = `
      <p><strong>RUC:</strong> ${d.ruc}</p>
      <p><strong>Razón Social:</strong> ${d.nombre_o_razon_social}</p>
      <p><strong>Estado:</strong> ${d.estado}</p>
      <p><strong>Condición:</strong> ${d.condicion}</p>
      <p><strong>Dirección:</strong> ${d.direccion_completa}</p>
      <p><strong>Departamento:</strong> ${d.departamento}</p>
      <p><strong>Provincia:</strong> ${d.provincia}</p>
      <p><strong>Distrito:</strong> ${d.distrito}</p>
      <p><strong>Buen Contribuyente:</strong> ${d.es_buen_contribuyente}</p>
      <p><strong>Agente de Retención:</strong> ${d.es_agente_de_retencion}</p>
    `;
    document.getElementById("rucResultadoCard").style.display = "block";
  } else {
    alert("No se encontraron datos para el RUC ingresado");
  }
});