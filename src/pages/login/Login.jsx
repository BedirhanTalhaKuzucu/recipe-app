import React from 'react';
import styles from "./Styles.module.css";
import { ReactComponent as Meal } from '../../assets/meal.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const user = {
    username: "user",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user))
    navigate("/home")
    // window.location.href = "/home";
  }

  return (
    <div className={styles.login}>
        <div className={styles.form_container} style={{textAlign: "center"}}> 
            <div>
              <Meal style={{width:"150px", height:"90px"}}/>
              <h1 style={{color:"white", margin:"2rem", fontSize:"3rem"}}><span className={styles.btk}>{'<'}BTK{'>'}</span> Recıpe</h1>
            </div>
            <div>
            <form onSubmit={handleSubmit}  required className= {styles.login_form}>
                <input type="text" required placeholder='USERNAME'  className={styles.login_input} />
                <input type="password" required  placeholder='PASSWORD' className={styles.login_input}/>
                <input type="submit" value={"Logın"} className={styles.login_button}  />
                
            </form>
            </div> 
        </div>
    </div>
  )
}

export default Login