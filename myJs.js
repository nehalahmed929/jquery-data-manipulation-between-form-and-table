var id = 1;

$(document).ready(function () {
  const formEmpty = () => {
    $(".name").val("");
    $(".age").val("");
    $(".city").val("");
    $(".id").val("");
    $(".update").prop("disabled", true);
  };
  formEmpty();
  $(".my-btn").click(function () {
    var name = $(".name").val();
    var age = $(".age").val();
    var city = $(".city").val();
    var gender = $('input[name="inlineRadioOptions"]:checked').val();

    console.log("clicked");

    $(".tbody").append(`{<tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>
        <button href="" class="edit mr-1 btn-primary btn-sm">
        Edit</button
      ><button href="" class="delete btn-danger btn-sm">
        Delete
      </button>
        </td>
      </tr>`);
  });

  $(".tbody").on("click", ".edit", function (e) {
    e.preventDefault();

    var row = $(this).parent().parent();

    var gender = row.find("td:eq(2)").text();

    var getG = $(`input[name=inlineRadioOptions][value=${gender}]`);
    getG.prop("checked", true);
    row.prop("id", id);

    $(".name").val(row.find("td:eq(0)").text());
    $(".age").val(row.find("td:eq(1)").text());
    $(".city").val(row.find("td:eq(3)").text());
    $(".id").val(id++);
    $(".update").prop("disabled", false);
    $(".reset").prop("disabled", false);
    $(".my-btn").prop("disabled", true);
  });

  $(".tbody").on("click", ".delete", function (e) {
    e.preventDefault();
    console.log("del clicked");
    var row = $(this).parent().parent();
    row.remove();
  });

  $(".update").on("click", function (e) {
    e.preventDefault();

    var name = $(".name").val();
    var age = $(".age").val();
    var city = $(".city").val();
    var id = $(".id").val();
    var gender = $('input[name="inlineRadioOptions"]:checked').val();

    var row = $(`#${id}`);
    row.find("td:eq(0)").text(name);
    row.find("td:eq(1)").text(age);
    row.find("td:eq(2)").text(gender);
    row.find("td:eq(3)").text(city);

    formEmpty();
    $(".my-btn").prop("disabled", false);
  });

  $(".reset").on("click", function () {
    formEmpty();
    $(".my-btn").prop("disabled", false);
  });
});
