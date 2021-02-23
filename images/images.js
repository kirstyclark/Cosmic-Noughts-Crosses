export class Symbol {
  constructor(url) {
    this.url = url;
  }
  getEmbedCode() {
    return `<img class="animated__gif" src='${this.url}'></img>`;
  }
}

export const images = [
  {
    one: new Symbol('./images/1.1.webp'), 
    two: new Symbol('./images/1.2.webp')
  },
  // Round one
  {
    one: new Symbol('./images/1.1.webp'), 
    two: new Symbol('./images/1.2.webp')
  },
  // Round two
  {
    one: new Symbol('./images/2.1.webp'),
    two: new Symbol('./images/2.2.webp')
  },
  // Round three
  {
    one: new Symbol('./images/3.1.webp'),
    two: new Symbol('./images/3.2.webp')
  },
  // Round four
  {
    one: new Symbol('./images/4.1.webp'),
    two: new Symbol('./images/4.2.webp')
  },
  // Round five
  {
    one: new Symbol('./images/5.1.webp'),
    two: new Symbol('./images/5.2.webp')
  },
  // Round six
  {
    one: new Symbol('./images/6.1.webp'),
    two: new Symbol('./images/6.2.webp')
  },
  // Round seven
  {
    one: new Symbol('./images/7.1.webp'),
    two: new Symbol('./images/7.2.webp')
  },
  // Round eight
  {
    one: new Symbol('./images/8.1.webp'),
    two: new Symbol('./images/8.2.webp')
  },
  // Round nine
  {
    one: new Symbol('./images/9.1.webp'),
    two: new Symbol('./images/9.2.webp')
  },
  // Round ten
  {
    one: new Symbol('./images/10.1.gif'),
    two: new Symbol('./images/10.2.gif')
  },
  // Round elevan
  {
    one: new Symbol('./images/11.1.webp'),
    two: new Symbol('./images/11.2.webp')
  },
  // Round twelve
  {
    one: new Symbol('./images/12.1.gif'),
    two: new Symbol('./images/12.2.gif')
  },
  // Round thirteen
  {
    one: new Symbol('./images/13.1.gif'),
    two: new Symbol('./images/13.2.webp')
  }
];
