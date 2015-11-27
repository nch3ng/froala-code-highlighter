(function ($) {  
  $.FroalaEditor.PLUGINS.codePanel = function (editor) {

    function apply(){
      if(typeof(prettyPrint)!='function')
        alert("Please add google-code-prettify.");
      var i;
      var blocks = editor.selection.blocks();
      
      var text=' <pre class="prettyprint linenums" style="margin-left:40px;margin-right:40px;">';
      for (i = 0; i < blocks.length; i++) {
        text+=blocks[i].innerHTML+'<br>';
      }
      text+='</pre>  ';
      text = editor.clean.html(text)
      editor.html.insert(text);
      editor.html.unwrap(); 
      editor.selection.restore();
      $(".prettyprint br").each(function(index, element) {
        $(element).replaceWith(document.createTextNode("\n")); 
      });
      if(prettyPrint!=undefined)
        prettyPrint();
    }
  
    // Methods visible outside the plugin.
    return {
      apply: apply
    }
  }
  

  $.FroalaEditor.DefineIcon('syntaxhighlight', { NAME: 'terminal'})
  $.FroalaEditor.RegisterCommand('codePanel', {
    title: 'code quote',
    icon: 'syntaxhighlight',
    undo: true,
    focus: false,
    callback: function () {
      this.codePanel.apply();
    }
  });
})(jQuery);