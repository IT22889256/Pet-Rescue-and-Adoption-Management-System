import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetManagerDashboard from "./pages/petManament/PetManagerDashboard";
import HeplAndSupport from "./pages/HeplAndSupport";

//pet mangemnt imports
import PetLayout from "./components/petManager/PetLayout";
import RescueRequest from "./pages/petManament/RescueRequest";
import RescueTask from "./pages/petManament/RescueTask";
import PetProfile from "./pages/petManament/PetProfile";
import ViewPet from "./pages/petManament/petProfile/ViewPet";
import CreatePet from "./pages/petManament/petProfile/CreatePet";
import EditPet from "./pages/petManament/petProfile/EditPet";
import RemovePet from "./pages/petManament/petProfile/RemovePet";
import ViewRescueTask from "./pages/petManament/rescueTask/ViewRescueTask";
import CreatePetTask from "./pages/petManament/rescueTask/CreateRescueTask";
import EditRescueTask from "./pages/petManament/rescueTask/EditRescueTask";
import DeleteRescueTask from "./pages/petManament/rescueTask/DeleteRescueTask";
import ViewRescueRequest from "./pages/petManament/rescueRequest/ViewRescueRequest";
import EmployeeProfile from "./components/EmployeeProfile";

//user management imports//
import UserManagerLayout from "./components/userManagement/userLayout";
import UserDashboard from "./pages/userManagement/userManagerDashboard";
import UserLayout from "./components/shared/users/UserLayout";

import UserRequest from "./pages/userManagement/UserRequest";
import UserProfile from "./pages/userManagement/UserProfile";
import UserTask from "./pages/userManagement/UserTask";
import CreateUser from "./pages/userManagement/userProfile/CreateUser";
import ViewUser from "./pages/userManagement/userProfile/ViewUser";
import EditUser from "./pages/userManagement/userProfile/EditUser";
import RemoveUser from "./pages/userManagement/userProfile/RemoveUser";
import Home from "./pages/User/Home";
import Register from "./pages/User/Register";
import Login from "./pages/User/Login";
import Profile from "./pages/User/Profile";
import EditProfile from "./pages/User/EditProfile";
import PrivateRoute from "./components/common/Header/PrivateRoute";

//home page
import FeedbackForm from "./pages/User/FeedbackForm";
import RecurringDonationForm from "./pages/User/RecurringDonationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/petManager" element={<PetLayout />}>
          <Route index path="/petManager" element={<PetManagerDashboard />} />
          <Route
            path="/petManager/employeeProfile"
            element={<EmployeeProfile />}
          />
          <Route
            path="/petManager/heplAndSupport"
            element={<HeplAndSupport />}
          />
          {/* main routes */}
          <Route path="/petManager/rescueRequest" element={<RescueRequest />} />
          <Route path="/petManager/rescueTask" element={<RescueTask />} />
          <Route path="/petManager/petProfile" element={<PetProfile />} />
          {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
          {/* pet profile routes */}
          <Route
            path="/petManager/petProfile/viewPet/:id"
            element={<ViewPet />}
          />
          <Route
            path="/petManager/petProfile/createPet"
            element={<CreatePet />}
          />
          <Route
            path="/petManager/petProfile/editPet/:id"
            element={<EditPet />}
          />
          <Route
            path="/petManager/petProfile/removePet/:id"
            element={<RemovePet />}
          />
          {/* rescue task routes */}
          <Route
            path="/petManager/rescueTask/viewRescueTask"
            element={<ViewRescueTask />}
          />
          <Route
            path="/petManager/rescueTask/createPetTask"
            element={<CreatePetTask />}
          />
          <Route
            path="/petManager/rescueTask/editRescueTask"
            element={<EditRescueTask />}
          />
          <Route
            path="/petManager/rescueTask/deleteRescueTask"
            element={<DeleteRescueTask />}
          />
          {/* rescue request routes */}
          <Route
            path="/petManager/rescueRequest/viewRescueRequest"
            element={<ViewRescueRequest />}
          />
        </Route>
      </Routes>

      {/* user routes */}

      <Routes>
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/donation" element={<RecurringDonationForm />} />
      </Routes>

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/log-in" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>

      {/* user manager routes */}
      <Routes>
        <Route path="/userManager" element={<UserManagerLayout />}>
          <Route index path="/userManager" element={<UserDashboard />} />
          {/* main routes */}
          <Route path="/userManager/userRequest" element={<UserRequest />} />
          <Route path="/userManager/userTask" element={<UserTask />} />
          <Route path="/userManager/userProfile" element={<UserProfile />} />
          {/* pet profile routes */}
          <Route
            path="/userManager/userProfile/viewUser/:id"
            element={<ViewUser />}
          />
          <Route
            path="/userManager/userProfile/EditUser/:id"
            element={<EditUser />}
          />
          <Route
            path="/userManager/userProfile/createUser"
            element={<CreateUser />}
          />
          <Route
            path="/userManager/userProfile/removeUser/:id"
            element={<RemoveUser />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
