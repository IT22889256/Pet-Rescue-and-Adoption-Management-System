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


import EmployeeLayout from './components/employeeManager/EmployeeLayout';
import EmployeeManagerDashboard from './pages/employeeManagment/EmployeeManagerDashboard';
import ManageEmployees from './pages/employeeManagment/ManageEmployees';
import CreateEmployee from './pages/employeeManagment/employees/CreateEmployee';
import ViewEmployee from './pages/employeeManagment/employees/ViewEmployees';
import EditEmployee from './pages/employeeManagment/employees/EditEmployee';
import RemoveEmployee from './pages/employeeManagment/employees/RemoveEmployee';

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
                <Route path="/employeeManager/rescueTask" element={<RescueTask />} />
                <Route path="/employeeManager/petProfile" element={<PetProfile />} />
                {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
                {/* pet profile routes */}
                <Route path="/employeeManager/employees/createEmployee" element={<CreateEmployee />} />
                <Route path="/employeeManager/employees/viewEmployee/:id" element={<ViewEmployee />} />
                {<Route path="/employeeManager/employees/editEmployee/:id" element={<EditEmployee />} />}
                { <Route path="/employeeManager/employees/deleteEmployee/:id" element={<RemoveEmployee />} />}
                {/* rescue task routes */}

                
            </Route>
        </Routes>
        </Router>
    )
}

export default App