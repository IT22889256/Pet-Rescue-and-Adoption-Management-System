import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetManagerDashboard from "./pages/petManament/PetManagerDashboard";
import HeplAndSupport from "./pages/HeplAndSupport";
import EmployeeProfile from "./components/EmployeeProfile";


//user management imports//
import UserManagerLayout from "./components/userManagement/userLayout";
import UserDashboard from "./pages/userManagement/userManagerDashboard";
import UserLayout from "./components/shared/users/UserLayout";
import VerificationRequests from "./pages/userManagement/VerificationRequests";
import ViewVerificationRequest from "./pages/userManagement/adopterRequests/ViewVerificationRequest";
import AcceptRequest from "./pages/userManagement/adopterRequests/AcceptRequest";
import RejectRequest from "./pages/userManagement/adopterRequests/RejectRequest";
import Adopters from "./pages/userManagement/Adopters";
import EmployeesRequests from "./pages/userManagement/employeeRequests/EmployeeRequests";
import ViewEmployeeRequest from "./pages/userManagement/employeeRequests/ViewEmployeeRequest";
import EmployeeProfiles from "./pages/User/EmployeeProfile";

import UserAffairsLayout from "./components/UserAffairsManager/UserAffairsLayout";
import UserAffairsManagerDashboard from "./pages/UserAffairsManagement/UserAffairsManagerDashboard";

import Feedback from "../src/pages/UserAffairsManagement/Feedback";
import CreateFeedback from "../src/pages/UserAffairsManagement/Feedback/CreateFeedback";
import EditFeedback from "../src/pages/UserAffairsManagement/Feedback/EditFeedback";
import RemoveFeedback from "../src/pages/UserAffairsManagement/Feedback/RemoveFeedback";
import ViewFeedback from "../src/pages/UserAffairsManagement/Feedback/ViewFeedback";
import BecomeAdopter from "../src/pages/User/BecomeAdopter";

import IssuesAndConcerns from "../src/pages/UserAffairsManagement/IssuesAndConcerns";
import CreateIssuesAndConcerns from "../src/pages/UserAffairsManagement/IssuesAndConcerns/CreateIssuesAndConcerns";
import EditIssuesAndConcerns from "../src/pages/UserAffairsManagement/IssuesAndConcerns/EditIssuesAndConcerns";
import RemoveIssuesAndConcerns from "../src/pages/UserAffairsManagement/IssuesAndConcerns/RemoveIssuesAndConcerns";
import ViewIssuesAndConcerns from "../src/pages/UserAffairsManagement/IssuesAndConcerns/ViewIssuesAndConcerns";

import Gallery from "../src/pages/UserAffairsManagement/Gallery";
import CreateGallery from "../src/pages/UserAffairsManagement/Gallery/CreateGallery";
import EditGallery from "../src/pages/UserAffairsManagement/Gallery/EditGallery";
import RemoveGallery from "../src/pages/UserAffairsManagement/Gallery/RemoveGallery";
import ViewGallery from "../src/pages/UserAffairsManagement/Gallery/ViewGallery";

//handle issues concerns
import IssuesConcerns from "../src/pages/UserAffairsManagement/handleIssuesConcerns/IssuesConcerns";
import ViewIssuesConcerns from "../src/pages/UserAffairsManagement/handleIssuesConcerns/ViewIssuesConcerns";

//handle feedback
import AllFeedback from "../src/pages/UserAffairsManagement/handleFeedback/AllFeedback";
import ViewFeedback1 from "../src/pages/UserAffairsManagement/handleFeedback/viewFeedback";

import UserRequest from "./pages/userManagement/UserRequest";
import UserProfile from "./pages/userManagement/UserProfile";


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
import ForgotPassword from "./pages/User/ForgotPassword";
import ResetPassword from "./pages/User/ResetPassword";

//home page
import FeedbackForm from "./pages/User/FeedbackForm";
import RecurringDonationForm from "./pages/User/RecurringDonationForm";
import PetAdoption from "./pages/User/PetAdoption"
//pet managemnt imports


import PetLayout from "./components/petManager/PetLayout";
import RescueRequest from "./pages/petManament/RescueRequest";
import RescueTask from "./pages/petManament/RescueTask";
import PetProfile from "./pages/petManament/PetProfile";
import ViewPet from "./pages/petManament/petProfile/ViewPet";
import CreatePet from "./pages/petManament/petProfile/CreatePet";
import EditPet from "./pages/petManament/petProfile/EditPet";
import RemovePet from "./pages/petManament/petProfile/RemovePet";
import ViewRescueTask from "./pages/petManament/rescueTask/ViewRescueTask";
import CreateRescueTask from "./pages/petManament/rescueTask/CreateRescueTask";
import EditRescueTask from "./pages/petManament/rescueTask/EditRescueTask";
import DeleteRescueTask from "./pages/petManament/rescueTask/DeleteRescueTask";
import ViewRescueRequest from "./pages/petManament/rescueRequest/ViewRescueRequest";
import CreateRescueRequest from "./pages/petManament/rescueRequest/CreateRescueRequest";


//addoption Manager
import AdoptionLayout from "./components/adoptionManager/AdoptionLayout";
import AdoptionManagerDashboard from "./pages/adoptionManagement/AdoptionManagerDashboard";
import Adoption from "../src/pages/adoptionManagement/Adoption";
import PetSupply from "./pages/adoptionManagement/Supply";
import Appoinment from "./pages/adoptionManagement/Appoinment";
import AdoptionProcess from "./pages/adoptionManagement/AdoptionProcess";

