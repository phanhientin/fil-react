import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app'
import WhoWeArePage from './WhoWeAre/page'
import MissionValuesPage from './MissionValues/page'  
import CodeEthicsPage from './CodeEthics/page'  
import AgenciesPage from './Agencies/page'   
import DevelopersPage from './Developers/page'  
import GovernanceTeamPage from './GovernanceTeam/page' 
import MemberDirectoryPage from './MemberDirectory/page' 
import MemberProfilePage from './MemberProfile/page' 
import NewsPage from './News/page' 
import ArticlePage from './Article/page' 
import DocumentationPage from './Documentation/page' 
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/WhoWeAre" element={<WhoWeArePage />} />
        <Route path="/MissionValues" element={<MissionValuesPage />} />
        <Route path="/CodeEthics" element={<CodeEthicsPage />} />
        <Route path="/Agencies" element={<AgenciesPage />} />
        <Route path="/Developers" element={<DevelopersPage />} />
        <Route path="/GovernanceTeam" element={<GovernanceTeamPage />} />
        <Route path="/MemberDirectory" element={<MemberDirectoryPage />} />
        <Route path="/MemberProfile" element={<MemberProfilePage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/Article" element={<ArticlePage />} />
        <Route path="/Documentation" element={<DocumentationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
