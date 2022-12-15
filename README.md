# miniature-pancake

## Description 
https://drive.google.com/file/d/1N6OZgRS5TrZB2EiVJwmFcWeyigZi5_j-/view<br>

This application is the back end of a social media website using a NOSQL database. 


## Table of Contents 

[Usage](#usage)<br>
[Road Map](#road-map)<br>
[License](#license)


## Usage 
This is link to view a video walkthrough of the application:
https://drive.google.com/file/d/1N6OZgRS5TrZB2EiVJwmFcWeyigZi5_j-/view

First, the user will type 

> npm start

into the application terminal to create a connection with the local host. The user can then navigate to insomnia to test the api routes. <br>

Once in insomnia, the user can get all users, create a user, and get one, update, and delete a user by it's id. Through the user route, users are associated with each other through a friends list. At the end of the friends array, there is a counter to indicate now many friends each user has. A friend can be added and removed from the friend list by using it's id. When the friend is removed, the counter indicates one less friend in the list, but the user is not deleted from the application as a whole, just from the friend list. 
![Alt text](./images/pancake-get-all-user.png)
![Alt text](./images/pancake-create-user.png)
![Alt text](./images/pancake-get-one-user.png)
![Alt text](./images/pancake-update-user-by-id.png)
![Alt text](./images/pancake-delete-single-user.png)
![Alt text](./images/pancake-add-friend.png)
![Alt text](./images/pancake-delete-friend-from-list.png)
![Alt text](./images/pancake-friend-count.png)

In addition to editing users, individuals can get all thoughts and their associated reactions, create thoughts, and get one, update, and delete a thought by it's id. 
![Alt text](./images/pancake-get-all-thought.png)
![Alt text](./images/pancake-create-thought.png)
![Alt text](./images/pancake-thought-by-id.png)
![Alt text](./images/pancake-update-thought.png)

The application also allows for other users to react to thoughts using a thought's id and to delete those reactions using the reaction id. Underneath the reaction array, there is a counter that indicates how many reactions are associated with each thought. As reactions are added and removed, the counter increases and descreases respecitvely. 
![Alt text](./images/pancake-create-reaction.png)
![Alt text](./images/pancake-delete-reaction.png)


## Road Map

Future iterations of this application will include a front end to create a fully functioning social media website. 

## License 