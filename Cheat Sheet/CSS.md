# CSS

---

### **1. Introduction to CSS**

- **CSS (`Cascading Style Sheets`)**: Used to style and layout web pages.
- **Syntax**:
    
    ```css
    selector {
        property: value;
    }
    ```
    
- **Purpose**: Separates content (`HTML`) from presentation (styling).

---

### **2. Ways to Write CSS**

1. **Inline CSS**:
    
    ```html
    <p style="color: red;">Hello World</p>
    ```
    
2. **Internal CSS**:
    
    ```html
    <style>
        p { color: red; }
    </style>
    ```
    
3. **External CSS**:
In `styles.css`:
    
    ```html
    <link rel="stylesheet" href="styles.css">
    ```
    
    ```css
    p { color: red; }
    ```
    

---

### **3. Selectors**

- **Element Selector**:
    
    ```css
    p { color: blue; }
    ```
    
- **Class Selector**:
    
    ```css
    .my-class { color: green; }
    ```
    
- **ID Selector**:
    
    ```css
    #my-id { color: yellow; }
    ```
    
- **Universal Selector**:
    
    ```css
    * { margin: 0; padding: 0; }
    ```
    
- **Attribute Selector**:
    
    ```css
    a[target="_blank"] { color: purple; }
    ```
    
- **Pseudo-classes**:
    
    ```css
    a:hover { color: orange; }
    ```
    
- **Pseudo-elements**:
    
    ```css
    p::first-line { font-weight: bold; }
    ```
    

---

### **4. Units**

- **Absolute Units**:
    
    ```css
    px, cm, mm, in, pt, pc
    
    ```
    
- **Relative Units**:
    
    ```css
    em, rem, %, vw, vh, vmin, vmax
    
    ```
    

### **5. Font Properties**

- **Font Family**:
    
    ```css
    font-family: Arial, sans-serif;
    ```
    
- **Font Size**:
    
    ```css
    font-size: 16px;
    ```
    
- **Font Weight**:
    
    ```css
    font-weight: bold;
    ```
    
- **Font Style**:
    
    ```css
    font-style: italic;
    ```
    
- **Line Height**:
    
    ```css
    line-height: 1.5;
    ```
    
- **Text Align**:
    
    ```css
    text-align: center;
    ```
    
- **Text Decoration**:
    
    ```css
    text-decoration: underline;
    ```
    
- Letter spacing
    
    ```css
    letter-spacing: 17px;
    ```
    
    ---
    

### **6. Color**

- **Hex Color**:
    
    ```css
    color: #ff5733;
    ```
    
- **RGB/RGBA**:
    
    ```css
    color: rgb(255, 87, 51);
    color: rgba(255, 87, 51, 0.5); /* with transparency */
    ```
    
- **HSL/HSLA**:
    
    ```css
    color: hsl(14, 100%, 60%);
    color: hsla(14, 100%, 60%, 0.5); /* with transparency */
    ```
    
- **Named Colors**:
    
    ```css
    color: red;
    ```
    

---

### **7. Image/Video Properties**

- **Image Size**:
    
    ```css
    img {
        width: 100px;
        height: auto;
    }
    ```
    
- **Background Image**:
    
    ```css
    body {
        background-image: url('image.jpg');
        background-size: cover;
        background-position: center;
    }
    ```
    
- **Video Size**:
    
    ```css
    video {
        width: 100%;
        height: auto;
    }
    ```
    
- **Object Fit**:
    
    ```css
    img {
        object-fit: cover;
    }
    ```
    

---

### **8. Positioning**

- **Static (Default)**:
    
    ```css
    position: static;
    
    ```
    
- **Relative**:
    
    ```css
    position: relative;
    top: 10px;
    left: 20px;
    
    ```
    
- **Absolute**:
    
    ```css
    position: absolute;
    top: 0;
    left: 0;
    
    ```
    
- **Fixed**:
    
    ```css
    position: fixed;
    top: 0;
    right: 0;
    
    ```
    
- **Sticky**:
    
    ```css
    position: sticky;
    top: 0;
    
    ```
    

---

### **9. Overflow**

- **Visible (Default)**:
    
    ```css
    overflow: visible;
    
    ```
    
- **Hidden**:
    
    ```css
    overflow: hidden;
    
    ```
    
- **Scroll**:
    
    ```css
    overflow: scroll;
    
    ```
    
- **Auto**:
    
    ```css
    overflow: auto;
    
    ```
    

---

### **10. Z-Index**

- **Stacking Order**:
    
    ```css
    z-index: 1; /* Higher values appear on top */
    
    ```
    

---

### **11. Background Properties**

- **Background Color**:
    
    ```css
    background-color: #f0f0f0;
    
    ```
    
- **Background Image**:
    
    ```css
    background-image: url('image.jpg');
    
    ```
    
- **Background Repeat**:
    
    ```css
    background-repeat: no-repeat | repeat-x | repeat-y;
    
    ```
    
- **Background Position**:
    
    ```css
    background-position: center top;
    
    ```
    
- **Background Size**:
    
    ```css
    background-size: cover | contain | 100px 200px;
    ```
    

---

**12. Display Properties**

- **Block**:
    
    ```css
    display: block; /* Takes full width, starts on a new line */
    ```
    
- **Inline**:
    
    ```css
    display: inline; /* Takes only necessary width, no new line */
    ```
    
- **Inline-Block**:
    
    ```css
    display: inline-block; /* Mix of block and inline */
    ```
    
- **Flex**:
    
    ```css
    display: flex; /* Enables flexbox layout */
    ```
    
- **Grid**:
    
    ```css
    display: grid; /* Enables grid layout */
    ```
    
- **None**:
    
    ```css
    display: none; /* Hides the element */
    ```
    
- **Visibility**:
    
    ```css
    visibility: hidden; /* Hides element but retains space */
    ```
    

---

### **13. Flexbox**

- **Container Properties**:
    
    ```css
    .container {
        display: flex;
        flex-direction: row | row-reverse | column | column-reverse;
        justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
        align-items: flex-start | flex-end | center | baseline | stretch;
        flex-wrap: nowrap | wrap | wrap-reverse;
        gap: 10px; /* Space between items */
    }
    ```
    
- **Item Properties**:
    
    ```css
    .item {
        flex: 1; /* Grow, shrink, basis */
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
        order: 0; /* Change order of items */
    }
    ```
    
- **Gap Property**:
    
    ```css
    gap: 10px; /* Works in Flexbox and Grid */
    
    ```
    

---

### **14. Grid**

- **Container Properties**:
    
    ```css
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
        grid-template-rows: 100px 200px; /* Row sizes */
        gap: 10px; /* Space between items */
        justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
        align-content: start | end | center | stretch | space-around | space-between | space-evenly;
    }
    ```
    
- **Item Properties**:
    
    ```css
    .item {
        grid-column: 1 / 3; /* Span across columns */
        grid-row: 1 / 2; /* Span across rows */
        justify-self: start | end | center | stretch;
        align-self: start | end | center | stretch;
    	  grid-row-start: 2;
        grid-row-end: 12;
        grid-column-start: 7;
        grid-column-end: 12;
    }
    ```
    

---

### **15. Box Properties**

- **Margin**:
    
    ```css
    margin: 10px; /* All sides */
    margin: 10px 20px; /* Top/Bottom, Left/Right */
    margin: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */
    ```
    
- **Padding**:
    
    ```css
    padding: 10px; /* All sides */
    padding: 10px 20px; /* Top/Bottom, Left/Right */
    padding: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */
    ```
    
- **Border**:
    
    ```css
    border: 2px solid black;
    border-radius: 10px; /* Rounded corners */
    ```
    
- **Box Sizing**:
    
    ```css
    box-sizing: border-box; /* Includes padding and border in element's width/height */
    ```
    

---

### **16. Shadows**

- **Box Shadow**:
    
    ```css
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* Horizontal, Vertical, Blur, Color */
    ```
    
- **Text Shadow**:
    
    ```css
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Horizontal, Vertical, Blur, Color */
    ```
    

---

### **17. Transforms**

- **Translate**:
    
    ```css
    transform: translate(50px, 100px); /* Move element */
    ```
    
- **Rotate**:
    
    ```css
    transform: rotate(45deg); /* Rotate element */
    ```
    
- **Scale**:
    
    ```css
    transform: scale(1.5); /* Scale element */
    ```
    
- **Skew**:
    
    ```css
    transform: skew(30deg, 20deg); /* Skew element */
    ```
    
- **Multiple Transforms**:
    
    ```css
    transform: rotate(45deg) scale(1.2);
    ```
    

---

### **18. Animations**

