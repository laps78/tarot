import { riderWaiteCollection } from '../../collections/riderWaiteCollection';

export default class Master {
  constructor(collection) {
    this.collection = collection;
    this.cards = collection.cards;
    this.used = [];
  }

  /**
   * this method mixes cards in random order
   */
  mixCards() {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  /**
   * throws the card out of active collection
   * @param {*} card is a card to throw out
   */
  throwCard(card) {
    this.cards.splice(this.cards.indexOf(card), 1);
    this.used.push(card);
  }

  /**
   * this method restores cards
   */
  restoreCards() {
    this.cards = this.collection.cards;
  }
}
