import Image from "next/image";
import styles from "./page.module.css";
// import 'website-redesign-demo/src/app/globals.css'
import VisibilityIcon from '@mui/icons-material/Visibility';


//component
import Navigation from './components/Navigation/Navigation';


export default function Home() {
  return (
    <>
      <Navigation />

      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <h1 className={styles.logoh1}>Redefining <span className={styles.fleetManagement}>Fleet Management</span></h1>
          </div>
          <div className={styles.midblock}>
            <div className={styles.inputblock}>
              
              <input placeholder="Email Address"></input>
              <input placeholder="Password"></input>
            </div>
    
            <div className={styles.bottomblock}>
              <a className={styles.forgotpw} href="#">Forgot password?</a>
              <button className={styles.signInButton} >Sign In</button>
            </div>
          </div>  
        </div>             
      </div>    
    </>

  );
}
