//// [tests/cases/conformance/es7/exponentiationOperator/exponentiationOperatorSyntaxError1.ts] ////

//// [exponentiationOperatorSyntaxError1.ts]
// Error: early syntax error using ES7 SimpleUnaryExpression on left-hand side without ()
-1 ** 2;
+1 ** 2
1 ** -2 ** 3;
1 ** -2 ** -3;
-1 ** -2 ** -3;
-(1 ** 2) ** 3;

var temp = 10;

-++temp ** 3;
+--temp ** 3;
-temp++ ** 3;
+temp-- ** 3;
1 ** -++temp ** 3;
1 ** +--temp ** 3;
1 ** -temp++ ** 3;
1 ** +temp-- ** 3;

-3 ** temp++;
-3 ** temp--;
-3 ** ++temp;
-3 ** --temp;
+3 ** temp++;
+3 ** temp--;
+3 ** ++temp;
+3 ** --temp;
-3 ** temp++ ** 2;
-3 ** temp-- ** 2;
-3 ** ++temp ** 2;
-3 ** --temp ** 2;
+3 ** temp++ ** 2;
+3 ** temp-- ** 2;
+3 ** ++temp ** 2;
+3 ** --temp ** 2;




//// [exponentiationOperatorSyntaxError1.js]
// Error: early syntax error using ES7 SimpleUnaryExpression on left-hand side without ()
(-1) ** 2;
(+1) ** 2;
1 ** (-2) ** 3;
1 ** (-2) ** -3;
(-1) ** (-2) ** -3;
(-(1 ** 2)) ** 3;
var temp = 10;
(-++temp) ** 3;
(+--temp) ** 3;
(-temp++) ** 3;
(+temp--) ** 3;
1 ** (-++temp) ** 3;
1 ** (+--temp) ** 3;
1 ** (-temp++) ** 3;
1 ** (+temp--) ** 3;
(-3) ** temp++;
(-3) ** temp--;
(-3) ** ++temp;
(-3) ** --temp;
(+3) ** temp++;
(+3) ** temp--;
(+3) ** ++temp;
(+3) ** --temp;
(-3) ** temp++ ** 2;
(-3) ** temp-- ** 2;
(-3) ** (++temp) ** 2;
(-3) ** (--temp) ** 2;
(+3) ** temp++ ** 2;
(+3) ** temp-- ** 2;
(+3) ** (++temp) ** 2;
(+3) ** (--temp) ** 2;
