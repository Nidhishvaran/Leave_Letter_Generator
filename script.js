function Generate()
{
    let content;
    let name = document.getElementById("name_input").value
    let address = document.querySelector("#address_input").value
    //address = String(address.replace(",","<br>"))
    try{
        address = address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        address = address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        address = address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        address = address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    /*if ("," in address){
        address = String(address.replace(",","<br"))
    }
    else{
        console.log("no")
    }*/
    let rel_name = document.getElementById("receiver_name_input").value
    let rel_address = document.getElementById("receiver_address_input").value
    //rel_address = String(rel_address.replace(",","<br>"))
    try{
        rel_address = rel_address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        rel_address = rel_address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        rel_address = rel_address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        rel_address = rel_address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    try{
        rel_address = rel_address.replace(",","<br>");
        }
    catch(error){
        pass;
    }
    let from = document.getElementById("Fromdiv")
    let name_adress = name+"," + "<br>"+address+"."
    from.innerHTML = name_adress
    let rel_name_address = rel_name+","+"<br>"+rel_address+"."
    let to = document.getElementById("Todiv")
    to.innerHTML = rel_name_address
    let start_date = document.getElementById("fromdate").value
    let end_date = document.getElementById("todate").value
    let total_days = document.getElementById("total_days").value
    let case_ = document.querySelector("#reason").value
    let From = document.getElementById("From")
    From.innerHTML = "From";
    let To = document.getElementById("To")
    To.innerHTML = "To" 
    let res = document.getElementById("content")
    res.innerHTML = "Respected Sir/Mam,"
    let thq = document.getElementById("Tqdiv")
    thq.innerHTML = "Thankyou"
    
    let prof = document.getElementById("pro").value
    let place;
    if (prof == "School"){
        place = "school"
    }
    else{
        place = "office"
    }
    switch(case_)
    {
        
        case "viral fever":
            content = "Respected sir/mam ,As I am suffering with viral fever I will not be able to attend the "+place+" for the next "+total_days+" day(s).<br> Please accept this request and kindly grant me leave from "+start_date+" to "+end_date+".<br>I also request you to excuse my absence for the "+place+" during the mentioned period."
            break
        
        case "function":
            content = "Respected  Sir/mam, With due respect, it is stated that I have to attend an important family function on "+start_date+".<br> Therefore I will not be able to come to "+place+". However, I cannot miss this function as all of my family is attendings, and it is a must for me to join."
            break
        case "personal":
            content =  "would like to inform you that I will not be able to attend work on"+start_date+"due to personal reasons.<br> I kindly request you to grant me a leave for only"+total_days+" day/s.<br>Kindly I Request you to accept this. so I unable to attend "+place+" on the respective date(s)."
            break
        case "others":
            content = "you need to fill this portion"
            break

    }
    let C_Res = document.getElementById("Contentdiv")
    C_Res.innerHTML = content 
    let tqn_ = document.getElementById("tqname")
    tqn_.innerHTML = String(document.getElementById("name_input").value)
    let bydiv_ = document.getElementById("bydiv")
    bydiv_.innerHTML = " yours respectfully,"
}
