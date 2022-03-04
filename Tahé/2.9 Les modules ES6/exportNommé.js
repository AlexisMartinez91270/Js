// export par défaut d'un objet nommé
const data = {
  data: 2,
  do() {
    console.log(this.data);
  },
};
// export
export default data;
