# README

Senior Software Engineer Coding Exercise - Book collection manager
Build a single-page web application with a React/Redux front-end that communicates with a *Ruby/Rails back-end, backed by postgres, to manage a book collection.

*Ideally - if you have another choice, please let us know what it is prior to coding so that we can make sure it's suitable for evaluation.

Scope
The root page should be the book collection index page with links to 1. add a book, 2. show a book, 3. update a book, and 4. delete a book.  Feel free to create whatever user interaction you would like, such as loading spinners, success messages, etc. if they are not specifically detailed here.

Index page
When the title of a book is clicked, the app should navigate to the show page for the book.

When the 'Add' link for a book is clicked, the app should navigate to the 'Add a book' page.

When the 'Edit' link for a book is clicked, the app should navigate to a page with a form that allows editing of all fields. The same validations as create should apply here as well.

When the 'Delete' link for a book is clicked, a success message should be displayed after a successful response from the server for a few seconds.

Add a book page
Allow user to create a book with at least the following 3 fields:

ISBN (required)
Title (required)
Author (required)
Illustrator
Edition
Notes/Description
After filling in all fields, clicking a submit button should create the book in the collection and redirect back to the index page, with the newly added book in the list.

The API request to the backend should not be sent if any required fields are not filled in. An appropriate error message should be displayed if the user tries to submit with a missing field.

A cancel button, or navigation link, should allow the user to go back to the index page.

Book display page
Display all the book information.

Add links to navigate back to the index page, and to edit or delete the book.

When edit button is clicked, navigate to the edit page with the book data pre-populated in the form.

When delete button is clicked, delete the book from the API and navigate back to the index page on successful response. The deleted book should no longer appear in the index page. On failed API response, display an error message that disappears after a few seconds with the API error.

Edit page
Display all book information in pre-populated editable input fields.

Changing a field value and clicking the submit button should send an API request to the back end to save the update. An API request should not be made if there are no changes or any required fields are missing. Display an appropriate error message in either case after the submit button is clicked.

Tests
Show an example of at least 1 unit or E2E test.