//adoption pet health
import PetHealthProfile from "./pages/adoptionManagement/PetHealthProfile";
import ViewPetHealthProfile from "./pages/adoptionManagement/petHealthProfile/ViewPetHealthProfile";

//adoption request
import CreateRequest from "./pages/adoptionManagement/adoptionRequest/CreateRequest";
import ViewAdoptionRequest from "./pages/adoptionManagement/adoptionRequest/ViewRequest"
import EditRequest from "./pages/adoptionManagement/adoptionRequest/EditRequest";
import DeleteRequest from "./pages/adoptionManagement/adoptionRequest/DeleteRequest";

//supply request
import CreateSupplyRequest from "./pages/adoptionManagement/supplyRequest/CreateSupplyRequest";
import ViewSupplyRequest from "./pages/adoptionManagement/supplyRequest/ViewSupplyRequest";
import EditSupplyRequest from "./pages/adoptionManagement/supplyRequest/EditSupplyRequest";
import DeleteSupplyRequest from "./pages/adoptionManagement/supplyRequest/DeleteSupplyRequest";


//adoption process
import AllAdoptionRequest from "./pages/adoptionManagement/adoptionProcess/AllAdoptionRequest";
import ViewAdoptionPRequest from "./pages/adoptionManagement/adoptionProcess/ViewAdoptionRequest"

//appoinment
import CreateAppoinment from "./pages/adoptionManagement/AppoinmentSchedule/CreateAppoinment";
import ViewAppoinment from "./pages/adoptionManagement/AppoinmentSchedule/ViewAppoinment";
import EditAppoinment from "./pages/adoptionManagement/AppoinmentSchedule/EditAppoinment";
import DeleteAppoinment from "./pages/adoptionManagement/AppoinmentSchedule/DeleteAppoinment";

//Doctor
import DoctorLayout from "./components/doctor/DoctorLayout";
import DoctorDashboard from "./pages/doctorManagement/DoctorDashboard";

import AllPetHealth from "./pages/doctorManagement/petHealth/AllPetHealth";
import ViewPetHealth from "./pages/doctorManagement/petHealth/ViewPetHealth";
import EditPetHealth from "./pages/doctorManagement/petHealth/EditPetHealth";

//Inventory manager
import Inventorylayout from './components/InventoryManager/Inventorylayout'
import InventoryManagerdashboard from '../src/pages/Inventorymanagement/InventoryManagerdashboard'
import Items from '../src/pages/Inventorymanagement/Items'
import Additem from '../src/pages/Inventorymanagement/Items/additem'
import Edititem from '../src/pages/Inventorymanagement/Items/Edititem'
import Removeitem from '../src/pages/Inventorymanagement/Items/Removeitem'
import Viewitem from '../src/pages/Inventorymanagement/Items/Viewitem'
import Supplier from '../src/pages/Inventorymanagement/supplier'
import Addsupplier from '../src/pages/Inventorymanagement/supplier/addsupplier'
import Editsupplier from '../src/pages/Inventorymanagement/supplier/editsupplier'
import Removesupplier from '../src/pages/Inventorymanagement/supplier/removesupplier'
import Viewsupplier from '../src/pages/Inventorymanagement/supplier/viewsupplier'
import Request from '../src/pages/Inventorymanagement/request'
import Createrequest from '../src/pages/Inventorymanagement/request/createrequest'
import Updaterequest from '../src/pages/Inventorymanagement/request/updaterequest'
import Deleterequest from '../src/pages/Inventorymanagement/request/deleterequest'
import Viewrequest from '../src/pages/Inventorymanagement/request/viewrequest'
import Order from '../src/pages/Inventorymanagement/order'
import Createorder from '../src/pages/Inventorymanagement/order/Createorder'
import Editorder from '../src/pages/Inventorymanagement/order/Editorder'
import Vieworder from '../src/pages/Inventorymanagement/order/Vieworder'
import Removeorder from '../src/pages/Inventorymanagement/order/Removeorder'
//messages
import messsages from '../src/pages/Inventorymanagement/message'
import Createmessages from './pages/Inventorymanagement/messages/Createmessages'
import Viewmessages from './pages/Inventorymanagement/messages/Viewmessages'
import Editmessages from './pages/Inventorymanagement/messages/Editmessages'
import Deletemessages from './pages/Inventorymanagement/messages/Deletemessages'


//donation management imports
import DonationLayout from "./components/DonationManager/DonationLayout";
import DonationDashboard from "./pages/donationManagement/DonationManagerDashboard";
import SponserPetProfile from "./pages/donationManagement/SponserPetProfile";
import CreateSponsorPet from "./pages/donationManagement/SponsorshipPetProfile/CreateSponsorPet";
import ViewSponsorPet from "./pages/donationManagement/SponsorshipPetProfile/ViewSponsorPet";
import EditSponsorPet from "./pages/donationManagement/SponsorshipPetProfile/EditSponsorPet";
import RemoveSponsorPet from "./pages/donationManagement/SponsorshipPetProfile/RemoveSponsorPet";

//reccuring donations
import CreateReccuringDonation from "./pages/donationManagement/reccuringdonations/createreccuringdonations";
import ReccuringDonations from "./pages/donationManagement/RescueTask";
import ViewReccuringDonations from "./pages/donationManagement/reccuringdonations/viewreccuringdonations";
import EditReccuringDonations from "./pages/donationManagement/reccuringdonations/editreccuringdonations";
import UnsubsribeReccuringDonation from "./pages/donationManagement/reccuringdonations/deletereccuringdonations";

import SpecificNeedDonations from "./pages/donationManagement/specificneedsdonations";
import CreateSpecificNeedDonations from "./pages/donationManagement/specificneedsdonations/createspecificneedsdonations";
import ViewSpecificNeedsDonations from "./pages/donationManagement/specificneedsdonations/viewspecificneedsdonations";

import SponsorDonations from "./pages/donationManagement/sponsordonations";
import CreateSponsorDonations from "./pages/donationManagement/sponsordonations/createsponsordonations";
// import ViewSponsorDonations from './pages/donationManagement/sponsordonations/viewsponsordonations'
//fund reuests
import FundRequest from "./pages/donationManagement/fundrequests";
import ViewFundRequest from "./pages/donationManagement/fundrequests/Viewfundrequests";
//Employeee


//Suppliers
import Supplierslayout from "./components/Supplier/Supplierslayout";

import Requests from "../src/pages/Suppliers/requests";
import ViewRequests from "../src/pages/Suppliers/requests/viewrequests";
import UpdateRequests from "../src/pages/Suppliers/requests/updaterequests";

//common ar
import ViewCommonAR from "./pages/petManament/commonAR/ViewCommonAR";
import CommonAR from "./pages/petManament/commonAR/CommonAR";

//Transport management imports

import TransportLayout from './components/transportManager/TransportLayout'
import TransportManagerDashboard from './pages/transportManagement/TransportManagerDashboard'
import ScheduleProfile from './pages/transportManagement/ScheduleProfile'
import CreateSchedule from './pages/transportManagement/scheduleProfile/CreateSchedule'
import EditSchedule from './pages/transportManagement/scheduleProfile/EditSchedule'
import ViewSchedule from './pages/transportManagement/scheduleProfile/ViewSchedule'
import RemoveSchedule from './pages/transportManagement/scheduleProfile/RemoveSchedule' 
import CreateVehicle from './pages/transportManagement/vehicleProfile/CreateVehicle'
import VehicleProfile from './pages/transportManagement/VehicleProfile'
import EditVehicle from './pages/transportManagement/vehicleProfile/EditVehicle'
import ViewVehicle from './pages/transportManagement/vehicleProfile/ViewVehicle'
import RemoveVehicle from './pages/transportManagement/vehicleProfile/RemoveVehicle'
import TaskRequest from './pages/transportManagement/TaskRequest'
import ViewTaskRequest from './pages/transportManagement/taskRequest/ViewTaskRequest'
import EditTaskRequest from './pages/transportManagement/taskRequest/EditTaskRequest'



//Driver Availability 
import DriverAvailability from "./pages/DriverAvailability";

//Doctor Availability
import DoctorAvailability from "./pages/DoctorAvailability";

//Helper Availabilty
import HelperAvailability from "./pages/HelperAvailability";

//Driver imports
import DriverLayout from "./components/driver/DriverLayout";
import AssignedSheduleProfile from "./pages/driver/AssignedSheduleProfile";
import ViewAssignedTask from "./pages/driver/assignedShedules/ViewAssignedTask";
import EditAssignedTask from "./pages/driver/assignedShedules/EditAssignedTask";

//employee management imports
import EmployeeLayout from "./components/employeeManager/EmployeeLayout";
import EmployeeManagerDashboard from "./pages/employeeManagment/EmployeeManagerDashboard";
import ManageEmployees from "./pages/employeeManagment/ManageEmployees";

import CreateEmployee from "./pages/employeeManagment/employees/CreateEmployee";
import ViewEmployee from "./pages/employeeManagment/employees/ViewEmployees";
import EditEmployee from "./pages/employeeManagment/employees/EditEmployee";
import RemoveEmployee from "./pages/employeeManagment/employees/RemoveEmployee";

//salary management imports
import ManageSalaries from "./pages/employeeManagment/ManageSalaries";
import ViewSalary from "./pages/employeeManagment/salaryManagement/ViewSalary";
import EditSalary from "./pages/employeeManagment/salaryManagement/EditSalary";
import CreateSalary from "./pages/employeeManagment/salaryManagement/CreateSalary";

//deactivate employees
import DeleteEmployees from "./pages/employeeManagment/ManageDeactivateEmployees";

//job role management
import ManageJobRoles from "./pages/employeeManagment/ManageJobRoles";
import ViewJobRoles from "./pages/employeeManagment/JobRoles/ViewJobs";
import CreateJob from "./pages/employeeManagment/JobRoles/CreateJobs";
import EditJob from "./pages/employeeManagment/JobRoles/EditJobs";

//deactivated Employees
import ManageDeactivateEmployees from "./pages/employeeManagment/ManageDeactivateEmployees";
import ViewDeactivateEmployees from "./pages/employeeManagment/deactivateEmployees/ViewDeactivateEmployees";

//leave requests manage from manager
import ManageLeaves from "./pages/employeeManagment/ManageLeaves";
import ViewLeaveRequest from "./pages/employeeManagment/LeaveRequests/ViewLeaveRequest";

