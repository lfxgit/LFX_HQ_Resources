import './App.css'
import { FaUserTie, FaFileInvoiceDollar, FaThLarge, FaHeadset } from 'react-icons/fa'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { FaCameraRetro } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { FaAddressCard } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import CSConcreteLogo from './assets/CSConcreteGroup.png';
import RPLogo from './assets/RP_Logo.png';
import SupplyLogo from './assets/LFXSupply.png';
import DriveLogo from './assets/TheDRIVE.png';
import GroupLogo from './assets/RedTree.png';


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

/* Internal link that opens routes in a new tab */
function InternalLink({ to, children }) {
  return (
    <div
      onClick={() => window.open(to, "_blank", "noopener,noreferrer")}
      className="link-card"
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>LFX HQ Resources</h1>

      {/* First section with your real links */}
      <div className="links">
        <ExternalLink url="https://lf01849.purelyhr.com/?returnUrl=https%3a%2f%2flf01849.purelyhr.com%2fcpanel%2fcalendar.aspx">
          <FaUserTie />
          <span>PurelyHR</span>
        </ExternalLink>

        <ExternalLink url="https://app.yetisnow.com/dispatch">
          <FaRegSnowflake />
          <span>Yeti</span>
        </ExternalLink>

        <ExternalLink url="https://cloud.samsara.com/o/5002598/fleet/list?selectedSortKey=alphaAsc">
          <FaCar />
          <span>Samsara</span>
        </ExternalLink>

        <ExternalLink url="https://time.landscapefx.com/">
          <MdAccessTimeFilled />
          <span>Punch In/Out</span>
        </ExternalLink>

        <ExternalLink url="https://landscapefx-my.sharepoint.com/:x:/p/cbolton/EWlnAYRr4IFOuh_I1Lgmrc8B-a2ikYAThTZwy8cdvDRzdA?e=bS4VN0">
          <FaFileInvoiceDollar />
          <span>Expense Report</span>
        </ExternalLink>

        <ExternalLink url="https://www.lfxsupplycentre.com/web/login#cids=6&action=menu">
          <FaThLarge />
          <span>Odoo</span>
        </ExternalLink>

        <a href="mailto:help@landscapefx.com" className="link-card">
          <FaHeadset />
          <span>Help Desk</span>
        </a>


        <ExternalLink url="https://online.adp.com/signin/v1/?APPID=Pin4NAS&productId=80e309c3-709e-bae1-e053-3505430b5495&returnURL=https://signin.adp.com&callingAppId=landing&TARGET=-SM-HTTPS%3a%2f%2fsignin%2eadp%2ecom%2femployee%3ftransId%3de9677262-334f-4ac8-a64a-ba71caadfc58">
          <FaFileInvoiceDollar />
          <span>ADP</span>
        </ExternalLink>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhV21RcM1tnxJgEkvZOrjMGpURU41V0NOSVVDVVFSUVY0NTgxNDVNMzNQMi4u&route=shorturl">
          <FaPaintBrush />
          <span>Creative Request</span>
        </ExternalLink>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhV21RcM1tnxJgEkvZOrjMGpURFU2Wk1KNkVCVEFDMzhQVDdTRk81TzFCQS4u&route=shorturl">
          <FaCameraRetro />
          <span>Photography Request</span>
        </ExternalLink>

        <ExternalLink url="https://thedrivemagazine.com/issue/">
          <FaBookOpen />
          <span>Drive Magazine Request</span>
        </ExternalLink>

        <ExternalLink url="https://forms.office.com/pages/responsepage.aspx?id=nFV4rvechk2pmiSX97OmhV21RcM1tnxJgEkvZOrjMGpUNkY1TEpCR0I5RUcxVzI0QVVUMzMyREtXWC4u&route=shorturl">
          <FaAddressCard />
          <span>Business Card Request</span>
        </ExternalLink>

        <ExternalLink url="https://form.jotform.com/63543736394262">
          <MdOutlineMiscellaneousServices />
          <span>Service/Damage</span>
        </ExternalLink>
      </div>

      <div className="links">

        <ExternalLink url="https://thedrivemagazine.com/">
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
