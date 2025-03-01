# HTML

HTML stands for Hyper Text Markup Language. 

---

### HTML vs HTML5

| **Feature/Aspect** | **HTML** | **HTML5** |
| --- | --- | --- |
| **Doctype Declaration** | Uses a longer, more complex doctype (e.g., `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">`). | Uses a simplified and cleaner declaration: `<!DOCTYPE html>`. |
| **Semantic Elements** | Provides basic structural tags, often relying on generic elements like `<div>` for layout and grouping. | Introduces meaningful semantic elements such as `<header>`, `<footer>`, `<article>`, and `<section>` to better describe content. |
| **Multimedia Support** | Does not have native support for embedding audio or video; developers had to rely on external plugins (like Flash) for multimedia content. | Natively supports audio and video with `<audio>` and `<video>` tags, streamlining multimedia integration. |
| **Form Enhancements** | Contains only standard form elements, offering limited built-in validation and user interface improvements. | Adds new input types (e.g., `email`, `url`, `date`, `number`) and attributes, which enhance form validation and user experience. |
| **APIs and Graphics** | Limited in-browser support for advanced functionalities, requiring additional tools or plugins for interactive graphics and storage features. | Integrates a range of APIs (such as Canvas for drawing, Geolocation, Web Storage, and Web Workers) to enable richer web applications. citeturn0search0 |

---

## **HTML Cheat sheet**

### **Basic Structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>

```

---

### **Common Tags**

### **Text Formatting**

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<p>Paragraph</p>
<strong>Bold Text</strong>
<em>Italic Text</em>
<u>Underlined Text</u>
<s>Strikethrough Text</s>
<br> <!-- Line Break -->
<hr> <!-- Horizontal Rule -->
```

### **Links**

```html
<a href="<https://example.com>">Visit Example</a>
<a href="#section-id">Jump to Section</a> <!-- Internal Link -->
<a href="mailto:email@example.com">Send Email</a>
```

### **Images**

```html
<img src="image.jpg" alt="Description of Image" width="300" height="200">
```

### **Lists**

```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>

<!-- Description List -->
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

---

### **Forms**

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>
    
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to Newsletter</label>

    <input type="radio" id="option1" name="option" value="1">
    <label for="option1">Option 1</label>

    <input type="radio" id="option2" name="option" value="2">
    <label for="option2">Option 2</label>

    <button type="submit">Submit</button>
</form>
```

---

### **Tables**

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </tbody>
</table>
```

---

### **Semantic Elements**

```html
<header>Header Content</header>
<nav>Navigation Links</nav>
<main>Main Content</main>
<section>Section Content</section>
<article>Article Content</article>
<aside>Sidebar Content</aside>
<footer>Footer Content</footer>
```

---

### **Multimedia**

```html
<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<!-- Video -->
<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>
```

---

### **Meta Tags**

```html
<meta charset="UTF-8">
<meta name="description" content="Page Description">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Author Name">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### **Special Characters**

```html
&nbsp; <!-- Non-breaking space -->
&lt; <!-- Less than (<) -->
&gt; <!-- Greater than (>) -->
&amp; <!-- Ampersand (&) -->
&copy; <!-- Copyright symbol (©) -->
```

---

### **Comments**

```html
<!-- This is a comment -->
```

---

### **HTML5 New Elements**

```html
<canvas id="myCanvas" width="200" height="100"></canvas> <!-- For drawing graphics -->
<progress value="70" max="100"></progress> <!-- Progress bar -->
<mark>Highlighted Text</mark> <!-- Highlighted text -->
<details>
    <summary>Click to Expand</summary>
    <p>Hidden content here.</p>
</details>
```

---

### **Global Attributes**

```html
class="class-name" <!-- Assigns a class -->
id="unique-id" <!-- Assigns a unique ID -->
style="color: red;" <!-- Inline CSS -->
title="Tooltip Text" <!-- Tooltip -->
data-*="value" <!-- Custom data attributes -->
```

---

### **HTML Entities**

```html
&copy; <!-- Copyright symbol -->
&reg; <!-- Registered trademark -->
&trade; <!-- Trademark -->
&euro; <!-- Euro symbol -->
&pound; <!-- Pound symbol -->
&yen; <!-- Yen symbol -->
```

---

## **Semantic Tags in HTML**

### **1. `<header>`**

- **Purpose**: Represents the introductory content or a set of navigational links.
- **Where to Use**: Typically used at the top of a page or section.
- **Example**:
    
    ```html
    <header>
        <h1>Website Title</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
    ```
    

---

### **2. `<nav>`**

- **Purpose**: Defines a section of navigation links.
- **Where to Use**: Used for menus, table of contents, or any set of links.
- **Example**:
    
    ```html
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    ```
    

---

### **3. `<main>`**

- **Purpose**: Represents the main content of the document.
- **Where to Use**: Should be used once per page and contain the primary content.
- **Example**:
    
    ```html
    <main>
        <h2>Welcome to Our Website</h2>
        <p>This is the main content of the page.</p>
    </main>
    ```
    

---

### **4. `<section>`**

- **Purpose**: Defines a thematic grouping of content.
- **Where to Use**: Used to group related content, such as chapters, tabs, or parts of an article.
- **Example**:
    
    ```html
    <section>
        <h2>About Us</h2>
        <p>We are a company that does amazing things.</p>
    </section>
    ```
    

---

### **5. `<article>`**

- **Purpose**: Represents a self-contained piece of content that could be distributed independently.
- **Where to Use**: Used for blog posts, news articles, forum posts, etc.
- **Example**:
    
    ```html
    <article>
        <h2>Blog Post Title</h2>
        <p>This is the content of the blog post.</p>
    </article>
    ```
    

---

### **6. `<aside>`**

- **Purpose**: Represents content that is tangentially related to the content around it.
- **Where to Use**: Used for sidebars, pull quotes, or advertisements.
- **Example**:
    
    ```html
    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="/link1">Link 1</a></li>
            <li><a href="/link2">Link 2</a></li>
        </ul>
    </aside>
    ```
    

---

### **7. `<footer>`**

- **Purpose**: Represents the footer of a document or section.
- **Where to Use**: Typically used at the bottom of a page or section for copyright info, contact details, etc.
- **Example**:
    
    ```html
    <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
    ```
    

---

### **8. `<figure>` and `<figcaption>`**

- **Purpose**: Used to group media content (like images or videos) with a caption.
- **Where to Use**: Used for images, diagrams, videos, etc., that need a description.
- **Example**:
    
    ```html
    <figure>
        <img src="image.jpg" alt="Description of Image">
        <figcaption>This is a caption for the image.</figcaption>
    </figure>
    ```
    

---

### **9. `<time>`**

- **Purpose**: Represents a specific time or date.
- **Where to Use**: Used for dates, times, or durations.
- **Example**:
    
    ```html
    <p>The event is on <time datetime="2023-10-25">October 25, 2023</time>.</p>
    ```
    

---

### **10. `<mark>`**

- **Purpose**: Highlights text for reference or emphasis.
- **Where to Use**: Used to highlight important or relevant text.
- **Example**:
    
    ```html
    <p>This is a <mark>highlighted</mark> word.</p>
    ```
    

---

### **11. `<details>` and `<summary>`**

- **Purpose**: Creates a collapsible section of content.
- **Where to Use**: Used for FAQs, additional information, or hidden content.
- **Example**:
    
    ```html
    <details>
        <summary>Click to Expand</summary>
        <p>This is the hidden content.</p>
    </details>
    ```
    

---

### **12. `<address>`**

- **Purpose**: Represents contact information for the author or owner of a document.
- **Where to Use**: Used for email addresses, phone numbers, or physical addresses.
- **Example**:
    
    ```html
    <address>
        Contact: <a href="mailto:email@example.com">email@example.com</a>
    </address>
    ```
    

---

### **13. `<code>` Tag**

- **Purpose:** The `<code>` tag is used to represent a fragment of computer code.
- To display symbols, you need to use HTML entities:

```html
<p>To set the title of your webpage, use the <code>&lt;title&gt;&lt;/title&gt;</code> tag.</p>
```

---

### **14.  `<pre>` Tag for Multi-line**

If you want to display a larger block of code, you can use the `<pre>` tag (preformatted text) along with the `<code>` tag. For example:

```html
<pre>
    <code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;My Webpage&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;p&gt;Hello, World!&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;
    </code>
</pre>

```

### **Key Points**

- Use `<code>` for inline code snippets.
- Use `<pre>` for multi-line code blocks.
- Always escape special characters like `<` and `>` using `&lt;` and `&gt;`.

---

## **Example Page Using All Semantic Tags**

Here’s an example of a webpage that includes all the semantic tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>About Us</h2>
            <p>We are a company that does amazing things.</p>
        </section>

        <article>
            <h2>Blog Post Title</h2>
            <p>This is the content of the blog post.</p>
            <figure>
                <img src="image.jpg" alt="Description of Image">
                <figcaption>This is a caption for the image.</figcaption>
            </figure>
        </article>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="/link1">Link 1</a></li>
                <li><a href="/link2">Link 2</a></li>
            </ul>
        </aside>

        <details>
            <summary>Click to Expand</summary>
            <p>This is the hidden content.</p>
        </details>
    </main>

    <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
        <address>
            Contact: <a href="mailto:email@example.com">email@example.com</a>
        </address>
    </footer>
</body>
</html>
```