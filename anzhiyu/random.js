var posts=["2025/03/09/2025年浙江中医药大学程序设计竞赛/","2025/03/27/Edu-Round-124/","2025/01/16/Edu-Round-141/","2025/03/07/Round-1003-div4/","2025/03/18/Round-1005-div2/","2025/03/17/Round-1009-div3/","2025/03/25/Round-1011-div2/","2025/03/26/Round-1013-div3/","2025/03/25/Round-1012-div2/","2024/12/28/Round-947-div3/","2024/12/28/Round-988-div3/","2024/12/28/Round-944-div4/","2025/03/06/Round-762-div3/","2024/12/28/Round-941-div4/","2025/03/17/abc-396/","2025/03/17/abc-397/","2025/03/11/专题-交互题/","2025/03/06/专题-DP/","2025/03/27/学习记录-不定积分/","2025/03/22/专题-线段树/","2025/03/27/学习记录-CMC/","2025/03/09/总结 常见Trick(简单)/","2025/03/09/总结 错题集/","2025/03/07/总结 神秘算法/","2024/12/28/更新日志/","2025/03/24/板刷记录 1600-2000/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };