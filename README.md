# froala-code-highlighter
The Froala plugin that you can quote your codes in the Froala rich text editor panel and the codes shown as a terminal and added lines numbers.  The plugin is simple, I didn't add any fancy control, just for my feature use.

HTML example in Froala Rich Text Editor:
![alt tag](http://i359.photobucket.com/albums/oo37/Nate_Cheng/Screen%20Shot%202015-11-29%20at%203.52.37%20PM_zpskemha9k2.png)
<h2>Requirements</h2>
[Froala rich text editor](https://github.com/froala/wysiwyg-editor)

[google-code-prettify](https://github.com/google/code-prettify)

<h2>Getting Started</h2>

You will need to include the [froala editor](https://github.com/froala/wysiwyg-editor) and [prettify](https://github.com/google/code-prettify) and also this plugin

Include the CSS in the head
```html
<!-- Include Font Awesome. -->
  <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />

  <!-- Include Editor style. -->
  <link href="//cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.2/css/froala_editor.min.css" rel="stylesheet" type="text/css" />
  <link href="//cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.2/css/froala_style.min.css" rel="stylesheet" type="text/css" />
```

Include the JS

```html
  <!-- Include jQuery. -->
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

  <!-- Include JS files. -->
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.2/js/froala_editor.min.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js"></script>
```

```html
<script src="js/froala.codepanel.js"></script>
```
Add the theme css

```html

<link rel="stylesheet" href="css/sunburst.css">
```
sunburst theme example (code is not relevant):  
![alt tag](http://i359.photobucket.com/albums/oo37/Nate_Cheng/Screen%20Shot%202015-11-27%20at%2011.39.47%20AM_zpsjqxjpw6d.png)


There are other two included, [sons-of-obsidian](http://rahularora.net/wp-content/uploads/sons-of-obsidian-theme.jpg) and [monokai](http://i359.photobucket.com/albums/oo37/Nate_Cheng/1_zpsze2ovpkd.png)


You can find more [prettify color theme](http://jmblog.github.io/color-themes-for-google-code-prettify/) somewhere on the internet.

Give the options when you initialize the Froala rich text editor

```javascript
<script>
  $(function() {
    $('#edit').froalaEditor({
      toolbarButtons: ['codePanel'] /* and other toolbar buttons you want to add on */
    })
  });
</script>
```

Done!