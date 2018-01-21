"use strict";



  function createToDo() {
       // 創建 To-Do 的標籤
       var todo = document.createElement("div");
       var span = document.createElement("span");
       var urgent = document.getElementById("urgent").checked;


        // 判斷與設定 span 文字內容、加入 To-Do
        var input = document.getElementById("input").value;
        if (input == "") {
          input = "Nothing";
        }

        if(urgent == true){
          span.style.color = "red";
          }
        else{
          span.style.color = "darkgreen";
        }

        span.innerHTML = input;
        todo.appendChild(span);

        // replace button
       var replaceButton = document.createElement("button");
        replaceButton.onclick = function() {
          var input = document.getElementById("input").value;
          if (input == "") {
            alert("You havn't input content!");
            return;
          }
          this.parentNode.firstChild.innerHTML = input;
          document.getElementById("input").value = "";
      }
      replaceButton.textContent = "R";
      todo.appendChild(replaceButton);

      //  remove button
      var removeButton = document.createElement("button");
      removeButton.onclick = function () {
        var answer = confirm('Are you sure?');
        if (answer == true) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      }
      removeButton.textContent = "V";
      todo.appendChild(removeButton);

      document.getElementById('todolist').appendChild(todo);
      document.getElementById('input').value = "";

  }
