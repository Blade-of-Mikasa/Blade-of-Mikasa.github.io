var posts=["2024/12/28/Round-941-div4/","2024/12/28/Round-944-div4/","2024/12/28/Round-947-div3/","2024/12/28/欢迎/","2024/12/28/hello-world/","2024/12/28/Round-988-div3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };