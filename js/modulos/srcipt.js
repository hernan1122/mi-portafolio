export default function form(input, name, mail, send) {
  const $input = document.getElementById(input),
    $name = document.getElementById(name),
    $mail = document.getElementById(mail),
    $send = document.getElementById(send);

  let fill = [];

  // funcion de formulario

  function fillForm() {
    const inputValue = $input.value;
    const nameValue = $name.value;
    const mailValue = $mail.value;
    $input.focus();

    if (
      inputValue === "" ||
      inputValue.length === 0 ||
      nameValue === "" ||
      nameValue.length === 0 ||
      mailValue === "" ||
      mailValue.length === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have not filled out the form!",
      });
    } else {
      Swal.fire("Good job!", "Data sent!", "success");
      fill.push(inputValue);
      $input.value = "";
      $name.value = "";
      $mail.value = "";
    }
    console.log("hola");
  }

  $send.addEventListener("click", () => {
    fillForm();
  });
}
