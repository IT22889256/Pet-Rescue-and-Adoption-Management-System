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
            </Routes>
        </Router>
    )
}

export default App