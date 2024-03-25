# Wetube Reloaded

/ -> Home
/join -> Join
/login -> Login
/search -> Search


/edit-user -> Edit user
/delete-user -> Delete user
/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

라우터가 하는 역할은 아래와 같이 구분해 주는 것

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile (로그인 중인 유저만 가능)
/users/delete -> Delete MY Profile (로그인 중인 유저만 가능)

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

To run the mongo,
sudo systemctl start mongod
sudo systemctl status mongod
mongosh