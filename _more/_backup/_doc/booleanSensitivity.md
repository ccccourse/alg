# 布林敏感度問題

* 參考文獻 -- https://www.quantamagazine.org/mathematician-solves-computer-science-conjecture-in-two-pages-20190725/


布林敏感 (Boolean Sensitive): 對於某一組布林函數 f(x[1..n]), 以及指定的輸入 x = (0101....), 當我們改變其中一個位元 xi 時，如果 f 改變了結果，則我們稱該位元對 (f,x) 而言是敏感的。

![](https://d2r55xnwy6nx47.cloudfront.net/uploads/2019/07/Boolean_Sensitivity_FINAL560-1068x1720.jpg)

布林敏感度 (Sensitivity of the Boolean function) : 對於某一組布林函數 f(x[1..n]), 以及指定的輸入 x = (0101....), 改變一個輸入位元 xi 後， 會有多少個改變造成結果改變！ (the number that flipping a single input bit will alter the output bit)

整體布林敏感度 (Overall sensitivity of the Boolean function) : 對所有可能的輸入 x 中，敏感度最大的那一個值！


此問題的重要性：其他衡量方式都有多項式關係，但就布林敏感度沒有！


1992 年時，Craig Gotsman 證明，該問題可以 reduce 為下列問題：

> 如果你選擇超過一半的點染紅，是否一定有些點會有紅色鄰居？

如果只有一半(或以下)，那麼上述問題的回答是否定的。

> 例如 (0,0,0), (1,1,0), (1,0,1), (0,1,1) 就沒有任何兩點相鄰。

黃皓證明了只要超過一半的點，那麼必定有至少一點具有 $`\sqrt{n}`$ 個以上的同顏色鄰居。

黃皓使用了 Cauchy interlace theorem 來證明這件事情。

以下為《黃皓》論文的全文翻譯，其來源為 https://arxiv.org/abs/1907.00847


# 導出超立方體的子圖並且證明敏感度猜想 (Induced subgraphs of hypercubes and a proof of the Sensitivity Conjecture)

> 黃皓 (Hao Huang) ∗

## 摘要 (Abstract)

在本論文中，我們證明了每個包含 $2^{n-1}+1$ 頂點的超立方體子圖，都至少有個頂點包含 $\sqrt{n}$ 個同色鄰居。這個結果是最小可能上限，而且比 Chung, F¨uredi, Graham and Seymour 1988 年提出的 log 下限要高。這個結果同時證明了布林函數的敏感度是多項式相關的，也解決了 Nisan and Szegedy 所提出的《敏感度猜想》問題。

In this paper, we show that every $2^{n-1}+1$ vertex induced subgraph of the ndimensional cube graph has maximum degree at least $\sqrt{n}$. This result is best possible, and improves a logarithmic lower bound shown by Chung, F¨uredi, Graham and Seymour in 1988. As a direct consequence, we prove that the sensitivity and degree of a boolean function are polynomially related, solving an outstanding foundational problem in theoretical computer science, the Sensitivity Conjecture of Nisan and Szegedy

## 1 簡介 (Introduction)

符號 $Q^n$ 代表 n 維超立方體的圖, 其中的頂點是 $\{0, 1\}^n$ 的向量, 兩個頂點只差一位元時會有邊相連。對於這類的無向圖，我們用 $\Delta(G)$ 代表其最大分支數, 然後用 $\lambda_1(G)$  代表其相鄰矩陣的最大特徵值. 1988 年時 Chung, F¨uredi, Graham, and Seymour [3] 等三人證明了如果 $H$ 是 $Q^n$ 包含超過 $2^{n-1}+1$ 頂點的一個子圖, 那麼其 H 的最大分支數至少為 $(1/2-o(1)) log_2 n$. 另外、他們還建造出了一個 $(2^{n-1}+1)$ 個頂點的子圖，其最大分支數為 $\sqrt{n}$.

Let $Q^n$ be the n-dimensional hypercube graph, whose vertex set consists of vectors in $\{0, 1\}^n$, and two vectors are adjacent if they differ in exactly one coordinate. For an undirected graph G, we use the standard graph-theoretic notations $\Delta(G)$ for its maximum degree, and $\lambda_1(G)$  for the largest eigenvalue of its adjacency matrix. In 1988, Chung, F¨uredi, Graham, and Seymour [3] proved that if H is an induced subgraph of more than $2^{n-1}+1$ vertices of $Q^n$ , then the maximum degree of H is at least $(1/2-o(1)) log_2 n$. Moreover, they constructed a $(2^{n-1}+1)$ vertex induced subgraph whose maximum degree is $\sqrt{n}$.

在本論文中，我們將證明他們所建構的 $\sqrt{n}$ 子圖其實就是該問題的下限。必須注意的是當頂點只有 $2^{n-1}$ 個時仍然只有空子圖 (最大分支數仍為 0)，但是只要多一個頂點，則其最大分支數就會立刻上升到 $\sqrt{n}$.

In this short paper, we prove the following result, establishing a sharp lower bound that matches their construction. Note that the $2^{n-1}$ even vertices of $Q^n$ induce an empty subgraph. This theorem shows that any subgraph with just one more vertex would have its maximum degree suddenly jump to $\sqrt{n}$.

**定理 1.1**. 對於任意 $n \geq 1$ 的整數，若 $H$ 是 $Q^n$ 的子圖且包含超過 $(2^{n-1}+1)$ 個頂點，那麼：


$$
\Delta(H) \geq \sqrt{n}
$$

而且當 n 是平方數時該不等式會成立。

**Theorem 1.1**. For every integer $n \geq 1$, let $H$ be an arbitrary $(2^{n-1}+1)$-vertex induced subgraph of $Q^n$, then

$$
\Delta(H) \geq \sqrt{n}
$$

Moreover this inequality is tight when n is a perfect square.

The induced subgraph problem is closely related to one of the most important and challenging open problems in theoretical computer science: the Sensitivity vs. Block Sensitivity Problem. In his 1989 paper, Nisan [12] gave right bounds for computing the value of a boolean function in the CREW-PRAM model. These bounds are expressed in terms of two complexity measures of boolean functions. For $x \in {0,1}$ and a subset S of indices from $[n] = {1,...,n}$, we denote by $x^S$ the binary vector obtained from x by flipping all indices in S. For $f : {0,1}^n \to {0, 1}$, the local sensitivity s(f,x) on the input x is defined as the number of indices i, such that $f(x) \neq f(x^{\{i\}})$, and the sensitivity s(f) of f is max_x s(f,x). The sensitivity measures the local changing behavior of a boolean function with respect to the Hamming distance. It can be viewed as a discrete analog of the smoothness of continuous functions (see [7] for more in-depth discussions). The local block sensitivity bs(f,x) is the maximum number of disjoint blocks B1,..., Bk of [n], such that for each Bi, $f(x) \neq f(x^{B_i})$. Similarly, the block sensitivity bs(f) of f is $max_x bs(f, x)$. Obviously $bs(f) \geq s(f)$. A major open problem in complexity theory was posed by Nisan and Szegedy [13], asking whether they are polynomially related.

**猜想 1.2**. (敏感度猜想) 對於任意布林函數 f，存在一個常數 $C > 0$ 使得下式成立。

$$
bs(f) \leq s(f)^C.
$$

**Conjecture 1.2**. (Sensitivity Conjecture) There exists an absolute constant $C > 0$, such that for every boolean function f, 

$$
bs(f) \leq s(f)^C.
$$

Although seemingly unnatural, the block sensitivity is known to be polynomially related to many other important complexity measures of boolean functions, including the decision tree complexity, the certificate complexity, the quantum and randomized query complexity, and the degree of the boolean function (as real polynomials), and the approximate degree [10]. It is noteworthy that some of these relationship is quite subtle. For instance, although the degree and approximate degree both concern algebraic properties of boolean functions, the only known proof of their polynomial relationship goes through other more combinatorial notions.

The Sensitivity Conjecture, if true, would place the sensitivity in the same category with the other complexity measures listed above. Computationally, it would imply that “smooth” (low-sensitivity) functions are easy to compute in some of the simplest models like the deterministic decision tree model. Algebraically, it asserts that such functions
have low degree as real polynomials. Combinatorially, as observed by Gotsman and Linial [9], it is equivalent to the previous cube problem. We will discuss this connection later.

Despite numerous attempts for almost thirty years, the Sensitivity conjecture still remains wide open, and the best upper bound of bs(f) is exponential in terms of s(f). For example, Kenyon and Kutin [11] showed that $bs(f) = O(e^{s(f)} \sqrt{s(f)})$. For the lower bound, Rubinstein [14] first proposed a boolean function f with $bs(f) =\frac{1}{2} s(f)^2$ , showing a quadratic separation between these two complexity measures. Virza [16], and subsequently Ambainis and Sun [1] obtained better constructions which still provides quadratic separations. For a comprehensive survey with more background and discussions, in particular the many problems equivalent to the Sensitivity Conjecture, we refer the readers to the surveys of Buhrman and de Wolf [2], Hatami, Kulkarni and
Pankratov [10], and some recent works [4, 6, 8, 15].

Recall that $Q^n$ denotes the n-dimensional cube graph. For an induced graph H of $Q^n$, let $Qn-H$ denote the subgraph of $Q^n$ induced on the vertex set $V(Q^n)\setminus V(H)$. Let $Γ(H)=max{\Delta(H), \Delta(Q^n-H)}$. The degree of a boolean function f, denoted by deg(f), is the degree of the unique multilinear real polynomial that represents f. Gotsman and Linial [9] proved the following remarkable equivalence using Fourier analysis.

**定理 1.3**. (Gotsman and Linial [9]) 對於任意單調函數 $h : N \to R$ 而言，以下兩個陳述式等價的。

(a) 若 H 為 $Q^n$ 的子圖且 $|V(H)| \neq 2^{n-1}$, 則 $\Gamma(H) \geq h(n)$.
(b) 對於任意布林函數 f, $s(f) \geq h(deg(f))$.

**Theorem 1.3**. (Gotsman and Linial [9]) The following are equivalent for any monotone function $h : N \to R$.

(a) For any induced subgraph H of $Q^n$ with $|V(H)| \neq 2^{n-1}$, we have $\Gamma(H) \geq h(n)$.
(b) For any boolean function f, we have $s(f) \geq h(deg(f))$.

Note that Theorem 1.1 implies that h(n) can be taken as $\sqrt{n}$, since one of H and $Q^n-H$ must contain at least $2^{n-1}+1$ vertices, and the maximum degree $\Delta$ is monotone.

As a corollary, we have

**定理 1.4**. 對於任意布林函數 f,

$$
S(f) \geq \sqrt{deg(f)}.
$$

**Theorem 1.4**. For every boolean function f,

$$
S(f) \geq \sqrt{deg(f)}.
$$

This confirms a conjecture of Gotsman and Linial [9]. This inequality is also tight for the AND-of-ORs boolean function [10, Example 5.2]. Recall that the degree and the block sensitivity are polynomially related. Nisan and Szegedy [13] showed that $bs(f) \leq 2 deg(f)^2$ and this bound was later improved by Tal [15] to $bs(f) \leq deg(f)^2$. 

Combining these results we have confirmed the Sensitivity Conjecture.

**定理 1.5**. 對於任意布林函數 f,

$$
bs(f) \leq s(f)^4.
$$


**Theorem 1.5**. For every boolean function f,

$$
bs(f) \leq s(f)^4.
$$

## 2 Proof of the main theorem

To establish Theorem 1.1, we prove a series of lemmas. Given a $n \times n$ matrix A, a principal submatrix of A is obtained by deleting the same set of rows and columns from A.

**引理 2.1**. (柯西交錯定理 Cauchy’s Interlace Theorem) 若 A 是對稱的 $n \times n$ 矩陣, 而 B 是 A 的主子矩陣(principal submatrix) ，其大小為 $m \times m$ 且 $m \lt n$. 若 A 的特徵值為 $λ_1 \geq λ_2 \geq ... \geq λ_n$, 且 B 的特徵值為 $\mu_1 \geq \mu_2 \geq ... \mu_m$, 那麼對於任意 $1 \leq i \leq m$,

$$
\lambda_i \geq \mu_i \geq \lambda_{i+n-m}.
$$


**Lemma 2.1**. (Cauchy’s Interlace Theorem) Let A be a symmetric $n \times n$ matrix, and B be a $m \times m$ principal submatrix of A, for some $m \lt n$. If the eigenvalues of A are $λ_1 \geq λ_2 \geq ... \geq λ_n$, and the eigenvalues of B are $\mu_1 \geq \mu_2 \geq ... \mu_m$, then for all
$1 \leq i \leq m$,

$$
\lambda_i \geq \mu_i \geq \lambda_{i+n-m}.
$$

Cauchy’s Interlace Theorem is a direct consequence of the Courant-Fischer-Weyl min-max principle. A direct proof can also be found in [5].

**Lemma 2.2**. We define a sequence of symmetric square matrices iteratively as follows,

$$
\begin{split}
A_1=
\begin{bmatrix} 
0 & 1 \\
1 & 0 
\end{bmatrix} ,
\end{split}
\begin{split}
A_n=
\begin{bmatrix} 
A_n-1 & I \\
I & -A_{n-1} 
\end{bmatrix}
\end{split}.
$$

Then $A_n$ is a $2^n \times 2^n$ matrix whose eigenvalues are $\sqrt{n}$ of multiplicity $2^{n-1}$, and $-\sqrt{n}$  of multiplicity $2^{n-1}$.

**Proof**. We prove by induction that $A^2_n = n I$. For n = 1, $A^2_1 = I$. Suppose the statement holds for n - 1, that is $A^2_{n-1} = (n-1) I$, then

$$
\begin{split}
A^2_n = 
\begin{bmatrix} 
A^2_{n-1}+I & 0 \\
0 & A^2_{n-1}+I 
\end{bmatrix}
= nI.
\end{split}
$$

Therefore, the eigenvalues of $A_n$ are either $\sqrt{n}$ or $-\sqrt{n}$.  Since $Tr[A_n] = 0$, we know that $A_n$ has exactly half of the eigenvalues being $\sqrt{n}$ and the rest being $-\sqrt{n}$.

**Lemma 2.3**. Suppose H is an m-vertex undirected graph, and A is a symmetric matrix whose entries are in $\{-1,0,1\}$ and whose rows and columns are indexed by $V(H)$, and
whenever u and v are non-adjacent in H, $A_{u,v} = 0$. Then

$$
\Delta(H) \geq \lambda_1 := \lambda_1(A)
$$

**Proof**. Suppose $\vec{v}$ is the eigenvector corresponding to $\lambda_1$. Then $\lambda_1 \vec{v} = A \vec{v}$. Without
loss of generality, assume v1 is the coordinate of $\vec{v}$ that has the largest absolute value.
Then

$$
|\lambda_1 v_1| = |(A\vec{v})_1|) = | \sum_{j=1}^m A_{1,j}v_j| \leq |\sum_{j~1}A_{1,j} v_{j}| \leq \sum{j~1} |A_{1,j}||v_1|\leq \Delta(H)|v_1|.
$$

