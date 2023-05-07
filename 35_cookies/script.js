//declaring and assigning value to cookie
            //    name=value
document.cookie = "name=charan"
document.cookie = "age=19"
document.cookie = "item=milk"
//setting a session expire
                //  name=value; expires-Day, Date Month Year Time Zone
document.cookie = "product=slicer; expires=Mon, 01 May 2023 12:00:00 UTC";  
//to add more value or change value for an exesting cookie
document.cookie = "name=charan,raj"
//to read a cookie
let x = document.cookie;
console.log(x)
//to delete cookie
//set the expiery date to past
document.cookie = "item=milk; expires=Sat, 29 April 2023 12:00:00 UTC"
