import React from 'react';
import locationIcon from '../../../public/images/location.png';
import phoneIcon from '../../../public/images/phone.png';
import mailIcon from '../../../public/images/email.png';
import linkedinIcon from '../../../public/images/linkedin.png';
import facebookIcon from '../../../public/images/facebook.png';
import instagramIcon from '../../../public/images/instagram.png';
import twitterIcon from '../../../public/images/X.png';

const TopNavbar = () => {
    return (
        <div>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 0, padding: 10 }}>
                <div style={{ marginLeft: '29px', display: 'flex', alignItems: 'center', color: 'white' }}>
                    <img src={locationIcon} alt="Location" style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, marginLeft: '10px' }}>42 Carry Islands, Maldives</span>
                    <img src={phoneIcon} alt="Phone" style={{ width: '14px', height: '14px', marginLeft: '20px' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, marginLeft: '10px' }}>+123 456 789</span>
                    <img src={mailIcon} alt="Mail" style={{ width: '16px', height: '16px', marginLeft: '20px' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, marginLeft: '10px' }}>info@example.com</span>
                </div>
                <div style={{ marginRight: '103px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <img src={linkedinIcon} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
                    <img src={facebookIcon} alt="Facebook" style={{ width: '30px', height: '30px' }} />
                    <img src={instagramIcon} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                    <img src={twitterIcon} alt="Twitter" style={{ width: '30px', height: '30px' }} />
                </div>
            </nav>
            <hr style={{ border: '1px solid #FFFFFF', width: '100%', margin: 0 }} />
        </div>
    );
};

export default TopNavbar;
