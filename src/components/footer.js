import React from 'react'
import { createMapKey } from './helpers'
export const Footer = () => {
    const uri = 'https://web.dev.cpwys.co/assets/module-core/footers/footer-default/footer-'
    const icons = ['facebook.svg', 'instagram.svg', 'twitter.svg', 'youtube.svg', 'linkedin.svg']
    const footSections = [
        {
            title: 'Company',
            sections: ['About', 'Events', 'Shop', 'Parts & Media', 'Sign Up']
        },
        {
            title: 'Money Account',
            sections: ['Open Account', 'Beneifts', 'Why CapWay', 'Find ATM']
        },
        {
            title: 'Learn Money',
            sections: ['Learn Money', 'Phunds', 'Money Room', 'Request Content']
        },
        {
            title: 'Work with CapWay',
            sections: ['Partner', 'Contributions', 'Ambassador', 'Career']
        },
        {
            title: 'Support',
            sections: ['Legal', 'FAQ', 'Contact Us']
        },
        {
            title: 'Download',
            sections: ['for iOS', 'for Android']
        },
    ]
    const createIcons = createMapKey(icons.map(icon => {
        return (
            <a href='"javascript:void(0);"'><div className='icon' style={{ backgroundImage: `url(${uri}${icon})` }} ></div></a>
        )
    }))

    const createFooterSection = createMapKey(footSections.map(section => {
        return (
            <div className="footer-section">
                <strong>{section.title.toUpperCase()} </strong><br /><br />
                {
                    createMapKey(section.sections.map(sec => (
                        <p> {sec} </p>
                    )))
                }
            </div>
        )
    }))

    return (
        <footer>
            <div className='section1' >
                <div className='section1__branding' >
                    <div>
                        <div className='logo'> </div>
                    </div>
                    <div className='social_icons'>
                        {createIcons}
                    </div>
                </div>
                <div className="section1__site-sections">
                    {createFooterSection}
                </div>
            </div>
            <div className="section2" >
                <div className="section2__legal-text">
                    <p> The CapWay, Inc Debit Visa Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc. “Metropolitan Commercial Bank” and “Metropolitan” are registered trademarks of Metropolitan Commercial Bank ©2014. </p>
                    <p> 1. For Money Account holders with a negative balance, the CapWay debit card will go into freeze until funds are deposited to bring account back to current. See terms and conditions </p>
                    <p> 2. Sending or receiving money from other CapWay account holders will be instant. Transfers from other accounts could take up to 48 hours, depending on the financial institution.  </p>
                    <p> 3. Early access to funds requires direct deposit. Early payment is not guaranteed and is dependent on the timing of payer's submission of deposits. We generally post such deposits on the day they are received which may be up to 2 days earlier than the payer's scheduled payment date. </p>
                    <p> 4. Money Goals allows account holders to save money towards financial goals created within the CapWay platform. Funds can be transferred from your Money Account or saved through the rounding up of your transactions from purchases. </p>
                    <p> 5. CapWay offers financial content through Learn Money free of charge, but may include advertisements through affiliates. Phunds, CapWay's literacy program and session, is paid content or co-branded content. </p>
                </div>
            </div>
            <div className="copy-right" >
                <p>© 2019-2022 CapWay Inc. All Rights Reserved. </p>
            </div>
        </footer>
    )
}
