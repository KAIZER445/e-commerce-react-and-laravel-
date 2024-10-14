import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Topbar() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center secondarycolor px-5 py-2 topheaderfont text-white">
                <div className="d-flex align-items-center">
                    <div className="border-end pe-4 navbar_adjust">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="ps-2">Phone: +92 207 823 7756</span>
                    </div>
                    <div className="ps-4">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="ps-2">Email: info@company.com</span>
                    </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
            </div>
        </div>
    );
}
