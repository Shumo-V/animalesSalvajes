class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    let _comentarios = comentarios;
    let _sonido = sonido;

    this.getNombre = () => _nombre;
    this.getEdad = () => _edad;
    this.getImg = () => _img;
    this.getComentarios = () => _comentarios;
    this.getSonido = () => _sonido;

    this.setNombre = (nuevoNombre) => (_nombre = nuevoNombre);
    this.setEdad = (nuevaEdad) => (_edad = nuevaEdad);
    this.setImg = (nuevaImg) => (_img = nuevaImg);
    this.setComentarios = (nuevoComentarios) =>
      (_comentarios = nuevoComentarios);
    this.setSonido = (nuevoSonido) => (_sonido = nuevoSonido);
  }

  // Getters
  get nombre() {
    return this.getNombre();
  }

  get edad() {
    return this.getEdad();
  }

  get img() {
    return this.getImg();
  }

  get comentarios() {
    return this.getComentarios();
  }

  get sonido() {
    return this.getSonido();
  }

  // Setters
  set nombre(nuevoNombre) {
    this.setNombre(nuevoNombre);
  }

  set edad(nuevaEdad) {
    this.setEdad(nuevaEdad);
  }

  set img(nuevaImg) {
    this.setImg(nuevaImg);
  }

  set comentarios(nuevoComentario) {
    this.setComentarios(nuevoComentario);
  }

  set sonido(nuevoSonido) {
    this.setSonido(nuevoSonido);
  }
}

export default Animal;
