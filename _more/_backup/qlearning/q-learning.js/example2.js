
def GameBoard():
    self.canvasId = "canvas" 
    self.scoreId = "score" 

    self.canvasWidth = 300 
    self.canvasHeight = 300 
    self.width = 10  //cells
    self.height = 10  //cells
    self.board = [] 
    self.empty = 0 
    self.agent = 1 
    self.foodPoisonRatio = 0.5 
    self.density = 0.1 
    self.food = 2 
    self.poison = 3 

    self.score = : 
    self.score[self.food] = 1 
    self.score[self.poison] = 1 
    self.score[self.empty] = 1 

    self.userAction = undefined 
    self.exploration = 0.2 
    self.canvasContext = undefined 

    self.colorDictionary = : 
    self.colorDictionary[self.food] = 'green' 
    self.colorDictionary[self.empty] = 'white' 
    self.colorDictionary[self.poison] = 'gray' 
    self.colorDictionary[self.agent] = 'black' 

    self.rewardDictionary = : 
    self.rewardDictionary[self.food] = 1 
    self.rewardDictionary[self.empty] = 0 
    self.rewardDictionary[self.poison] = -1 
    self.agentPosition = :
        line: self.height-1,
        column: ~~(self.width/2)
     
    self.init() 


GameBoard.prototype.init = def():
    self.board = []  //the representation of the world
    for (var column = 0  column < self.width  column++):
        self.board.push([]) 
        for (var line = 0  line < self.height  line++):
            self.board[column].push(self.empty) 
        
    
    var canvas = document.getElementById(self.canvasId) 
    self.canvasContext = canvas.getContext('2d') 
 

GameBoard.prototype.setPosition = def(column):
    //set agents position
    column = (column + self.width) % self.width  //circular world
    self.agentPosition.column = column 
    self.board[column][self.agentPosition.line] = self.agent 
 

GameBoard.prototype.addMoreObjects = def():
    //insert more food and poison
    for (var column = 0  column < self.width  column++):
        if (Math.random()<self.density):
            self.board[column][0] = Math.random() < self.foodPoisonRatio ? self.food : self.poison 
         else :
            self.board[column][0] = self.empty 
        
    
    self.setPosition(self.agentPosition.column) 
 

GameBoard.prototype.moveObjectsDown = def():
    //advance objects position 1 cell down
    for (var line = self.height - 1  line > 0  line--):
        for (var column = 0  column < self.width  column++):
            self.board[column][line] = self.board[column][line-1] 
        
    
 

GameBoard.prototype.currentState = def():
    //get a string representation of the objects in the 3x3 square in front of the agent
    var state = "S" 
    var line, column 
    for (var dcol = -1  dcol <= 1   dcol++):
        for (var dline = -3  dline < 0   dline++):
            line = (self.agentPosition.line + dline + self.height) % self.height 
            column = (self.agentPosition.column + dcol + self.width) % self.width 
            state += self.board[column][line] 
        
    
    return state 
 

GameBoard.prototype.objectAt = def(column, line):
    return self.board[column][line] 
 

GameBoard.prototype.randomAction = def():
    //actions are -1,0,+1
    return ~~(Math.random() * 3) - 1 
 

GameBoard.prototype.draw = def():
    var dx = self.canvasWidth/self.width 
    var dy = self.canvasHeight/self.height 
    var radius = Math.min(dx, dy)/2.5 
    var pi2 = Math.PI * 2 
    var context = self.canvasContext 
    context.clearRect ( 0 , 0 , self.canvasWidth , self.canvasHeight) 

    for (var line = 0  line < self.height  line++):
        for (var column = 0  column < self.width  column++):
            if (self.board[column][line]===self.empty) continue 
            context.beginPath() 
            context.arc(dx * (column + 0.5), dy * (line + 0.5), self.board[column][line]!==self.agent ? radius : radius*1.2, 0, pi2, false) 
            context.fillStyle = self.colorDictionary[self.board[column][line]] 
            context.fill() 
            context.lineWidth = 2 
            context.strokeStyle = '#333333' 
            context.stroke() 
        
    
 

var game = new GameBoard() 

var learner = new QLearner() 

var sid = setInterval(step, 500) 

def slow():
    clearInterval(sid) 
    sid = setInterval(step, 500) 


def fast():
    clearInterval(sid) 
    sid = setInterval(step, 20) 


def step():
    //memorize current state

    var currentState = game.currentState() 
    //get some action
    var randomAction = game.randomAction() 
    //and the best action
    var action = learner.bestAction(currentState) 
    //if there is no best action try to explore
    if (action===null || action === undefined || (!learner.knowsAction(currentState, randomAction) && Math.random()<game.exploration)):
        action = randomAction 
    
    //action is a number -1,0,+1
    action = Number(action) 
    //apply the action
    game.setPosition(game.agentPosition.column + action) 
    //get next state, compute reward
    game.moveObjectsDown() 
    var collidedWith = game.objectAt(game.agentPosition.column, game.agentPosition.line) 
    var reward = game.rewardDictionary[collidedWith] 

    var nextState = game.currentState() 
    learner.add(currentState, nextState, reward, action) 

    //make que q-learning algorithm number of iterations=10 or it could be another number
    learner.learn(10) 

    game.addMoreObjects() 

    //some feedback on performance
    game.score[collidedWith]++ 
    var summary = "<br />green==food: " + game.score[game.food] 
    summary += "<br />gray=poison: " + game.score[game.poison] 
    summary += "<br />poison/food: " + Math.round(100*game.score[game.poison]/game.score[game.food]) + "%" 
    document.getElementById(game.scoreId).innerHTML = summary 
    game.draw() 








