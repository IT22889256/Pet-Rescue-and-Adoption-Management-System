// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PetManagerDashboard from './pages/petManament/PetManagerDashboard'
import HeplAndSupport from './pages/HeplAndSupport'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//pet mangemnt imports
import PetLayout from './components/petManager/PetLayout'
import RescueRequest from './pages/petManament/RescueRequest'
import RescueTask from './pages/petManament/RescueTask'
import PetProfile from './pages/petManament/PetProfile'
import ViewPet from './pages/petManament/petProfile/ViewPet'
import CreatePet from './pages/petManament/petProfile/CreatePet'
import EditPet from './pages/petManament/petProfile/EditPet'
import RemovePet from './pages/petManament/petProfile/RemovePet'
import ViewRescueTask from './pages/petManament/rescueTask/ViewRescueTask'
import CreatePetTask from './pages/petManament/rescueTask/CreateRescueTask'
import EditRescueTask from './pages/petManament/rescueTask/EditRescueTask'
import DeleteRescueTask from './pages/petManament/rescueTask/DeleteRescueTask'
import ViewRescueRequest from './pages/petManament/rescueRequest/ViewRescueRequest'
import EmployeeProfile from './components/EmployeeProfile'

//employee management imports
import EmployeeLayout from './components/employeeManager/EmployeeLayout';
import EmployeeManagerDashboard from './pages/employeeManagment/EmployeeManagerDashboard';
import ManageEmployees from './pages/employeeManagment/ManageEmployees';

import CreateEmployee from './pages/employeeManagment/employees/CreateEmployee';
import ViewEmployee from './pages/employeeManagment/employees/ViewEmployees';
import EditEmployee from './pages/employeeManagment/employees/EditEmployee';
import RemoveEmployee from './pages/employeeManagment/employees/RemoveEmployee';

//salary management imports
import ManageSalaries from './pages/employeeManagment/ManageSalaries';
import ViewSalary from './pages/employeeManagment/salaryManagement/ViewSalary';
import EditSalary from './pages/employeeManagment/salaryManagement/EditSalary';
import CreateSalary from './pages/employeeManagment/salaryManagement/CreateSalary';

//deactivate employees
import DeleteEmployees from './pages/employeeManagment/ManageDeactivateEmployees';

//job role management
import ManageJobRoles from './pages/employeeManagment/ManageJobRoles';
import ViewJobRoles from './pages/employeeManagment/JobRoles/ViewJobs';
import CreateJob from './pages/employeeManagment/JobRoles/CreateJobs';
import EditJob from './pages/employeeManagment/JobRoles/EditJobs';

//deactivated Employees
import ManageDeactivateEmployees from './pages/employeeManagment/ManageDeactivateEmployees';
import ViewDeactivateEmployees from './pages/employeeManagment/deactivateEmployees/ViewDeactivateEmployees';

//leave requests
import ManageLeaveRequests from './pages/employeeManagment/ManageLeaveRequests'

function App() {
    return (
        
        <Router>
            
            <Routes>

                <Route path="/petManager" element={<PetLayout />}>
                    <Route index path="/petManager" element={<PetManagerDashboard />} />
                    <Route path="/petManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/petManager/heplAndSupport" element={<HeplAndSupport />} />
                    {/* main routes */}
                    <Route path="/petManager/rescueRequest" element={<RescueRequest />} />
                    <Route path="/petManager/rescueTask" element={<RescueTask />} />
                    <Route path="/petManager/petProfile" element={<PetProfile />} />
                    {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
                    {/* pet profile routes */}
                    <Route path="/petManager/petProfile/viewPet/:id" element={<ViewPet />} />
                    <Route path="/petManager/petProfile/createPet" element={<CreatePet />} />
                    <Route path="/petManager/petProfile/editPet/:id" element={<EditPet />} />
                    <Route path="/petManager/petProfile/removePet/:id" element={<RemovePet />} />
                    {/* rescue task routes */}
                    <Route path="/petManager/rescueTask/viewRescueTask" element={<ViewRescueTask />} />
                    <Route path="/petManager/rescueTask/createPetTask" element={<CreatePetTask />} />
                    <Route path="/petManager/rescueTask/editRescueTask" element={<EditRescueTask />} />
                    <Route path="/petManager/rescueTask/deleteRescueTask" element={<DeleteRescueTask />} />
                    {/* rescue request routes */}
                    <Route path="/petManager/rescueRequest/viewRescueRequest" element={<ViewRescueRequest />} />
                </Route>
            </Routes>
            <Routes>

            <Route path="/employeeManager" element={<EmployeeLayout />}>
                <Route index path="/employeeManager" element={<EmployeeManagerDashboard />} />
                <Route path="/employeeManager/employeeProfile" element={<EmployeeProfile />} />
                <Route path="/employeeManager/heplAndSupport" element={<HeplAndSupport />} />
                {/* main routes */}
                <Route path="/employeeManager/ManageEmployees" element={<ManageEmployees />} />
                <Route path="/employeeManager/DeleteEmployees" element={<DeleteEmployees />} />
                <Route path="/employeeManager/SalaryManagement" element={<ManageSalaries />} />

                <Route path="/employeeManager/LeaveManagement" element={<ManageLeaveRequests />} />

                <Route path="/employeeManager/rescueTask" element={<RescueTask />} />
                <Route path="/employeeManager/petProfile" element={<PetProfile />} />
                <Route path="/employeeManager/ManageDeactivateEmployees" element={<ManageDeactivateEmployees />} />

                {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
                {/* pet profile routes */}
                <Route path="/employeeManager/employees/createEmployee" element={<CreateEmployee />} />
                <Route path="/employeeManager/employees/viewEmployee/:id" element={<ViewEmployee />} />
                {<Route path="/employeeManager/employees/editEmployee/:id" element={<EditEmployee />} />}
                { <Route path="/employeeManager/employees/deleteEmployee/:id" element={<RemoveEmployee />} />}
                {<Route path="/employeeManager/employees/removeEmployee/:id" element={<RemoveEmployee />} /> }  
                {/* rescue task routes */}
                {/* salary routes */}
                { <Route path="/employeeManager/salary/:id" element={<ViewSalary />} />}
                { <Route path="/employeeManager/salary/EditSalary/:id" element={<EditSalary />} />} 
                { <Route path="/employeeManager/salary/CreateSalary/:eid" element={<CreateSalary />} />}
                {/* job role routes */}
                <Route path="/employeeManager/jobRoles" element={<ManageJobRoles />} />
                <Route path="/employeeManager/jobRoles/viewJobs/:id" element={<ViewJobRoles />} />
                <Route path="/employeeManager/jobRoles/createJobs" element={<CreateJob />} />   
                <Route path="/employeeManager/jobRoles/editJobs/:id" element={<EditJob />} />

                {/* deactivate employees route */}
                <Route path="/employeeManager/deactivateEmployees/ViewDeactivateEmployees/:id" element={<ViewDeactivateEmployees />} />

            </Route>
        </Routes>
        </Router>
    )
}

export default App