const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["+", "-", "X", "=", "/"];
let output = "";

// Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=") {
    // Jika tombol "=" ditekan, lakukan perhitungan.
    try {
      output = eval(output.replace("X", "*")); // Ubah "X" menjadi "*" agar sesuai dengan operator perkalian.
      if (isNaN(output) || !isFinite(output)) {
        // Tambahkan penanganan kesalahan jika hasilnya bukan angka atau tak hingga.
        output = "Error";
      }
    } catch {
      output = "Error";
    }
  } else if (btnValue === "C") {
    // Jika tombol "C" ditekan, hapus semua.
    output = "";
  } else {
    // Jika tombol angka atau operator ditekan, tambahkan ke output.
    output += btnValue;
  }
  display.value = output;
};

// Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
