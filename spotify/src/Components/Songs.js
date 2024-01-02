import React from 'react'
import SongsStyle from './Songs.module.css'
import { Link } from 'react-router-dom'

function Songs() {
  return (
    
    <div className={SongsStyle['main']}>
        <div className={SongsStyle['left-division']}>

        </div>
        <div className={SongsStyle['left']}>
            <div className={SongsStyle['left-box']}>
                <div className={` ${SongsStyle['sidebar-content']}`}>
                    <Link to='/UserHome'>
                    <img className={`${SongsStyle['images']}`} src="images/home-xxl.png" alt="" />
                    <span className={`${SongsStyle['sidebar-names']} ${SongsStyle['spacing']}`}>Home</span>
                    </Link>
                </div>
                <div className={` ${SongsStyle['sidebar-content']}`}>
                    <img src="images/search-12-xxl.png" alt="" className={`${SongsStyle['images']}`} />
                    <span className={`${SongsStyle['sidebar-names']} ${SongsStyle['spacing']}`}>Search</span>
                </div>
            </div>

            <div className={` ${SongsStyle['left-last']}`}>
                <div className={` ${SongsStyle['sidebar-content']}`}>
                    <img src="images/book-xl.png" alt="" className={`${SongsStyle['images']}`} />
                    <span className={`${SongsStyle['sidebar-heading']} ${SongsStyle['spacing']}`}>Your Library</span>
                </div>
                <div className={` ${SongsStyle['sidebar-content']}`}>
                    <span className={`${SongsStyle['sidebar-items']}`}>Playlist</span>
                    <span className={`${SongsStyle['sidebar-items']}`}>Artist</span>
                </div>
                <div className={`${SongsStyle['sidebar-content']} ${SongsStyle['search-recents']}`}>
                    <div className={`${SongsStyle['search']}`}>
                        <img src="images/seach.png" alt="" className={`${SongsStyle['search-icon']}`} />
                    </div>
                    <div className={`${SongsStyle['recents']}`}>
                        <div>
                            <span className={`${SongsStyle['recents-word']}`}>Recents</span>
                        </div>
                        <div className={`${SongsStyle['hamburger']} ${SongsStyle['recent-icon']}`}>
                            &#9776;
                        </div>
                    </div>
                </div>
            </div>  

            <div className={`${SongsStyle['lib-content']}`}>
                <div className={`${SongsStyle['artist']}`}>
                    <div>
                        <img src="images/spotify_liked.jpeg" alt="" className={`${SongsStyle['liked-pic']}`} />
                    </div>
                    <div className={`${SongsStyle['artist-details']}`}>
                        <p className={`${SongsStyle['artist-name']}`}>Liked Songs</p>
                        <p className={`${SongsStyle['artist-role']}`}>Playlist . 2 Songs</p>
                    </div>
                </div>
                <div className={`${SongsStyle['artist']}`}>
                    <div>
                        <img src="images/alanwalker.jpeg" alt="" className={`${SongsStyle['artist-pic']}`} />
                    </div>
                    <div className={`${SongsStyle['artist-details']}`}>
                        <p className={`${SongsStyle['artist-name']}`}>Alan Walker</p>
                        <p className={`${SongsStyle['artist-role']}`}>Artist</p>
                    </div>
                </div>
                <div className={`${SongsStyle['artist']}`}>
                    <div>
                        <img src="images/arijit.jpeg" alt="" className={`${SongsStyle['artist-pic']}`} />
                    </div>
                    <div className={`${SongsStyle['artist-details']}`}>
                        <p className={`${SongsStyle['artist-name']}`}>Arijit Singh</p>
                        <p className={`${SongsStyle['artist-role']}`}>Artist</p>
                    </div>
                </div>
                <div className={`${SongsStyle['artist']}`}>
                    <div>
                        <img src="images/arman.jpg" alt="" className={`${SongsStyle['artist-pic']}`} />
                    </div>
                    <div className={`${SongsStyle['artist-details']}`}>
                        <p className={`${SongsStyle['artist-name']}`}>Arman Malik</p>
                        <p className={`${SongsStyle['artist-role']}`}>Artist</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${SongsStyle['right']}`}>
            <div className={`${SongsStyle['temp']}`}>
                <div>
                    <img src="images/lofi.jpeg" alt="" className={`${SongsStyle['tone']}`} />
                </div>
                <div className={`${SongsStyle['title-heading']}`}>
                    <h1 className={`${SongsStyle['heading']}`}>Lofi beats</h1>
                    <p className={`${SongsStyle['top-para']}`}>chil beats, lofi vibes, new tracks every week.....</p>
                </div>
            </div>
            <div className={SongsStyle['dividing']}>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>#</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>Title</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>Album</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>Date added</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>Duration</p>
                    </div>
                </div>
                <hr/>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                <div className={SongsStyle['table']}>
                    <div className={SongsStyle['hash']}>
                        <p>1</p>
                    </div>
                    <div className={SongsStyle['title']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['album']}>
                        <p>maskros</p>
                    </div>
                    <div className={SongsStyle['date']}>
                        <p>3 days ago</p>
                    </div>
                    <div className={SongsStyle['duration']}>
                        <p>3:03</p>
                    </div>
                </div>
                
            </div>

        </div>
    </div>

  )
}

export default Songs
