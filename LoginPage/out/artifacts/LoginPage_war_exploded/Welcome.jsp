<%--
  Created by IntelliJ IDEA.
  User: timotin
  Date: 9/20/18
  Time: 4:31 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Welcome ${userName}</title>
    <style>
        #toCenter{
            width:500px;
            margin:auto;
            text-align: center;
        }
        #name{
           text-transform: capitalize;
        }
        .button {
            background-color: salmon;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }


        .logout {width: 50%;}
    </style>
</head>
<body>
<%
    HttpSession sessionHere = request.getSession(true);
    String username = (String)sessionHere.getAttribute("userName");
    if(username==null || username.length()==0){
        response.sendRedirect("Login.jsp");

    }else{
    }
%>
    <div  id="toCenter">

        <%--<%String name = session.getAttribute("userName").toString();%>--%>

        <h2> Welcome Mr./Mrs. ${userName}<br/></h2>
        <p>  <span id="name">${userName},</span> we are glad to see you!</p>

        <form action="/logout">
          <input type="submit" value="Logout" class="button logout"/>
        </form>

    </div>

</body>
</html>
