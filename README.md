# Form Builder

## Requirements

Develop an app where you'll have to build a custom form builder with the following details.

Show the user two options that can be added to their custom form:

Field One: A select dropdown  
Field Two: A checkbox

1. A user can add as many fields as possible from the above list
2. Each field should capture the custom label the user will be using + their input type
3. User should be able to add more options to the Select/Checkbox. By default always show one option.
4. On saving the form created, show the model with the way data is being captured by console logging it.
5. You don't have to focus on styling for the assignment and it can be bare bones. But if you have time to spend, it would be good to see it being beautiful.

Hint: For UX, you can refer to Google Forms.

## Structure

On opening the app, the user will be greeted with a welcome page, where they can view all the forms they have already created and saved.  
This will be the top level route.  
In the beginning, it would show _No Forms Created_.  
Upon creating a new form, they will be taken to the `/create` route.  
Here, they will have a single question with a single option.  
For every question:  
 -There will be a top-level label.  
 -Followed by a toggle to set the question as compulsory or not.  
 -Followed by a dropdown to select between a Dropdown and a Checkbox.  
 -Followed by a single editable input field, which would be an option.  
 -Followed by a `+` symbol, which can be used to add new options.  
 -Options will have a delete button at the far right.  
 -The questions' UI will stay the same regardless of whether it's a checkbox or dropdown.  
At the end of the latest question, there will be a ` + New Question` button.  
Upon saving the form, it will take the user to the `/preview` route where they can make a dummy response, the output of which will be logged in the console.
The created form will be stored in localStorage, and will be available for preview the next time they open the top-level route.

There should ideally also be an `/edit/$formID` route which would have the same UI as the `/create` route, but it starts off with a form from localStorage.
