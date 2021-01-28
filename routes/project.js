
exports.viewProject = function(req, res) {
   // load a file called 'project.handlebars' & display it
   var name = req.params.name;
   console.log("The project name is: " + name); 
   res.render("project", {
       "projectName": name
   });
};