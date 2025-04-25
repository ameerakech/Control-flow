//QUESTION ONE 
function schedule(days){
    days.forEach((day)=>{
        switch(day){
     case "Monday":
     console.log("Delivery overnight");
     break;
    
    case "Tuesday":
        console.log("Delivery during day")
            break;
    
       case "Thursday":
        console.log("Delivery of Parcels");
        break;
        
        default:
            console.log("No delivery available")
            break;
        }
    })
    }
 const days = (["Monday","Tuesday","Thursday","Wednesday"])
schedule(days)
    

//QUESTION TWO
       function book(bookAvailability){
        for(let i=0;i<bookAvailability.length;i++){
            if(bookAvailability[i]===`available`){
                console.log(`Ready to lend`)
            }
            else if(bookAvailability[i]===`borrowed`){
                console.log(`Checked out`)
            } 
        }
    }
    const bookAvailability = ["available", "borrowed","available"]
    book(bookAvailability)

//QUESTION THREE
        function getAge(age){
            for (let i=0;i<age.length;i++){
                if(age[i]>=18){
                    console.log("Adult")
                }
                else{
                    console.log("Minor")
                }
            }
        }
        const age= [12,18,4,20,5]
        getAge(age)



 //QUESTION FOUR
    
    function getLives(){
        let lives = 5
        while (lives >= 0){
         console.log(`You have ${lives} lives left`)
         lives--
        }
    }
       
    getLives()
    
//QUESTION FIVE

const feedBack =['Exellent','Good job', 'keep it up','pull up your socks']
    function userFeedBack(feedBack){
        let i = 0
        do{
            console.log(`your feedback is ${feedBack[i]}`);
            i++
        }while(i<feedBack.length);
    }

userFeedBack(feedBack)

  //QUESTION SIX

    function loginStatus(feedback){
        for(let i=0; i<feedback.length;i++){
            if(feedback[i]===`logged in`){
                console.log('Welcome back!')
            }
            else{
                console.log('Please log in')
            }
        }
    }
    const feedback = ['logged in','sign in','logged in']
    loginStatus(feedback)


    
//QUESTION SEVEN 
    function supportTicket(priorities){
        priorities.forEach((priority)=>{
            switch(priority){
                case "within 48 hours":
                    console.log("Low")
                    break;
    
                case "within 24 hours":
                    console.log("Medium")
                    break;  
    
                case "within one hour":
                    console.log("High")    
                    break;
    
                default:
                    console.log("Not priority") 
                    break;    
                    
            }
        })
    }
    const priority = ['within 48 hours', 'within 24 hours', 'within one hour']
    supportTicket(priority)  
    

 //QUESTION EIGHT

    function getCountDown(){
        let  countDown = 10
        while (countDown>=0){
            console.log(countDown);
            countDown--;
        }
    }
  
    getCountDown()