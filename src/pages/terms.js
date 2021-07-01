import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import '../../src/home.css';
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import vision from "../images/vision.png";
import team from "../images/team.png";
import thumbnail from "../images/thumbup.png";
import heart from "../images/heart.png";
import people from "../images/people.png";
import about from "../images/about-us.png";


const Terms = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>
            <Header {...props} />
            <div className='content'>
            <div className="services">
                <div className="container p-b-30">
                    <div className="col col-md-12 reg-second-heading">
                        <h4>Terms & Conditions</h4>
                    </div>
                    <p><strong>1. GENERAL</strong></p>
                    <p> This Agreement is a contract between you and PayMeIndia and applies to your use of the
                        PayMeIndia Services (the "Services"). By registering for the Services, you must read, agree
                        with and accept all of the terms and conditions contained in this Agreement. You agree that
                        any use by you of the Services shall constitute your acceptance of the Agreement and we
                        recommend that you store or print-off a copy of the Agreement (including all policies) for
                        your records. This document is an electronic record in terms of Information Technology Act,
                        2000 and rules there under as applicable and the amended provisions pertaining to electronic
                        records in various statutes as amended by the Information Technology Act, 2000. This
                        document is published in accordance with the provisions of Rule 3 (1) of the Information
                        Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and
                        regulations, privacy policy and Terms of Use for access or usage of www.PayMeIndia.in
                        website and the mobile application (hereinafter referred to as “Website”, or “App”, or
                        “Mobile App” or “Platform”). Please read this Agreement carefully and make sure that you
                        understand it fully before using the Services.</p>

                    <p className='p-t-30'><strong>2. ELIGIBILITY</strong></p>
                    <p>Use of the Website is available only to persons who can form legally binding contracts
                        under Indian Contract Act, 1872. Persons who are "incompetent to contract" within the
                        meaning of the Indian Contract Act, 1872 including minors, un-discharged insolvents etc.
                        are not eligible to use the Website. If you are a minor i.e. under the age of 18 years,
                        you shall not register as a User of the PayMeIndia website and shall not transact on or
                        use the website. As a minor if you wish to use or transact on website, such use or
                        transaction may be made by your legal guardian or parents on the Website. PayMeIndia
                        serves the right to terminate your membership and / or refuse to provide you with access
                        to the Website if it is brought to PayMeIndia's notice or if it is discovered that you
                        are under the age of 18 years.</p>

                    <p className='p-t-30'><strong>3. PRIVACY</strong></p>
                    <p>Any personal information submitted in connection with your use of the Offerings or
                        the Site is subject to Our Privacy Policy, located at <a
                            href="https://www.paymeindia.in/privacy-policy">paymeindia.in/privacy-policy</a>
                    </p>

                    <p className='p-t-30'><strong>4. REGISTRATION</strong></p>
                    <p>To use PayMeIndia Services and access certain portions of the Website, you will
                        need to register and obtain an account, username and password. When you
                        register, the information you provide to us during the registration process will
                        help us in offering content, service, and management of your account. You are
                        solely responsible for maintaining the confidentiality of your account,
                        username, and password and for all activities associated with or occurring under
                        your Account. You represent and warrant that your Account information will be
                        accurate at all times. You agree that if You provide any information that is
                        untrue, inaccurate, not current or incomplete or We have reasonable grounds to
                        suspect that such information is untrue, inaccurate, not current or incomplete,
                        or not in accordance with the this Terms of Use, We shall have the right to
                        indefinitely suspend or terminate or block access of your membership on the
                        Website and refuse to provide You with access to the Website. You must notify us
                        (a) immediately of any unauthorized use of your account and any other breach of
                        security, and (b) ensure that you exit from your account at the end of each use
                        of the Offerings. We cannot and will not be responsible for any loss or damage
                        arising from your failure to comply with the foregoing requirements or as a
                        result of use of your account, either with or without your knowledge, prior to
                        your notifying us of unauthorized access to your account. You may not transfer
                        your account to any other person and you may not use anyone else's account at
                        any time without the permission of the account holder.</p>

                    <p className='p-t-30'><strong>5. COMMUNICATIONS</strong></p>
                    <p>When You use the Website or send emails or other data, information or
                        communication to us, You agree and understand that You are communicating
                        with Us through electronic records and You consent to receive communications
                        via electronic records from Us periodically and as and when required. We may
                        communicate with you by email or by such other mode of communication,
                        electronic or otherwise
                    </p>

                    <p className='p-t-30'><strong>6. TRANSACTION AND COMMUNICATION PLATFORM</strong></p>

                    <ol type="a" className='p-t-30'>
                        <li>The Website is a platform that Users utilize to meet and interact
                            with one another or with third party Vendor(s) for their
                            transactions including services of granting, sanctioning, lending of
                            short term loans, through our NBFC Partners.
                        </li>

                        <li> PayMeIndia is not and cannot be a party to or control in any manner
                            any transaction between the Website's Users.
                        </li>

                        <li>All commercial/contractual terms are offered by and agreed to
                            between Customers and NBFC alone.
                        </li>

                        <li>PayMeIndia does not have any control or does not determine or advise
                            or in any way involve itself in the offering or acceptance of such
                            commercial/contractual terms between the Customers and NBFC.
                        </li>

                        <li>PayMeIndia is not responsible for any non-performance or breach of
                            any contract entered into between Customers and NBFC. PayMeIndia
                            cannot and does not guarantee that the concerned Customers and NBFC
                            will perform any transaction concluded on the Website.
                        </li>

                        <li>PayMeIndia, through the Services, may allow the Customers to apply
                            for the Loan, subject to the fulfilment of the eligibility criteria
                            laid down by PayMeIndia. You understand that PayMeIndia and / or the
                            NBFC may collect, authenticate, track your location, verify and
                            confirm the User Data, documents and details as may be required to
                            sanction the Loan.
                        </li>

                        <li>In order to avail the Services, you are required to register with
                            PayMeIndia by logging in through your Third Party Platforms (“User
                            Account”). During the Application process, you shall be required to
                            share and upload the User Data on the Website or the Mobile
                            Application Form. User Data shall include personal information
                            including but not limited to your name, e-mail address, gender, date
                            of birth, mobile number, passwords, photograph, mobile phone
                            information including contact numbers, SMS, call logs and browsing
                            history, data and login-in credentials of Third Party Platforms,
                            financial information such as bank documents, salary slips, bank
                            statements, PAN card, bank account no., data from Credit Information
                            Companies, data required for Know Your Customer compliances,
                            requirement and other relevant details (“Personal Information”). You
                            agree that the Personal Information shall always be accurate,
                            correct and complete. As part of the Services, you authorize us to
                            import your details and Personal Information dispersed over Third
                            Party Platforms. You understand and acknowledge that we may
                            periodically request for updates on such Personal Information and we
                            may receive such updated information from Third Party Platforms.
                        </li>

                        <li>All transactions undertaken on your behalf by PayMeIndia will be on
                            the basis of your express instructions/consent and will be strictly
                            on a non-discretionary basis. You also authorise PayMeIndia to get
                            your credit information report from one or more Credit Information
                            Companies as decided by the Company from time to time. Once you
                            verify and upload the User Data and/or other documents and details
                            on our platform, we shall process the same. Upon the completion of
                            the document verification by us, the Loan may be sanctioned by NBFC
                            to you, subject to fitting eligibility criteria and other conditions
                            set forth by NBFC for sanctioning the Loan. Thereafter, you are
                            required to fill and upload the ECS/NACH mandate form/Cheque or any
                            other document as may be required by NBFC. PayMeIndia may collect
                            the physical documents including signatures on those documents
                            required for sanctioning and processing the Loan. Upon the
                            collection of documents by PayMeIndia, NBFC shall disburse the Loan
                            subject to the terms and conditions of the Loan Agreement.
                        </li>

                        <li>You fully understand and agree that the sanctioned Loan shall be
                            disbursed as per the mode provided in the platform. You are required
                            to repay the Outstanding Amount(s) to NBFC, on the respective due
                            date(s) mentioned in the platform.
                        </li>

                        <li>You understand and acknowledge that PayMeIndia reserves the right to
                            track your location (“Track”) during the provision of Services, and
                            also in the event that you stop, cease, discontinue to use or avail
                            the Services, through deletion or uninstallation of Mobile App or
                            otherwise, till the event that your obligations to pay the
                            Outstanding Amount(s) to NBFC exist. Deletion, uninstallation,
                            discontinuation of our Services, shall not release you from the
                            responsibility, obligation and liability to repay the Outstanding
                            Amount(s).
                        </li>

                        <li>You understand and acknowledge that you shall be solely responsible
                            for all the activities that occur under your User Account while
                            availing the Services. You undertake that PayMeIndia shall not be
                            responsible and liable for any claims, damages, disputes arising out
                            of use or misuse of the Services. By usage of the Services, you
                            shall be solely responsible for maintaining the confidentiality of
                            the User Account and for all other related activities under your
                            User Account. PayMeIndia reserves the right to accept or reject your
                            registration for the Services without obligation of explanation.
                        </li>

                        <li>You understand and acknowledge that, you are solely responsible for
                            the capability of the electronic devices and the internet
                            connection, you chose to run the Platform. The Platform’s operation
                            or the Services on your electronic device is subject to availability
                            of hardware, software specifications, internet connection and other
                            features and specifications, required from time to time.
                        </li>

                        <li>The User Data provided during the registration is stored by us for
                            your convenience. You are not required to log-in to your User
                            Account, every time, to use or access the Platform. You understand
                            and acknowledge that by accepting these Terms, you authorize us to
                            Track, fetch and use the User Data, including but not limited to
                            your Personal Information, for the purpose of authentication and any
                            updates with regards to your credentials.
                        </li>

                        <li>PayMeIndia does not make any representation or warranty as to the
                            item-specifics (such as legal title, creditworthiness, identity,
                            etc) of any of its Users. You are advised to independently verify
                            the bona fides of any particular User that You choose to deal with
                            on the Website and use Your best judgment in that behalf.
                        </li>

                        <li>At no time shall PayMeIndia hold any right, title or interest over
                            the products nor shall PayMeIndia have any obligations or
                            liabilities in respect of such contract entered into between
                            Customers and NBFC.
                        </li>

                        <li>You release and indemnify PayMeIndia and/or any of its officers and
                            representatives from any cost, damage, liability or other
                            consequence of any of the actions of the Users of the Website and
                            specifically waive any claims that you may have in this behalf under
                            any applicable law.
                        </li>

                    </ol>
                    <p></p>

                    <p className='p-t-30'><strong>7. INDEMNITY AND DISCLAIMER OF WARRANTY</strong></p>
                    <ol type="a" className='p-t-30'>

                        <li>You shall indemnify and hold harmless PayMeIndia, its owner,
                            licensee, affiliates, subsidiaries, group companies (as
                            applicable) and their respective officers, directors, agents,
                            and employees, from any claim or demand, or actions including
                            reasonable attorneys' fees, made by any third party or penalty
                            imposed due to or arising out of Your breach of this Terms of
                            Use, privacy Policy and other Policies, or Your violation of any
                            law, rules or regulations or the rights (including infringement
                            of intellectual property rights) of a third party.
                        </li>

                        <li>The Website and all content and services provided on the Website
                            are provided on an "as is" and "as available" basis. PayMeIndia
                            expressly disclaims all warranties of any kind, whether express
                            or implied, including, but not limited to, the implied
                            warranties of merchantability, fitness for a particular purpose,
                            title, non-infringement, and security and accuracy, as well as
                            all warranties arising by usage of trade, course of dealing, or
                            course of performance.
                        </li>

                        <li>PayMeIndia makes no warranty, and expressly disclaims any
                            obligation, that:

                            <ol className='p-t-20'>
                                <li> the content will be up-to-date, complete,
                                    comprehensive, accurate or applicable to your
                                    circumstances;
                                </li>

                                <li>The Website will meet your requirements or will be
                                    available on an uninterrupted, timely, secure, or
                                    error-free basis;
                                </li>

                                <li>the results that may be obtained from the use of the
                                    Website or any services offered through the website will
                                    be accurate or reliable; or
                                </li>

                                <li>the quality of any products, services, information, or
                                    other material obtained by you through the website will
                                    meet your expectations.
                                </li>
                            </ol>

                        </li>

                    </ol>
                    <p></p>

                    <p className='p-t-30'><strong>8. INTELLECTUAL PROPERTY RIGHTS</strong></p>

                    <ol type="a" className='p-t-30'>

                        <li>This platform is controlled and operated by PayMeIndia and
                            all material on this site, including images, illustrations,
                            audio clips, and video clips, are protected by copyrights,
                            trademarks, and other intellectual property rights.
                        </li>

                        <li>Material on Website and App is solely for Your personal,
                            non-commercial use. You must not copy, reproduce, republish,
                            upload, post, transmit or distribute such material in any
                            way, including by email or other electronic means and
                            whether directly or indirectly and You must not assist any
                            other person to do so.
                        </li>

                        <li>Without the prior written consent of the owner, modification
                            of the materials, use of the materials on any other website
                            or networked computer environment or use of the materials
                            for any purpose other than personal, non-commercial use is a
                            violation of the copyrights, trademarks and other
                            proprietary rights, and is prohibited. Any use for which You
                            receive any remuneration, whether in money or otherwise, is
                            a commercial use for the purposes of this clause.
                        </li>


                    </ol>
                    <p></p>

                    <p className='p-t-30'><strong>9. INTELLECTUAL PROPERTY AND TRADEMARK INFRINGEMENT
                        COMPLAINTS</strong></p>
                    <p>
                        PayMeIndia respects the intellectual property of others. In
                        case You feel that Your Trademark or Intellectual Property
                        Rights have been infringed, You can write to us at <a
                        href="mailto:support@paymeindia.in">support@paymeindia.in</a>.
                    </p>

                    <p className='p-t-30'><strong>10. DESCRIPTION</strong></p>
                    <p>PayMeIndia does not warrant that Product and / or
                        Services description or other content of this Website is
                        accurate, complete, reliable, current, or error-free and
                        assumes no liability in this regard.</p>

                    <p  className='p-t-30'><strong>11. LIMITATION OF LIABILITY</strong></p>

                    <ol type="a" className='p-t-30'>

                        <li>IN NO EVENT SHALL PAYMEINDIA BE LIABLE FOR ANY
                            SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL
                            DAMAGES OF ANY KIND IN CONNECTION WITH THESE
                            TERMS OF USE, EVEN IF USER HAS BEEN INFORMED IN
                            ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.
                        </li>

                        <li>PayMeIndia (including its officers, directors,
                            employees, representatives, affiliates, and
                            providers) will not be responsible or liable for
                            <ol className='p-t-10'>

                                <li>any injury, death, loss, claim, act
                                    of god, accident, delay, or any
                                    direct, special, exemplary,
                                    punitive, indirect, incidental or
                                    consequential damages of any kind
                                    (including without limitation lost
                                    profits or lost savings), whether
                                    based in contract, tort, strict
                                    liability or otherwise, that arise
                                    out of or is in any way connected
                                    with
                                    (i) any failure or delay (including
                                    without limitation the use of or
                                    inability to use any component of
                                    the Website), or
                                    (ii) any use of the Website or
                                    content, or
                                    (iii) the performance or
                                    non-performance by us or any
                                    provider, even if we have been
                                    advised of the possibility of
                                    damages to such parties or any other
                                    party, or
                                </li>
                                <li> any damages to or viruses that may
                                    infect your computer equipment or
                                    other property as the result of your
                                    access to the Website or your
                                    downloading of any content from the
                                    Website.
                                </li>
                            </ol>
                        </li>

                        <li>The website may provide links to other third
                            party websites. However since PayMeIndia has no
                            control over such third party websites, you
                            acknowledge and agree that PayMeIndia is not
                            responsible for the availability of such third
                            party websites, and does not endorse and is not
                            responsible or liable for any content,
                            advertising, products or other materials on or
                            available from such third party websites. You
                            further acknowledge and agree that PayMeIndia
                            shall not be responsible or liable, directly or
                            indirectly, for any damage or loss caused or
                            alleged to be caused by or in connection with
                            use of or reliance on any such content, goods or
                            services available on or through any such third
                            party websites.
                        </li>
                    </ol>
                    <p></p>

                    <p className='p-t-30'><strong>12. DISCLAIMER</strong></p>
                    <p>
                    </p>
                    <ol type="a">
                        <li>The User acknowledges and confirms that
                            he/she is well aware of the
                            rules &amp; regulations and the risks
                            involved in services offered by PayMeIndia.
                            Changes are periodically added to the
                            information herein.
                        </li>

                        <li>PayMeIndia may make improvements and/or
                            changes on this web site at any time. We
                            will not be responsible for any data
                            accessed / mis-utilized by unauthorized use
                            of PayMeIndia website by third party due to
                            user's neglect or due to allowing access to
                            personal data to third party intentionally
                            or unintentionally.
                        </li>

                        <li> PayMeIndia will not be involved in any
                            financial handling. The user hereby agrees
                            not to raise any claim or dispute against
                            PayMeIndia and its directors, officers,
                            employees or agents against any breach of
                            law which is done by user or money changers
                            which is beyond the control of PayMeIndia.
                        </li>

                        <li>No legal right is there to any member or
                            user of PayMeIndia to raise dispute against
                            PayMeIndia. PayMeIndia shall have the
                            absolute discretion to amend or supplement
                            any of the Terms at any time. We may
                            communicate the amended terms by hosting the
                            same on the Website or in any other manner
                            as decided by PayMeIndia. The user shall be
                            responsible for regularly reviewing these
                            terms including amendments thereto as may be
                            posted on the Website.
                        </li>

                    </ol>
                    <p></p>

                    <p className='p-t-30'><strong>13. LINKS TO OTHER SITES</strong></p>
                    <p>Our Website links to other websites that may
                        collect personally identifiable information
                        about you. PayMeIndia is not responsible for
                        the privacy practices or the content of
                        those linked websites.</p>

                    <p className='p-t-30'><strong>14. APPLICABLE LAW AND
                        JURISDICTION</strong></p>
                    <p>These Terms of Use shall be governed by
                        and interpreted and construed in
                        accordance with the laws of India. The
                        place of jurisdiction shall be
                        exclusively in Delhi.</p>

                    <p className='p-t-30'><strong>15. INDIA ONLY</strong></p>
                    <h6>Unless otherwise specified, the
                        material on the Website or App is
                        presented solely for the purpose of
                        sale in India. PayMeIndia make no
                        representation that materials in the
                        platform are appropriate or
                        available for use in other
                        locations/Countries other than
                        India. Those who choose to access
                        this platform from other
                        locations/Countries other than India
                        do so on their own initiative and
                        PayMeIndia is not responsible for
                        services or supply of
                        products/refund for the products
                        ordered from other
                        locations/Countries other than
                        India, compliance with local laws,
                        if and to the extent local laws are
                        applicable.</h6>

                    <p className='p-t-30'><strong>16 PLATFORM USE</strong></p>
                    <p>You agree, undertake and confirm
                        that Your use of platform shall
                        be strictly governed by the
                        following binding principles:
                    </p>
                    <ol type="a" className='p-t-30'>
                        <li>You shall not host, display,
                            upload, modify, publish,
                            transmit, update or share
                            any information which:
                            <ol type="I">
                                <li>belongs to another
                                    person and to which
                                    You does not have
                                    any right to.
                                </li>
                                <li>is grossly harmful,
                                    harassing,
                                    blasphemous,
                                    defamatory, obscene,
                                    pornographic,
                                    paedophilic,
                                    libellous, invasive
                                    of another's
                                    privacy, hateful, or
                                    racially, ethnically
                                    objectionable,
                                    disparaging,
                                    relating or
                                    encouraging money
                                    laundering or
                                    gambling, or
                                    otherwise unlawful
                                    in any manner
                                    whatever; or,
                                </li>
                                <li>unlawfully
                                    threatening or
                                    unlawfully harassing
                                    including but not
                                    limited to "indecent
                                    representation of
                                    women" within the
                                    meaning of the
                                    Indecent
                                    Representation of
                                    Women (Prohibition)
                                    Act, 1986;
                                </li>
                                <li> is misleading in
                                    any way;
                                </li>
                                <li>is patently
                                    offensive to the
                                    online community,
                                    such as sexually
                                    explicit content, or
                                    content that
                                    promotes obscenity,
                                    paedophilia, racism,
                                    bigotry, hatred or
                                    physical harm of any
                                    kind against any
                                    group or individual;
                                </li>
                                <li>Harasses or
                                    advocates harassment
                                    of another person;
                                </li>
                                <li>Involves the
                                    transmission of
                                    "junk mail", "chain
                                    letters", or
                                    unsolicited mass
                                    mailing or
                                    "spamming";
                                </li>
                                <li>promotes illegal
                                    activities or
                                    conduct that is
                                    abusive,
                                    threatening,
                                    obscene, defamatory
                                    or libellous;
                                </li>
                                <li>infringes upon or
                                    violates any third
                                    party's rights
                                    [including, but not
                                    limited to,
                                    intellectual
                                    property rights,
                                    rights of privacy
                                    (including without
                                    limitation
                                    unauthorized
                                    disclosure of a
                                    person's name, email
                                    address, physical
                                    address or phone
                                    number) or rights of
                                    publicity];
                                </li>
                                <li>promotes an illegal
                                    or unauthorized copy
                                    of another person's
                                    copyrighted work
                                    (see "Copyright
                                    complaint" below for
                                    instructions on how
                                    to lodge a complaint
                                    about uploaded
                                    copyrighted
                                    material), such as
                                    providing pirated
                                    computer programs or
                                    links to them,
                                    providing
                                    information to
                                    circumvent
                                    manufacture-installed
                                    copy-protect
                                    devices, or
                                    providing pirated
                                    music or links to
                                    pirated music files;
                                </li>
                                <li>Contains restricted
                                    or password-only
                                    access pages, or
                                    hidden pages or
                                    images (those not
                                    linked to or from
                                    another accessible
                                    page);
                                </li>
                                <li>Provides material
                                    that exploits people
                                    in a sexual, violent
                                    or otherwise
                                    inappropriate manner
                                    or solicits personal
                                    information from
                                    anyone;
                                </li>
                                <li>Provides
                                    instructional
                                    information about
                                    illegal activities
                                    such as making or
                                    buying illegal
                                    weapons, violating
                                    someone's privacy,
                                    or providing or
                                    creating computer
                                    viruses;contains
                                    video, photographs,
                                    or images of another
                                    person (with a minor
                                    or an adult).
                                </li>
                                <li>tries to gain
                                    unauthorized access
                                    or exceeds the scope
                                    of authorized access
                                    to the Website or to
                                    profiles, blogs,
                                    communities, account
                                    information,
                                    bulletins, friend
                                    request, or other
                                    areas of the Website
                                    or solicits
                                    passwords or
                                    personal identifying
                                    information for
                                    commercial or
                                    unlawful purposes
                                    from other users.
                                </li>
                                <li>engages in
                                    commercial
                                    activities and/or
                                    sales without Our
                                    prior written
                                    consent such as
                                    contests,
                                    sweepstakes, barter,
                                    advertising and
                                    pyramid schemes, or
                                    the buying or
                                    selling of "virtual"
                                    products related to
                                    the Website.
                                    Throughout this
                                    Terms of Use,
                                    PayMeIndia's prior
                                    written consent
                                    means a
                                    communication coming
                                    from PayMeIndia's
                                    Legal Department,
                                    specifically in
                                    response to Your
                                    request, and
                                    specifically
                                    addressing the
                                    activity or conduct
                                    for which You seek
                                    authorization;
                                </li>
                                <li>Solicits gambling or
                                    engages in any
                                    gambling activity
                                    which We, in Our
                                    sole discretion,
                                    believes is or could
                                    be construed as
                                    being illegal;
                                </li>
                                <li>Interferes with
                                    another USER's use
                                    and enjoyment of the
                                    Website or any other
                                    individual's User
                                    and enjoyment of
                                    similar services;
                                </li>
                                <li>Refers to any
                                    website or URL that,
                                    in Our sole
                                    discretion, contains
                                    material that is
                                    inappropriate for
                                    the Website or any
                                    other website,
                                    contains content
                                    that would be
                                    prohibited or
                                    violates the letter
                                    or spirit of these
                                    Terms of Use.
                                </li>
                                <li>Harm minors in any
                                    way;
                                </li>
                                <li>infringes any
                                    patent, trademark,
                                    copyright or other
                                    proprietary rights
                                    or third party's
                                    trade secrets or
                                    rights of publicity
                                    or privacy or shall
                                    not be fraudulent or
                                    involve the sale of
                                    counterfeit or
                                    stolen products;
                                </li>
                                <li>violates any law for
                                    the time being in
                                    force;
                                </li>
                                <li>Deceives or misleads
                                    the addressee/ users
                                    about the origin of
                                    such messages or
                                    communicates any
                                    information which is
                                    grossly offensive or
                                    menacing in nature;
                                </li>
                                <li> Impersonate another
                                    person;
                                </li>
                                <li>contains software
                                    viruses or any other
                                    computer code, files
                                    or programs designed
                                    to interrupt,
                                    destroy or limit the
                                    functionality of any
                                    computer resource;
                                    or,
                                </li>
                                <li>contains any trojan
                                    horses, worms, time
                                    bombs, cancel bots,
                                    easter eggs or other
                                    computer programming
                                    routines that may
                                    damage,
                                    detrimentally
                                    interfere with,
                                    diminish value of,
                                    surreptitiously
                                    intercept or
                                    expropriate any
                                    system, data or
                                    personal
                                    information;
                                </li>
                                <li>Threatens the unity,
                                    integrity, defence,
                                    security or
                                    sovereignty of
                                    India, friendly
                                    relations with
                                    foreign states, or
                                    public order or
                                    causes incitement to
                                    the commission of
                                    any cognizable
                                    offence or prevents
                                    investigation of any
                                    offence or is
                                    insulting any other
                                    nation.
                                </li>
                                <li> Shall not be false,
                                    inaccurate or
                                    misleading;
                                </li>
                                <li>shall not, directly
                                    or indirectly,
                                    offer, attempt to
                                    offer, trade or
                                    attempt to trade in
                                    any item, the
                                    dealing of which is
                                    prohibited or
                                    restricted in any
                                    manner under the
                                    provisions of any
                                    applicable law,
                                    rule, regulation or
                                    guideline for the
                                    time being in force.
                                </li>
                                <li>shall not create
                                    liability for Us or
                                    cause Us to lose (in
                                    whole or in part)
                                    the services of Our
                                    internet service
                                    provider ("ISPs") or
                                    other suppliers;
                                </li>
                            </ol>
                        </li>
                        <li>You shall not use any
                            "deep-link", "page-scrape",
                            "robot", "spider" or other
                            automatic device, program,
                            algorithm or methodology, or
                            any similar or equivalent
                            manual process, to access,
                            acquire, copy or monitor any
                            portion of the Website or
                            any Content, or in any way
                            reproduce or circumvent the
                            navigational structure or
                            presentation of the Website
                            or any Content, to obtain or
                            attempt to obtain any
                            materials, documents or
                            information through any
                            means not purposely made
                            available through the
                            Website. We reserve Our
                            right to bar any such
                            activity.
                        </li>
                        <li>You shall not attempt to
                            gain unauthorized access to
                            any portion or feature of
                            the Website, or any other
                            systems or networks
                            connected to the Website or
                            to any server, computer,
                            network, or to any of the
                            services offered on or
                            through the Website, by
                            hacking, password "mining"
                            or any other illegitimate
                            means.
                        </li>
                        <li>You shall not probe, scan or
                            test the vulnerability of
                            the Website or any network
                            connected to the Website nor
                            breach the security or
                            authentication measures on
                            the Website or any network
                            connected to the Website.
                            You may not reverse look-up,
                            trace or seek to trace any
                            information on any other
                            User of or visitor to
                            Website, or any other
                            customer, including any
                            account on the Website not
                            owned by You, to its source,
                            or exploit the Website or
                            any service or information
                            made available or offered by
                            or through the Website, in
                            any way where the purpose is
                            to reveal any information,
                            including but not limited to
                            personal identification or
                            information, other than Your
                            own information, as provided
                            for by the Website.
                        </li>
                        <li>You shall not make any
                            negative, denigrating or
                            defamatory statement(s) or
                            comment(s) about Us or the
                            brand name or domain name
                            used by Us including the
                            terms PayMeIndia, or
                            otherwise engage in any
                            conduct or action that might
                            tarnish the image or
                            reputation, of PayMeIndia or
                            Vendors on platform or
                            otherwise tarnish or dilute
                            any PayMeIndia 's trade or
                            service marks, trade name
                            and/or goodwill associated
                            with such trade or service
                            marks, trade name as may be
                            owned or used by us. You
                            agree that You will not take
                            any action that imposes an
                            unreasonable or
                            disproportionately large
                            load on the infrastructure
                            of the Website or PayMeIndia
                            's systems or networks, or
                            any systems or networks
                            connected to PayMeIndia.
                        </li>
                        <li>You agree not to use any
                            device, software or routine
                            to interfere or attempt to
                            interfere with the proper
                            working of the Website or
                            any transaction being
                            conducted on the Website, or
                            with any other person's use
                            of the Website.
                        </li>
                        <li>You may not forge headers or
                            otherwise manipulate
                            identifiers in order to
                            disguise the origin of any
                            message or transmittal You
                            send to Us on or through the
                            Website or any service
                            offered on or through the
                            Website. You may not pretend
                            that You are, or that You
                            represent, someone else, or
                            impersonate any other
                            individual or entity.
                        </li>
                        <li>You may not use the Website
                            or any content for any
                            purpose that is unlawful or
                            prohibited by these Terms of
                            Use, or to solicit the
                            performance of any illegal
                            activity or other activity
                            which infringes the rights
                            of PayMeIndia and / or
                            others.
                        </li>
                        <li>You shall at all times
                            ensure full compliance with
                            the applicable provisions of
                            the Information Technology
                            Act, 2000 and rules there
                            under as applicable and as
                            amended from time to time
                            and also all applicable
                            Domestic laws, rules and
                            regulations and
                            International Laws, Business
                            Laws, Statutes, Ordinances
                            and Regulations (including,
                            but not limited to Sales
                            Tax/VAT, Income Tax, Octroi,
                            Service Tax, Central Excise,
                            Custom Duty, Local Levies)
                            regarding Your use of Our
                            service and Your listing,
                            purchase, solicitation of
                            offers to purchase, and sale
                            of products or services. You
                            shall not engage in any
                            transaction in an item or
                            service, which is prohibited
                            by the provisions of any
                            applicable law s or
                            regulations for the time
                            being in force.
                        </li>
                        <li>Solely to enable Us to use
                            the information You supply
                            Us with, so that we are not
                            violating any rights You
                            might have in Your
                            Information, You agree to
                            grant Us a non-exclusive,
                            worldwide, perpetual,
                            irrevocable, royalty-free,
                            sub-licensable (through
                            multiple tiers) right to
                            exercise the copyright,
                            publicity, database rights
                            or any other rights You have
                            in Your Information, in any
                            media now known or not
                            currently known, with
                            respect to Your Information.
                            We will only use Your
                            information in accordance
                            with the Terms of Use and
                            Privacy Policy applicable to
                            use of the Website. You
                            shall not engage in
                            advertising to, or
                            solicitation of, other Users
                            of the Website to buy or
                            sell any products or
                            services, including, but not
                            limited to, products or
                            services related to that
                            being displayed on the
                            Website or related to us.
                            You may not transmit any
                            chain letters or unsolicited
                            commercial or junk email to
                            other Users via the Website.
                            It shall be a violation of
                            these Terms of Use to use
                            any information obtained
                            from the Website in order to
                            harass, abuse, or harm
                            another person, or in order
                            to contact, advertise to,
                            solicit, or sell to another
                            person other than Us without
                            Our prior explicit consent.
                            In order to protect Our
                            Users from such advertising
                            or solicitation, We reserve
                            the right to restrict the
                            number of messages or emails
                            which a user may send to
                            other Users in any 24-hour
                            period which We deems
                            appropriate in its sole
                            discretion. You understand
                            that We have the right at
                            all times to disclose any
                            information (including the
                            identity of the persons
                            providing information or
                            materials on the Website) as
                            necessary to satisfy any
                            law, regulation or valid
                            governmental request. This
                            may include, without
                            limitation, disclosure of
                            the information in
                            connection with
                            investigation of alleged
                            illegal activity or
                            solicitation of illegal
                            activity or in response to a
                            lawful court order or
                            subpoena. In addition, We
                            can (and You hereby
                            expressly authorize Us to)
                            disclose any information
                            about You to law enforcement
                            or other government
                            officials, as we, in Our
                            sole discretion, believe
                            necessary or appropriate in
                            connection with the
                            investigation and/or
                            resolution of possible
                            crimes, especially those
                            that may involve personal
                            injury. We reserve the
                            right, but has no
                            obligation, to monitor the
                            materials posted on the
                            Website. PayMeIndia shall
                            have the right to remove or
                            edit any content that in its
                            sole discretion violates, or
                            is alleged to violate, any
                            applicable law or either the
                            spirit or letter of these
                            Terms of Use.
                        </li>
                        <li>Notwithstanding this right,
                            YOU REMAIN SOLELY
                            RESPONSIBLE FOR THE CONTENT
                            OF THE MATERIALS YOU POST ON
                            THE WEBSITE AND IN YOUR
                            PRIVATE MESSAGES. Please be
                            advised that such Content
                            posted does not necessarily
                            reflect PayMeIndia views. In
                            no event shall PayMeIndia
                            assume or have any
                            responsibility or liability
                            for any Content posted or
                            for any claims, damages or
                            losses resulting from use of
                            Content and/or appearance of
                            Content on the Website. You
                            hereby represent and warrant
                            that You have all necessary
                            rights in and to all Content
                            which You provide and all
                            information it contains and
                            that such Content shall not
                            infringe any proprietary or
                            other rights of third
                            parties or contain any
                            libellous, tortious, or
                            otherwise unlawful
                            information.
                        </li>
                        <li>Your correspondence or
                            business dealings with, or
                            participation in promotions
                            of, advertisers found on or
                            through the Website,
                            including payment and
                            delivery of related products
                            or services, and any other
                            terms, conditions,
                            warranties or
                            representations associated
                            with such dealings, are
                            solely between You and such
                            advertiser. We shall not be
                            responsible or liable for
                            any loss or damage of any
                            sort incurred as the result
                            of any such dealings or as
                            the result of the presence
                            of such advertisers on the
                            Website.
                        </li>
                        <li>This owner (Huey Tech t/a
                            PayMe India) of this site on
                            boards/ empanel/ associate
                            with multiple NBFC(s) in
                            order to offer innovative
                            and consumer friendly
                            products. The loans can be
                            disbursed by either of the
                            NBFC(s). The name of the
                            NBFC (termed as lender) is
                            dynamically mentioned in
                            sanction letter which is
                            shared to every individual
                            borrower, once the credit
                            limit has been assigned.
                        </li>
                        <li>It is possible those other
                            users (including
                            unauthorized users or
                            "hackers") may post or
                            transmit offensive or
                            obscene materials on the
                            Website and that You may be
                            involuntarily exposed to
                            such offensive and obscene
                            materials. It also is
                            possible for others to
                            obtain personal information
                            about You due to your use of
                            the Website, and that the
                            recipient may use such
                            information to harass or
                            injure You. PayMeIndia does
                            not approve of such
                            unauthorized uses, but by
                            using the Website You
                            acknowledge and agree that
                            We are not responsible for
                            the use of any personal
                            information that You
                            publicly disclose or share
                            with others on the Website.
                            Please carefully select the
                            type of information that You
                            publicly disclose or share
                            with others on the Website.
                        </li>
                    </ol>

                </div>
            </div>
            <div className="services">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-8 text-center p-t-30 p-b-30">
                            <h4 className="heading4">Contact Us</h4>
                            <p>Please contact us at <a href="mailto: admin@paymeindia.in">admin@paymeindia.in</a></p>

                        </div>
                    </div>

                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
};
const mapStateToProps = state => {
    return {}
}


const dispatchToProps =
    {
        hitAppUseCase
    }
;

export default connect(mapStateToProps, dispatchToProps)(Terms)
