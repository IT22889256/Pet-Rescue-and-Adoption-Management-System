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

import UserAffairsLayout from './components/UserAffairsManager/UserAffairsLayout'
import UserAffairsManagerDashboard from './pages/UserAffairsManagement/UserAffairsManagerDashboard'

import Feedback from '../src/pages/UserAffairsManagement/Feedback'
import CreateFeedback from '../src/pages/UserAffairsManagement/Feedback/CreateFeedback'
import EditFeedback from '../src/pages/UserAffairsManagement/Feedback/EditFeedback'
import RemoveFeedback from '../src/pages/UserAffairsManagement/Feedback/RemoveFeedback'
import ViewFeedback from '../src/pages/UserAffairsManagement/Feedback/ViewFeedback'

import IssuesAndConcerns from '../src/pages/UserAffairsManagement/IssuesAndConcerns'
import CreateIssuesAndConcerns from '../src/pages/UserAffairsManagement/IssuesAndConcerns/CreateIssuesAndConcerns'
import EditIssuesAndConcerns from '../src/pages/UserAffairsManagement/IssuesAndConcerns/EditIssuesAndConcerns'
import RemoveIssuesAndConcerns from '../src/pages/UserAffairsManagement/IssuesAndConcerns/RemoveIssuesAndConcerns'
import ViewIssuesAndConcerns from '../src/pages/UserAffairsManagement/IssuesAndConcerns/ViewIssuesAndConcerns'

import Gallery from '../src/pages/UserAffairsManagement/Gallery'
import CreateGallery from '../src/pages/UserAffairsManagement/Gallery/CreateGallery'
import EditGallery from '../src/pages/UserAffairsManagement/Gallery/EditGallery'
import RemoveGallery from '../src/pages/UserAffairsManagement/Gallery/RemoveGallery'
import ViewGallery from '../src/pages/UserAffairsManagement/Gallery/ViewGallery'

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
                    
                </Route>
            </Routes>
            <Routes>
                <Route path="/UserAffairsManager" element={<UserAffairsLayout />}>
                    <Route index path="/UserAffairsManager" element={<UserAffairsManagerDashboard />} />
                    <Route path="/UserAffairsManager/employeeProfile" element={<EmployeeProfile />} />
                    <Route path="/UserAffairsManager/heplAndSupport" element={<HeplAndSupport />} />
                    {/* main routes */}
                    <Route path="/UserAffairsManager/feedback" element={<Feedback/>} />
                    <Route path="/UserAffairsManager/rescueTask" element={<RescueTask />} />
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
                </Route>
            </Routes>
        </Router>
    )
}

export default App