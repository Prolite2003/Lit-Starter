---
layout: page.11ty.cjs
title: <my-pet> ⌲ Home
---

# &lt;my-pet>

`<my-pet>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<my-pet>` is just an HTML element. You can it anywhere you can use HTML!

```html
<my-pet></my-pet>
```

  </div>
  <div>

<my-pet></my-pet>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<my-pet>` can be configured with attributed in plain HTML.

```html
<my-pet name="HTML"></my-pet>
```

  </div>
  <div>

<my-pet name="HTML"></my-pet>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<my-pet>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;my-pet&gt;</h2>
    <my-pet .name=${name}></my-pet>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;my-pet&gt;</h2>
<my-pet name="lit-html"></my-pet>

  </div>
</section>
