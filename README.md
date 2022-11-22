# Lab 8 - Starter
Maggie Liu  

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.  
   Within a Github action that runs whenever code is pushed.  
   This is because we can check to make sure all tests are passed before any pull request is closed and the branch is merged. These automated tests are to test all parts of the code anyway to ensure that everything is working when it is successfully pushed. Manually running the tests locally is redundant and burdensome, and running tests after completion of development is dangerous as test failures can build up from previous failures.  
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)  
   No. That would be unit testing. End to end is typically full-scale testing involving many different functions being called, not just one.  

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.  
   No. A message feature is the a huge feature in a messaging application because that is the main purpose of the app. Therefore, unit test for such a large portion of the app is unfeasible. There are lots of functions that are needed to write the message, send it out, be received and read by the user. These are all separate functions that need their own unit tests.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.  
   Yes. This is a single function feature that can be implemented in a single method that can then be tested in a unit test. Keeping a counter and doing something to prevent the user from typing more than 80 characters is feasible for a single function.

 

   