<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "example.com" or host = "www.wydradesigns.com" then
response.redirect("https://www.wydradesigns.com/")

else
response.redirect("https://www.wydradesigns.com/error.htm")

end if
%>
