import React from 'react'
import { Coding } from '../../../assets';
import { ICFacebook, ICTwitter, ICInstagram, ICTelegram, ICDiscord, ICGithub } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Coding} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />                    
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
            
        </div>
    )
}

export default Footer
