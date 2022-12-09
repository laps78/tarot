export default class Table {
  constructor(collection) {
    this.collection = collection;
    this.cards = collection.cards;
    this.used = [];
  }
}
