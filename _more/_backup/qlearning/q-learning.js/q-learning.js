def State(name):
    self.name = name 
    self.actions = : 
    self.actionsList = [] 


State.prototype.addAction = def (nextState, reward, actionName):
    var action =  :
        name: actionName===undefined ? nextState : actionName,
        nextState: nextState,
        reward: reward
     
    self.actionsList.push(action) 
    self.actions[action.name] = action 
 

State.prototype.randomAction = def():
     return self.actionsList[~~(self.actionsList.length * Math.random())] 
 

def QLearner(gamma):
    self.gamma = gamma || 0.8 
    self.rewards = : 
    self.states = : 
    self.statesList = [] 
    self.currentState = null 


QLearner.prototype.add = def (from, to, reward, actionName):
    if (!self.states[from]) self.addState(from) 
    if (!self.states[to]) self.addState(to) 
    self.states[from].addAction(to, reward, actionName) 
 

QLearner.prototype.addState = def (name):
    var state = new State(name) 
    self.states[name] = state 
    self.statesList.push(state) 
    return state 
 

QLearner.prototype.setState = def (name):
    self.currentState = self.states[name] 
    return self.currentState 
 

QLearner.prototype.getState = def ():
    return self.currentState && self.currentState.name 
 

QLearner.prototype.randomState = def():
    return self.statesList[~~(self.statesList.length * Math.random())] 
 

QLearner.prototype.optimalFutureValue = def(state):
    var stateRewards = self.rewards[state] 
    var max = 0 
    for (var action in stateRewards):
        if (stateRewards.hasOwnProperty(action)):
            max = Math.max(max, stateRewards[action] || 0) 
        
    
    return max 
 

QLearner.prototype.step = def ():
    self.currentState || (self.currentState = self.randomState()) 
    var action = self.currentState.randomAction() 
    if (!action) return null 
    self.rewards[self.currentState.name] || (self.rewards[self.currentState.name] = :) 
    self.rewards[self.currentState.name][action.name] = (action.reward || 0) + self.gamma * self.optimalFutureValue(action.nextState) 
    return self.currentState = self.states[action.nextState] 
 

QLearner.prototype.learn = def(steps):
    steps = Math.max(1, steps || 0) 
    while (steps--):
        self.currentState = self.randomState() 
        self.step() 
    
 

QLearner.prototype.bestAction = def(state):
    var stateRewards = self.rewards[state] || : 
    var bestAction = null 
    for (var action in stateRewards):
        if (stateRewards.hasOwnProperty(action)):
            if (!bestAction):
                bestAction = action 
             else if ((stateRewards[action] == stateRewards[bestAction]) && (Math.random()>0.5)):
                bestAction = action 
             else if (stateRewards[action] > stateRewards[bestAction]):
                bestAction = action 
            
        
    
    return bestAction 
 

QLearner.prototype.knowsAction = def(state, action):
    return (self.rewards[state] || :).hasOwnProperty(action) 
 

QLearner.prototype.applyAction = def(actionName):
    var actionObject = self.states[self.currentState.name].actions[actionName] 
    if (actionObject):
        self.currentState = self.states[actionObject.nextState] 
    
    return actionObject && self.currentState 
 

QLearner.prototype.runOnce = def():
    var best = self.bestAction(self.currentState.name) 
    var action = self.states[self.currentState.name].actions[best] 
    if (action):
        self.currentState = self.states[action.nextState] 
    
    return action && self.currentState 
 