let score = JSON.parse(localStorage.getItem('score'));//will return null if no value is available
if(score===null)
{
    score = {
        Wins:0,
        Ties:0,
        Losses:0
    };
}

function update_score()
{
    document.querySelector('.score_js').innerText = (`Wins: ${score.Wins}  Losses: ${score.Losses}  Ties: ${score.Ties}`);
}
 update_score();

function pickComputerMove()//function in javascript //returning a string
{
    const random_number = Math.random();
    if(random_number>=0 && random_number<1/3)
    {
        return 'rock';
    }
    else if(random_number>=1/3 && random_number<2/3)
    {
        return 'paper';
    }
    else
    {
        return 'scissor';
    }
}
function play_game(player_move)//function with parameter 
{
    const ComputerMove = pickComputerMove();//calling the function pickcomputermove() 
    let result = '';

    if(player_move === 'rock')
    {
        if(ComputerMove==='rock')
        result = 'Tie';
        else if(ComputerMove==='paper')
        result = 'You Lose';
        else
        result  = 'You Win';
        
    }
    else if(player_move === 'paper')
    {
        if(ComputerMove==='rock')
        result = 'You Win';
        else if(ComputerMove==='paper')
        result = 'Tie';
        else
        result  = 'You Lose';
    }
    else if(player_move === 'scissor')
    {
        if(ComputerMove==='rock')
        result = 'You Lose';
        else if(ComputerMove==='paper')
        result = 'You Win';
        else
        result  = 'Tie';
    }
    if(result==='You Win')
        score.Wins++;
    else if(result==='You Lose')
        score.Losses++;
    else
        score.Ties++;
    document.querySelector('.p1').innerText = result;

    document.querySelector('.p2').innerHTML = `You Chose <img src="${player_move}-emoji.png" class="move-icon"> Computer chose <img src="${ComputerMove}-emoji.png" class="move-icon">`

      
    
    

    localStorage.setItem('score',JSON.stringify(score))//as this only support strings
     update_score();
}