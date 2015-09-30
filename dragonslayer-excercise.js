



    /**
     * Created by session2 on 9/28/15.
     */
    var slaying = true;
    var youHit = Math.floor(Math.random() * 100);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;

    while (slaying) {
        if (youHit) {
            console.log("You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;

            if (totalDamage >= 1000000) {
                console.log("Congrats! You won !");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
        } else {
            console.log("You got utterly burned mate.");
            slaying = false;
        }
    }
    var dragonSlayer = prompt( "which way do you fly")
    switch (dragonSlayer){
        case 'left':
            console.log("You're flying left");
            break;
        case 'right':
            console.log("You're flying right");
            break;
        case 'straight':
            console.log("You're flying straight");
            break;
        default:
            console.log("You're flying");
    }