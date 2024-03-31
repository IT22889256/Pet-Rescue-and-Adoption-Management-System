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
                     <Route path="/InventoryManager/supplier/veiwsupplier/:id" element={<Viewsupplier/>} />
                    <Route path="/InventoryManager/supplier/addsupplier/" element={<Addsupplier />} />
                    <Route path="/InventoryManager/supplier/editsupplier/:id" element={<Editsupplier />} />
                    <Route path="/InventoryManager/supplier/removesupplier/:id" element={<Removesupplier />} />
                    <Route path="/InventoryManager/supplier/viewsupplier/:id" element={<Viewsupplier />} />
                   
                    </Route>
            </Routes>
        </Router>
    )
}

export default App