Therefore $|\lambda_1| \leq \Delta(H)$.
With the lemmas above, we are ready to prove the main theorem.


**Proof of Theorem 1.1**. Let $A_n$ be the sequence of matrices defined in Lemma 2.2. Note that the entries of $A_n$ are in $\{-1, 0, 1\}$. By the iterative construction of $A_n$, it is not hard to see that when changing every (-1)-entry of An to 1, we get exactly the adjacency matrix of $Q_n$, and thus $A_n$ and $Q_n$ satisfy the conditions in Lemma 2.3. For example, we may let the upper-left and lower-right blocks of $A_n$ correspond to the two (n-1)-dimensional subcubes of $Q_n$ , and the two identity blocks correspond to the perfect matching connecting these two subcubes. Therefore, a $(2^{n-1}+1)$-vertex induced subgraph H of $Q_n$ and the principal submatrix $A_H$ of $A_n$ naturally induced by H also satisfy the conditions of Lemma 2.3. As a result,

$$
\Delta(H) \geq \lambda_1(A_H).
$$

On the other hand, from Lemma 2.2, the eigenvalues of A_n are known to be

$$
\sqrt{n}, ..., \sqrt{n}, - \sqrt{n}, ..., - \sqrt{n}
$$

Note that $A_H$ is a $(2^{n-1}+1) \times (2^{n-1}+1)$ submatrix of the $2^n\times 2^n$ matrix $A_n$. By Cauchy’s Interlace Theorem,

