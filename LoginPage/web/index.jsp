<%--
  Created by IntelliJ IDEA.
  User: timotin
  Date: 9/20/18
  Time: 12:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Redirect</title>
  </head>
  <body>
  <span style="font-family: 'Helvetica Neue'; font-size:22pt;">You are not logged. Press here for <a href="http://localhost:8080/Login.jsp"> LoginForm</a></span>
  <%--<form action="login" method="post">--%>
    <%--<input type="submit" title="Press"/>--%>
  <%--</form>--%>

  <%
      HttpSession sessionHere = request.getSession(true);
      String username = (String)sessionHere.getAttribute("userName");
      if(username==null || username.length()==0){
          response.sendRedirect("Login.jsp");

      }else{
          response.sendRedirect("Welcome.jsp");
      }
  %>
  </body>
</html>
