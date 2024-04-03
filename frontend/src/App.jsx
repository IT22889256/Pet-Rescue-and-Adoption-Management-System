import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import PetManagerDashboard from './pages/petManament/PetManagerDashboard'
import HeplAndSupport from './pages/HeplAndSupport'


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

//addoption Manager
import AdoptionLayout from './components/adoptionManager/AdoptionLayout'
import AdoptionManagerDashboard from './pages/adoptionManagement/AdoptionManagerDashboard'
import Adoption from '../src/pages/adoptionManagement/Adoption'
import PetSupply from './pages/adoptionManagement/Supply'
import Appoinment from './pages/adoptionManagement/Appoinment'
import AdoptionProcess from './pages/adoptionManagement/AdoptionProcess'

//adoption request
import CreateRequest from './pages/adoptionManagement/adoptionRequest/CreateRequest'
import ViewRequest from './pages/adoptionManagement/adoptionRequest/ViewRequest'
import EditRequest from './pages/adoptionManagement/adoptionRequest/EditRequest'
import DeleteRequest from './pages/adoptionManagement/adoptionRequest/DeleteRequest'

//supply request
import CreateSupplyRequest from './pages/adoptionManagement/supplyRequest/CreateSupplyRequest'
import ViewSupplyRequest from './pages/adoptionManagement/supplyRequest/ViewSupplyRequest'
import EditSupplyRequest from './pages/adoptionManagement/supplyRequest/EditSupplyRequest'
import DeleteSupplyRequest from './pages/adoptionManagement/supplyRequest/DeleteSupplyRequest'

//adoption process
import AllAdoptionRequest from './pages/adoptionManagement/adoptionProcess/AllAdoptionRequest'
import ViewAdoptionRequest from './pages/adoptionManagement/adoptionProcess/ViewAdoptionRequest'

//appoinment
import CreateAppoinment from './pages/adoptionManagement/AppoinmentSchedule/CreateAppoinment'
import ViewAppoinment from './pages/adoptionManagement/AppoinmentSchedule/ViewAppoinment'
import EditAppoinment from './pages/adoptionManagement/AppoinmentSchedule/EditAppoinment'
import DeleteAppoinment from './pages/adoptionManagement/AppoinmentSchedule/DeleteAppoinment'

//Doctor
import DoctorLayout from './components/doctor/DoctorLayout'
import DoctorDashboard from './pages/doctorManagement/DoctorDashboard'

import AllPetHealth from './pages/doctorManagement/pet_/AllPetHealth'
import ViewPetHealth from './pages/doctorManagement/pet_/ViewPetHealth'

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
                    <Route path="/adoptionManager" element={<AdoptionLayout />}>
                    <Route index path="/adoptionManager" element={<AdoptionManagerDashboard />} />
                    <Route path="/adoptionManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/adoptionManager/heplAndSupport" element={<HeplAndSupport />} />

                    {/* main routes */}
                    <Route path="/adoptionManager/adoption" element={<Adoption />} /> 
                    <Route path="/adoptionManager/rescueTask" element={<RescueTask />} />
                    <Route path="/adoptionManager/petProfile" element={<PetProfile />} />
                    <Route path="/adoptionManager/petSupply" element={<PetSupply />} />
                    <Route path="/adoptionManager/AppoinmentSchedule" element={<Appoinment />} />
                    {/* <Route path="/adoptionManager/AdoptionProcess" element={<AdoptionProcess />} /> */}

                    {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}  

                    {/*adoption profile routes*/}
                    <Route path="/adoptionManager/adoptionRequest/CreateRequest" element={<CreateRequest />} />
                    <Route path="/adoptionManager/adoptionRequest/viewRequest/:id" element={<ViewRequest />} />
                    <Route path="/adoptionManager/adoptionRequest/editRequest/:id" element={<EditRequest />} />
                    <Route path="/adoptionManager/adoptionRequest/deleteRequest/:id" element={<DeleteRequest />} />

                    {/*pet suppliment routes */}
                    <Route path="/adoptionManager/supplyRequest/CreateSupplyRequest" element={<CreateSupplyRequest />} />
                    <Route path="/adoptionManager/supplyRequest/viewSupplyRequest/:id" element={<ViewSupplyRequest />} />
                    <Route path="/adoptionManager/supplyRequest/editSupplyRequest/:id" element={<EditSupplyRequest />} />
                    <Route path="/adoptionManager/supplyRequest/deleteSupplyRequest/:id" element={<DeleteSupplyRequest />} />

                    {/*adoption process routes*/}
                    <Route path="/adoptionManager/adoptionProcess" element={<AllAdoptionRequest />} />
                    <Route path="/adoptionManager/adoptionProcess/ViewAdoptionRequest/:id" element={<ViewAdoptionRequest />} />

                    {/*appoinment scchedule routes*/}
                    <Route path="/adoptionManager/AppoinmentSchedule/CreateAppoinment" element={<CreateAppoinment />} />
                    <Route path="/adoptionManager/AppoinmentSchedule/ViewAppoinment/:id" element={<ViewAppoinment />} />
                    <Route path="/adoptionManager/AppoinmentSchedule/EditAppoinment/:id" element={<EditAppoinment />} />
                    <Route path="/adoptionManager/AppoinmentSchedule/DeleteAppoinment/:id" element={<DeleteAppoinment />} />

                    /adoptionManager/adoptionProfile/viewRequest
                </Route>
            </Routes>
            <Routes>
                    <Route path="/doctor" element={<DoctorLayout />}>
                    <Route index path="/doctor" element={<DoctorDashboard />} />
                    <Route path="/doctor/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/doctor/heplAndSupport" element={<HeplAndSupport />} />

                    {/*doctor routes*/}
                    <Route path="/doctor/petHealth" element={<AllPetHealth />} />
                    <Route path="/doctor/petHeaalth/ViewPetHealth/:id" element={<ViewPetHealth />} />
            </Route>
            </Routes>

        </Router>
    )
}

export default App