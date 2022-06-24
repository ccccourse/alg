 kmp = require('./kmp')

print('kmp(she sells seashells by the seashore, shell) = ', kmp('she sells seashells by the seashore', 'shell'))  # 13
print('kmp(she sells seashells by the seashore, seaweed) = ', kmp('she sells seashells by the seashore', 'seaweed'))  # -1