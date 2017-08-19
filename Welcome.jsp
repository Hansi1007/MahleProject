<%-- 
    Document   : Welcome
    Created on : 27-apr-2017, 10.44.19
    Author     : m0023579
--%>

 <%@page import="org.jboss.weld.util.collections.ArraySet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
      <script src="faces/js/bootstrap.js"></script>
           <script src="faces/js/jquery-1.7.1.js"></script>
           <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
     <meta http-equiv="Refresh" content="400"
      <%@ page import="java.util.*" %>
        <%@page import="Com.Dbmanger"%>


<!DOCTYPE html>
 
<html>
    <head>
         <script>
$(document).ready(function(){
   
      runslide();

function runslide() {
    $('#div3').fadeIn(1500).delay(1500).fadeOut(1500, function() {
       
            runslide();
    });
}
   
});
</script>
<% 
    Set<String> project =  new HashSet();
    ArrayList<String> startdate =  new ArrayList();
    ArrayList<String> enddate =  new ArrayList();
    
   Dbmanger.Project(project);
              
//Dbmanger.getProject(project,startdate, enddate);
 
%>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome Page</title>
    </head>
        	<style>
	 
.fullscreen-bg {
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
}

.fullscreen-bg__video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
table {
     width: 100%;
      position: relative;
}
 
 
   
 
 h3 {
    font-size: 4.5em; /* 40px/16=2.5em */
}
 h2 {
    font-size: 2.5em; /* 40px/16=2.5em */
}
 
.center {
    margin-left: 13% ;
    left: 0;
    top: 10%;
    width: 150%;
    height: fit-content;
    background: white;
    opacity: 0.7;
    text-align: center;
    font-size: 18px;
    position: absolute;
    
}

.big { 
 position: relative;
   height:100%;
    width: 100%;
   
     
    
    
}
.bottomright {
    position: absolute;
    bottom: 18px;
    right: 16px;
    font-size: 40px;
  font-family: Tahoma,Verdana,Segoe,sans-serif; 
   margin-right: 0%;
    color: #8C8C8C;
     text-shadow: 3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05);
}
.bottomright2 {
    position: absolute;
    color: #3969f5;
    bottom: 69px;
    right: 16px;
    font-size: 70px;
    font-family: Tahoma,Verdana,Segoe,sans-serif; 
    margin-right: 0%;
    text-shadow: 3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05);
    
}
.bottomright3 {
    position: absolute;
    color: #8C8C8C;
    right: 16px;
    font-size: 120px;
    font-family: Tahoma,Verdana,Segoe,sans-serif; 
  
    text-shadow: 3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05);
    
}
</style>



    <body>
    <%if (project.size() == 0){%>
            </video>
        
        
         <div class="fullscreen-bg">
        <video id="my-video" class="fullscreen-bg__video " loop="loop" muted="">
  <source src="faces/Video/video.mp4" type="video/mp4" />
  <source src="media/demo.ogg" type="video/ogg" />
 </div> 
        <%}

else{ %>
        <style>
            body {
    background-image: url("faces/Image/Welcomes.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    opacity: 2.5;
    position: relative;
}
        </style>
 
  <div class="big" >
      <div class="bottomright3" id="">  WELCOME  </div>
      <%
      
         
      
        

          
  for (int i = 0; i<project.size(); i++) {
 

      %>
      <style> th, td {
     padding: 15px;
      text-shadow: 3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05);
   
} </style>
      <div  id ="content-<%=i%>">   
                       
   
   <%
        ArrayList<String> elem1 = new ArrayList();
      ArrayList<String> elem2 = new ArrayList();
      ArrayList<String> elem3 = new ArrayList();                                      
    Dbmanger.PrintWelcome(project.toArray()[i].toString(),elem1,elem2,elem3); 
  %> <div class="center"   style="  top: 30%; width: 70% ; " >  <%       
 
    
      if(elem1.size()==1){
     
    
   %>
    
    <table style="width:100%">
      <tr>
          <td  style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center;font-size: 4em; ">  <%=elem1.get(0)%></td>    
   </tr> 
   <tr >  <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 3.5em; ">  <%=elem2.get(0)  %></font> </td>  </tr>
     <tr>   <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif ; text-align: center;   font-size: 3.5em;"> <%=elem3.get(0) %> </td>   </tr> 
   
    </table>
   
   <%  
       }
else if(elem1.size()==2){

 %>
 <table style="width:100%">
      <tr>
         <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 4em; ">  <%=elem1.get(0)%>  </td>   
         <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 4em; ">  <%=elem1.get(1)%>  </td> 
             
   </tr> 
   <tr>  <td  style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 3.5em; ">  <%=elem2.get(0)%></td>  
       <td  style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 3.5em; " >  <%=elem2.get(1)  %> </td> 
    </tr>
    <tr> <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 3.5em; "><%=elem3.get(0) %> </td>   
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: center; font-size: 3.5em; "><%=elem3.get(0) %> </td></tr>
   
 </table>
 <%

}
else if(elem1.size()==3){ %>
<table style="width:100%">
      <%
for (int e = 0; e < elem1.size(); e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem2.get(e)%>  </td>  
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size:3em; ">  <%=elem3.get(e)%>  </td>    

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==4){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < elem1.size(); e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem2.get(e)%>  </td>  
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem3.get(e)%>  </td>    

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==5){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < elem1.size(); e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.5em; ">  <%=elem2.get(e)%>  </td>  
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.5em; ">  <%=elem3.get(e)%>  </td>    

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==6){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < elem1.size(); e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.5em; ">  <%=elem2.get(e)%>  </td>  
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size:2.5em; ">  <%=elem3.get(e)%>  </td>    

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==7){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < elem1.size(); e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size:3em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.5em; ">  <%=elem3.get(e)%>  </td>  
           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==8){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 4; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e+3)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==9){

%> 
<table style="width:100%">
   
      <%
          
for (int e = 0; e < 4; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e+4)%>  </td> 
            

   </tr> 
     
<%
    }
%>
     
  <tr>
     <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size:3.5em; ">  <%=elem1.get(8)%>  </td>
     </tr>
</table>
     <%
 
}else if (elem1.size()==10){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 5; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3.5em; ">  <%=elem1.get(e+5)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==11){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 5; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size:3em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem1.get(e+5)%>  </td>           

   </tr> 
     
<%
    }
%>
<tr>
<td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem1.get(10)%>  </td> 
</tr>
</table>
<%
 
}else if (elem1.size()==12){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 6 ; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align:left; font-size: 3em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 3em; ">  <%=elem1.get(e+6)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==13){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 6; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.8em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.8em; ">  <%=elem1.get(e+6)%>  </td>           

   </tr> 
     
<%
    }
