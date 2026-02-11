var posts=["2026/01/06/巧思题随记/","2025/12/09/Edu板刷记录/","2025/11/25/hello-world/","2026/02/09/mit-6-1810-1-Xv6-and-Unix-utilities/","2026/02/12/mit-6-1810-2-system-calls/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };