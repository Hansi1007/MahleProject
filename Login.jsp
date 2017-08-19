<%-- 
    Document   : newjsp
    Created on : 6-mar-2017, 14.20.41
    Author     : M0023579
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
   <link rel="stylesheet" href="faces/css/style.css">
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        </head>
        
	<style>
	body {
    background-image: url("faces/Image/bacground.jpg");
}
	</style>
     
    <body id = "body">
<form action="/Home/LoginProcess.jsp" method="post">
    <div class="login-page">
  <div class="form">
    
      <div  style="color:red"> <h5> ${errorMessage} </h5> </div>
      
    <form class="login-form">
      <input type="text"  name="username" placeholder="username"/>
      <input type="password"   name="password" placeholder="password"/>
      <button>login</button>
    
  </div>
</div>
 </form> 
    </body>
    <script src="faces/js/index.js"></script>
</html>
