import { LitElement, html } from 'lit-element';

/**
 * Use this pattern instead.
 */
class MyOwnTemplate extends LitElement {
render(){
    return html`
    <div>
<p> This is a test</p>
    </div>
    `;
}
  
}

class MyOwnFont extends LitElement {
    render(){
        return html`
        <div>
    <p> This is a test</p>
        </div>
        `;
    }
      
    }
customElements.define('mo-t', MyOwnTemplate);
customElements.define('mo-f', MyOwnFont);
