$(document).ready(function () {
  $.getJSON("data-json/alumnos.json", function (data) {
    $.each(data, function (i, alumno) {
      $("#tabla-alumnos tbody").append(`
        <tr>
          <td>${alumno.dni}</td>
          <td>${alumno.nombre}</td>
          <td>${alumno.apellido}</td>
          <td>${alumno.edad}</td>
        </tr>
      `);
    });
  });
});
