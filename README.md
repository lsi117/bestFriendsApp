# bestFriendsApp
Find your new best-friend!



The project's name and description
Project Name: Best Friends
Description: My app is intended for saving pet shelters that you find nearby. Once you find a nearby pet shelter you can save(add) it by name zipcode a description and pets availible for adoption! Find your new best friend!

Your wireframes and user stories
Wireframe: https://github.com/lsi117/bestFriendsApp/blob/master/Screen%20Shot%202017-11-01%20at%206.36.59%20PM.png

User Story: The user wants to adopt a pet. So the user ressearches on the web what pet shelters they would like to visit and what animals they would like to adopt. After researching the user then uses my app to save those pet shelters. User can add new shelters with their name, zipcode, a description, and pets availible for adoption. User can also edit the shelters zipcode and description(maybe put down some notes about the shelter)..if the user doesnt want the shelter any more then they can also delete the shelter.

The technologies, APIs, and modules you used and a description of each

I didn't use an API since i created my own database to work with in psql.
modules used: method-override(for the forms, put, post), bcryptjs(used for password encryption), passport(used for the password), passport-local(password). Most technologies used are to log in user ensuring correct password and security. 



A code snippet of a part of the app you're particularly proud of

single.ejs 

  <h1>Need to update information about this shelter? Fill out the form below.</h1>
  <form action="/bfAllView/<%= allData.id%>?_method=PUT" method="POST" accept-charset="utf-8">
      <input
        type="hidden"
        name="name"
        placeholder="name"
        value="<%= allData.name %>"  />
     <label>Update Shelter Zipcode: </label>
      <input
        type="number"
        name="zipcode"
        placeholder="zipcode"
        value="<%= allData.zipcode %>"  />
      <label>Update Shelter Description: </label>
      <input
        type="text"
        name="description"
        placeholder="description"
        value="<%= allData.description %>" />
        <input
        type="hidden"
        name="pets"
        placeholder="pets"
        value="<%= allData.pets %>"  />
      <input type="submit" value="Update it!" />
      
      I like this because i tried to work on my neatness and i think that this page displays it well.
      

Any things you plan to fix or features you plan to add
I think that I will try to make another version of my app using an API..maybe get a map of somesort and pin the actual locations of each shelters on the map that the user can see. I think that will make my app much more visually interesting.

