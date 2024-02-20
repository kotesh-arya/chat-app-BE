# Chat-App Backend Route-types:

## Version-1 Routes
- **User Authentication Routes:** These routes handle user authentication, including registration, login, logout, and password reset functionalities.

- **Chat Room Routes:** These routes manage the *creation*, *retrieval*, *updating*, and *deletion* of chat rooms. 
    They handle operations like
  -  creating a new chat room
  -  fetching a list of available chat rooms, 
  - joining or leaving a chat room, etc

- **Message Routes:** These routes are responsible for *sending*, *receiving*, and *managing messages ****within a chat room***. 
   They handle operations such as 
  - sending a message
  - fetching message history
  -  deleting messages
  -  editing messages, etc.

 - **User Profile Routes:** These routes deal with user profiles, allowing users to *view* and *update* their ***profile information***, including *username*, *avatar*, *status*, etc.
- **Notification Routes:** These routes handle notifications, such as ***sending real-time notifications*** to users ***when they receive new messages***.

## Version-2 Routes
- **Search Routes:** If your application supports searching for users, chat rooms, or messages, you'll need routes to handle search queries and return relevant results.

- **File Upload/Download Routes:** If your chat application supports file sharing, you'll need routes to handle file uploads and downloads.

- **Activity/Status Routes:** These routes manage user activity and status, such as setting online/offline status, displaying the last seen time, etc.
