import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./ForEmployers.css";

const ForEmployers = () => {
  const onCTAButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="for-employers">
      <div className="group-parent">
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="mask-group">
            <div className="rectangle-parent">
              <div className="group-item" />
              <div className="group-inner" />
              <div className="k-candidates-hired-container">
                <p className="k">
                  <b>+10K</b>
                </p>
                <p className="candidates-hired">Candidates Hired</p>
              </div>
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
            <img
              className="mask-group-child"
              alt=""
              src="/rectangle-39395@2x.png"
            />
          </div>
        </div>
        <div className="hero-title">
          <div className="power-up-your-container">
            <p className="k">Power Up Your Hiring</p>
            <p className="with-rework">with Rework .</p>
          </div>
          <div className="empower-your-business">{`Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire `}</div>
        </div>
        <Button
          className="cta-button"
          variant="primary"
          onClick={onCTAButtonClick}
        >
          Book A Demo
        </Button>
        <div className="points">
          <div className="group-group">
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="no-credit-required">No credit Required</div>
          </div>
          <div className="group-group">
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="no-credit-required">
              Streamlined Recruitment Process
            </div>
          </div>
        </div>
        <div className="nav-items-parent">
          <div className="nav-items">
            <button className="nav-item">
              <div className="talent-finder">Talent Finder</div>
            </button>
            <button className="nav-item1">
              <div className="talent-finder">For Recruiters</div>
            </button>
            <button className="nav-item2">
              <div className="for-employers1">For Employers</div>
              <img className="nav-item-child" alt="" src="/vector-451.svg" />
            </button>
            <button className="nav-item1">
              <div className="talent-finder">About Us</div>
            </button>
            <button className="nav-item1">
              <div className="talent-finder">Company</div>
            </button>
          </div>
          <div className="logo">
            <div className="logo-child" />
            <div className="logo-item" />
            <div className="ai">ai</div>
            <button className="rework">
              <span className="re">
                <span className="r">r</span>
                <span className="e">e</span>
              </span>
              <span className="work">work</span>
            </button>
          </div>
          <div className="simple-button-parent">
            <Button className="simple-button" variant="outline-primary">
              Log In
            </Button>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
        <div className="rectangle-group">
          <div className="group-item" />
          <div className="group-inner" />
          <div className="happy-companies">
            <p className="k">
              <b>+360</b>
            </p>
            <p className="candidates-hired">Happy Companies</p>
          </div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
      </div>
      <div className="for-employers-child" />
      <div className="hire-for-1000-brands-includin-parent">
        <div className="div">Hire for 1000+ Brands Including</div>
        <div className="logos">
          <img className="microsoft-1-icon" alt="" src="/microsoft-1.svg" />
          <a
            className="google-2015-1"
            href="https://www.google.com/"
            target="_blank"
          >
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <img className="vector-icon3" alt="" src="/vector.svg" />
            <img className="vector-icon4" alt="" src="/vector.svg" />
            <img className="vector-icon5" alt="" src="/vector.svg" />
            <img className="vector-icon6" alt="" src="/vector.svg" />
            <img className="vector-icon7" alt="" src="/vector.svg" />
          </a>
          <a
            className="kisspng-amazon-com-logo-brand-"
            href="https://www.amazon.in/"
            target="_blank"
          />
          <a
            className="kisspng-nokia-networks-logo-ny"
            href="https://www.nokia.com/"
            target="_blank"
          />
          <img className="vector-icon8" alt="" src="/vector.svg" />
          <a
            className="microsoft-2"
            href="https://www.microsoft.com/en-in"
            target="_blank"
          >
            <img className="vector-icon9" alt="" src="/vector.svg" />
            <img className="vector-icon10" alt="" src="/vector.svg" />
            <img className="vector-icon11" alt="" src="/vector.svg" />
            <img className="vector-icon12" alt="" src="/vector.svg" />
            <img className="vector-icon13" alt="" src="/vector.svg" />
          </a>
          <a
            className="google-2015-1"
            href="https://www.google.com/"
            target="_blank"
          >
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <img className="vector-icon3" alt="" src="/vector.svg" />
            <img className="vector-icon4" alt="" src="/vector.svg" />
            <img className="vector-icon5" alt="" src="/vector.svg" />
            <img className="vector-icon6" alt="" src="/vector.svg" />
            <img className="vector-icon7" alt="" src="/vector.svg" />
          </a>
          <a
            className="kisspng-amazon-com-logo-brand-"
            href="https://www.amazon.in/"
            target="_blank"
          />
          <img
            className="kisspng-nokia-networks-logo-ny-icon"
            alt=""
            src="/kisspngnokianetworkslogonysenokbusiness5b3983e37d3eb2-2@2x.png"
          />
        </div>
      </div>
      <img className="vector-icon20" alt="" src="/vector.svg" />
      <div className="how-our-system-operates-parent">
        <div className="how-our-system-container">
          <span>{`How Our System `}</span>
          <span className="operates">Operates</span>
        </div>
        <div className="steps-parent">
          <div className="steps">
            <div className="upload-documents">Upload Documents</div>
            <div className="steps-inner">
              <div className="shortlist-the-most-qualified-c-wrapper">
                <div className="power-up-your-container">
                  Shortlist the most qualified candidate and upload their
                  details for the top companies
                </div>
              </div>
            </div>
            <img className="steps-child" alt="" src="/frame-48095633.svg" />
          </div>
          <div className="steps1">
            <div className="sign-up">Sign Up</div>
            <div className="follow-the-link">
              Follow the link below to sign up and get access of the current job
              postings
            </div>
            <img
              className="mingcuteuser-add-line-icon"
              alt=""
              src="/mingcuteuseraddline.svg"
            />
          </div>
          <div className="steps2">
            <div className="get-rewards">Get Rewards</div>
            <div className="steps-inner">
              <div className="shortlist-the-most-qualified-c-wrapper">
                <div className="as-soon-as">
                  As soon as the candidate gets selected you get your benefits
                </div>
              </div>
            </div>
            <img className="steps-item" alt="" src="/frame-48095633.svg" />
          </div>
        </div>
        <Button className="simple-button1" variant="outline-primary">
          Get Started
        </Button>
      </div>
      <div
        className="choose-your-simple-transparen-parent"
        data-scroll-to="frameContainer"
      >
        <div className="choose-your-simple-container">
          <span>{`Choose Your Simple, `}</span>
          <span className="operates">Transparent Pricing</span>
        </div>
        <div className="frame-parent">
          <div className="frame-group">
            <div className="suitable-for-companies-with-5-parent">
              <div className="suitable-for-companies">
                Suitable for companies with 5-10 openings
              </div>
              <div className="frame-container">
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    10 interview-ready candidates
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Unlimited job postings
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Receive pre-vetted profiles within 48 hours
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Dedicated account manager
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Assistance with interview scheduling
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Custom reports
                  </div>
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="div">1</div>
              <div className="month">Month</div>
            </div>
            <div className="group">
              <div className="div1">₹</div>
              <div className="no-credit-required">199.00</div>
              <div className="month1">/month</div>
            </div>
            <div className="simple-button2">
              <div className="get-started">Get Started</div>
              <div className="arrow">
                <img className="vector-icon21" alt="" src="/vector.svg" />
                <img className="vector-icon22" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className="frame-parent1">
            <div className="suitable-for-companies-with-5-parent">
              <div className="suitable-for-companies">
                Suitable for companies with 5-10 openings
              </div>
              <div className="frame-parent2">
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    10 interview-ready candidates
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Unlimited job postings
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Receive pre-vetted profiles within 48 hours
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Dedicated account manager
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Assistance with interview scheduling
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Custom reports
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="div">3</div>
              <div className="month">Months</div>
            </div>
            <div className="parent1">
              <div className="div1">₹</div>
              <div className="no-credit-required">149.00</div>
              <div className="month1">/month</div>
            </div>
            <div className="simple-button3">
              <div className="get-started1">Get Started</div>
              <div className="arrow">
                <img className="vector-icon21" alt="" src="/vector.svg" />
                <img className="vector-icon22" alt="" src="/vector.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="most-popular-wrapper">
                <div className="no-credit-required">Most Popular</div>
              </div>
            </div>
          </div>
          <div className="frame-group">
            <div className="suitable-for-companies-with-5-parent">
              <div className="suitable-for-companies">
                Suitable for companies with 5-10 openings
              </div>
              <div className="frame-container">
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    10 interview-ready candidates
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Unlimited job postings
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Receive pre-vetted profiles within 48 hours
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Dedicated account manager
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Assistance with interview scheduling
                  </div>
                </div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="interview-ready-candidates">
                    Custom reports
                  </div>
                </div>
              </div>
            </div>
            <div className="parent2">
              <div className="div">6</div>
              <div className="month">Months</div>
            </div>
            <div className="parent3">
              <div className="div1">₹</div>
              <div className="no-credit-required">169.00</div>
              <div className="month1">/month</div>
            </div>
            <div className="simple-button2">
              <div className="get-started">Get Started</div>
              <div className="arrow">
                <img className="vector-icon21" alt="" src="/vector.svg" />
                <img className="vector-icon22" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <Button className="simple-button5" variant="outline-primary">
          Book a Demo
        </Button>
      </div>
      <div className="customer-testimonials-parent">
        <div className="customer-testimonials">
          <span>{`Customer `}</span>
          <span className="testimonials">Testimonials</span>
        </div>
        <div className="frame-parent5">
          <div className="component-16-parent">
            <div className="component-16">
              <div className="rework-has-been">
                “Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, and the
                recruiters have been able to find the best employers leads.
                Highly recommend! “
              </div>
              <div className="ellipse-group">
                <img className="frame-child" alt="" src="/ellipse-2@2x.png" />
                <div className="container1">
                  <div className="theresa-webb">Theresa Webb</div>
                  <div className="hr-manager-amazon">HR Manager, Amazon</div>
                </div>
              </div>
            </div>
            <div className="component-16">
              <div className="rework-has-been1">
                “ Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, ““ Rework
                has been a great way to make the hiring process easier and
                faster. Highly recommend! “
              </div>
              <div className="ellipse-group">
                <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
                <div className="container1">
                  <div className="theresa-webb">Ronald Richards</div>
                  <div className="hr-manager-amazon">HR Manager, Google</div>
                </div>
              </div>
            </div>
          </div>
          <div className="component-16-parent">
            <div className="component-16">
              <div className="rework-has-been1">
                “Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, and the
                recruiters have been able to find the best employers leads.
                Highly recommend! ““ Rework has been a great way to make the
                hiring process easier and faster. Highly recommend! “
              </div>
              <div className="ellipse-group">
                <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
                <div className="container1">
                  <div className="theresa-webb">Savannah Nguyen</div>
                  <div className="hr-manager-amazon">HR Manager, Microsoft</div>
                </div>
              </div>
            </div>
            <div className="component-16">
              <div className="rework-has-been">
                “Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, and the
                recruiters have been able to find the best employers leads.
                Highly recommend! “
              </div>
              <div className="ellipse-group">
                <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
                <div className="container1">
                  <div className="theresa-webb">Ronald Richards</div>
                  <div className="hr-manager-amazon">HR Manager, Google</div>
                </div>
              </div>
            </div>
          </div>
          <div className="component-16-parent">
            <div className="component-16">
              <div className="rework-has-been">
                “Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, and the
                recruiters have been able to find the best employers leads.
                Highly recommend! “
              </div>
              <div className="ellipse-group">
                <img className="frame-child" alt="" src="/ellipse-2@2x.png" />
                <div className="container1">
                  <div className="theresa-webb">Theresa Webb</div>
                  <div className="hr-manager-amazon">HR Manager, Amazon</div>
                </div>
              </div>
            </div>
            <div className="component-16">
              <div className="rework-has-been1">
                “ Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, ““ Rework
                has been a great way to make the hiring process easier and
                faster. Highly recommend! “
              </div>
              <div className="ellipse-group">
                <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
                <div className="container1">
                  <div className="theresa-webb">Ronald Richards</div>
                  <div className="hr-manager-amazon">HR Manager, Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="what-others-has">What others has say About Us</div>
      </div>
      <div className="frame9">
        <div className="success-stories">
          <span>{`Success `}</span>
          <span className="operates">Stories</span>
        </div>
        <div className="component-11-parent">
          <div className="component-113">
            <img
              className="unsplashmpdlxiig0p0-icon"
              alt=""
              src="/unsplashmpdlxiig0p0@2x.png"
            />
            <div className="rework-has-been-a-great-way-to-parent">
              <div className="rework-has-been">
                Rework has been a great way to make the hiring process easier
                and faster.
              </div>
              <div className="weve-been-able">
                “We've been able to save money and time, and the recruiters have
                been able to find the best employers leads. Highly recommend! “
              </div>
            </div>
          </div>
          <div className="component-113">
            <img
              className="unsplashmpdlxiig0p0-icon"
              alt=""
              src="/unsplashmpdlxiig0p0@2x.png"
            />
            <div className="rework-has-been-a-great-way-to-parent">
              <div className="rework-has-been">
                Rework has been a great way to make the hiring process easier
                and faster.
              </div>
              <div className="weve-been-able">
                “We've been able to save money and time, and the recruiters have
                been able to find the best employers leads. Highly recommend! “
              </div>
            </div>
          </div>
          <div className="component-113">
            <img
              className="unsplashmpdlxiig0p0-icon"
              alt=""
              src="/unsplashmpdlxiig0p0@2x.png"
            />
            <div className="rework-has-been-a-great-way-to-parent">
              <div className="rework-has-been">
                Rework has been a great way to make the hiring process easier
                and faster.
              </div>
              <div className="weve-been-able">
                “We've been able to save money and time, and the recruiters have
                been able to find the best employers leads. Highly recommend! “
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="frame-child3" />
          <div className="frame-child4" />
        </div>
      </div>
      <div className="frame-parent7">
        <div className="discover-the-future-of-talent-parent">
          <div className="discover-the-future-container">
            <span>{`Discover the Future of `}</span>
            <span className="operates">Talent Assessment!</span>
          </div>
          <div className="power-up-your-container">
            <p className="k">Facing challenges in traditional hiring?</p>
            <p className="k">
              Uncover the costs, pitfalls, and the game-changing role of
              Generative AI in recruitment.
            </p>
          </div>
          <div className="power-up-your-container">
            <p className="k">
              <b>🔍 Inside this Whitepaper:</b>
            </p>
            <ul className="manual-vs-machine-based-hirin">
              <li className="the-truth-about-interview-as">
                <span className="manual-vs-machine-based">{`Manual vs. Machine-based hiring: Costs & Challenges.`}</span>
              </li>
              <li className="the-truth-about-interview-as">
                <span className="manual-vs-machine-based">
                  The truth about "Interview as a Service."
                </span>
              </li>
              <li>
                <span className="manual-vs-machine-based">
                  Generative AI: The simple explanation. Optimize Your Hiring
                  Process Today!
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Button className="cta-button1" variant="primary">
          Download Now for Smarter Recruitment
        </Button>
        <img className="component-child" alt="" src="/rectangle-39394@2x.png" />
      </div>
      <div className="stats-parent">
        <div className="stats">
          <div className="stats1">
            <b className="no-credit-required">80%</b>
            <div className="reduction-in-your">
              Reduction in your recruitment TAT with the access to a wider
              talent pool on the platform
            </div>
          </div>
          <div className="stats-child" />
          <div className="stats1">
            <b className="no-credit-required">50%</b>
            <div className="reduction-in-your">
              Streamline your budgeting and save money while finding the top
              candidates
            </div>
          </div>
          <div className="stats-child" />
          <div className="stats1">
            <b className="no-credit-required">10k</b>
            <div className="reduction-in-your">
              Certified sourcing partners’ expertise
            </div>
          </div>
        </div>
        <div className="how-rework-ai-container">
          <span>{`How Rework AI has been a good `}</span>
          <span className="operates">Hiring platform for Companies</span>
        </div>
      </div>
      <div className="framw-10">
        <div className="frequently-asked-questions-container">
          <span>{`Frequently asked `}</span>
          <span className="operates">Questions</span>
        </div>
        <div className="we-have-compiled">
          We have Compiled the most commonly asked question about our Platform
          for your information and to enhance your overall experience.
        </div>
        <div className="frame-parent8">
          <div className="how-can-i-get-started-with-rew-parent">
            <div className="how-can-i">
              How can I Get started with Rework AI?
            </div>
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
              feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing
              id ipsum et lectus malesuada.
            </div>
            <img className="typcnplus-icon" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-group">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-container">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-group">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-group">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-group">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-group">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
          <div className="how-can-i-get-started-with-rew-group">
            <div className="how-can-i1">
              How can I Get started with Rework AI?
            </div>
            <img className="icons" alt="" src="/typcnplus.svg" />
          </div>
        </div>
      </div>
      <div className="frame-parent9">
        <div className="optimize-your-hiring-strategy-parent">
          <div className="optimize-your-hiring">
            Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
          </div>
          <div className="discover-the-strengths">
            Discover the strengths and opportunities in your current hiring
            process. Our comprehensive Hiring Audit evaluates your strategy,
            identifies areas for improvement, and tailors a roadmap for success.
            Elevate your recruitment game with data-driven insights – because
            the right talent deserves the right approach.
          </div>
        </div>
        <Button className="cta-button2" variant="primary">
          Request Your Free Hiring Audit
        </Button>
      </div>
      <div className="frame-parent10">
        <div className="frame-parent11">
          <div className="eos-iconsai-parent">
            <img className="eos-iconsai" alt="" src="/eosiconsai.svg" />
            <div className="hero-title1">
              <div className="power-up-your-container">
                <p className="k">60%</p>
                <p className="recruitment-by-tat">Cost Reduce</p>
              </div>
            </div>
            <div className="zero-overhead-in">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </div>
          </div>
          <div className="eos-iconsai-parent">
            <img className="eos-iconsai" alt="" src="/eosiconsai.svg" />
            <div className="hero-title1">
              <div className="power-up-your-container">
                <p className="k">50% Faster</p>
                <p className="recruitment-by-tat">Recruitment by TAT</p>
              </div>
            </div>
            <div className="zero-overhead-in">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </div>
          </div>
          <div className="eos-iconsai-parent">
            <div className="eos-iconsai">
              <div className="vector-parent">
                <img className="vector-icon27" alt="" src="/vector.svg" />
                <img className="vector-icon28" alt="" src="/vector.svg" />
              </div>
            </div>
            <div className="hero-title1">
              <div className="power-up-your-container">
                <p className="k">{`Highly Contextualized `}</p>
                <p className="recruitment-by-tat">Interview</p>
              </div>
            </div>
            <div className="zero-overhead-in">
              Al models generate highly contextualized interviews for the
              candidates based on your Company profile, Job description and
              Candidate's CV.
            </div>
          </div>
          <div className="eos-iconsai-parent">
            <div className="healthiconsi-schedule-school-">
              <div className="vector-group">
                <img className="vector-icon29" alt="" src="/vector.svg" />
                <img className="vector-icon30" alt="" src="/vector.svg" />
                <img className="vector-icon31" alt="" src="/vector.svg" />
                <img className="vector-icon32" alt="" src="/vector.svg" />
              </div>
            </div>
            <div className="hero-title1">
              <div className="power-up-your-container">
                <p className="k">{`Automated `}</p>
                <p className="recruitment-by-tat">Scheduling</p>
              </div>
            </div>
            <div className="zero-overhead-in">{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
          </div>
          <div className="eos-iconsai-parent">
            <img className="eos-iconsai" alt="" src="/eosiconsai.svg" />
            <div className="hero-title1">
              <div className="power-up-your-container">
                <p className="k">AI generated Interviews</p>
                <p className="recruitment-by-tat">On what matters</p>
              </div>
            </div>
            <div className="zero-overhead-in">
              0 manual interventions, completely seamless experience for the
              candidates.
            </div>
          </div>
          <div className="eos-iconsai-parent">
            <img
              className="eos-iconsai"
              alt=""
              src="/fluenttasksapp20regular.svg"
            />
            <div className="hero-title1">
              <div className="power-up-your-container">
                <p className="k">in-built</p>
                <p className="recruitment-by-tat">ATS</p>
              </div>
            </div>
            <div className="zero-overhead-in">{`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}</div>
          </div>
        </div>
        <div className="component-item" />
        <div className="our-amazing-benefits-container">
          <span>{`Our Amazing Benefits `}</span>
          <span className="operates">Helpful For Your Hiring</span>
        </div>
      </div>
    </div>
  );
};

export default ForEmployers;
