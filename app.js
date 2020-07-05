/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

var diceDom = document.querySelector('img');





init();


document.querySelector('.btn-new').addEventListener('click', init);


document.querySelector('.btn-roll').addEventListener('click', function() {

        if(gamePlaying) {
            var dice = Math.floor(Math.random() * 6 + 1);
            
    
            diceDom.style.display = 'block';
            diceDom.src = 'dice-' + dice + '.png';        
            roundScore += dice;
        
        
        
            
            
            if(dice != 1) {
                
                document.getElementById('current-' + activePlayer).textContent = roundScore;
                
            } else {
                
                nextPlayer();
                
                
            }
        }
    

       
    

});

function nextPlayer() {

    if(activePlayer == 0) {
        activePlayer = 1;
        
        document.getElementById('current-0').textContent = '0';
        roundScore = 0;
        
        
               
        
    } else {
        activePlayer = 0;
        document.getElementById('current-1').textContent = '0';
        roundScore = 0;
        
        
    }
    
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    

}


document.querySelector('.btn-hold').addEventListener('click', updateScore)


function updateScore() {

    if(gamePlaying) {

        scores[activePlayer] += roundScore;

        
        var userInput = document.querySelector('input').value;
        var winingScore

        if(userInput) {
            winingScore = userInput
        } else {
            winingScore = 100;
        }
    
    
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = '0';
        
        if(scores[activePlayer] >= winingScore) {
    
        
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner';
            diceDom.style.display = 'none';
            
            gamePlaying = false;
            
        } else {
    
            nextPlayer(); 
        }
        

    }
    
   
    
    
}

function init() {
    gamePlaying = true;

    var number = Math.floor(Math.random() * Math.floor(2));

    scores = [0, 0];
    roundScore = 0;
    activePlayer = number;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-' + number + '-panel').classList.add('active');

    document.querySelector('img').style.display = 'none';
    
}

