Checklist: Fund Transfer Between Accounts Testing
1. Authorization
•	Verify successful login with valid credentials.
•	Verify login is not possible with invalid credentials (incorrect username/password, empty fields).
•	Verify that after several failed login attempts, the account is locked (if applicable).
2. Transfer Availability
•	Verify that the “Transfer Funds” option is available in the main menu.
•	Verify that clicking this option opens the correct screen.
•	Verify that the “Transfer” button becomes active after all required fields are filled.
3. Amount Input
•	Positive scenarios:
•	• Enter a valid amount (greater than 0, within limits).
•	• Verify that the amount is displayed correctly.
•	Negative scenarios:
•	• Try entering text instead of numbers → should be prohibited.
•	• Enter a negative number → should be prohibited.
•	• Enter 0 → transfer should not be allowed.
•	• Enter an amount exceeding the limit → system should display an error message.
•	• Enter too many digits (e.g., 10000000000000) → input should be limited.
4.	Currency Selection
•	If the system supports multi-currency accounts, verify correct currency selection.
5.	Recipient Account Selection
•	Positive scenarios:
•	• Enter the account number manually.
•	• Select an account number from the saved list.
•	Negative scenarios:
•	• Enter a non-existent account number → an error message should appear.
•	• Enter fewer digits than required → an error message should appear.
•	• Enter more digits than required → input should be restricted.
•	• Enter letters in the account number field → should be prohibited (unless IBAN format is supported).
•	• Enter an incorrectly formatted IBAN → an error message should appear.
6.	Transfer Cancellation
•	Verify that a “Cancel” button is available before confirming the transfer.
•	Click “Cancel” and ensure the transfer is not executed.
•	Verify that after cancellation, the system remains on the transfer screen (or returns to the main menu).
7.	Transfer Limits
•	Verify that it’s not possible to transfer an amount exceeding the set limit.
8.	Fee Verification
•	Ensure the transfer fee is calculated and displayed correctly.
9.	Transfer Confirmation
•	Positive scenarios:
•	• Confirm the transfer and verify that the funds are debited from the sender’s account.
•	• Verify that the recipient receives the exact amount.
•	• Verify that a success notification appears.
•	Negative scenarios:
•	• Disable the internet before confirming the transfer → an error message should appear.
•	• Close the app before the transfer completes → the transfer should not go through.
•	• Press the “Confirm” button twice → there should be no duplicate charge.
10.	Network/Server Error Handling
•	Verify the system’s behavior if the transfer is interrupted due to a connection loss.
11.	Transaction History
•	Verify that a successful transfer appears in the transaction history.
