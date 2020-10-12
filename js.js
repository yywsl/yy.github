var code = `

* 大家好，我是yuyou
* 十月了，好多公司都在招聘
* 所以我在准备简历呀。
* 说做就做，看看我的简历！
/*先来对背景做调整*/
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
    color:pink;
    background:darkgrey;
}
/* 接下来我给自己准备一个编辑器 */
#box1{
  position: fixed;
  top: 50%; left: 0;
  width:200px;
  height:300px;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;
  /*到此我要写东西了*/
}
#box2{
  display:block;
}

` 

var n = 0
setInterval(function(){
    content.innerHTML = code.substring(0,n)
    style.innerHTML = code.substring(0,n)
    n = n + 1
    
},50)