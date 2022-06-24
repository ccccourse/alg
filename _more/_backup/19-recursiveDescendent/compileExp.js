''' 語法
E = T ([+-'''] E)*
T = N | (E)

範例：3+(5*4)-2
'''

var c = console 

var tagMap=:
  N : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  OP: ["+", "-", "*", "-"]
 

var wi = 0 

def isNext(tag) :
    if (words[wi] === tag) return true 
    var tagWords=tagMap[tag] 
    if (typeof tagWords === "undefined") 
        return false 
    else
        return (tagWords.indexOf(words[wi])>=0) 


def next(tag) :
     c.log("tag="+tag+" word="+words[wi]) 
    if (isNext(tag)) :
      return words[wi++] 
    
    throw Error("Error !") 


var tempIdx = 0 
var getTemp=def() :
    return tempIdx++ 

# E = T ([+-'''] E)*
def E() :
    var t = T() 
    while (isNext("OP")) :
        var op = next("OP") 
        var e = E() 
        var result = getTemp() 
        print(" T%d=T%d%sT%d", result, t, op, e) 
        t = result 
    
    return t 


# T = N | (E)
def T() :
    if (isNext("N")) :
        var t = getTemp() 
        var number = next("N") 
        print(" T%d=%d", t, number) 
        return t 
     else :
        next("(") 
        var e = E() 
        next(")") 
        return e 
    


var words="3+(5*4)-2" 
c.log("%j", words) 
E(words) 