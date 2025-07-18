$(document).ready(function () {
  $.getJSON("data-json/docentes.json", function (data) {
    $.each(data, function (i, docente) {
      $("#tabla-docentes tbody").append(`
        <tr>
          <td>${docente.dni}</td>
          <td>${docente.nombre}</td>
          <td>${docente.apellido}</td>
          <td>${docente.curso}</td>
        </tr>
      `);
    });
  });
});
