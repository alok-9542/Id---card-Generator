function GenerateIDCard(){

    alert("Hello, JavaScript is Working fine");
    var user=document.getElementById("usnm").value;
    var colle=document.getElementById("collegename").value;
    var loc=document.getElementById("userlocation").value;
    //var filen=document.getElementById("filesub").value;
    var age=document.getElementById("aged").value;
    var contt=document.getElementById("contact").value;


    document.getElementById("dd6").innerHTML="<h3 align='center'>Generated ID Card</h3>";
    document.getElementById("dd4").innerHTML="<h3 >Name: &nbsp;"+user+"</h3>";
    document.getElementById("dd4").innerHTML+="<h3 id='f2'>College Name: &nbsp;"+colle+"</h3>";
    document.getElementById("dd4").innerHTML+="<h3>Location: &nbsp;"+loc+"</h3>";
    document.getElementById("dd4").innerHTML+="<h3>Age: &nbsp;"+age+"</h3>";
    document.getElementById("dd4").innerHTML+="<h3>Contact No.: &nbsp;"+contt+"</h3>";

  
}