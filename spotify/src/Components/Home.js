import React from 'react'
import HomeStyle from './Home.module.css'
import {Link} from "react-router-dom"

function Home() {
  return (
    
      
        <div className={HomeStyle.main}>
            <div className={HomeStyle['left-division']}>

            </div>
            <div className={HomeStyle['left']}>
                <div className={HomeStyle['left-box']}>
                    <div className={HomeStyle['sidebar-content']}>
                    <img className={HomeStyle.images} src="images/spotify-xl.png" alt="" />
                    <span className={HomeStyle['sidebar-names']}>Spotify</span>
                    </div>
                    <div className={HomeStyle['sidebar-content']}>
                    <img className={HomeStyle.images} src="images/home-xxl.png" alt="" />
                    <span className={`${HomeStyle['sidebar-names']} ${HomeStyle.spacing}`}>Home</span>
                    </div>
                    <div className={HomeStyle['sidebar-content']}>
                    <img src="images/search-12-xxl.png" alt="" className={HomeStyle.images} />
                    <span className={`${HomeStyle['sidebar-names']} ${HomeStyle.spacing}`}>Search</span>
                    </div>
                </div>
                <div className={`${HomeStyle['left-box']} ${HomeStyle['left-box-second']}`}>
                    <div className={HomeStyle['sidebar-content']}>
                        <img src="images/book-xl.png" alt="" className={HomeStyle.images} />
                        <span className={`${HomeStyle['sidebar-heading']} ${HomeStyle.spacing}`}>Your Library</span>
                    </div>
                    <div className={HomeStyle['sidebar-content']}>
                        <div className={HomeStyle['sidebar-innerpage']}>
                        <p className={HomeStyle.para1}>Create your first playlist</p>
                        <p className={HomeStyle.para2}>It's easy, we'll help you</p>
                        <button className={HomeStyle.button}>Create Playlist</button>
                        </div>
                    </div>
                </div>
                <div className={`${HomeStyle['left-box']} ${HomeStyle['left-last']}`}>
                    <div className={HomeStyle['sidebar-content']}>
                        <div className={HomeStyle['sidebar-innerpage']}>
                        <p className={HomeStyle.para1}>Let's find some Podcasts to follow</p>
                        <p className={HomeStyle.para2}>We'll keep you updated on new episodes</p>
                        <button className={HomeStyle.button}>Browse Podcasts</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className={HomeStyle['right']}>
                <div className={HomeStyle['right-top']}>
                    <div>
                        <Link className={HomeStyle.signup} to='/Signup'>Sign up</Link>
                    </div>
                    <div className={HomeStyle.login}>
                        <Link id="login" to='/Login'><p style={{color:"black"}}>Log in</p></Link>
                    </div>
                </div>
                <div className={HomeStyle['spacing-division']}>

                </div>
                <div className={HomeStyle['right-bottom']}>

                    <h3>Spotify Playlists</h3>
                    <div className={HomeStyle['right-main']}>
                    <div>
                        <div className={HomeStyle.parts}>
                            <div className={HomeStyle['right-images']}>
                            <img src="images/deep-focus.jpeg" alt=""
                                className={HomeStyle['right-images']} />
                            </div>
                            <p className={HomeStyle.title}>Deep Focus</p>
                            <p>keep calm and focus on ambient and .....</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomeStyle.parts}>
                                <div className={HomeStyle['right-images']}>
                                <img src="images/study.jpeg" alt=""
                                    className={HomeStyle['right-images']} />
                                </div>
                                <p className={HomeStyle.title}>Lofi study beats</p>
                                <p>keep calm and focus on ambient and .....</p>
                            </div>

                        </div>
                        <div>
                            <div className={HomeStyle.parts}>
                                <div className={HomeStyle['right-images']}>
                                <img src="images/readingjpeg.jpeg" alt=""
                                    className={HomeStyle['right-images']} />
                                </div>
                                <p className={HomeStyle.title}>Reading sound track</p>
                                <p>keep calm and focus on ambient and .....</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomeStyle.parts}>
                                <div className={HomeStyle['right-images']}>
                                <img src="images/concentratiom.jpeg" alt=""
                                    className={HomeStyle['right-images']} />
                                </div>
                                <p className={HomeStyle.title}>Perfect concentration</p>
                                <p>keep calm and focus on ambient and .....</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomeStyle.parts}>
                                <div className={HomeStyle['right-images']}>
                                <img src="images/jazz.jpeg" alt="" className={HomeStyle['right-images']} />
                                </div>
                                <p className={HomeStyle.title}>Smooth jazz beats</p>
                                <p>keep calm and focus on ambient and .....</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div className={HomeStyle['footer-bottom']}>
                    <div className={HomeStyle['footer-main']}>
                        <div className={HomeStyle['footer-parts']}>
                            <h1 className={HomeStyle['footer-heading']}>Company</h1>
                            <p className={HomeStyle['footer-descp']}>About</p>
                            <p className={HomeStyle['footer-descp']}>Jobs</p>
                            <p className={HomeStyle['footer-descp']}>For the record</p>
                        </div>

                        <div className={HomeStyle['footer-parts']}>
                            <h1 className={HomeStyle['footer-heading']}>Communities</h1>
                            <p className={HomeStyle['footer-descp']}>For Artists</p>
                            <p className={HomeStyle['footer-descp']}>Developers</p>
                            <p className={HomeStyle['footer-descp']}>Advertising</p>
                            <p className={HomeStyle['footer-descp']}>Investors</p>
                        </div>

                        <div className={HomeStyle['footer-parts']}>
                            <h1 className={HomeStyle['footer-heading']}>Useful links</h1>
                            <p className={HomeStyle['footer-descp']}>Support</p>
                            <p className={HomeStyle['footer-descp']}>Free Mobile App</p>
                        </div>

                        <div className={HomeStyle['footer-parts']}></div>
                        <div className={HomeStyle['footer-parts']}></div>
                    </div>

                    <hr /><br />
                    <p className={HomeStyle['footer-descp']}>&#169; 2023 Spotify AB</p>
                </div>
            </div>
        </div>


  )
}

export default Home
