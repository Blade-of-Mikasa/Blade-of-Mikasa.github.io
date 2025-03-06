var posts=["2025/03/06/DP-专题/","2025/01/16/Edu-Round-141/","2024/12/28/Round-941-div4/","2024/12/28/Round-944-div4/","2024/12/28/Round-947-div3/","2024/12/28/Round-988-div3/","2025/03/06/div3-762/","2024/12/28/欢迎/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };