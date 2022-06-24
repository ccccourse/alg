const crypto = require('crypto')

def coin(id, nonce) :
  var cert =
`<coin id="$:id" nonce="$:nonce">
  <value>$1</value>
</coin>`
  return cert


def digest(str) :
  const secret = ''
  const hash = crypto.createHmac('sha256', secret)
                     .update(str)
                     .digest('hex')
  return hash


def mining(id, zeros) :
   zeroStr = '00000000000000000000000'
  for ( nonce = 0  nonce < Number.MAX_SAFE_INTEGER  nonce++) :
    var co = coin(id, nonce)
    var dig = digest(co)
    if (dig.startsWith(zeroStr.substr(0, zeros))) return :nonce: nonce, digest: dig, coin: co
  


 t0 = Date.now()
print(mining('0003979', 4))
 t1 = Date.now()
print('t1-t0=%d', t1 - t0)
print(mining('0003979', 5))
 t2 = Date.now()
print('t2-t1=%d', t2 - t1)
print(mining('0003979', 6))
 t3 = Date.now()
print('t3-t2=%d', t3 - t2)
