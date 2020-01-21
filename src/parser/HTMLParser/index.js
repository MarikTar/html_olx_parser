const parser = new DOMParser();

export default class HTMLParser {
  constructor(url, proxy) {
    this.PROXY = proxy || '';
    this.URL = url || '';
    this.elmArr = [];
  }

  async getHTML(url = this.URL) {
    const proxyUrl = this.PROXY + url;
    if (!proxyUrl) {
      return '';
    }
    const data = await fetch(proxyUrl);
    const res = await data.json();
    const { body } = res;
    return body;
  }

  async parseHTML(param = 'body', url = this.URL) {
    const HTMLText = await this.getHTML(url);
    const HTMLElement = parser.parseFromString(HTMLText, 'text/html');
    return HTMLElement.querySelectorAll(param);
  }
}
