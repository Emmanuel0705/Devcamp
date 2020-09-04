class Replacer {
  constructor(string) {
    this.text = string;
  }
  spaceReplacer() {
    return this.text.split(" ").join("%20");
  }
}
