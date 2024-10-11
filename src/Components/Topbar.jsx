import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Topbar() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center secondarycolor px-5 py-2 topheaderfont">
                <div className="d-flex align-items-center">
                    <div className="border-end hello pe-4">
                        <FontAwesomeIcon icon={faPhone} className="text-white" />
                        <span className="ps-2 text-white">Phone: +92 207 823 7756</span>
                    </div>
                    <div className="hello ps-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                        <span className="ps-2 text-white">Email: info@company.com</span>
                    </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                    <FontAwesomeIcon icon={faInstagram} className="text-white" />
                    <FontAwesomeIcon icon={faTwitter} className="text-white" />
                    <FontAwesomeIcon icon={faYoutube} className="text-white" />
                </div>
            </div>
        </div>
    );
}
