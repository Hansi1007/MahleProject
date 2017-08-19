<%-- 
    Document   : Home
    Created on : 8-mar-2017, 12.29.49
    Author     : M0023579
--%>

 
  <%@page import="java.util.ArrayList"%>
<%@page import="java.util.Vector"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
     <%@page import="Com.Dbmanger"%>
   <!DOCTYPE html>
  
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
 
        <title>JSP Page</title>
      <script src="faces/js/bootstrap.js"></script>
      <script src="faces/js/bootstrap.min.js"></script>
     

     
 <script>
$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});
</script>
    </head>
   	<style>
            article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
    font-family: "Lato", sans-serif;
    
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #002147;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover, .offcanvas a:focus{
    color: #cd4f39;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

input:focus,textarea:focus {
  outline: none;
}

body {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-image: url("faces/Image/bacground.jpg");
    margin: 0;
    font-size: 12px;
}     

/*----------------------*/

.cf:before, .cf:after {
  content:"";
  display:table;
}

.cf:after {
  clear:both;
  
}

.cf {
  zoom:1;
}
  
/*----------------------*/

header {
  padding: 8px 10%;
  border-bottom: 1px solid #444;
  background-color: #444;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#444), to(#111));
  background-image: -webkit-linear-gradient(top, #444, #111);
  background-image: -moz-linear-gradient(top, #444, #111);
  background-image: -ms-linear-gradient(top, #444, #111);
  background-image: -o-linear-gradient(top, #444, #111);
  background-image: linear-gradient(top, #444, #111);
  -moz-box-shadow: 0 -3px 3px rgba(0,0,0,.5) inset;
  -webkit-box-shadow: 0 -3px 3px rgba(0,0,0,.5) inset;
  box-shadow: 0 -3px 3px rgba(0,0,0,.5) inset;
}

/*----------------------*/

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  float: right;
  background: #000;
  border-bottom: 1px solid #444;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;    
}

nav li {
  float: left;          
}

nav #login {
  border-right: 1px solid #444;
  -moz-box-shadow: 1px 0 0 #222;
  -webkit-box-shadow: 1px 0 0 #444;
  box-shadow: 1px 0 0 #444;  
}

nav #login-trigger,
nav #signup a {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  height: 25px;
  line-height: 25px;
  font-weight: bold;
  padding: 0 8px;
  text-decoration: none;
  color: #d79800;
  text-shadow: 0 1px 0 #444;
  
}

nav #signup a {
  -moz-border-radius: 0 3px 3px 0;
  -webkit-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

nav #login-trigger {
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

nav #login-trigger:hover,
nav #login .active,
nav #signup a:hover {
  background: #222;
  color: #efefef;
}

nav #login-content {
  display: none;
  position: absolute;
  top: 24px;
  right: 0;
  z-index: 999;    
  background: #444;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));
  background-image: -webkit-linear-gradient(top, #444, #000);
  background-image: -moz-linear-gradient(top, #444, #000);
  background-image: -ms-linear-gradient(top, #444, #000);
  background-image: -o-linear-gradient(top, #444, #000);
  background-image: linear-gradient(top, #444, #000);  
  padding: 15px;
  -moz-box-shadow: 0 2px 2px -1px rgba(0,0,0,.9);
  -webkit-box-shadow: 0 2px 2px -1px rgba(0,0,0,.9);
  box-shadow: 0 2px 2px -1px rgba(0,0,0,.9);
  -moz-border-radius: 3px 0 3px 3px;
  -webkit-border-radius: 3px 0 3px 3px;
  border-radius: 3px 0 3px 3px;
}

nav li #login-content {
  right: 0;
  width: 250px;  
}

/*--------------------*/

#inputs input {
  background: #efefef;
  padding: 6px 5px;
  margin: 0 0 5px 0;
  width: 238px;
  border: 1px solid #222222;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow: 0 1px 1px #efefef inset;
  -webkit-box-shadow: 0 1px 1px #efefef inset;
  box-shadow: 0 1px 1px #efefef inset;
}

#inputs input:focus {
  background-color: #fff;
  border-color: #bf4c24;
  outline: none;
  -moz-box-shadow: 0 0 0 1px #efefef inset;
  -webkit-box-shadow: 0 0 0 1px #efefef inset;
  box-shadow: 0 0 0 1px #efefef inset;
}

/*--------------------*/

#login #actions {
  margin: 10px 0 0 0;
}

#login #submit {        
  background-color: #bf4c24;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d46a15), to(#bf4c24));
  background-image: -webkit-linear-gradient(top, #d46a15, #bf4c24);
  background-image: -moz-linear-gradient(top, #d46a15, #bf4c24);
  background-image: -ms-linear-gradient(top, #d46a15, #bf4c24);
  background-image: -o-linear-gradient(top, #d46a15, #bf4c24);
  background-image: linear-gradient(top, #d46a15, #bf4c24);
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  text-shadow: 0 1px 0 rgba(0,0,0,.5);
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;    
  border: 1px solid #222222;
  float: left;
  height: 30px;
  padding: 0;
  width: 100px;
  cursor: pointer;
  font: bold 14px Arial, Helvetica;
  color: #efefef;
}

#login #submit:hover,
#login #submit:focus {        
  background-color: #d79800;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#bf4c24), to(#d46a15));
  background-image: -webkit-linear-gradient(top, #bf4c24, #d46a15);
  background-image: -moz-linear-gradient(top, #bf4c24, #d46a15);
  background-image: -ms-linear-gradient(top, #bf4c24, #d46a15);
  background-image: -o-linear-gradient(top, #bf4c24, #d46a15);
  background-image: linear-gradient(top, #bf4c24, #d46a15);
}    

#login #submit:active {        
  outline: none;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;        
}

#login #submit::-moz-focus-inner {
  border: none;
}

#login label {
  float: right;
  line-height: 30px;
}

#login label input {
  position: relative;
  top: 2px;
  right: 2px;
}
 
.flex-container {
    display: -webkit-flex;
    display: flex;  
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    text-align: center;
    
}

.flex-container > * {
    padding: 15px;
    -webkit-flex: 1 100%;
    flex: 1 100%;
    
}

.article {
    text-align: center;
    
}

header {background:#002147;color:white;
 
}
footer {background: #aaa;color:white;
  
}
.nav {background:#002147;
 
}

.nav ul {
    list-style-type: none;
    padding: 0;
    
    
}
.nav ul a {
    text-decoration: none;
}

@media all and (min-width: 768px) {
   
    .article {-webkit-flex:5 0px;flex:5 0px;-webkit-order:2;order:2; }
    footer {-webkit-order:3;order:3;}
}
 
	.container {
    overflow: hidden;
    background-color: #002147;
    font-family: Arial;
    
    
}

.container a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.dropdown {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn {
    cursor: pointer;
    font-size: 16px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
}

.container a:hover, .dropdown:hover .dropbtn {
    background-color: red;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.show {
    display: block;
}

</style>
    <body id = "body">
        <div class="flex-container">
  
  
            
            <header>  
    <nav>
  <ul>
    <li id="login">
      <a id="login-trigger" href="#">
        Log in <span>▼</span>
      </a>
      <div id="login-content">
        <form action="/Home/LoginProcess.jsp" method="post">
          <fieldset id="inputs">
              <input id="username" type="text" name="username" placeholder="username" required>   
            <input id="password" type="password" name="password" placeholder="Password" required>
          </fieldset>
          <fieldset id="actions">
            <input type="submit" id="submit" value="Log in">
            <label><input type="checkbox" checked="checked"> Keep me signed in</label>
          </fieldset>
        </form>
      </div>                     
    </li>
    
  </ul>
</nav>   
      <img  src="faces/Image/logo.jpg" align="left" height="100" width=350"></a>      
    
         
</div>
       
       
     
    <script src="faces/js/index.js"></script>
        <script>
$(document).ready(function(){
    $('#login-trigger').click(function() {
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');                    
        
        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;');
            else $(this).find('span').html('&#x25BC;');
        });
});
 
</script>       
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <u>
        <h1> Reparti    </h1>
        <h2> <li><a href="/Home/Boccole.jsp">Boccole</a></li> </h2>
        <h2> <li><a href="#">semicuscinetti</a></li> </h2>
        <h2> <li><a href="/Home/Qualita.jsp">Galvanica</a></li> </h2>
         <h2>    </h2>
</u>
</div>
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; Apri </span>

<script>
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
</script>
<%   ArrayList data = new  ArrayList ();
  ArrayList titolo = new ArrayList();
   ArrayList tex = new ArrayList();
   %>
 <%  Dbmanger.getNews(data, titolo, tex);
   
 
%>
</header>
            <h1 style=" margin-left: 22% ; margin-right: 22%"> News  </h1>
            <div style="background: white; margin-left: 22% ; margin-right: 22%">
 <article class="article">
     <marquee behavior="scroll" direction="up" style="height:500px ; margin-left: 11% ; margin-right: 11%;">  

 
  <h2>
      <%for (int idx = 0; idx < data.size(); idx++) {
      %> <h1>   <%   out.print(data.get(idx).toString() + "       "+ titolo.get(idx).toString() );%>
       </h1>
      
      
      <h2><p> <%  out.print(tex.get(idx).toString());  %>    </p></h2> <%
    }%>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom,
  with a metropolitan area of over 13 million inhabitants.</p>
  <p>Standing on the River Thames, London has been a major settlement for two millennia,
  its history going back to its founding by the Romans, who named it Londinium.</p>
  <p><strong>Resize this page to see that what happens!</strong></p>
  </h2>
     </marquee>
</article>

            
          
            
 </div>
        
    </body>
</html>