%>
  <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.8em; ">  <%=elem1.get(12)%>  </td>
</table>
<%
 
}else if (elem1.size()==14){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 7; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.7em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2.7em; ">  <%=elem1.get(e+7)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==15){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 7; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2em; ">  <%=elem1.get(e+7)%>  </td>           

   </tr> 
     
<%
    }
%>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 2em; ">  <%=elem1.get(14)%>  </td>           

</table>
<%
 
}else if (elem1.size()==16){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 8; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.7em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.7em; ">  <%=elem1.get(e+8)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==17){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 8; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.5em; ">  <%=elem1.get(e+8)%>  </td>           

   </tr> 
     
<%
    }
%>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.5em; ">  <%=elem1.get(16)%>  </td>           

</table>
<%
 
}else if (elem1.size()==18){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 9; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.5em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.5em; ">  <%=elem1.get(e+9)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}else if (elem1.size()==19){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 8; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.4em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.4em; ">  <%=elem1.get(e+7)%>  </td>           

   </tr> 
     
<%
    }
%>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.4em; ">  <%=elem1.get(18)%>  </td>           

</table>
<%
 
}else if (elem1.size()==20){

%> 
<table style="width:100%">
      <%
for (int e = 0; e < 10; e++) {
        
   %>
    <tr>
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.3em; ">  <%=elem1.get(e)%>  </td>           
        <td style="  font-family: Tahoma,Verdana,Segoe,sans-serif; text-align: left; font-size: 1.3 em; ">  <%=elem1.get(e+9)%>  </td>           

   </tr> 
     
<%
    }
%>
</table>
<%
 
}
%>
<%
       


 
    
   %>
     </div>
    
    
    
 
    
  
 
       
   <div class="bottomright2">  <%=project.toArray()[i]%>  </div>
   
   <%
       Dbmanger.getProject(project.toArray()[i].toString(), startdate, enddate);
       ArrayList  arr1 = new ArrayList();
       ArrayList  arr2 = new ArrayList();
       Dbmanger.Printdate(startdate.get(i).toString(), arr1 );
       Dbmanger.Printdate(enddate.get(i).toString(), arr2 ); %>
   
       <div class="bottomright"> from <%=arr1.get(1).toString()   %> <%=arr1.get(0).toString() %>,to
     <%=arr2.get(1).toString()%> <%=arr2.get(0).toString()%> </div>
   
      </div>
      <%   
             String vrai = Dbmanger.control(enddate.get(i)); 
     
      if(Dbmanger.refresh(vrai)==false){ 
          
      Dbmanger.deleteProject(project.toArray()[i].toString());
      
      }
      else{
      
      }
              }
}


%>

         
  </div> 
 
    </body>
    <script>
        
   var divs = $('div[id^="content-"]').hide(),
    i = 0;
(function cycle() { 

    divs.eq(i).fadeIn(3000)
              .delay(10000)
              .fadeOut(1000, cycle);

    i = ++i % divs.length;

})();     
    </script>
    <script>(function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
  var video = document.getElementById("my-video");

  /**
   * Check if video can play, and play it
   */
  video.addEventListener( "canplay", function() {
    video.play();
  });
})();</script>
 
</html>