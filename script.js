const f=document.createElement("form");
const l1=document.createElement("label");
const t=document.createElement("input");
const l2=document.createElement("label");
const ta=document.createElement("textarea");
const l3=document.createElement("label");
const l4=document.createElement("label");
const l5=document.createElement("label");
const l6=document.createElement("label");
const l7=document.createElement("label");
const s=document.createElement("select");
const o1=document.createElement("option");
const o2=document.createElement("option");
const o3=document.createElement("option");
const c1=document.createElement("input");
const c2=document.createElement("input");
const c3=document.createElement("input");
const b1=document.createElement("br");
const b2=document.createElement("br");
const b3=document.createElement("br");
const b4=document.createElement("br");
const b5=document.createElement("br");
const b6=document.createElement("br");
const b7=document.createElement("br");
l1.innerText="FirstName:";
l3.innerText="Choose a car:";
l4.innerText="Choose an option:";
l5.innerText="No";
l6.innerText="Boh";
l7.innerText="Si";
document.body.appendChild(f);
document.body.appendChild(l1);
document.body.appendChild(t);
document.body.appendChild(b1);
l2.innerText="Description:";
document.body.appendChild(l2);
document.body.appendChild(b7);
document.body.appendChild(ta);
document.body.appendChild(b2);
document.body.appendChild(l3);
document.body.appendChild(s);
document.body.appendChild(b3);
o1.value="Volvo";
o1.text="Volvo";
s.id="Myselect";
document.getElementById("Myselect").appendChild(o1);
o2.value="Mercedes";
o2.text="Mercedes";
document.getElementById("Myselect").appendChild(o2);
o3.value="dr";
o3.text="dr";
document.getElementById("Myselect").appendChild(o3);
l4.innerText="Choose an option:";
l5.innerText="No:";
l6.innerText="Boh:";
l7.innerText="Si:";
document.body.appendChild(l4);
document.body.appendChild(b4);
document.body.appendChild(l5);
c1.type="checkbox";
c1.value="no";
c2.type="checkbox";
c2.value="boh";
c3.type="checkbox";
c3.value="Si";
document.body.appendChild(c1);
document.body.appendChild(b5);
document.body.appendChild(l6);
document.body.appendChild(c2);
document.body.appendChild(b6);
document.body.appendChild(l7);
document.body.appendChild(c3);
