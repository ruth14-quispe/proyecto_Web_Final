$(document).ready(function () {
  $.getJSON("data-json/cursos.json", function (data) {
    $.each(data, function (i, curso) {
      $("#tabla-cursos tbody").append(`
        <tr>
          <td>${curso.id_curso}</td>
          <td>${curso.nombre}</td>
          <td>${curso.horas}</td>
        </tr>
      `);
    });
  });
});



