import { LitElement, html, css } from 'lit-element';

// import './wj-add-todo.js';
// import './wj-todo-list.js';
// import './wj-footer.js';

class sampleHttp extends LitElement {
  static styles = css`p { color: blue; }`;

  static get properties() {
    return {
      posts: { type: Array }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      this.posts = json;
      console.log(json);
    });
  }
  
  render() {
    return html`
      <div class="container">
        <ul>
          ${this.posts ? this.posts.map(post => html`<li>${post.title}</li>`) : html`loading`}
        </ul>
      </div>
    `;
  }
}

customElements.define('sample-http', sampleHttp);