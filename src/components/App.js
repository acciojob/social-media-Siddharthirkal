import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PostsList from "./PostsList";
import SinglePostPage from "./SinglePostPage";
import EditPostForm from "./EditPostForm";
import UsersList from "./UsersList";
import UserPage from "./UserPage";
import NotificationsList from "./NotificationList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>

        <nav>
          <a href="/">Posts</a>
          <a href="/users">Users</a>
          <a href="/notifications">Notifications</a>
        </nav>

        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/posts/:postId" component={SinglePostPage} />
          <Route path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route path="/users/:userId" component={UserPage} />
          <Route path="/notifications" component={NotificationsList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;