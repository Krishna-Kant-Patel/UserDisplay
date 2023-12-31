import React, {useState, useEffect} from 'react';
import { getUserData } from '../ApiCalls/ApiCall';
import './style.css';

function UserData() {
    const [userDetails, setUserDetails] = useState();
    const [singleUser, setUser] = useState();

    useEffect(()=>{
        getUserData(setUserDetails);
    },[])

    const getUserDetail=(username)=>{
        const filterData = userDetails.filter((ele)=>ele.profile.username===username)
        setUser(filterData);
        
    }


  return (
    <>
      <div className="userContainer">
        {userDetails ? <><div className="userList">
            <h4 className='Head'>Users</h4>
            {userDetails &&
            userDetails.map((item)=>{
                return<>
                <div className="userId" onClick={()=>getUserDetail(item.profile.username)}>
                
                    <img src={item.avatar} alt="" className="userImage" />
        
                   <div className="userJob">
                   <p className="username">{item.profile.firstName} {item.profile.lastName}</p>
                   <p className="job">{item.jobTitle}</p>
               </div> 
                    </div>
                </>
            })
            }
        </div>
        
        
        
        </>:<><div class="lds-hourglass"><h3>Please Wait... feching data</h3></div></>}
        <div className="showDetails">
            {singleUser ? <>
                <h4 className="heading">User Details</h4>
            {singleUser &&
            
            singleUser.map((item)=>{
                return <>
                <p><span>User-Name:-</span>  {item.profile.username}</p>
                <p><span>E-mail:-</span>  {item.profile.email}</p>
                <p><span>Job Title:-</span> {item.jobTitle}</p>
                <p><span>Bio:-</span> {item.Bio}</p>

                </>
            })
            }
            </>:null}
        </div>
      </div>
    </>
  )
}

export default UserData;
