import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagementApp from "./Pages/UserManagementApp";
import UserDetail from "./Pages/UserDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserManagementApp />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
