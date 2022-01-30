const animales = (() => {
  const url = "/assets/json/animales.json";
  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      alert(error);
    }
  };
  return { getData };
})();

export default animales;
