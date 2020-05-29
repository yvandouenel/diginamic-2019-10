export default class Document {
  constructor(infos) {
    this.id = infos.id;
    this.name = infos.name;
    this.date = infos.date;
    this.source = infos.source;
    this.validity = infos.validity;
  }
  renderDocument = () => {
    console.log("dans drawDocument");
  };
}
