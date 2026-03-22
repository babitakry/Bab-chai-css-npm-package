# ☕ Bab Chai CSS

A lightweight **utility-first CSS engine** built using JavaScript.

Instead of writing traditional CSS, you can use simple class names like:

`chai-p-20`, `chai-bg-blue`, `chai-text-white`

Your script scans the DOM and dynamically converts these classes into inline styles.

---

##  Live Demo

👉 https://bab-chai-css-npm-package.vercel.app/

---

##  NPM Package

👉 https://www.npmjs.com/package/bab-chai-css

---

##  GitHub Repository

👉 https://github.com/babitakry/Bab-chai-css-npm-package

---

## Features

- Utility-first CSS approach  
- No external CSS required  
- Dynamic DOM parsing  
- Supports spacing, colors, typography, and layout  
- Custom class parser (`chai-*`)  
- Lightweight and beginner-friendly  

---

## How It Works

1. The script runs after page load  
2. It scans all DOM elements  
3. Finds classes starting with `chai-`  
4. Parses the class name  
5. Applies corresponding inline styles  

### Example

- `chai-p-20 → padding: 20px`
- `chai-bg-blue → background-color: blue`
- `chai-text-white → color: white`


---

## Installation

```bash
npm install bab-chai-css
```

## Usage

### 1. Import in your project

```js
import MyTailwind from "bab-chai-css";

MyTailwind();
```

### 2. Use utility classes in HTML
```html 
<div class="chai-p-20 chai-bg-blue chai-text-white">
  Hello World !!
</div>
```

### Example
```html 
<body class="chai-flex chai-justify-center chai-items-center chai-bg-dark">

  <div class="chai-p-20 chai-rounded-10 chai-bg-card chai-w-320">
    <h1 class="chai-text-white chai-center">☕ Bab Chai CSS</h1>
  </div>

</body>
```

## Demo Video

👉 [Watch Demo](https://your-video-link.com)

---

## Twitter Post

👉 [View Tweet](https://twitter.com/your-post-link)