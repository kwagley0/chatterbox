import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/ChatPage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chatterbox</title>
        <meta name="description" content="Chat Application" />
      </Helmet>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
