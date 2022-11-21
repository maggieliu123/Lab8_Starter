# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   Within a Github action that runs whenever code is pushed.
   This is because we can check to make sure all tests are passed before any pull request is closed and the branch is merged. These automated tests are to test all parts of the code anyway to ensure that everything is working when it is successfully pushed. Manually running the tests locally is redundant and burdensome, and running tests after completion of development is dangerous as test failures can build up from previous failures.
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   No. That would be unit testing.

   