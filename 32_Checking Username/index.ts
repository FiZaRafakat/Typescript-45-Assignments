
//Qno 32 :"Checking Usernames"__ Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//Make a list of five or more usernames called current_users.

//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the  person will need to enter a new username. If a username has not been used, Print a message saying that the username is available.

// Make  sure your comparision is case sensitive. If "John" has been used, "JOHN" should not be accepted.


        
  let current_users = ["Fiza","Laiba","Anaya","Anabya","Kinza"]
  let new_users = ["FIZA","Maheen","Rida","Shanzay","Anaya"]

  new_users.forEach(new_one_user =>{
    let conditon = current_users.some(current_users => current_users.toLowerCase()=== new_one_user.toLocaleLowerCase())
    if (conditon){
        console.log(`Sorry ${new_one_user} is already taken!`);
        
    }else{
        console.log(`This username ${new_one_user} is available.`);
        
    }
  })