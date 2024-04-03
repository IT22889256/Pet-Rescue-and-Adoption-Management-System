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




//Suppliers
import Supplierslayout from './components/Supplier/Supplierslayout'

import Requests from '../src/pages/Suppliers/requests'
import ViewRequests from '../src/pages/Suppliers/requests/viewrequests'
import UpdateRequests from '../src/pages/Suppliers/requests/updaterequests'





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
               


                    {/* main routes */}
                    <Route path="/InventoryManager/order" element={<Order />} />
                     {/* order routes*/}
                     <Route path="/InventoryManager/order/veiworder/:id" element={<Vieworder/>} />
                    <Route path="/InventoryManager/order/createorder/" element={<Createorder />} />
                    <Route path="/InventoryManager/order/editorder/:id" element={<Editorder />} />
                    <Route path="/InventoryManager/order/removeorder/:id" element={<Removeorder />} />
                    <Route path="/InventoryManager/order/vieworder/:id" element={<Vieworder/>} />


                    {/* main routes */}
                    <Route path="/InventoryManager/request" element={<Request />} />
                     {/* supplier routes*/}
                     <Route path="/InventoryManager/request/createrequest/" element={<Createrequest/>} />
                    <Route path="/InventoryManager/request/viewrequest/:id" element={<Viewrequest />} />
                    <Route path="/InventoryManager/request/Updaterequest/:id" element={<Updaterequest />} />
                    <Route path="/InventoryManager/request/deleterequest/:id" element={<Deleterequest />} />
                    </Route> 
                     </Routes>

                    <Routes>
                <Route path="/Suppliers" element={<Supplierslayout />}>
                    <Route index path="/Suppliers/order" element={<Requests/>} />
                    <Route path="/Suppliers/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/Suppliers/heplAndSupport" element={<HeplAndSupport />} />
                     
                     <Route path="/Suppliers/requests" element={<Requests/>} />
                    
                     <Route path="/Suppliers/requests/viewrequests/:id" element={<ViewRequests />} />
                     <Route path="/Suppliers/requests/Updaterequests/:id" element={<UpdateRequests />} />
                </Route>
            </Routes> 
        </Router>
    )
}

export default App