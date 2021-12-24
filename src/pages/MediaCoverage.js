import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import mediaCover from "../images/svg/media-cover.svg";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";
import {Link} from "@material-ui/core";
import Footer from "./Footer";
import {lazyStartIndex} from "react-slick/lib/utils/innerSliderUtils";

const MediaCoverage = (props) => {
    let [loader, setloader] = useState(false);
    let [planList, setPlanList] = useState(false);
    let json = [
        {
            "sno": 41,
            "article": "The BNPL landscape in India - Will it take over the Cards market in India? | EP78",
            "reference": "https://www.linkedin.com/posts/sociallydesi_fintech-financialservices-bnpl-activity-6874929436467228672-Y6Dz",
            "date": "10 Nov 2021",
            "logoUrl": "https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png",
            "details": "The BNPL (Buy Name, Pay Later) is a new product that has hit the Indian FinTech Market. The BNPL industry in India is quite a young one but has come a long way in a short span of time."
        },
        {
            "sno": 40,
            "article": "The BNPL landscape in India - Will it take over the Cards market in India? | EP78",
            "reference": "https://podcasts.apple.com/in/podcast/the-bnpl-landscape-in-india-will-it-take-over-the/id1510312403?i=1000544526581",
            "date": "10 Nov 2021",
            "logoUrl": "https://www.apple.com/v/apple-podcasts/b/images/overview/hero_icon__c135x5gz14mu_large.png",
            "details": "The BNPL (Buy Name, Pay Later) is a new product that has hit the Indian FinTech Market. The BNPL industry in India is quite a young one but has come a long way in a short span of time."
        },
        {
            "sno": 39,
            "article": "10 Best Personal Loan Apps in India",
            "reference": "https://www.newindianexpress.com/expressdeals/other-categories/best-personal-loan-apps-in-india/203.html",
            "date": "1 Nov 2021",
            "logoUrl": "https://images.newindianexpress.com/expressdeals/assets/main//images/logo/logo.png",
            "details": "PaySense Instant Personal Loan is for all of your wants and dreams that you may not be able to fulfill due to financial constraints. PaySense provides you with a quick personal loan of up to Rs. 5 lakh without any hassle, whether it's for a wedding, a foreign vacation, paying medical bills, acquiring consumer durables, or home improvement."
        },
        {
            "sno": 38,
            "article": "Key factors which affect your personal loan interest rates",
            "reference": "https://www.cnbctv18.com/personal-finance/key-factors-which-affect-your-personal-loan-interest-rates-11266842.htm",
            "date": "Oct 28, 2021",
            "logoUrl": "https://www.cnbctv18.com/static/images/cnbctv18-logo.png?impolicy=website&width=80&height=60",
            "details": "Personal loan is granted to individuals who need the amount in order to fulfil any of their personal needs such as medical emergencies, home renovation, vacation, wedding expense, etc"
        },
        {
            "sno": 37,
            "article": "Exercise due diligence, avoiding digital lenders that make borrowing too easy in Business Standard.",
            "reference": "https://www.business-standard.com/article/pf/exercise-due-diligence-avoid-digital-lenders-that-make-borrowing-too-easy-121112501125_1.html",
            "date": "25 Nov 2021",
            "logoUrl": "https://bsmedia.business-standard.com/include/_mod/site/html5/images/business-standard-logo.png",
            "details": "The absence of due process-KYC, issuance of sanction letter and loan agreement-should act as red flags"
        },
        {
            "sno": 36,
            "article": "Advance Salary Loan – Check Top Salary Advance Loans in India",
            "reference": "https://www.bankbazaar.com/personal-loan/advance-salary-loan.html",
            "date": "",
            "logoUrl": "https://static.bankbazaar.com/images/bankbazaar-logo-christmas-2021.gif",
            "details": "Advance Salary Loans are temporary loans offered for salaried professionals in India. Unlike personal loans, the interest rate for these loans is calculated on a monthly basis or even daily basis by some lenders."
        },
        {
            "sno": 35,
            "article": "Inc42 And IAMAI Release List Of 30 Emerging Fintech Startups In India",
            "reference": "https://inc42.com/features/inc42-and-iamai-release-list-of-30-emerging-fintech-startups-in-india/",
            "date": "08 Jun'18",
            "logoUrl": "https://inc42.com/wp-content/uploads/2018/07/inc42-logo.svg",
            "details": "Fintech as a sector in India is growing at a rapid speed. Post demonetisation, the impetus Indian fintech startups have gained has placed the Indian fintech ecosystem on the global charts."
        },
        {
            "sno": 34,
            "article": "Online lending startup PayMe India raises $2 M from Singapore-based angel investors",
            "reference": "https://yourstory.com/2018/04/payme-india-raises-2-m-from-singapore-based-angel-investors/amp",
            "date": "April 26, 2018",
            "logoUrl": "https://images.yourstory.com/logos/svg/logo_yourstory.svg",
            "details": "Founded in 2016, the Noida-based firm offers lending support to corporate individuals (salaried employees) on short-term as well as long-term basis."
        },
        {
            "sno": 33,
            "article": "Deal Street: Amazon India Backs Digital Lending Startup Capital Float",
            "reference": "Startup Funding: Amazon India Backs Digital Lending Startup Capital Float (bloombergquint.com)",
            "date": "May 02 2018",
            "logoUrl": "https://www.bloombergquint.com/bloombergquint/assets/sprite.svg#logo",
            "details": "Seven Indian startups together raised just under Rs 300 crore from angel, seed or venture capital funding last week, as compared with Rs 512 crore raised in the the week prior. E-commerce giant Amazon backed a Bengaluru-based lending startup as it looks to strengthen its consumer-focused payments business in the country."
        },
        {
            "sno": 32,
            "article": "PayMe India gets funds from Singapore investors",
            "reference": "https://timesofindia.indiatimes.com/business/india-business/PayMe-India-gets-funds-from-Singapore-investors/articleshow/63918432.cms",
            "date": "April 26,2018",
            "logoUrl": "https://static.toiimg.com/photo/79638690.cms",
            "details": "NEW DELHI: PayMe India, a Noida-based online lending platform, has raised $2 million from Singapore-based angel investors. Founded in 2016 by Mahesh Shukla, former financial analyst at Barclays, and Sandeep Singh, former executive at"
        },
        {
            "sno": 31,
            "article": "PayMe Instant Loans review",
            "reference": "https://www.epfguide.com/payme-instant-loans-review/",
            "date": "August 31, 2019",
            "logoUrl": "",
            "details": "PayMe is one of the another vendors who provide Instant Loans based on your Salary Credit.Though they call as it as instant loan, after documents are uploaded, they took nearly 4 to 5 days to get my loan application processed and I got the loan only on the 5th day"
        },
        {
            "sno": 30,
            "article": "HYPD Store, PayMe India raise funding",
            "reference": "https://www.vccircle.com/hypd-store-payme-india-raise-funding",
            "date": "February 12,2021",
            "logoUrl": "https://staticassets.vccircle.com/images/VCC-logo.svg",
            "details": "HYPD Stores, a content-first ecommerce discovery platform, has raised an undisclosed sum in a strategic pre-seed investment from digital media company ScoopWhoop."
        },
        {
            "sno": 29,
            "article": "HYPD Store, PayMe India raise funding",
            "reference": "https://www.techcircle.in/2021/02/12/hypd-store-payme-india-raise-funding",
            "date": "February 12,2021",
            "logoUrl": "",
            "details": "HYPD Stores, a content-first ecommerce discovery platform, has raised an undisclosed sum in a strategic pre-seed investment from digital media company ScoopWhoop"
        },
        {
            "sno": 28,
            "article": "Citi Bank India Shuts Down Entire Banking Operations: This Is How Indian Startups Reacted",
            "reference": "https://trak.in/tags/business/2021/04/16/citi-bank-india-shuts-down-entire-banking-operations-this-is-how-indian-startups-reacted",
            "date": "April 17,2021",
            "logoUrl": "https://trak.in/wp-content/uploads/2017/07/Trak-Logo-Underline-small.png",
            "details": "Citibank has announced that they will shut down entire retail banking operations across 13 nations, and that includes India as well."
        },
        {
            "sno": 27,
            "article": "Launched by bankers, how PayMe India has transformed into a full-stack personal loan startup",
            "reference": "https://flipboard.com/topic/indianpersonalfinance/launched-by-bankers-how-payme-india-has-transformed-into-a-full-stack-personal-/f-0a23aa035e%2Fyourstory.com",
            "date": "",
            "logoUrl": "https://www.insightpartners.com//assets/media/2018/02/Flipboard.png",
            "details": "When Mahesh Shukla moved to Delhi from a small town in UP, he was disappointed to see how cumbersome and expensive it was to avail a credit card"
        },
        {
            "sno": 26,
            "article": "PayMe India raises USD2 million from Singapore investors",
            "reference": "https://www.connectedtoindia.com/payme-india-raises-usd2-million-from-singapore-investors-3967.html",
            "date": "April 27,2018",
            "logoUrl": "https://www.connectedtoindia.com/assets/images/c2i-homepage-logo_transparent.png",
            "details": "In another example of close proximity between India-Singapore business relations, an India-based online lending platform, PayMe India has raised USD2 million (SGD2.65 million) from Singapore-based angel investors"
        },
        {
            "sno": 25,
            "article": "Green' Sundays for PayMe India boss; start-up boss' garden collection includes Boston fern, mogra",
            "reference": "https://economictimes.indiatimes.com/magazines/panache/green-sundays-for-payme-india-boss-start-up-boss-garden-collection-includes-boston-fern-mogra/articleshow/73221581.cms",
            "date": "Jan 13, 2020",
            "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/2560px-The_Economic_Times_logo.svg.png",
            "details": "Mahesh Shukla, founder of PayMe India, loves gardening and even has a terrace garden where he grows seasonal flowers. Among the plants he has at his Noida house are the Boston fern, syngonium, mogra, rubber, dumb cane, lady palm"
        },
        {
            "sno": 24,
            "article": "PayMe India raises USD 2 mn from Singaporean Angel Investors",
            "reference": "https://www.aninews.in/news/business/business/payme-india-raises-usd-2-mn-from-singaporean-angel-investors201804261322440001/",
            "date": "April 26, 2018",
            "logoUrl": "https://aniportalimages.s3.amazonaws.com/static/img/logo-white.png",
            "details": "PayMe India raises USD 2 mn from Singaporean Angel Investors"
        },
        {
            "sno": 23,
            "article": "Fintech Startup PayMe India raises $2 million from Singapore Angel Investors",
            "reference": "https://techstory.in/payme-india-raises-angel-investors-2018/",
            "date": "April 26, 2018",
            "logoUrl": "https://techstory.in/wp-content/uploads/2014/11/TechstoryLogo-84-e1471213798345.jpg",
            "details": "Fintech startup PayMe India has raised $2 million in funding from Singapore based Angel Investors. The investment round included the line of credit from multiple non-banking financial companies (NBFCs) and fresh cash in the equity round."
        },
        {
            "sno": 22,
            "article": "PayMe India Receives NBFC Certificate from RBI",
            "reference": "https://www.bankingfinance.in/payme-india-receives-nbfc-certificate-from-rbi.html",
            "date": "September 6, 2019",
            "logoUrl": "https://www.bankingfinance.in/wp-content/uploads/2017/06/cropped-bankingfinancenewsportal.png",
            "details": "PayMe India, one of the country’s imminent FinTech establishment has recently acquired NBFC licence from nations apex financial institution, the Reserve Bank of India (RBI) under Section 45(1A)."
        },
        {
            "sno": 21,
            "article": "PayMe India raises USD 2 mn from Singaporean Angel Investors",
            "reference": "https://news.abplive.com/business/payme-india-raises-usd-2-mn-from-singaporean-angel-investors-688899",
            "date": "April 26,2018",
            "logoUrl": "https://static.abplive.com/frontend/images/ABP_logo_main.svg",
            "details": "New Delhi [India], April 26 (ANI): Leading fintech company, PayMe India, on Thursday went official about raising USD 2 million from Singapore-based Angel Investors. The investment round included the line of credit from multiple non-banking financial companies (NBFCs) and fresh cash in the equity round."
        },
        {
            "sno": 20,
            "article": "PayMe India Receives NBFC Certificate from RBI",
            "reference": "https://bfsi.eletsonline.com/payme-india-receives-nbfc-certificate-from-rbi/",
            "date": "August 5, 2019",
            "logoUrl": "https://bfsi.eletsonline.com/wp-content/uploads/2018/08/BFSI_Logo-300x136.png",
            "details": "PayMe India, one of the country’s eminent FinTech establishments has recently acquired Non-banking Financial Company (NBFC) license from nation’s apex financial institution, the Reserve Bank of India (RBI) under Section 45(1A)."
        },
        {
            "sno": 19,
            "article": "Online Lending Startup PayMe India Raises $2 Mn In Angel Funding",
            "reference": "https://inc42.com/buzz/sme-lending-startup-payme-india-raises-2-mn-in-angel-funding",
            "date": "April 26,2018",
            "logoUrl": "https://cdn.dribbble.com/users/873027/screenshots/3996894/dribbble_001_2x.png",
            "details": "Noida-based online lending startup PayMe India has reportedly raised $2 Mn in funding from Singapore-based angel investors. The startup will use the funding mainly for capacity and market expansion, as per a Times Of India"
        },
        {
            "sno": 18,
            "article": "Payme India — fintech app they hack my contact details",
            "reference": "https://www.consumercomplaints.in/payme-india-fintech-app-they-hack-my-contact-details-c1904376",
            "date": "April 7,2021",
            "logoUrl": "https://www.consumercomplaints.in/img/logo/slogan.svg",
            "details": "I would like to inform this company is fintect they give loan for a 30days only & they do harassment to my family while once you download the app they will hack your cell with the mac id even it"
        },
        {
            "sno": 17,
            "article": "PayMe India Receives NBFC Certificate from RBI",
            "reference": "PayMe India Receives NBFC Certificate From RBI - Inventiva",
            "date": "August 8, 2019",
            "logoUrl": "https://www.inventiva.co.in/wp-content/uploads/2021/07/inventiva-300x102-2.png",
            "details": "New Delhi: PayMe India, one of the country’s imminent FinTech establishment has recently acquired NBFC licence from nations apex financial institution, the Reserve Bank of India (RBI) under Section 45(1A)."
        },
        {
            "sno": 16,
            "article": "PayMe India Secures Pre-Series A Angel Funding",
            "reference": "http://bwdisrupt.businessworld.in/article/PayMe-India-Secures-Pre-Series-A-Angel-Funding/12-02-2021-376822/",
            "date": "February 12,2021",
            "logoUrl": "http://bwdisrupt.businessworld.in/static/images/full-Disrupt-logo.png",
            "details": "The endowment was led from Singapore and Dubai, along with India as the co-founders have also invested in this round of funding."
        },
        {
            "sno": 15,
            "article": "Immediate personal bank loan and wage loan by PayMe Asia",
            "reference": "http://pierresernet.com/immediate-personal-bank-loan-and-wage-loan-by-2",
            "date": "",
            "logoUrl": "Pierre Sernet",
            "details": "No further crunch that is financial. Payme Asia provides you with the total amount of loan you’re looking for, anytime-anywhere."
        },
        {
            "sno": 14,
            "article": "IMMEDIATE UNSECURED LOAN AND WAGE LOAN BY PAYME ASIA",
            "reference": "https://mfe.ma/2020/12/22/immediate-unsecured-loan-and-wage-loan-by-payme",
            "date": "December 22,2020",
            "logoUrl": "https://mfe.ma/wp-content/themes/industrial/assets/images/mobile_logo.png",
            "details": "ayme Asia offering flexi that is online in Asia allows you to get the hands on short-term money loans. Our salary based loans are revolutionary with quick approval and transfers. We strive to be sure that the program procedure is fast, safe and completely safe."
        },
        {
            "sno": 13,
            "article": "PayMe India raises pre-Series A funding",
            "reference": "https://incubees.com/payme-india-raises-pre-series-a-funding/",
            "date": "February 13,2021",
            "logoUrl": "https://incubees.com/wp-content/uploads/2021/05/2-bee-logo-registered-maroon.png",
            "details": "Payme Asia offering flexi that is online in Asia allows you to get the hands on short-term money loans. Our salary based loans are revolutionary with quick approval and transfers. We strive to be sure that the program procedure is fast, safe and completely safe."
        },
        {
            "sno": 12,
            "article": "PayMe India Receives NBFC Certificate from RBI",
            "reference": "https://www.equitybulls.com/admin/news2006/news_det.asp?id=255064",
            "date": "August 12,2019",
            "logoUrl": "https://www.equitybulls.com/images/logo.jpg",
            "details": "ayMe India, one of the country's imminent FinTech establishment has recently acquired NBFC licence from nations apex financial institution, the Reserve Bank of India (RBI) under Section 45(1A)."
        },
        {
            "sno": 11,
            "article": "Cash Crunch in The Middle Of The Month! No Worries PayMe India Is Here To Help You Out",
            "reference": "https://www.inventiva.co.in/startups/inventiva/cash-crunch-middle-month-no-worries-payme-india-help",
            "date": "September 22, 2017",
            "logoUrl": "https://www.inventiva.co.in/wp-content/uploads/2021/07/inventiva-300x102-2.png",
            "details": "The working class has finally invented more powerful words than ‘I Love you’ and those words are ‘Salary got Credited’!! This one line of SMS on mobile phone brings a smile on every middle class working professional."
        },
        {
            "sno": 10,
            "article": "Financiers, intermediaries line up funds for MSMEs",
            "reference": "https://www.thehindu.com/business/financiers-intermediaries-line-up-funds-for-msmes/article31434286.ece",
            "date": "April 25, 2020",
            "logoUrl": "https://th.thgim.com/static/theme/default/base/img/logo.png",
            "details": "At a time when micro, small and medium enterprises (MSMEs) are scouting for funds to keep their operations on, a host of financiers and intermediaries have come forward to meet the demand by capitalising on digital technology."
        },
        {
            "sno": 9,
            "article": "PayMe India said to raise $2m in angel funding round",
            "reference": "https://member.fintech.global/2018/04/27/payme-india-said-to-raise-2m-in-angel-funding-round/",
            "date": "April 27, 2018",
            "logoUrl": "https://member.fintech.global/wp-content/uploads/sites/3/2019/06/FG-Logo_Black-BG_Horizontal-1.png",
            "details": "Online lending platform PayMe India has reportedly raised $2m in its angel funding round."
        },
        {
            "sno": 8,
            "article": "PayMe India receives NBFC certificate from RBI",
            "reference": "https://www.thenewsminute.com/article/payme-india-receives-nbfc-certificate-rbi-106687",
            "date": "August 05, 2019",
            "logoUrl": "https://matter.in/media-coverage/img/logo_thenewsminute.jpg",
            "details": "After obtaining NBFC status, PayMe India is eligible to offer secured and unsecured financial products like short-term Personal Loan, Business Loan, Education Loan, Credit Cards."
        },
        {
            "sno": 7,
            "article": "Payme India - Instant Personal Loan, Interest Rates, Charges",
            "reference": "https://www.mymoneymantra.com/mmm/payme-india-loan.html",
            "date": "",
            "logoUrl": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/10_11_2020_06_43_13_603957.jpg?width=1280",
            "details": "ayMe India is a unique fintech organisation that brings quick financial aid at your fingertips. This mobile application is designed to help salaried individuals get an instant access to cash in case of an emergency."
        },
        {
            "sno": 6,
            "article": "PayMe India Secures Pre-Series A Angel Funding",
            "reference": "https://www.entrepreneur.com/article/365585",
            "date": "February 17, 2021",
            "logoUrl": "https://assets.entrepreneur.com/static/20190308065725-ENT-India-Logo-Black.svg",
            "details": "The funding will be used for augmenting paid-up capital and authorized share capital"
        },
        {
            "sno": 5,
            "article": "PayMe India gets funds from Singapore investors",
            "reference": "https://timesofindia.indiatimes.com/business/india-business/payme-india-gets-funds-from-singapore-investors/articleshow/63918432.cms",
            "date": "Apr 26, 2018",
            "logoUrl": "https://static.toiimg.com/photo/79638690.cms",
            "details": "NEW DELHI: PayMe India, a Noida-based online lending platform, has raised $2 million from Singapore-based angel investors. Founded in 2016 by Mahesh Shukla, former financial analyst at Barclays,"
        },
        {
            "sno": 4,
            "article": "Mahesh Shukla,Founder,PayMe India",
            "reference": "Mahesh Shukla, Founder, PayMe India (indiainfoline.com)",
            "date": "September 27, 2019",
            "logoUrl": "https://www.indiainfoline.com/new_hp/include/_mod/site/img/Header-Image/brand-logo.svg",
            "details": "Mahesh Shukla, Founder, PayMe India, in 2012, decided to become an entrepreneur and impact millions of lives everyday. He had a chance to go through a lot of literature related to the emerging concept of FinTech, an amalgamation of finance and technology."
        },
        {
            "sno": 3,
            "article": "Launched by bankers, how PayMe India has transformed into a full-stack personal loan startup",
            "reference": "https://yourstory.com/2021/06/payme-india-transformed-full-stack-personal-loan-startup/amp",
            "date": "June 8, 2021",
            "logoUrl": "https://images.yourstory.com/logos/svg/logo_yourstory.svg",
            "details": "Launched in 2016, Noida-based PayMe India aims to be a full-fledged neobanking startup offering a suite of lending products, wealth management, debt advisory, and other loans."
        },
        {
            "sno": 2,
            "article": "PayMe India raises USD 2 mn from Singaporean Angel Investors",
            "reference": "https://www.business-standard.com/article/news-ani/payme-india-raises-usd-2-mn-from-singaporean-angel-investors-118042600458_1.html",
            "date": "April 26, 2018",
            "logoUrl": "https://bsmedia.business-standard.com/include/_mod/site/html5/images/business-standard-logo.png",
            "details": "Leading fintech company, PayMe India, on Thursday went official about raising USD 2 million from Singapore-based Angel Investors."
        },
        {
            "sno": 1,
            "article": "PayMe India seeks to extend credit to the under-served",
            "reference": "https://www.newindianexpress.com/business/2019/oct/05/payme-india-seeks-to-extend-credit-to-the-under-served-2043438.html",
            "date": "05 October 2019",
            "logoUrl": "https://images.newindianexpress.com/images/FrontEnd/images/new_logo.jpg",
            "details": "While still in college in 2004, Mahesh Shukla, co-founder of PayMe India aspired to make an impact by offering financial services even in India’s remote areas."
        }
    ]

    return (
        <>
            <MetaTags>
                <title>Media Coverage - PayMe India</title>
                <meta name="description" content="Descriptions: Know what the world is buzzing about PayMe India. Our new and exciting innovation always keeps us in media coverage."/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="Media Coverage - PayMe India"/>
            </MetaTags>
            <Header {...props} />
            <div className='content'>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <h1 className="heading1 blue-color">MEDIA COVERAGE</h1>
                                <p className="heading6">Know what the world is buzzing about PayMe India. Our new and
                                    exciting innovation always keeps us in media coverage.</p>
                            </div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <img className="img-fluid"
                                     alt="Media"
                                     src={mediaCover}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 px-sm-5 mediaCover">
                    <div className="container p-b-30">

                        <div className="row">

                            {json.map((item, index) => {
                                // console.log(item)
                                console.log(props)
                                return (
                                    <div className="col-sm-12 col-md-4">
                                        <div className="card">
                                            <div className="headStripe">
                                                <img
                                                    src={item.logoUrl}
                                                    alt={item.article}
                                                    className="img-fluid imgCenter"/>
                                            </div>
                                            <h5>{item.article}</h5>
                                            <p>
                                                <Link href={item.reference} target={"_blank"}>
                                                    {item.details}</Link></p>
                                            <p className='date'>{item.date}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
        ;
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(MediaCoverage);
