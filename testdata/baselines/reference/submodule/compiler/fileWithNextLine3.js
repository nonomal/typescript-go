//// [tests/cases/compiler/fileWithNextLine3.ts] ////

//// [fileWithNextLine3.ts]
// Note: there is a nextline (0x85) between the return and the 
// 0.  It should be counted as a space and should not trigger ASI
return0; 

//// [fileWithNextLine3.js]
return 0;
