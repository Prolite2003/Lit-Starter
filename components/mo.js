import { LitElement, html } from 'lit-element';

/**
 * Use this pattern instead.
 */
class MyOwnTemplate extends LitElement {
render(){
    return html`
    <style>
      p {
        border: solid 1px blue;
        padding: 8px;
      }
    </style>
    <div>
    <p> Test </p>
    </div>
    
    `;
}
  
}
customElements.define('mo-t', MyOwnTemplate);

class MyOwnFont extends LitElement {
    render(){
        return html`
    <link rel="stylesheet" href="../css/style.css">

        <div>
    <p> This is a test</p>
        </div>
        `;
    }
      
    }

customElements.define('mo-f', MyOwnFont);
