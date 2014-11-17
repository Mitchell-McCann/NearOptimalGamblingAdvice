Near Optimal Gambling Advice
=========================

A basic Texas Hold'Em Simulator. 

This simulator allows one human user to play against the computer. The goal is to give the computer near-perfect advice to always beat the human. 

This is a project for CIS 3203 - Introduction to Artificial Intelligence at Temple University.

###Build and Run 

The simulator runs using Node's V8 JavaScript engine. You can find more info [here.](https://www.nodejs.org) 

Once the repository is cloned, run:

```npm install ```

```node server.js```

Then, load  ```http://localhost:3000``` in your browser to play.


###Poker Hand Evaluator and Advice

The game theory is based off resarch done in this [study.](http://poker.cs.ualberta.ca/publications/IJCAI03.pdf)

Hand evaluations are made using the "2+2" algorithm. This method was made famous on this [thread](http://archives1.twoplustwo.com/showflat.php?Cat=0&Number=8513906&page=0&fpart=6&vc=1), but requires a 130MB "handranks.dat" file to be loaded into main memory before first use. This file contains a table lookup that is used by the algorithm. Speedtest.js will run through all 133,784,560 possible 7-card poker hands. 

Hand evaluations are done using a few simple endpoints setup within the app:
Example -

```POST: "As", "Ks", "Qs", "Js", "Ts", "3c", "5h"```  to endpoint  ```/test/evaluate7/ ```

Sample Return:

``` {"handType":9,"handRank":10,"value":36874,"handName":"straight flush"} ```








