import React from 'react'
import UserStyle from './UserHomePage.module.css'
import { Link } from 'react-router-dom'

function UserHomePage() {
  return (
    <div className={UserStyle['main']}>
        <div className={UserStyle['left-division']}>

        </div>
        <div className={UserStyle['left']}>
            <div className={UserStyle['left-box']}>
                <div className={` ${UserStyle['sidebar-content']}`}>
                    <img className={`${UserStyle['images']}`} src="images/home-xxl.png" alt="" />
                    <span className={`${UserStyle['sidebar-names']} ${UserStyle['spacing']}`}>Home</span>
                </div>
                <div className={` ${UserStyle['sidebar-content']}`}>
                    <img src="images/search-12-xxl.png" alt="" className={`${UserStyle['images']}`} />
                    <span className={`${UserStyle['sidebar-names']} ${UserStyle['spacing']}`}>Search</span>
                </div>
            </div>

            <div className={UserStyle['left-last']}>
                <div className={` ${UserStyle['sidebar-content']}`}>
                    <img src="images/book-xl.png" alt="" className={`${UserStyle['images']}`} />
                    <span className={`${UserStyle['sidebar-heading']} ${UserStyle['spacing']}`}>Your Library</span>
                </div>
                <div className={` ${UserStyle['sidebar-content']}`}>
                    <span className={`${UserStyle['sidebar-items']}`}>Playlist</span>
                    <span className={`${UserStyle['sidebar-items']}`}>Artist</span>
                </div>
                <div className={`${UserStyle['sidebar-content']} ${UserStyle['search-recents']}`}>
                    <div className={`${UserStyle['search']}`}>
                        <img src="images/seach.png" alt="" className={`${UserStyle['search-icon']}`} />
                    </div>
                    <div className={`${UserStyle['recents']}`}>
                        <div>
                            <span className={`${UserStyle['recents-word']}`}>Recents</span>
                        </div>
                        <div className={`${UserStyle['hamburger']} ${UserStyle['recent-icon']}`}>
                            &#9776;
                        </div>
                    </div>
                </div>
            </div>  

            <div className={`${UserStyle['lib-content']}`}>
                <div className={`${UserStyle['artist']}`}>
                    <div>
                        <img src="images/spotify_liked.jpeg" alt="" className={`${UserStyle['liked-pic']}`} />
                    </div>
                    <div className={`${UserStyle['artist-details']}`}>
                        <p className={`${UserStyle['artist-name']}`}>Liked Songs</p>
                        <p className={`${UserStyle['artist-role']}`}>Playlist . 2 Songs</p>
                    </div>
                </div>
                <div className={`${UserStyle['artist']}`}>
                    <div>
                        <img src="images/alanwalker.jpeg" alt="" className={`${UserStyle['artist-pic']}`} />
                    </div>
                    <div className={`${UserStyle['artist-details']}`}>
                        <p className={`${UserStyle['artist-name']}`}>Alan Walker</p>
                        <p className={`${UserStyle['artist-role']}`}>Artist</p>
                    </div>
                </div>
                <div className={`${UserStyle['artist']}`}>
                    <div>
                        <img src="images/arijit.jpeg" alt="" className={`${UserStyle['artist-pic']}`} />
                    </div>
                    <div className={`${UserStyle['artist-details']}`}>
                        <p className={`${UserStyle['artist-name']}`}>Arijit Singh</p>
                        <p className={`${UserStyle['artist-role']}`}>Artist</p>
                    </div>
                </div>
                <div className={`${UserStyle['artist']}`}>
                    <div>
                        <img src="images/arman.jpg" alt="" className={`${UserStyle['artist-pic']}`} />
                    </div>
                    <div className={`${UserStyle['artist-details']}`}>
                        <p className={`${UserStyle['artist-name']}`}>Arman Malik</p>
                        <p className={`${UserStyle['artist-role']}`}>Artist</p>
                    </div>
                </div>
            </div>
        </div>
        

<div className={`${UserStyle['right']}`}>
    <div className={`${UserStyle['right-heading-top']}`}>
        <div>
            <p className={`${UserStyle['heading']}`}>Welcome to Spotify</p>
        </div>
        <div className={`${UserStyle['header-buttons']}`}>
            <div className={`${UserStyle['login']} ${UserStyle['logout']}`}>
                <Link to='/'><p style={{color:"black"}}>Log out</p></Link>
            </div>
            <div>
                {/* <div className={`${UserStyle['hamburger']}`} onClick={toggleOptions}>
                    &#9776;
                </div> */}
            </div>
            <div id={`${UserStyle['options']}`}>
                {/* <button className={`${UserStyle['option-btn']}`} onClick={() => window.location.href = 'http://192.168.43.94:5001/editprofile'}>
                    Edit Profile
                </button>
                <button className={`${UserStyle['option-btn']}`} onClick={() => window.location.href = `http://192.168.43.94:5001/deleteaccount/{{message['id']}}`}>
                    Delete
                </button> */}
            </div>
        </div>
    </div>
    <div className={`${UserStyle['spacing-division']}`}></div>
    <div className={`${UserStyle['right-bottom']}`}>
        <h3>Made For You</h3>
        <div className={`${UserStyle['right-main']}`}>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/deep-focus.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Deep Focus</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/study.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Lofi study beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link tp='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/readingjpeg.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Reading sound track</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/concentratiom.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Perfect concentration</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/jazz.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Smooth jazz beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <div className={`${UserStyle['right-bottom']}`}>
        <h3>English</h3>
        <div className={`${UserStyle['right-main']}`}>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/deep-focus.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Deep Focus</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/study.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Lofi study beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link tp='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/readingjpeg.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Reading sound track</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/concentratiom.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Perfect concentration</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/jazz.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Smooth jazz beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <div className={`${UserStyle['right-bottom']}`}>
        <h3>Kannada</h3>
        <div className={`${UserStyle['right-main']}`}>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/deep-focus.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Deep Focus</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/study.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Lofi study beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link tp='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/readingjpeg.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Reading sound track</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/concentratiom.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Perfect concentration</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/jazz.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Smooth jazz beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <div className={`${UserStyle['right-bottom']}`}>
        <h3>Telugu</h3>
        <div className={`${UserStyle['right-main']}`}>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/deep-focus.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Deep Focus</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/study.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Lofi study beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link tp='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/readingjpeg.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Reading sound track</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/concentratiom.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Perfect concentration</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/Songs'>
                    <div className={`${UserStyle['parts']}`}>
                        <div className={`${UserStyle['right-images']}`}>
                            <img src="images/jazz.jpeg" alt="" className={`${UserStyle['right-images']}`} />
                        </div>
                        <p className={`${UserStyle['title']}`}>Smooth jazz beats</p>
                        <p className={`${UserStyle['song-descp']}`}>keep calm and focus on ambient and ...</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    
</div>
    </div>
        

            
  )
}

export default UserHomePage
