# API Endpoints

| Method  | URL                           | Request Body | Description                                                  |
|---------|-------------------------------|--------------|--------------------------------------------------------------|
| GET     | /news                         | n/a          | Returns an array of all news                                  |
| GET     | /news?categories=science      | n/a          | Returns news filtered by category                             |
| GET     | /news/:id                     | n/a          | Returns details of a specific news by ID                      |
| POST    | /news                         | n/a          | Creates a new news item                                       |
| PUT     | /news/:id                     | n/a          | Updates the news item by ID                                   |
| DELETE  | /news/:id                     | n/a          | Deletes a specific news by ID                                 |
| GET     | /comments?newId=1             | n/a          | Returns comments associated with a specific news ID           |
| GET     | /comments                     | n/a          | Returns all comments                                          |
| DELETE  | /comments/:id                 | n/a          | Deletes a specific comment by ID                              |
