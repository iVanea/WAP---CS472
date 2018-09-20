import sun.print.PrinterJobWrapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Validation extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doGet(req, resp);
        String name = req.getAttribute("user").toString();
        String password = req.getAttribute("password").toString();
        Boolean remember = (boolean)req.getAttribute("remember");


        PrintWriter out = resp.getWriter();
        out.println("Name "+name+", password "+password+", remember "+remember);
    }
}
