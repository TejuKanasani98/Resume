function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if (xhr.readyState ===4 && xhr.status=="200") {
			callback(xhr.responseText);
		}
	} 
	xhr.send();
}
loadjson("data.json",function(text){
      let data=JSON.parse(text);
      console.log(data);
      basic(data.details);
      carr(data.career);
      edu(data.education);
      skills(data.skills);
	})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(MIC){
var image=document.createElement("img");
image.src=MIC.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=MIC.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=MIC.email;
left.appendChild(email);
var phone=document.createElement("h2");
phone.textContent=MIC.phone;
left.appendChild(phone);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
    var e=document.createElement("h1");
    e.textContent="Educational Details";
    right.appendChild(e);
    e.appendChild(document.createElement("HR"));
	var un=document.createElement("ul");
	right.appendChild(un);
	for (var i = 0; i < education.length; i++) {
		var l=document.createElement("h2");
        l.textContent=education[i].course;
        un.appendChild(l);
        var l1=document.createElement("li");
        l1.textContent=education[i].college;
        un.appendChild(l1);
        var l2=document.createElement("li");
        l2.textContent=education[i].CGPA;
        un.appendChild(l2);
        }
     }
     function skills(skilldata){
     	var s=document.createElement("div");
     	s.classList.add("sset");
     	right.appendChild(s);
     	var head=document.createElement("h1");
     	head.textContent="Skill Set";
     	s.appendChild(head);
     	s.appendChild(document.createElement("HR"));
     	var t=document.createElement("table");
     	var tabledata="";
     	for (var i = 0; i < skilldata.length; i++) {
            tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
            t.innerHTML=tabledata;
     		}
     		head.appendChild(t);
   }
 function carr(career){
    var c=document.createElement("div");
    c.classList.add("career");
    right.appendChild(c);
    var e=document.createElement("h1");
    e.textContent="Career Objective";
    c.appendChild(e);
    c.appendChild(document.createElement("HR"));
    var para=document.createElement("p");
    para.textContent=career.co;
    e.appendChild(para);
 }