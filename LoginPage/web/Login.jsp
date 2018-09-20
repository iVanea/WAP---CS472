<%--
  Created by IntelliJ IDEA.
  User: timotin
  Date: 9/20/18
  Time: 4:23 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <style>
        #loginform{
            width: 500px;
            margin:auto;
            text-align: center;
        }
        .button {
            background-color: #4CAF50; /* Green */
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


        .login {width: 50%;}
    </style>
    <title>Login Form</title>
</head>
<body>
    <form action="/login" id="loginform">
        <label>User name:<input type='text' placeholder='type "admin"' name='usr'/></label><br/>
        <label>Password: <input type='password' placeholder='1q2w' name='pwd'/></label><br/>
        <label>Remember  <input type='checkbox' name='remember'/></label><br/>
        <input class="button login" type='submit' value='Login'/>
    </form>
</body>
</html>
