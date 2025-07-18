$(document).ready(function () {
  $.getJSON("data-json/iestp.json", function (data) {
    $("#institucion").text(data.institucion);
    $("#pc").text("PRACTICA CALIFICADA: " + data.practica_calificada);
    $("#alumno").text("ALUMNO: " + data.alumno);
    $("#ud").text("UD: " + data.ud);
  });
});
