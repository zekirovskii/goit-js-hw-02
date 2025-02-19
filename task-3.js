function checkForSpam(message) {
    const blocked1 = "spam";
    const blocked2 = "sale";

    const newMessage = message.toLowerCase();

       if (newMessage.includes(blocked1) || newMessage.includes(blocked2)) {
        return true;
    }
    else {
        return false;
    }
 
    /*
    return Boolean(newMessage.includes(blocked1) || newMessage.includes(blocked2));   // farklı bir yol :D
    */
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
