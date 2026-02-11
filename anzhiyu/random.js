var posts=["2025/12/09/Edu板刷记录/","2025/11/25/关于本博客/","2026/02/09/mit-6-1810-1-Xv6-and-Unix-utilities/","2026/02/12/mit-6-1810-2-system-calls/","2026/01/06/巧思题随记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };