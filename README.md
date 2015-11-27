# Froala-codePanel
The Froala plugin that you can quote your codes in the Froala rich text editor panel and the codes shown as a terminal and added lines numbers.  The plugin is simple, I didn't add any fancy control, just for my feature use.

![alt tag](http://i359.photobucket.com/albums/oo37/Nate_Cheng/1_zpsze2ovpkd.png)
<h2>Requirements</h2>
[Froala rich text editor](https://github.com/froala/wysiwyg-editor)

[google-code-prettify](https://github.com/google/code-prettify)

<h2>Getting Started</h2>

You will need to include the [froala editor](https://github.com/froala/wysiwyg-editor) and [prettify](https://github.com/froala/wysiwyg-editor) and also this plugin

```html
<script src="js/froala.codepanel.js"></script>
```
Add the theme css

```html

<link rel="stylesheet" href="css/sunburst.css">
```

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
