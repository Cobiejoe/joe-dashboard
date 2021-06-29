import "./user.css";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle"> Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.18169-9/13178979_1001754563194148_3171355378510740359_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Aw_p11M-WVYAX-Bw_MN&_nc_ht=scontent.fhio2-1.fna&oh=1ba85fcb9dd39f6e8ed13ca7a1f3bfc4&oe=60D8DC7F" alt="" className="userShowImg"></img>
                        <div className="userShowTopTitle">
                            <span className= "userShowUsername">Joe Cobarrubias</span>
                            <span className= "userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">cobiejoe96</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">07/17/1996</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">(559)301-1598</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">josephcobarrubias@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Eugene, OR</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    placeholder="cobiejoe96" 
                                    className="userUpdateInput">
                                </input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Joe Cobarrubias" 
                                    className="userUpdateInput">
                                </input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    placeholder="josephcobarrubias@gmail.com" 
                                    className="userUpdateInput">
                                </input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input 
                                    type="text" 
                                    placeholder="(559)301-1598" 
                                    className="userUpdateInput">
                                </input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Residence</label>
                                <input 
                                    type="text" 
                                    placeholder="Eugene, OR" 
                                    className="userUpdateInput">
                                </input>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                    className="userUpdateImg" 
                                    src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.18169-9/13178979_1001754563194148_3171355378510740359_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Aw_p11M-WVYAX9_EiPY&_nc_ht=scontent.fhio2-1.fna&oh=a2c8fb105476520f8efbe44f03082cc8&oe=60D8DC7F" 
                                    alt="">
                                </img>
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{ display: "none" }}></input>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
