const games = [
    {
        player_ID: generateRandom(1,10),
        title:"Game #, Level: #",
        startAt: Date.now(),
        endsAt: Date.now(),
        score: generateRandom(0, 100000)

    },
    
]

function generateRandom(min= 0, max=100){
    let difference= max-min;
    let rand = Math.random();
    rand=Math.floor(rand* difference);
    rand=rand+min;
    return rand;
}
export default game;