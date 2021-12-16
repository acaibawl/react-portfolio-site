import CoverImage from './../images/cover-image.png';
import ProfileImage from './../images/profile-image.jpg';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return(
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className='container'>
        <div className='display-table'>
          <div className='display-table-contents'>
            {/* カバー画像 */}
            <div className='profile-thumb' style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className='title-text'>いきなりアサイーボウル</h1>
            <h3 className='title-text'>SE</h3>
            <ul className='social-icons'>
              <li className='icon-link'>
                {/* URL修正 */}
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className='icon-link'>
                <a href="https://github.com/acaibawl">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
