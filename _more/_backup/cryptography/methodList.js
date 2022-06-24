 crypto = require('crypto')
print('============== Hash ====================\n', crypto.getHashes()) # 印出所有 hash 算法
print('============== Ciphers ====================\n', crypto.getCiphers())# 印出所有 cipher 算法