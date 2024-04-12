import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/shared/Layout'



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


//appoinment
import CreateAppoinment from './pages/adoptionManagement/AppoinmentSchedule/CreateAppoinment'
import ViewAppoinment from './pages/adoptionManagement/AppoinmentSchedule/ViewAppoinment'
import EditAppoinment from './pages/adoptionManagement/AppoinmentSchedule/EditAppoinment'
import DeleteAppoinment from './pages/adoptionManagement/AppoinmentSchedule/DeleteAppoinment'


//donation management imports
import DonationLayout from './components/DonationManager/DonationLayout'
import DonationDashboard from './pages/donationManagement/DonationManagerDashboard'
import SponserPetProfile from './pages/donationManagement/SponserPetProfile'
import CreateSponsorPet from './pages/donationManagement/SponsorshipPetProfile/CreateSponsorPet'
import ViewSponsorPet from './pages/donationManagement/SponsorshipPetProfile/ViewSponsorPet'
import EditSponsorPet from './pages/donationManagement/SponsorshipPetProfile/EditSponsorPet'
import RemoveSponsorPet from './pages/donationManagement/SponsorshipPetProfile/RemoveSponsorPet'


//reccuring donations
import CreateReccuringDonation from './pages/donationManagement/reccuringdonations/createreccuringdonations'
import ReccuringDonations from './pages/donationManagement/RescueTask'
import ViewReccuringDonations from './pages/donationManagement/reccuringdonations/viewreccuringdonations'
import EditReccuringDonations from './pages/donationManagement/reccuringdonations/editreccuringdonations'
import UnsubsribeReccuringDonation from './pages/donationManagement/reccuringdonations/deletereccuringdonations'  


import SpecificNeedDonations from './pages/donationManagement/specificneedsdonations'
import CreateSpecificNeedDonations from './pages/donationManagement/specificneedsdonations/createspecificneedsdonations'
import ViewSpecificNeedsDonations from './pages/donationManagement/specificneedsdonations/viewspecificneedsdonations'


import SponsorDonations from './pages/donationManagement/sponsordonations'
import CreateSponsorDonations from './pages/donationManagement/sponsordonations/createsponsordonations'
// import ViewSponsorDonations from './pages/donationManagement/sponsordonations/viewsponsordonations'
//fund reuests
import FundRequest from './pages/donationManagement/fundrequests/fundrequests'
import ViewFundRequest from './pages/donationManagement/fundrequests/Viewfundrequests'
//Employeee


//Doctor
import DoctorLayout from './components/doctor/DoctorLayout'
import DoctorDashboard from './pages/doctorManagement/DoctorDashboard'

import AllPetHealth from './pages/doctorManagement/petHealth/AllPetHealth'
import ViewPetHealth from './pages/doctorManagement/petHealth/ViewPetHealth'
import EditPetHealth from './pages/doctorManagement/petHealth/EditPetHealth'

//Suppliers
import Supplierslayout from './components/Supplier/Supplierslayout'

import Requests from '../src/pages/Suppliers/requests'
import ViewRequests from '../src/pages/Suppliers/requests/viewrequests'
import UpdateRequests from '../src/pages/Suppliers/requests/updaterequests'


//common ar
import ViewCommonAR from './pages/petManament/commonAR/ViewCommonAR'
import CommonAR from './pages/petManament/commonAR/CommonAR'


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
                    {/* common AR */}
                    <Route path="/petManager/commonAr/" element={<CommonAR />} />
                    <Route path="/petManager/commonAr/viewCommonAR/:id" element={<ViewCommonAR />} />

                </Route>
            </Routes>


            <Routes>

                <Route path="/DonationManager" element={<DonationLayout />}>
                    <Route index path="/DonationManager" element={<DonationDashboard/>} />
                    <Route path="/DonationManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/DonationManager/heplAndSupport" element={<HeplAndSupport />} />
                    {/* main routes */}
                    <Route path="/DonationManager/rescueRequest" element={<RescueRequest />} />
                    <Route path="/DonationManager/reccuringdonations" element={<ReccuringDonations />} />
                    <Route path="/DonationManager/SponsorshipPets" element={<SponserPetProfile />} />
                    <Route path ="/DonationManager/specificneedsdonations" element={<SpecificNeedDonations />} />
                    <Route path ="/DonationManager/sponsordonations" element={<SponsorDonations />} />

                    {/*sponsor pet profile routes */}
                    <Route path="/DonationManager/SponsorshipPets/createSponsorPet" element={<CreateSponsorPet />} />
                    <Route path="/DonationManager/SponsorshipPets/viewSponsorPet/:id" element={<ViewSponsorPet />} />
                    <Route path ="/DonationManager/SponsorshipPets/editSponsorPet/:id" element={<EditSponsorPet />} />
                    <Route path ="/DonationManager/SponsorshipPets/removeSponsorPet/:id" element={<RemoveSponsorPet />} />

                    {/* reccuring donations routes */}
                    <Route path="/DonationManager/reccuringdonations/createReccuringDonations" element={<CreateReccuringDonation />} />
                    <Route path="/DonationManager/reccuringdonations/viewreccuringdonations/:id" element={<ViewReccuringDonations />} />
                    <Route path ="/DonationManager/reccuringdonations/editreccuringdonations/:id" element={<EditReccuringDonations />} />
                    <Route path="/DonationManager/reccuringdonations/deletereccuringdonations/:id" element={<UnsubsribeReccuringDonation />} />

                    {/* specific need donations routes */}
                    <Route path="/DonationManager/specificneeddonations/createspecificneeddonations" element={<CreateSpecificNeedDonations />} />
                     <Route path ="/DonationManager/specificneeddonations/viewspecificneedsdonations/:id" element={<ViewSpecificNeedsDonations />} />
                     
                    {/* fund request routes */}
                    <Route path="/DonationManager/fundrequests" element={<FundRequest />} />
                    <Route path="/DonationManager/fundrequets/Viewfundrequests/:id" element={<ViewFundRequest />} />

                    {/* sponsor donations routes */}
                     <Route path ="/DonationManager/sponsordonations/createsponsordonations" element={<CreateSponsorDonations />} />                 
                    {/* <Route path="/employeeProfile" element={<EmployeeProfile />} /> */}
                     </Route>

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
                    <Route path="/doctor/petHeaalth/EditPetHealth/:id" element={<EditPetHealth />} />
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