$$
\lambda_1(A_H) \geq \lambda_{2^{n-1}}(A_n)=\sqrt{n}.
$$

Combining the two inequalities we just obtained, we have $\Delta(H) \geq \sqrt{n}$, completing the
proof of our theorem.

Remark. From the proof, one actually has $\lambda_1(H) \geq \lambda_1(A_H)\geq \sqrt{n}$. Since $\Delta(H) \geq \lambda_1(H)$, this result strengthens Theorem 1.1. More interestingly, the inequality $\lambda_1(H) \geq \sqrt{n}$ is best possible for all n. This can be seen by taking all the even vertices and one odd vertex of $Q_n$, then the induced subgraph is a copy of the star $K_{1,n}$ ,together with many isolated vertices. The largest eigenvalue of this induced subgraph is exactly $\sqrt{n}$.


## 3 Concluding Remarks

In this paper we confirm the Sensitivity Conjecture by proving its combinatorial equivalent formulation discovered by Gotsman and Linial. The following problems might be interesting.

* Given a “nice” graph G with high symmetry, denote by $\alpha(G)$ its independence number. Let f(G) be the minimum of the maximum degree of an induced subgraph of G on $\alpha(G)+1$ vertices. What can we say about f(G)? In particular,for which graphs, the method used in proving Theorem 1.1 would provide a tight bound?
* Back to the hypercube problem, let g(n,k) be the minimum t, such that every t-vertex induced subgraph H of Q_n has maximum degree at least k. In this paper, we show that $g(n, \sqrt{n})=2^{n-1}+1$. It would be interesting to determine g(n,k) asymptotically for other values of k.
* Although we have shown a tight bound between the sensitivity and the degree, at the time of writing this paper, the best separation between the block sensitivity bs(f) and the sensitivity s(f) is $bs(f)=\frac{2}{3} s(f)^2 - \frac{1}{3} s(f)$ shown in [1], which is quadratic. Theorem 1.5 only shows a quartic upper bound. Perhaps one could close this gap by directly applying the spectral method to boolean functions instead of to the hypercubes.


