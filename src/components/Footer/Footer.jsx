import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.top}>
                {/* first to know */}
                <div className={styles.first}>
                    <h3>Be the first to know</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className={styles.email}>
                        <input type="text" placeholder="Enter your e-mail..." />
                        <button>Subscribe</button>
                    </div>
                </div>
                {/* contact us */}
                <div className={styles.contact}>
                    <h3>Contact us</h3>
                    <p className={styles.number}>+44 221 133 5360</p>
                    <p className={styles.email}>customercare@mettamuse.com</p>
                    <h3>Currency</h3>
                    <div>
                        <img src="/assets/usd.png" alt="currency" />
                        <img src="/assets/Star.png" alt="star" />
                        <h5>USD</h5>
                    </div>
                    <p className={styles.para}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>

            <hr />
            {/* Dektop */}
            <div className={styles.bottom}>
                <div className={styles.left}>
                    {/* metta use */}
                    <div>
                        <h3>mettā muse</h3>
                        {
                            ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'].map((links, i) => (
                                <p key={i}>{links}</p>
                            ))
                        }
                    </div>
                    {/* quick links */}
                    <div>
                        <h3>Quick links</h3>
                        {
                            ['Order & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map((links, i) => (
                                <p key={i}>{links}</p>
                            ))
                        }
                    </div>
                </div>
                {/* follow us */}
                <div className={styles.right}>
                    <div className={styles.social}>
                        <h3>Follow Us</h3>
                        <img src="/assets/Insta.png" alt="insta" />
                        <img src="/assets/linkedin.png" alt="linkedin" />
                    </div>
                    <div className={styles.payment}>
                        <h3><span>mettā muse</span> Accepts</h3>
                        <img src="/assets/payment/gpay.png" alt="gpay" />
                        <img src="/assets/payment/master.png" alt="master" />
                        <img src="/assets/payment/paypal.png" alt="paypal" />
                        <img src="/assets/payment/amex.png" alt="amex" />
                        <img src="/assets/payment/ipay.png" alt="ipay" />
                        <img src="/assets/payment/opay.png" alt="opay" />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className={styles.mobile}>
                <select name="metta" >
                    <option value="metta">mettā muse</option>
                </select>
                <select name="links" >
                    <option value="links">QUICK LINKS</option>
                </select>
                <select name="follow" >
                    <option value="follow">FOLLOW US</option>
                </select>
                <div className={styles.payment}>
                    <h3><span>mettā muse</span> Accepts</h3>
                    <div>
                        <img src="/assets/payment/gpay.png" alt="gpay" />
                        <img src="/assets/payment/master.png" alt="master" />
                        <img src="/assets/payment/paypal.png" alt="paypal" />
                        <img src="/assets/payment/amex.png" alt="amex" />
                        <img src="/assets/payment/ipay.png" alt="ipay" />
                        <img src="/assets/payment/opay.png" alt="opay" />
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer