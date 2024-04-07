import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeplAndSupport from './pages/HeplAndSupport'
import EmployeeProfile from './components/EmployeeProfile'

//pet managemnt imports
import PetManagerDashboard from './pages/petManament/PetManagerDashboard'
import PetLayout from './components/petManager/PetLayout'
import RescueRequest from './pages/petManament/RescueRequest'
import RescueTask from './pages/petManament/RescueTask'
import PetProfile from './pages/petManament/PetProfile'
import ViewPet from './pages/petManament/petProfile/ViewPet'
import CreatePet from './pages/petManament/petProfile/CreatePet'
import EditPet from './pages/petManament/petProfile/EditPet'
import RemovePet from './pages/petManament/petProfile/RemovePet'
import ViewRescueTask from './pages/petManament/rescueTask/ViewRescueTask'
import CreateRescueTask from './pages/petManament/rescueTask/CreateRescueTask'
import EditRescueTask from './pages/petManament/rescueTask/EditRescueTask'
import DeleteRescueTask from './pages/petManament/rescueTask/DeleteRescueTask'
import ViewRescueRequest from './pages/petManament/rescueRequest/ViewRescueRequest'
import CreateRescueRequest from './pages/petManament/rescueRequest/CreateRescueRequest'

//Transport management imports
import TransportLayout from './components/transportManager/TransportLayout'
import TransportManagerDashboard from './pages/transportManagement/TransportManagerDashboard'
import ScheduleProfile from './pages/transportManagement/ScheduleProfile'
import CreateSchedule from './pages/transportManagement/scheduleProfile/CreateSchedule'
import EditSchedule from './pages/transportManagement/scheduleProfile/EditSchedule'
import CreateVehicle from './pages/transportManagement/vehicleProfile/CreateVehicle'
import VehicleProfile from './pages/transportManagement/VehicleProfile'
import EditVehicle from './pages/transportManagement/vehicleProfile/EditVehicle'
import ViewVehicle from './pages/transportManagement/vehicleProfile/ViewVehicle'
import RemoveVehicle from './pages/transportManagement/vehicleProfile/RemoveVehicle'
import TaskRequest from './pages/transportManagement/TaskRequest'
import ViewTaskRequest from './pages/transportManagement/taskRequest/ViewTaskRequest'
import EditTaskRequest from './pages/transportManagement/taskRequest/EditTaskRequest'

//apple import
import Apple from './pages/Apple'

//Driver imports
import DriverLayout from './components/driver/DriverLayout'

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
                    <Route path="/petManager/rescueTask/viewRescueTask/:id" element={<ViewRescueTask />} />
                    <Route path="/petManager/rescueTask/createRescueTask/:id" element={<CreateRescueTask />} />
                    <Route path="/petManager/rescueTask/editRescueTask/:id" element={<EditRescueTask />} />
                    <Route path="/petManager/rescueTask/deleteRescueTask/:id" element={<DeleteRescueTask />} />
                    {/* rescue request routes */}
                    <Route path="/petManager/rescueRequest/viewRescueRequest/:id" element={<ViewRescueRequest />} />
                    <Route path="/petManager/rescueRequest/createRescueRequest" element={<CreateRescueRequest />} />
                    <Route path="/petManager/rescueRequest/viewRescueRequest" element={<ViewRescueRequest />} />
                    <Route path="/petManager/rescueRequest/viewRescueRequest" element={<ViewRescueRequest />} />
                </Route>

                {/* Transport management routes */}
                <Route path="/transportManager" element={<TransportLayout />}>
                    <Route index path="/transportManager" element={<TransportManagerDashboard />} />
                    <Route path="/transportManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/transportManager/heplAndSupport" element={<HeplAndSupport />} />
                    {/* main routes */}
                    <Route path="/transportManager/rescueRequest" element={<RescueRequest />} />
                    <Route path="/transportManager/rescueTask" element={<RescueTask />} />
                    <Route path="/transportManager/scheduleProfile" element={<ScheduleProfile />} />
                    <Route path="/transportManager/vehicleProfile" element={<VehicleProfile />} />

                    {/* Task request routes */}
                    <Route path="/transportManager/taskRequest" element={<TaskRequest />} />
                    <Route path="/transportManager/taskRequest/viewTaskRequest/:id" element={<ViewTaskRequest />} />
                    <Route path="/transportManager/taskRequest/editTaskRequest/:id" element={<EditTaskRequest />} />
        
                    
                    {/* Schedule profile routes */}
                    <Route path="/transportManager/scheduleProfile/createSchedule" element={<CreateSchedule />} />
                    <Route path="/transportManager/scheduleProfile/editSchedule/:id" element={<EditSchedule />} />

                    {/* Vehicle profile routes */}
                    <Route path="/transportManager/vehicleProfile/CreateVehicle" element={<CreateVehicle />} />
                    <Route path="/transportManager/vehicleProfile/editVehicle/:id" element={<EditVehicle />} />
                    <Route path="/transportManager/vehicleProfile/ViewVehicle/:id" element={<ViewVehicle />} />
                    <Route path="/transportManager/vehicleProfile/removeVehicle/:id" element={<RemoveVehicle />} />
               </Route>

               <Route>
                 {/* Driver main routes */}
                 <Route path="/driver" element={<DriverLayout />}></Route>
               </Route>


                <Route path="/apple" element={<Apple />} />
            
                

            </Routes>
            
        </Router>
    )
}

export default App