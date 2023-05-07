
        // String Length
        // let a = prompt("Enter a string");
        // alert("The Lenght of " + a + " is " + a.length)

        // String Concatination 
        let str1 = "This Is JavaScript";
        let str2 = "This Is Css (joined using concat() function)";
        let result = str1.concat(" " + str2);
        console.log(result)

        // subString Fetching using substr() function
        let longStr = "This Is JavaScript, a scripting language";
        let newStr = longStr.substr(8, 10);
        console.log(newStr + " (using substr() function)");

        // subString Fetching using substring() function
        let longString = "This Is JavaScript, a scripting language";
        let newString = longString.substring(8, 18);
        console.log(newString + " (using substring() function)");
        
        // finding position of a character
        let indexString = "This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.indexOf("good") + " is the indexof  using indexOf() function");

        // finding position of a character by skipping first occurances
        indexString = "This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.indexOf("and", 25) + " using indexOf('', number) function");

        // finding position of a character in reverse order
        indexString = "This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.indexOf("JavaScript") + " using lastIndexOf() function");

        // trimming white space from start and end of the string
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.trim());

        // trimming white space only from the start of the string 
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.trimStart());

        // trimming white space only from the end of the string
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.trimEnd());

        // Check if a subString exists in a string or no
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.includes('easy') + " using includes() function");
    