import * as components from "./components/export.js"
import data from "./components/data.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {

    data.forEach((user) => {
        this.shadowRoot.innerHTML = `
        <my-profile name=${this.name} species=${this.species} gender=${this.gender} house=${this.house} yearOfBirth=${this.yearOfBirth}></my-profile>
        `
    })


  }
}

customElements.define("app-container", AppContainer);