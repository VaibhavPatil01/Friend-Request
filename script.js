let addFriend = document.getElementById("btn1");
let block = document.getElementById("btn2");
let stat = document.getElementById("status");
let flag1 = true;
let flag2 = true;

addFriend.addEventListener("click",function(){
    if(flag1 == true)
    {
        stat.innerHTML = "Friend";
        stat.style.color = "green";
        addFriend.innerHTML = "Remove";
        flag1 = false;
    }
    else
    {
        stat.innerHTML = "Stranger";
        stat.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        flag1 = true;
    }
})

block.addEventListener("click",function(){
    if(flag2 == true)
    {
        stat.innerHTML = "Blocked";
        stat.style.color = "red";
        block.innerHTML = "Unblock";
        addFriend.innerHTML = "Add Friend";
        flag2 = false;
        addFriend.disabled = true;
    }
    else
    {
        stat.innerHTML = "Stranger";
        block.innerHTML = "Block";
        flag2 = true;
        addFriend.disabled = false;
    }
})