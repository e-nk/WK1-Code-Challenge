# Week1- CODE CHALLENGE
<h1>Challenge 1<h1>
Challenge 1: Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
       > A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

To run this program on your computer, follow through these steps:
        - fork or clone this repository into your local computer
        ```javascript
        ****
                git@github.com:e-nk/WK1-Code-Challenge.git
        ****
        ```
        - open your cloned repository on the terminal
                cd WK1-Code-Challenge
        - run npm install prompt-sync
        - Open the repository in your code editor in this case I am running Vs code.
                code .
        - You can test this program on your Vs code terminal by running. It should give you a prompt to enter students marks
                node studentgrades.js
        
You have successfully completed the first Challenge.

<h1>Challenge 2 <h1>
Challenge 2: Speed Detector (Toy Problem)
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

To run this program on your computer, follow through these steps, assuming you have the repository in your local computer and it is open in Vs code as demonstrated above on challenge 1.

        - On your vs-code terminal, run the following command to run the program:
                ```javascript
        ****
                node speeddetector.js

        ****
        ```
        - It should give you a prompt to enter car speed.
```javascript
****
enock@Viscount:~/Development/code/phase-1/week-challenge$ node speeddetector.js
Please enter car speed: 90
The total number of points is: 4
****
```
   
<h1>Challenge 3 <h1>

Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm 

https://www.aren.co.ke/payroll/taxrates.htm

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


To run this program on your computer, follow through these steps, assuming you have the repository in your local computer and it is open in Vs code as demonstrated above on challenge 1.

  - On your vs-code terminal, run the following command to run the program:
                ```javascript
        ****
                node netsalary.js

        ****
        ```


        It should give you a prompt to input the basic salary, total benefits and pensionable.

        ```javascript
       
        ****enock@Viscount:~/Development/code/phase-1/week-challenge$ node netsalary.js
        Please enter your basic salary : 500000000
        Please enter your total benefits: 340000
        Please enter your pensionable pay: 500000
        Your PAYEE is:  125000000
        Your NHIF deductions are:  150
        You nssf deductions are:  8333333.333333334
        Your Gross Salary is:  500340000
        enock@Viscount:~/Development/code/phase-1/week-challenge$ ****
        ```