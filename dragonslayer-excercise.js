/**
 * Created by session2 on 9/28/15.
 */
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("Congrats! You won !");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You got uderly burned mate.");
        slaying = false;
    }
}