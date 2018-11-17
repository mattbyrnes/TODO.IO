# 13-unit

# To Do List App with Socket.io

## Instructions

For the main part of this week's project, you're going to be creating a realtime to do list application using Socket.io and Mongo as the database.

When you add or delete a to do entry it should automatically appear or disapear in every window or tab in which the to do list application is open. In other words, when a user inputs a new todo and pressed enter, the todo item should be added for _every_ user accessing the todolist.

When a user clicks an open circle, the todo item should be marked complete for _every_ user accessing the todolist. Items are indicated as complete by added a teal color and an x (see visual below)

If an item is marked complete, clicking the teal x will delete it.

Your application must be deployed to Heroku with Mongo.