## Acknowledgment. 

The author would like to thank Benny Sudakov for simplifying
the proof of Lemma 2.2, Jacob Fox, Yan Wang and Yao Yao for reading an earlier draft of the paper, Matthew Kwan, Po-Shen Loh and Jie Ma for the inspiring discussions over the years, and the anonymous referee for helpful suggestions on improving the presentation of this paper.


## References

[1] A. Ambainis, X. Sun, New separation between spfq and bspfq, Electronic Colloquium on Computational Complexity (ECCC), 18, 116, 2011. Available at
http://eccc.hpi-web.de/report/2011/11.
[2] H. Buhrman, R. de Wolf, Complexity measures and decision tree complexity: a survey, Theoretical Computer Science 288 (2002), 21–43.
[3] F. Chung, Z. F¨uredi, R. Graham, P. Seymour, On induced subgraphs of the cube, J. Comb. Theory, Ser. A, 49 (1) (1988), 180–187.
[4] A. Drucker, A note on a communication game, CoRR, abs/1706.07890, 2017.
[5] S. Fisk, A very short proof of Cauchy’s interlace theorem for eigenvalues of Hermitian matrices, Amer. Math. Monthly 112 (2005), no. 2, 118.
[6] J. Gilmer, M. Kouck´y, M. Saks, A new approach to the sensitivity conjecture, Proceedings of the 2015 Conference on Innovations in Theoretical Computer Science, ACM, 2015, 247–254.
[7] P. Gopalan, N. Nisan, R. Servedio, K. Talwar, and A. Wigderson, Smooth Boolean functions are easy: efficient algorithms for low-sensitivity functions, 7th Innovations in Theoretical Computer Science Conference (ITCS), 2016.
[8] P. Gopalan, R. Servedio, A. Tal, A. Wigderson, Degree and sensitivity: tails of two distributions, 31st Conference on Computational Complexity, CCC 2016, Tokyo, Japan, 13:1–13:23.
[9] C. Gotsman, N. Linial, The equivalence of two problems on the cube. J. Combin. Theory Ser. A, 61 (1) (1992), 142–146.
[10] P. Hatami, R. Kulkarni, D. Pankratov, Variations on the Sensitivity Conjecture, Theory of Computing Library, Graduate Surveys 4 (2011), 1–27.
[11] C. Kenyon, S. Kutin, Sensitivity, block sensitivity, and ℓ-block sensitivity of Boolean functions, Information and Computation, 189 (1) (2004), 43–53.
[12] N. Nisan, CREW PRAMs and decision trees, Proc. 21st STOC, New York, NY, ACM Press (1989) 327–335.
[13] N. Nisan, M. Szegedy, On the degree of Boolean functions as real polynomials, Comput. Complexity, 4 (1992), 462–467.
[14] D. Rubinstein, Sensitivity vs. block sensitivity of Boolean functions, Combinatorica, 15 (2) (1995), 297–299.
[15] A. Tal, Properties and applications of boolean function composition, Proceedings of the 4th conference on Innovations in Theoretical Computer Science, ITCS ’13, 441–454.
[16] M. Virza, Sensitivity versus block sensitivity of boolean functions, Information Processing Letters, 111 (2011), 433–435.