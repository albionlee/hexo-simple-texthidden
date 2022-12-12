hexo.extend.tag.register('textHidden', function(args, content){
	// let text = content;
	let fontColor = args[0];
  return `
   <style>
    span.hidden-text {
        color: black;
        background-color: black;
    }
    span.hidden-text:hover {
        color: while;
        background-color: transparent;
    }
   </style>
      <span class="hidden-text" onmouseover="this.style.color='${fontColor}'; this.style.backgroundColor='#cccccc';" onmouseout="this.style.color='black'; this.style.backgroundColor='black';">${content}</span>
   `
}, {ends: true, async: true})