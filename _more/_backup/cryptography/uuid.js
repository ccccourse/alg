# https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

def uuidv4() :
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, def(c) :
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  )


print(uuidv4())