import './App.css'
import { FaUserTie, FaFileInvoiceDollar, FaThLarge, FaHeadset } from 'react-icons/fa'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { FaCameraRetro, FaPaintBrush, FaAddressCard, FaRegSnowflake, FaCar } from 'react-icons/fa';
import { MdAccessTimeFilled, MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import CSConcreteLogo from './assets/CSConcreteGroup.png';
import RPLogo from './assets/RP_logo.png';
import SupplyLogo from './assets/LFXSupply.png';
import DriveLogo from './assets/TheDRIVE.png';
import GroupLogo from './assets/LFX_DB_Logo.png';
import { GiHighGrass } from "react-icons/gi";


/* Reusable external link component */
function ExternalLink({ url, children }) {
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      }}
      className="link-card"
    >
      {children}
    </a>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>LFX HQ Resources</h1>

      {/* ---------- ROW 1 ---------- */}
      <div className="links">
        <ExternalLink url="https://time.landscapefx.com/">
          <MdAccessTimeFilled /><span>Punch In/Out</span>
        </ExternalLink>

        <ExternalLink url="https://online.adp.com/signin/v1/?APPID=Pin4NAS">
          <FaFileInvoiceDollar /><span>ADP</span>
        </ExternalLink>
        
        <ExternalLink url="https://platform.risepeople.com/app/#/auth/">
          <FaUserTie /><span>Rise</span>
        </ExternalLink>

        <ExternalLink url="https://landscapefx-my.sharepoint.com/:x:/p/cbolton/EWlnAYRr4IFOuh_I1Lgmrc8B-a2ikYAThTZwy8cdvDRzdA?e=bS4VN0">
          <FaFileInvoiceDollar /><span>Expense Report</span>
        </ExternalLink>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhYQKJxD9jK5PhW9EGz09kONUNk1TN0pCVlZPNENNRTAzSUw5SzVQQk9ERS4u&route=shorturl">
          <FaUserTie /><span>Purchase Approval Form</span>
        </ExternalLink>
      </div>

      {/* ---------- ROW 2 ---------- */}
      <div className="links">
        <a href="mailto:help@landscapefx.com" className="link-card">
          <FaHeadset /><span>IT Help Desk</span>
        </a>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhV21RcM1tnxJgEkvZOrjMGpURU41V0NOSVVDVVFSUVY0NTgxNDVNMzNQMi4u&route=shorturl">
          <FaPaintBrush /><span>Creative Request</span>
        </ExternalLink>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhV21RcM1tnxJgEkvZOrjMGpURFU2Wk1KNkVCVEFDMzhQVDdTRk81TzFCQS4u&route=shorturl">
          <FaCameraRetro /><span>Photography Request</span>
        </ExternalLink>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhV21RcM1tnxJgEkvZOrjMGpUNkY1TEpCR0I5RUcxVzI0QVVUMzMyREtXWC4u&route=shorturl">
          <FaAddressCard /><span>Business Card Request</span>
        </ExternalLink>

        <ExternalLink url="https://landscapefx.sharepoint.com/:f:/s/TheDriveStudio/EjmjYshY-NNHl5sY6XaehMQB8LGZVGrmmd8sKpZFjMwOwQ?e=IWCDI6">
          <AiFillPicture /><span>Logos</span>
        </ExternalLink>
      </div>

      {/* ---------- ROW 3 ---------- */}
      <div className="links">
        <ExternalLink url="https://www.lfxsupplycentre.com/web/login#cids=6&action=menu">
          <FaThLarge /><span>Odoo</span>
        </ExternalLink>

        <ExternalLink url="https://app.companycam.com/users/sign_in">
          <FaCamera /><span>CompanyCam</span>
        </ExternalLink>

        <ExternalLink url="https://app.yetisoftware.com/dispatch">
          <FaRegSnowflake /><span>Yeti</span>
        </ExternalLink>

        <ExternalLink url="https://cloud.samsara.com/o/5002598/fleet/list?selectedSortKey=alphaAsc">
          <FaCar /><span>Samsara</span>
        </ExternalLink>

        <ExternalLink url="https://form.jotform.com/63543736394262">
          <MdOutlineMiscellaneousServices /><span>Equip Service / Damage</span>
        </ExternalLink>

        <ExternalLink url="https://form.jotform.com/253074861364056">
          <GiHighGrass /><span>Pesticides Application</span>
        </ExternalLink>

        
      </div>

      <h1 className="companies-title">LFX Group Of Companies</h1>
      <div className="links">
        <ExternalLink url="https://www.landscapefx.com/">
          <img src={GroupLogo} alt="Group Logo" className="card-img" />
        </ExternalLink>

        <ExternalLink url="https://www.lfxsupplycentre.com/">
          <img src={SupplyLogo} alt="Supply" className="card-img" />
        </ExternalLink>

        <ExternalLink url="https://rochesterplace.com/">
          <img src={RPLogo} alt="RP" className="card-img" />
        </ExternalLink>

        <ExternalLink url="https://csconcretegroup.com/">
          <img src={CSConcreteLogo} alt="CS Concrete" className="card-img" />
        </ExternalLink>

        <ExternalLink url="https://thedrivemagazine.com/">
          <img src={DriveLogo} alt="The Drive" className="card-img" />
        </ExternalLink>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
