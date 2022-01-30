import Animales from "./data.js";

$("#animal").change(async () => {
  try {
    const { animales } = await Animales.getData();
    const especie = $("#animal").val();
    const imagenEspecie = animales.find((p) => p.name == especie).imagen;
    $("#preview").css(
      `background-image`,
      `url('/assets/img/${imagenEspecie}')`
    );
  } catch (error) {
    alert(error);
  }
});
