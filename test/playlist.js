var button = document.getElementById("addButton");
button.clicked = handleButtonClicked();

function handleButtonClicked(){
  var textInput = document.getElementById("songTextInput");
  var songName = textInput.value;
  // 希望创建的元素类型 "li"
  var li = document.createElement("li"); 
  // 把这个元素的内容设置为歌名
  li.innerHTML = songName;
  var ul = document.getElementById("playlist");
  // 要求父元素ul增加li作为它的一个新孩子
  ul.appendChild(li);
  
}
  
