function wfill(w, w2, x, y, c=1) {
  let n2 = w2.length
  for (let i=0; i<n2; i++) {
    for (let j=0; j<n2; j++) {
      w[x+i][y+j] = w2[i][j]*c
    }
  }
  return w
}

export function walsh(n) {
  if (n === 1) return [[1]]
  let w2 = walsh(n/2)
  let w = new Array(n)
  for (let i=0; i<n; i++) w[i] = new Array(n)
  let n2 = n/2
  wfill(w, w2, 0, 0, 1)
  wfill(w, w2, 0, n2, 1)
  wfill(w, w2, n2, 0, 1)
  wfill(w, w2, n2, n2, -1)
  return w
}