//leave apply for janitor
import CreateLeave from "./pages/employeeManagment/LeaveApplyforJanitors";
import ViewOneAttendance from "./pages/employeeManagment/attendanceManagement/ViewOneAttendance";

import RescueRequestForm from "./pages/User/RescueRequestForm";



import LeaveApply from './pages/employeeManagment/LeaveApply'
import ViewLeaveApply from './pages/employeeManagment/LeaveApply/viewLeaveApply'
import ViewTodayattendance from './pages/employeeManagment/attendanceManagement/ViewTodayattendance'
import DeleteTodayOneAttendance from './pages/employeeManagment/attendanceManagement/DeleteTodayOneAttendance'

import Donation from "./pages/User/Donation";
import PleaseLogin from "./pages/User/PleaseLogin";
import SpecificNeedDonationForm from "./pages/User/SpecificNeedDonationForm";
import AvailablePets from "./pages/User/AvailablePets";
import PetsProfile from "./pages/User/PetsProfile";

import PetQR from "./pages/User/PetQR";
import UserGallery from "./pages/User/Gallery";

//employee attendance
import ManageEmployeeAttendance from './pages/employeeManagment/ManageEmployeeAttendance'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employeeProfiles/:id" element={<EmployeeProfiles />} />
        <Route path="/employeeProfiles/LeaveApply/:eid" element={<LeaveApply />} />
      </Routes>

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="user/:id/available-pets" element={<AvailablePets />} />
          <Route path="/pet-profile/:id" element={<PetsProfile />} />

          <Route
            path="user/:id/recurring-donation"
            element={<RecurringDonationForm />}
          />
          <Route
            path="user/:id/specific-need-donation"
            element={<SpecificNeedDonationForm />}
          />
          <Route path="/register" element={<Register />} />

          <Route path="/please-login" element={<PleaseLogin />} />

          <Route
            path="/user/:id/rescuerequestForm"
            element={<RescueRequestForm />}
          />

          
          <Route path="/petAdoption" element={<PetAdoption/>} />
          <Route path="/petQR/:id" element={<PetQR/>} />

          <Route path="/log-in" element={<Login />} />
          <Route path="/recovery-password" element={<ForgotPassword />} />
          <Route path="/resetpassword/:email" element={<ResetPassword />} />
          <Route path="/user/become-adopter" element={<BecomeAdopter />} />
          <Route path="user/:id/feedback" element={<FeedbackForm />} />

          <Route path="user/:id/donation" element={<Donation />} />


          <Route path="user/:id/donation" element={<RecurringDonationForm />} />
          <Route path="/gallery" element={<UserGallery/>} />
          <Route path="/donation" element={<RecurringDonationForm />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>

      {/* user manager routes */}
      <Routes>
        <Route path="/userManager" element={<UserManagerLayout />}>
          <Route index path="/userManager" element={<UserDashboard />} />
          <Route
            path="/userManager/heplAndSupport"
            element={<HeplAndSupport />}
          />
          {/* main routes */}
          <Route path="/userManager/adopters" element={<Adopters />} />
          <Route
            path="/userManager/account-vericifacton-requests"
            element={<VerificationRequests />}
          />
          <Route
            path="/userManager/employeeRequests"
            element={<EmployeesRequests />}
          />

          <Route
            path="/userManager/employees/viewEmployee/:id"
            element={<ViewEmployeeRequest />}
          />
          <Route path="/userManager/userProfile" element={<UserProfile />} />
          <Route
            path="/userManager/userProfile/viewUser/:id"
            element={<ViewUser />}
          />
          <Route
            path="/userManager/userProfile/RemoveUser/:id"
            element={<RemoveUser />}
          />
          {/* Account verification requests routes */}
          <Route
            path="/userManager/verificationRequest/viewRequest/:id"
            element={<ViewVerificationRequest />}
          />
          <Route
            path="/userManager/verificationRequest/viewRequest/rejectRquest/:id"
            element={<RejectRequest />}
          />

          <Route
            path="/userManager/verificationRequest/viewRequest/acceptRquest/:id"
            element={<AcceptRequest />}
          />
          <Route
            path="/userManager/userProfile/EditUser/:id"
            element={<EditUser />}
          />
          <Route
            path="/userManager/userProfile/createUser"
            element={<CreateUser />}
          />
        </Route>
      </Routes>

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
            path="/petManager/petProfile/createPet/:id"
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
            path="/petManager/rescueTask/viewRescueTask/:id"
            element={<ViewRescueTask />}
          />
          <Route
            path="/petManager/rescueTask/createRescueTask/:id"
            element={<CreateRescueTask />}
          />
          <Route
            path="/petManager/rescueTask/editRescueTask/:id"
            element={<EditRescueTask />}
          />
          <Route
            path="/petManager/rescueTask/deleteRescueTask/:id"
            element={<DeleteRescueTask />}
          />
          {/* rescue request routes */}
          <Route
            path="/petManager/rescueRequest/viewRescueRequest/:id"
            element={<ViewRescueRequest />}
          />
          <Route
            path="/petManager/rescueRequest/createRescueRequest"
            element={<CreateRescueRequest />}
          />
          <Route
            path="/petManager/rescueRequest/viewRescueRequest"
            element={<ViewRescueRequest />}
          />
          <Route
            path="/petManager/rescueRequest/viewRescueRequest"
            element={<ViewRescueRequest />}
          />
          {/* common AR */}
          <Route path="/petManager/commonAr/" element={<CommonAR />} />
          <Route
            path="/petManager/commonAr/viewCommonAR/:id"
            element={<ViewCommonAR />}
          />
        </Route>

        {/* Transport management routes */}
        <Route path="/transportManager" element={<TransportLayout />}>
          <Route
            index
            path="/transportManager"
            element={<TransportManagerDashboard />}
          />
          <Route
            path="/transportManager/employeeProfile"
            element={<EmployeeProfile />}
          />
          <Route
            path="/transportManager/heplAndSupport"
            element={<HeplAndSupport />}
          />
          {/* main routes */}
          <Route
            path="/transportManager/rescueRequest"
            element={<RescueRequest />}
          />
          <Route path="/transportManager/rescueTask" element={<RescueTask />} />
          <Route
            path="/transportManager/scheduleProfile"
            element={<ScheduleProfile />}
          />
          <Route
            path="/transportManager/vehicleProfile"
            element={<VehicleProfile />}
          />

          {/* Task request routes */}
          <Route
            path="/transportManager/taskRequest"
            element={<TaskRequest />}
          />
          <Route
            path="/transportManager/taskRequest/viewTaskRequest/:id"
            element={<ViewTaskRequest />}
          />
          <Route
            path="/transportManager/taskRequest/editTaskRequest/:id"
            element={<EditTaskRequest />}
          />

          {/* Schedule profile routes */}
          <Route
            path="/transportManager/scheduleProfile/createSchedule"
            element={<CreateSchedule />}
          />
          <Route
            path="/transportManager/scheduleProfile/editSchedule/:id"
            element={<EditSchedule />}
          />
          <Route 
            path="/transportManager/scheduleProfile/viewSchedule/:id"
            element={<ViewSchedule />}
          />
          <Route
            path="/transportManager/scheduleProfile/removeSchedule/:id"
            element={<RemoveSchedule />}
          />

          {/* Vehicle profile routes */}
          <Route
            path="/transportManager/vehicleProfile/CreateVehicle"
            element={<CreateVehicle />}
          />
          <Route
            path="/transportManager/vehicleProfile/editVehicle/:id"
            element={<EditVehicle />}
          />
          <Route
            path="/transportManager/vehicleProfile/ViewVehicle/:id"
            element={<ViewVehicle />}
          />
          <Route
            path="/transportManager/vehicleProfile/removeVehicle/:id"
            element={<RemoveVehicle />}
          />
        </Route>

      
        <Route path="/DriverAvailability" element={<DriverAvailability />} />
        <Route path="/DoctorAvailability" element={<DoctorAvailability />} />
        <Route path="/HelperAvailability" element={<HelperAvailability />} />
       </Routes>

       


          {/* Driver main routes */}
       <Routes> 
         <Route> 
            <Route path="/driver" element={<DriverLayout />}>
            <Route path="/driver/AssignedSheduleProfile" element={<AssignedSheduleProfile />} />
            <Route path="/driver/assignedShedules/ViewAssignedTask/:id" element={<ViewAssignedTask />} />
            
            <Route path="/driver/assignedShedules/EditAssignedTask/:id" element={<EditAssignedTask />} />
          </Route>
          </Route>
        </Routes>

      <Routes>
        <Route path="/employeeManager" element={<EmployeeLayout />}>
          <Route
            index
            path="/employeeManager"
            element={<EmployeeManagerDashboard />}
          />
          <Route
            path="/employeeManager/employeeProfile"
            element={<EmployeeProfile />}
          />
          <Route
            path="/employeeManager/heplAndSupport"
            element={<HeplAndSupport />}
          />
          {/* main routes */}
          <Route
            path="/employeeManager/ManageEmployees"
            element={<ManageEmployees />}
          />
          <Route
            path="/employeeManager/DeleteEmployees"
            element={<DeleteEmployees />}
          />
          <Route
            path="/employeeManager/SalaryManagement"
            element={<ManageSalaries />}
          />
          <Route
            path="/employeeManager/LeaveManagement"
            element={<ManageLeaves />}
          />
          <Route
            path="/employeeManager/jobRoles"
            element={<ManageJobRoles />}
          />

          <Route
          path="/employeeManager/AttendanceMark"
          element={<ManageEmployeeAttendance />}
          />

          <Route
            path="/employeeManager/ManageDeactivateEmployees"
            element={<ManageDeactivateEmployees />}
          />

          <Route
            path="/employeeManager/CreateLeave"
            element={<CreateLeave />} 
          />


          <Route path="/employeeManager/LeaveApply/:eid" element={<LeaveApply />} />
          
          <Route path="/employeeManager/rescueTask" element={<RescueTask />} />
          <Route path="/employeeManager/petProfile" element={<PetProfile />} />
          {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
          {/* employee profile routes */}
          <Route
            path="/employeeManager/employees/createEmployee"
            element={<CreateEmployee />}
          />
          <Route
            path="/employeeManager/employees/viewEmployee/:id"
            element={<ViewEmployee />}
          />
          {
            <Route
              path="/employeeManager/employees/editEmployee/:id"
              element={<EditEmployee />}
            />
          }
          {
            <Route
              path="/employeeManager/employees/deleteEmployee/:id"
              element={<RemoveEmployee />}
            />
          }
          {
            <Route
              path="/employeeManager/employees/removeEmployee/:id"
              element={<RemoveEmployee />}
            />
          }
          {/* salary routes */}
          {
            <Route
              path="/employeeManager/salary/:id"
              element={<ViewSalary />}
            />
          }
          {
            <Route
              path="/employeeManager/salary/EditSalary/:id"
              element={<EditSalary />}
            />
          }
          {
            <Route
              path="/employeeManager/salary/CreateSalary/:eid"
              element={<CreateSalary />}
            />
          }
          {/* job role routes */}
          <Route
            path="/employeeManager/jobRoles/viewJobs/:id"
            element={<ViewJobRoles />}
          />
          <Route
            path="/employeeManager/jobRoles/createJobs"
            element={<CreateJob />}
          />
          <Route
            path="/employeeManager/jobRoles/editJobs/:id"
            element={<EditJob />}
          />
          {/* leave request routes */}
          <Route
            path="/employeeManager/leave/:id"
            element={<ViewLeaveRequest />}
          />
          {/* leave one attendance routes */}
          <Route
            path="/employeeManager/attendance/:id"
            element={<ViewOneAttendance />}
          />

          {/* attendance today view routes */}
          <Route
            path="/employeeManager/attendance/viewTodayAttendance"
            element={<ViewTodayattendance />} />

          {/* delete today one attendance routes */}
          <Route
            path="/employeeManager/attendance/deleteTodayOneAttendance/:id"
            element={<DeleteTodayOneAttendance />} />

          {/* deactivate employees route */}
          <Route
            path="/employeeManager/deactivateEmployees/ViewDeactivateEmployees/:id"
            element={<ViewDeactivateEmployees />}
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/DonationManager" element={<DonationLayout />}>
          <Route
            index
            path="/DonationManager"
            element={<DonationDashboard />}
          />
          <Route
            path="/DonationManager/employeeProfile"
            element={<EmployeeProfile />}
          />
          <Route
            path="/DonationManager/heplAndSupport"
            element={<HeplAndSupport />}
          />
          {/* main routes */}
          <Route
            path="/DonationManager/rescueRequest"
            element={<RescueRequest />}
          />
          <Route
            path="/DonationManager/reccuringdonations"
            element={<ReccuringDonations />}
          />
          <Route
            path="/DonationManager/SponsorshipPets"
            element={<SponserPetProfile />}
          />
          <Route
            path="/DonationManager/specificneedsdonations"
            element={<SpecificNeedDonations />}
          />
          <Route
            path="/DonationManager/sponsordonations"
            element={<SponsorDonations />}
          />

          {/*sponsor pet profile routes */}
          <Route
            path="/DonationManager/SponsorshipPets/createSponsorPet"
            element={<CreateSponsorPet />}
          />
          <Route
            path="/DonationManager/SponsorshipPets/viewSponsorPet/:id"
            element={<ViewSponsorPet />}
          />
          <Route
            path="/DonationManager/SponsorshipPets/editSponsorPet/:id"
            element={<EditSponsorPet />}
          />
          <Route
            path="/DonationManager/SponsorshipPets/removeSponsorPet/:id"
            element={<RemoveSponsorPet />}
          />

          {/* reccuring donations routes */}
          <Route
            path="/DonationManager/reccuringdonations/createReccuringDonations"
            element={<CreateReccuringDonation />}
          />
          <Route
            path="/DonationManager/reccuringdonations/viewreccuringdonations/:id"
            element={<ViewReccuringDonations />}
          />
          <Route
            path="/DonationManager/reccuringdonations/editreccuringdonations/:id"
            element={<EditReccuringDonations />}
          />
          <Route
            path="/DonationManager/reccuringdonations/deletereccuringdonations/:id"
            element={<UnsubsribeReccuringDonation />}
          />

          {/* specific need donations routes */}
          <Route
            path="/DonationManager/specificneeddonations/createspecificneeddonations"
            element={<CreateSpecificNeedDonations />}
          />
          <Route
            path="/DonationManager/specificneeddonations/viewspecificneedsdonations/:id"
            element={<ViewSpecificNeedsDonations />}
          />

          {/* fund request routes */}
          <Route
            path="/DonationManager/fundrequests"
            element={<FundRequest />}
          />
          <Route
            path="/DonationManager/fundrequests/viewfundrequests/:id"
            element={<ViewFundRequest />}
          />

          {/* sponsor donations routes */}
          <Route
            path="/DonationManager/sponsordonations/createsponsordonations"
            element={<CreateSponsorDonations />}
          />
          {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
        </Route>


<Route path="/adoptionManager" element={<AdoptionLayout />}>
                    <Route index path="/adoptionManager" element={<AdoptionManagerDashboard />} />
                    <Route path="/adoptionManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/adoptionManager/heplAndSupport" element={<HeplAndSupport />} />

                    {/* main routes */}
                    <Route path="/adoptionManager/adoption" element={<Adoption />} /> 
                    <Route path="/adoptionManager/rescueTask" element={<RescueTask />} />
                    <Route path="/adoptionManager/PetHealthProfile" element={<PetHealthProfile />} />
                    <Route path="/adoptionManager/petSupply" element={<PetSupply />} />
                    <Route path="/adoptionManager/AppoinmentSchedule" element={<Appoinment />} />
                    {/* <Route path="/adoptionManager/AdoptionProcess" element={<AdoptionProcess />} /> */}

                    {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}  

                    {/*adoption profile routes*/}
                    <Route path="/adoptionManager/adoptionRequest/CreateRequest" element={<CreateRequest />} />
                    <Route path="/adoptionManager/adoptionRequest/viewRequest/:id" element={<ViewAdoptionRequest />} />
                    <Route path="/adoptionManager/adoptionRequest/editRequest/:id" element={<EditRequest />} />
                    <Route path="/adoptionManager/adoptionRequest/deleteRequest/:id" element={<DeleteRequest />} />

                    {/*pet suppliment routes */}
                    <Route path="/adoptionManager/supplyRequest/CreateSupplyRequest" element={<CreateSupplyRequest />} />
                    <Route path="/adoptionManager/supplyRequest/viewSupplyRequest/:id" element={<ViewSupplyRequest />} />
                    <Route path="/adoptionManager/supplyRequest/editSupplyRequest/:id" element={<EditSupplyRequest />} />
                    <Route path="/adoptionManager/supplyRequest/deleteSupplyRequest/:id" element={<DeleteSupplyRequest />} />

                    {/*adoption process routes*/}
                    <Route path="/adoptionManager/adoptionProcess" element={<AllAdoptionRequest />} />
                    <Route path="/adoptionManager/adoptionProcess/ViewAdoptionRequest/:id" element={<ViewAdoptionPRequest />} />

                    {/*appoinment schedule routes*/}
                    <Route path="/adoptionManager/AppoinmentSchedule/CreateAppoinment" element={<CreateAppoinment />} />
                    <Route path="/adoptionManager/AppoinmentSchedule/ViewAppoinment/:id" element={<ViewAppoinment />} />
                    <Route path="/adoptionManager/AppoinmentSchedule/EditAppoinment/:id" element={<EditAppoinment />} />
                    <Route path="/adoptionManager/AppoinmentSchedule/DeleteAppoinment/:id" element={<DeleteAppoinment />} />
                    <Route path="/adoptionManager/PetHealthProfile/viewPet/:id" element = {<ViewPetHealthProfile/>}></Route>
                </Route>

            </Routes>
            <Routes>
                    <Route path="/doctor" element={<DoctorLayout />}>
                    <Route index path="/doctor" element={<AllPetHealth />} />
                    <Route path="/doctor/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/doctor/heplAndSupport" element={<HeplAndSupport />} />

                    {/*doctor routes*/}
                    {/* <Route path="/doctor/petHealth" element={<AllPetHealth />} /> */}
                    <Route path="/doctor/petHealth/ViewPetHealth/:id" element={<ViewPetHealth />} />
                    <Route path="/doctor/petHealth/EditPetHealth/:id" element={<EditPetHealth />} />
            </Route>
            </Routes>
            
 <Routes>
                <Route path="/InventoryManager" element={<Inventorylayout />}>
                    <Route index path="/InventoryManager" element={<InventoryManagerdashboard />} />
                    <Route path="/InventoryManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/InventoryManager/heplAndSupport" element={<HeplAndSupport />} />
                     {/* main routes */}
                     <Route path="/InventoryManager/Items" element={<Items />} />
                     {/* item routes*/}
                     <Route path="/InventoryManager/Items/veiwitem/:id" element={<Viewitem />} />
                    <Route path="/InventoryManager/Items/additem" element={<Additem />} />
                    <Route path="/InventoryManager/Items/edititem/:id" element={<Edititem />} />
                    <Route path="/InventoryManager/Items/removeitem/:id" element={<Removeitem />} />

          {/* main routes */}
          <Route path="/InventoryManager/supplier" element={<Supplier />} />
          {/* supplier routes*/}
          <Route
            path="/InventoryManager/supplier/veiwsupplier/:id"
            element={<Viewsupplier />}
          />
          <Route
            path="/InventoryManager/supplier/addsupplier/"
            element={<Addsupplier />}
          />
          <Route
            path="/InventoryManager/supplier/editsupplier/:id"
            element={<Editsupplier />}
          />
          <Route
            path="/InventoryManager/supplier/removesupplier/:id"
            element={<Removesupplier />}
          />
                   {/* Inventroy manager/order */}
          {/* main routes */}
          <Route path="/InventoryManager/order" element={<Order />} />
          {/* order routes*/}
          <Route
            path="/InventoryManager/order/veiworder/:id"
            element={<Vieworder />}
          />
          <Route
            path="/InventoryManager/order/createorder/"
            element={<Createorder />}
          />
          <Route
            path="/InventoryManager/order/editorder/:id"
            element={<Editorder />}
          />
          <Route
            path="/InventoryManager/order/removeorder/:id"
            element={<Removeorder />}
          />
          <Route
            path="/InventoryManager/order/vieworder/:id"
            element={<Vieworder />}
          />
                   {/* inventroymanager/request */}
          {/* main routes */}
          <Route path="/InventoryManager/request" element={<Request />} />
          {/* supplier routes*/}
          <Route
            path="/InventoryManager/request/createrequest/"
            element={<Createrequest />}
          />
          <Route
            path="/InventoryManager/request/viewrequest/:id"
            element={<Viewrequest />}
          />
          <Route
            path="/InventoryManager/request/Updaterequest/:id"
            element={<Updaterequest />}
          />
          <Route
            path="/InventoryManager/request/deleterequest/:id"
            element={<Deleterequest />}
          />
                {/* inventroymanager/messages */}
                {/* import Createmessages from './pages/Inventorymanagement/messages/Createmessages'
import Viewmessages from './pages/Inventorymanagement/messages/Viewmessages'
import Editmessages from './pages/Inventorymanagement/messages/Editmessages'
import Deletemessages from './pages/Inventorymanagement/messages/Deletemessages'
        </Route> */}
        <Route path="/InventoryManager/messages" element={<messsages />} />
          {/* order routes*/}
          <Route
            path="/InventoryManager/messages/Viewmessages/:id"
            element={<Viewmessages />}
          />
          <Route
            path="/InventoryManager/messages/Createmessages/"
            element={<Createmessages />}
          />
          <Route
            path="/InventoryManager/messages/Editmessages/:id"
            element={<Editmessages />}
          />
          <Route
            path="/InventoryManager/messages/Deletemessages/:id"
            element={<Deletemessages />}
          />
          
          
                   {/* inventroymanager/request */}
          {/* main routes */}
          <Route path="/InventoryManager/request" element={<Request />} />
          {/* supplier routes*/}
          <Route
            path="/InventoryManager/request/createrequest/"
            element={<Createrequest />}
          />
          <Route
            path="/InventoryManager/request/viewrequest/:id"
            element={<Viewrequest />}
          />
          <Route
            path="/InventoryManager/request/Updaterequest/:id"
            element={<Updaterequest />}
          />
          <Route
            path="/InventoryManager/request/deleterequest/:id"
            element={<Deleterequest />}
          />  
            
     
            </Route>
      </Routes>
      
            
              {/* suppliers */}
      <Routes>
        <Route path="/Suppliers" element={<Supplierslayout />}>
          <Route index path="/Suppliers/order" element={<Requests />} />
          <Route
            path="/Suppliers/employeeProfile"
            element={<EmployeeProfile />}
          />
          <Route
            path="/Suppliers/heplAndSupport"
            element={<HeplAndSupport />}
          />
                  {/* supplier/requests */}

          <Route path="/Suppliers/requests" element={<Requests />} />

          <Route
            path="/Suppliers/requests/viewrequests/:id"
            element={<ViewRequests />}
          />
          <Route
            path="/Suppliers/requests/Updaterequests/:id"
            element={<UpdateRequests />}
          />
        </Route>

      </Routes> 


            <Routes>

                <Route path="/UserAffairsManager" element={<UserAffairsLayout />}>
                    <Route index path="/UserAffairsManager" element={<UserAffairsManagerDashboard />} />
                    <Route path="/UserAffairsManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/UserAffairsManager/heplAndSupport" element={<HeplAndSupport />} />
                    {/* main routes */}
                    <Route path="/UserAffairsManager/feedback" element={<Feedback/>} />
                    <Route path="/UserAffairsManager/issuesandconcerns" element={<IssuesAndConcerns />} />
                    <Route path="/UserAffairsManager/gallery" element={<Gallery />} />
                    {/* Issues & Concerns routes */}
                    <Route path="/UserAffairsManager/IssuesAndConcerns/ViewIssuesAndConcerns/:id" element={<ViewIssuesAndConcerns />} />
                    <Route path="/UserAffairsManager/IssuesAndConcerns/CreateIssuesAndConcerns" element={<CreateIssuesAndConcerns />} />
                    <Route path="/UserAffairsManager/IssuesAndConcerns/EditIssuesAndConcerns/:id" element={<EditIssuesAndConcerns />} />
                    <Route path="/UserAffairsManager/IssuesAndConcerns/RemoveIssuesAndConcerns/:id" element={<RemoveIssuesAndConcerns />} />
                    {/* feedback routes */}
                    <Route path="/UserAffairsManager/Feedback/ViewFeedback/:id" element={<ViewFeedback />} />
                    <Route path="/UserAffairsManager/Feedback/CreateFeedback" element={<CreateFeedback />} />
                    <Route path="/UserAffairsManager/Feedback/EditFeedback/:id" element={<EditFeedback />} />
                    <Route path="/UserAffairsManager/Feedback/RemoveFeedback/:id" element={<RemoveFeedback />} />
                    {/* gallery routes */}
                    <Route path="/UserAffairsManager/Gallery/ViewGallery/:id" element={<ViewGallery />} />
                    <Route path="/UserAffairsManager/Gallery/CreateGallery" element={<CreateGallery />} />
                    <Route path="/UserAffairsManager/Gallery/EditGallery/:id" element={<EditGallery />} />
                    <Route path="/UserAffairsManager/Gallery/RemoveGallery/:id" element={<RemoveGallery />} />
                    {/* handle IC routes */}
                    <Route path="/UserAffairsManager/handleIssuesConcerns" element={<IssuesConcerns />} />
                    <Route path="/UserAffairsManager/handleIssuesConcerns/ViewIssuesConcerns/:id" element={<ViewIssuesConcerns />} />
                    {/* handle F routes */}
                    <Route path="/UserAffairsManager/handleFeedback" element={<AllFeedback />} />
                    <Route path="/UserAffairsManager/handleFeedback/viewFeedback/:id" element={<ViewFeedback1 />} />


                    </Route>

                 </Routes>    
                 </Router>
               
                
  
           
            
           

  );
}

export default App;
