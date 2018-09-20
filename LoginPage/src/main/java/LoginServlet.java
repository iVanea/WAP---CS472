import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class LoginServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doGet(req, resp);
//        resp.getWriter().println("Login Page");

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Login Page</title></head><body>");
        out.print("<form method='post'>");
        out.print("<label>User name:<input type='text' placeholder='username' name='usr'/></label><br/>");
        out.print("<label>Password:<input type='password' placeholder='strong password' name='pwd'/></label><br/>");
        out.print("<label>Remember <input type='checkbox' name='remember'/></label><br/>");
        out.print("<input type='submit' value='Login'/>");
        out.print("</form>");
        out.print("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
//        super.doPost(req, resp);
        String user = req.getParameter("usr");
        String passd = req.getParameter("pwd");
        boolean remember = Boolean.valueOf(req.getParameter("remember"));
        req.setAttribute("user",user);
        req.setAttribute("password", passd);
        req.setAttribute("remember", remember);

        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p> Postback received</p>");
        out.print("</body></html>");

        RequestDispatcher rd = req.getRequestDispatcher("valid");
        rd.forward(req,response);
    }
}
