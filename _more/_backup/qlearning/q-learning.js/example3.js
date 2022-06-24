var config = :
    canvas: :
        id: 'canvas',
        width: 400,
        height: 400
    ,
    matrix: :
        height: 20,
        width: 20
    ,
    color: :
        empty: 'white',
        intruder: 'red',
        citizen: 'blue'
    ,
    reward: :
        collide: -100, //reward to stay in a place which will be occupied by and intruder
        moveToCitizen: -5, //reward to moving to an already occupied cell (with a citizen)
        moveToEmpty: -1, //reward of moving to am empty cell
        stay: 0 //reward of staying in the same cell and nothing happens
    ,
    density: 0.5,
    exploration: 0.2,
    scoreId: 'score'
 

def GameBoard(config) :
    self.time = 0 
    self.matrix = []  //the representation of the world
    for (var column = 0  column < config.matrix.width  column++) :
        self.matrix.push([]) 
        for (var line = 0  line < config.matrix.height  line++) :
            self.matrix[column].push(null) 
        
    
    var canvas = document.getElementById(config.canvas.id) 
    self.canvasContext = canvas.getContext('2d') 
    self.fillBoard() 


'''*
 * update agent position on board
 '''
GameBoard.prototype.updateAgent = def (agent) :
    var x, y 
    //clear the previous position
    if (agent.previousPosition) :
        x = agent.previousPosition.x 
        y = agent.previousPosition.y 
        self.matrix[x][y] = null 
    
    //set the new position on the board
    x = agent.position.x 
    y = agent.position.y 
    self.matrix[x][y] = agent 
 

GameBoard.prototype.updateCitizens = def () :
    for (var i = 0  i < self.citizens.length  i++) :
        self.updateAgent(self.citizens[i]) 
    
 

GameBoard.prototype.clear = def () :
    var context = self.canvasContext 
    context.clearRect(0, 0, config.canvas.width, config.canvas.height) 
 

GameBoard.prototype.draw = def () :
    self.clear() 
    var dx = config.canvas.width / config.matrix.width 
    var dy = config.canvas.height / config.matrix.height 
    var radius = Math.min(dx, dy) / 2.5 
    var pi2 = Math.PI * 2 
    var context = self.canvasContext 

    for (var column = 0  column < self.matrix.length  column++) :
        for (var line = 0  line < self.matrix[0].length  line++) :
            var agent = self.matrix[column][line] 
            //if (agent) print(agent.mark) 
            var color = agent ? config.color[agent.mark] : config.color.empty 
            context.beginPath() 
            context.arc(dx * (column + 0.5), dy * (line + 0.5), radius, 0, pi2, false) 
            context.fillStyle = color 
            context.fill() 
            context.lineWidth = 2 
            context.strokeStyle = '#333333' 
            context.stroke() 
        
    
 


def Intruder() :
    self.mark = 'intruder' 


def Citizen() :
    self.mark = 'citizen' 


'''*
 * functions to set position, for citizens and intruder
 '''
Intruder.prototype.setPosition = Citizen.prototype.setPosition = def (x, y) :
    self.previousPosition = self.position && :x: self.position.x, y: self.position.y 
    if (!self.position) self.position = : 
    self.position.x = x 
    self.position.y = y 
 

'''*
 * intruder position is predefined as a def of time
 * @param board
 * @param time
 '''
Intruder.prototype.move = def (matrix, time) :
    //print(time) 
    var cols = matrix.length 
    var rows = matrix[0].length 
    var v = 0.03 
    var x = ~~(cols * 0.5 * (Math.sin(2 * v * time) + 1)) % cols 
    var y = ~~(rows * 0.5 * (Math.sin(v * time) + 1)) % rows 
    self.setPosition(x, y) 
    //print(matrix) 
 


GameBoard.prototype.fillBoard = def () :
    //insert more food and poison
    self.citizens = [] 
    for (var column = 0  column < self.matrix.length  column++) :
        for (var line = 0  line < self.matrix[0].length  line++) :
            if (Math.random() < config.density) :
                var citizen = new Citizen() 
                citizen.setPosition(column, line) 
                self.citizens.push(citizen) 
                self.matrix[column][line] = citizen 
            
        
    
    self.intruder = new Intruder() 
    self.intruder.move(self.matrix, self.time) 
    self.matrix[self.intruder.position.x][self.intruder.position.y] = self.intruder 
    //print(self.intruder.position.x, self.intruder.position.y) 
    //print( self.matrix[self.intruder.position.x][self.intruder.position.y]) 
 


Citizen.prototype.currentState = def (matrix) :
    //get a representation of the objects in the 3x3 square in front of the agent
    var state = [] 
    var x = self.position.x 
    var y = self.position.y 
    for (var dcol = -1  dcol <= 1  dcol++) :
        for (var dline = -1  dline <= 1  dline++) :
            var line = ((y + dline) + config.matrix.height) % config.matrix.height 
            var column = ((x + dcol) + config.matrix.width) % config.matrix.width 
            state.push(matrix[column][line]) 
        
    
    return state 
 

Citizen.prototype.currentStateString = def (matrix) :
    return self.currentState(matrix).join('') 
 

Citizen.prototype.randomAction = def () :
    return :
        dx: ~~(3 * Math.random() - 1),
        dy: ~~(3 * Math.random() - 1)
    
 

Citizen.prototype.actionString = def (action) :
    return JSON.stringify(action) 
 

Citizen.prototype.applyAction = def (actionString) :
    var action = JSON.parse(actionString) 
    var x = (self.position.x + action.dx) % config.matrix.width 
    var y = self.position.y + action.dy % config.matrix.height 
    self.setPosition(x,y) 
 


GameBoard.prototype.objectAt = def (column, line) :
    return self.matrix[column][line] 
 

GameBoard.prototype.randomAction = def () :
    //actions are -1,0,+1
    return ~~(Math.random() * 3) - 1 
 


var game = new GameBoard(config) 

game.draw() 


var learner = new QLearner() 

var sid = setInterval(test, 100) 

def test() :
    game.time++ 
    game.intruder.move(game.matrix, game.time) 
    game.updateCitizens() 
    game.updateAgent(game.intruder) 
    game.draw() 


def slow() :
    clearInterval(sid) 
    sid = setInterval(step, 500) 


def fast() :
    clearInterval(sid) 
    sid = setInterval(step, 20) 


def moveAgents() :
    for (var i = 0  i < game.citizens.length  i++) :
        var citizen = game.citizens[i] 
        var state = citizen.currentStateString() 
        var action = learner.bestAction(state) 
        var randomAction = citizen.actionString(citizen.randomAction()) 

        if (action === null || action === undefined || (!learner.knowsAction(state, randomAction) && (Math.random() < config.exploration))) :
            action = randomAction 
        

        citizen.applyAction(action) 
    


def step() :
    //memorize current state

    var currentState = game.currentState() 
    //get some action
    var randomAction = game.randomAction() 
    //and the best action
    var action = learner.bestAction(currentState) 
    //if there is no best action try to explore
    if (action === null || action === undefined || (!learner.knowsAction(currentState, randomAction) && Math.random() < game.exploration)) :
        action = randomAction 
    
    //action is a number -1,0,+1
    action = Number(action) 
    //apply the action
    game.setPosition(game.intruderPosition.column + action) 
    //get next state, compute reward
    game.moveObjectsDown() 
    var collidedWith = game.objectAt(game.intruderPosition.column, game.intruderPosition.line) 
    var reward = game.rewardDictionary[collidedWith] 

    var nextState = game.currentState() 
    learner.add(currentState, nextState, reward, action) 

    //make que q-learning algorithm number of iterations=10 or it could be another number
    learner.learn(10) 

    game.addGreens() 

    //some feedback on performance
    game.score[collidedWith]++ 

    game.draw() 


def updateSummary() :
    var summary = "<br />green==food: " + game.score[game.food] 
    summary += "<br />gray=poison: " + game.score[game.poison] 
    summary += "<br />poison/food: " + Math.round(100 * game.score[game.poison] / game.score[game.food]) + "%" 
    document.getElementById(game.scoreId).innerHTML = summary 