- **Keyframes**:
    
    ```css
    @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(100px); }
    }
    ```
    
- **Apply Animation**:
    
    ```css
    .element {
        animation: slide 2s ease-in-out infinite;
    }
    ```
    
- **Animation Properties**:
    
    ```css
    animation-name: slide;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: infinite | 3;
    animation-direction: normal | reverse | alternate | alternate-reverse;
    ```
    

---

### **19. Transitions**

- **Transition Property**:
Example:
    
    ```css
    transition: property duration timing-function delay;
    
    ```
    
    ```css
    transition: all 0.3s ease-in-out;
    
    ```
    
- **Transition Properties**:
    
    ```css
    transition-property: background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0.2s;
    
    ```
    

---

### **20. Variables (Custom Properties)**

- **Define Variables**:
    
    ```css
    :root {
        --primary-color: #3498db;
        --spacing: 10px;
    }
    
    ```
    
- **Use Variables**:
    
    ```css
    .element {
        color: var(--primary-color);
        margin: var(--spacing);
    }
    
    ```
    

---

### **21. Filters**

- **Blur**:
    
    ```css
    filter: blur(5px);
    
    ```
    
- **Brightness**:
    
    ```css
    filter: brightness(150%);
    
    ```
    
- **Contrast**:
    
    ```css
    filter: contrast(200%);
    
    ```
    
- **Grayscale**:
    
    ```css
    filter: grayscale(100%);
    
    ```
    
- **Sepia**:
    
    ```css
    filter: sepia(100%);
    
    ```
    

---

### **22. Pseudo-Elements**

- **Before**:
    
    ```css
    .element::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: red;
    }
    
    ```
    
- **After**:
    
    ```css
    .element::after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: blue;
    }
    
    ```
    

### **23. Media Queries**

- **Basic Syntax**:
    
    ```css
    @media (max-width: 768px) {
        body {
            background-color: lightblue;
        }
    }
    ```
    
- **Common Breakpoints**:
    
    ```css
    /* Small devices (phones) */
    @media (max-width: 576px) { ... }
    
    /* Medium devices (tablets) */
    @media (min-width: 577px) and (max-width: 992px) { ... }
    
    /* Large devices (desktops) */
    @media (min-width: 993px) { ... }
    ```
    
- **Orientation**:
    
    ```css
    @media (orientation: landscape) { ... }
    @media (orientation: portrait) { ... }
    ```
    
    ---
    

### **24. Responsive Design**

- **Viewport Meta Tag**:
    
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    
- **Fluid Layouts**:
Use percentages (`%`) or `vw/vh` for widths and heights.

---

### **25. CSS Functions**

- **Calc()**:
    
    ```css
    width: calc(100% - 20px);
    ```
    
- **Min() and Max()**:
    
    ```css
    width: min(100%, 500px);
    height: max(50vh, 300px);
    ```
    
- **Clamp()**:
    
    ```css
    font-size: clamp(1rem, 2.5vw, 2rem);
    ```
    

---

### **26. Scroll Behavior**

- **Smooth Scrolling**:
    
    ```css
    scroll-behavior: smooth;
    ```
    

---

### **27. Aspect Ratio**

- **Aspect Ratio Property**:
    
    ```css
    aspect-ratio: 16 / 9;
    ```
    

---

### **28. Clip-Path**

- **Clip Path**:
    
    ```css
    clip-path: circle(50% at 50% 50%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    ```
    

---

### **29. Masking**

- **Mask Image**:
    
    ```css
    mask-image: url('mask.png');
    mask-size: cover;
    mask-position: center;
    ```
    

---

### **30. Blend Modes**

- **Background Blend Mode**:
    
    ```css
    background-blend-mode: multiply;
    ```
    
- **Mix Blend Mode**:
    
    ```css
    mix-blend-mode: overlay;
    ```
    

---

### **31. Scroll Snap**

- **Scroll Snap Container**:
    
    ```css
    scroll-snap-type: y mandatory;
    ```
    
- **Scroll Snap Item**:
    
    ```css
    scroll-snap-align: start;
    ```
    

---

### **32. Custom Cursors**

- **Custom Cursor**:
    
    ```css
    cursor: url('cursor.png'), auto;
    ```
    

---

### **33. Writing Modes**

- **Vertical Text**:
    
    ```css
    writing-mode: vertical-rl;
    ```
    

---