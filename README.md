# Collective Pulse

**See the App!** [Collective Pulse Deployment](https://collective-pulse.netlify.app/)

**App Logo**  
![App Logo](/public/cover.png)

---

## Description

Collective Pulse is a collaborative urban digital magazine where everyone can submit articles and stay informed about interesting facts across various categories. The app allows users to write, edit, and delete articles, as well as interact through comments, likes, and filters by date or views.

---

## Client Repo here

[Collective Pulse Frontend](https://github.com/ana-badolato/Collective-Pulse)

## Server Repo here

[Collective Pulse Backend](https://github.com/ana-badolato/Collective-Pulse-BackEnd)

---

## Technologies, Libraries & APIs used

- React
- React Router
- Axios
- Node.js
- Express
- MongoDB
- CSS
- Vite (for environment configuration)
- Other: Modal, Carousel, Custom animations

---

## Backlog Functionalities

- Implement a comment system for articles.
- OAuth integration for login with Google/Facebook.
- "Like" or "Favorite" functionality for articles.
- Advanced search filters (by author, date, category).
- Author profiles with customization options.
- Email notifications for new articles or events.
- Dynamic category management for admin users.

---

## Client Structure

### User Stories

- **404** - As a user, I want to see a friendly error page when I access a page that does not exist so I know it’s my mistake.
- **500** - As a user, I want to see a proper error page when the server fails so I know it's not my fault.
- **Homepage** - As a user, I want to access the homepage to explore what the magazine is about.
- **Sign up** - As a user, I want to sign up so that I can start submitting my articles.
- **Login** - As a user, I want to log in to manage my articles and personalize my feed.
- **Logout** - As a user, I want to log out securely from my account.
- **View Articles** - As a user, I want to browse through the list of articles across different categories.
- **Submit Article** - As a user, I want to create and upload an article under different categories.
- **Search** - As a user, I want to search for articles using keywords or category filters.
- **Edit/Delete Article** - As a user, I want to be able to modify or delete my own articles.

---

## Client Routes

| Path                  | Page            | Components                        | Behavior                                                                             |
| --------------------- | --------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| `/`                   | Home            | `Home`, `SearchBar`, `NewsList`   | Homepage showing recent and featured articles, with a search bar and category links. |
| `/signup`             | Signup          | `SignupForm`                      | Sign-up form for new users, redirects to the homepage after successful signup.       |
| `/login`              | Login           | `LoginForm`                       | Login form for existing users, redirects to homepage after successful login.         |
| `/profile`            | Profile         | `EditProfile`                     | Profile page with options to edit user details, logout option available.             |
| `/details/:id`        | Article Details | `ArticleDetails`, `Footer`        | View a detailed page of the selected article, with edit and delete options.          |
| `/category/:category` | Category        | `CategoryPage`                    | Filtered view showing all articles under the selected category.                      |
| `/searchresults`      | Search Results  | `SearchResultsList`               | Displays the articles matching the search criteria.                                  |
| `/games/list`         | Game List       | `GameList`, `AddGame`, `GameCard` | Displays all games available for review.                                             |
| `/games/favourites`   | Favourites      | `FavouriteList`, `GameCard`       | Shows the user's favorite games.                                                     |

---

## Other Components

- **Navbar** - Displays the main site navigation links.
- **Footer** - Provides essential links and site information.
- **SearchBar** - Interactive search bar for finding articles by keywords or categories.
- **Carousel** - Highlights featured or trending articles.
- **CardM** - Displays article previews in a card format.
- **DeleteModal** - Modal for confirming article deletions.
- **LabelCategory** - Labels for categories with custom styles.
- **ScrollToTop** - Button to scroll back to the top of the page.

---

## Links

### Collaborators

- **Ana Badolato**

  - [Ana's GitHub](https://github.com/ana-badolato)

- **Javier Catral**
  - [Javier's GitHub](https://github.com/Javitocatral?tab=repositories)

---

### Project

- **Repository Link Client**: [Collective Pulse Frontend](https://github.com/ana-badolato/Collective-Pulse)
- **Repository Link Server**: [Collective Pulse Backend](https://github.com/ana-badolato/Collective-Pulse-BackEnd)

- **Deploy Link**: [Collective Pulse Deployment](https://collective-pulse.netlify.app/)

---

### Trello

- **Trello Board**: [Trello Link](https://trello.com)

---

### Slides

- **Slides Link**: [Collective Pulse Slides](https://docs.google.com/presentation/d/1mBY3Z9UhpIS8xq-L3wlFmV44iDgzPS0LzuFDQIpFIS8/edit?usp=sharing)
