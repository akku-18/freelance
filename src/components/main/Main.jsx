import "./main.css";
import videoBg from "../../videoAssests/video.mp4";

export default function main() {
  return (
    <div className="Wrapper">
      <div className="mainContainer">
        {/* <img src="assests/main.jpeg" alt="" className="mainImg" /> */}
        <video src={videoBg} autoPlay loop muted id="myVideo" />
        <div className="bgText">
          <div className="bgTextHead">
            Hire the best labour for your dream work, online
          </div>
          <br />
          <ul className="bgTextList">
            <li>World's largest labour marketplace</li>
            <li>Any work you can possibly think of</li>
            <li>Save up to 90% & get quotes for free</li>
            <li>Pay only when you're 100% happy</li>
          </ul>
          <br />
          <div className="bgButtons">
            <button className="mainHire">Hire labour</button>
            <button className="earnMoney">Earn money</button>
          </div>
        </div>
      </div>
      <div className="mainContainer2">
        <div className="mainContainerLine">
          <hr />
        </div>
        <div className="mainDiv1">
          <div className="mainDiv1Heading">Need something done?</div>
          {/* <div className="mainDiv1Flex"> */}
          <div className="div1Articles">
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.1.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Post a Job</div>
              </div>
              <div className="div1ArticleText">
                It’s free and easy to post a job. Simply fill in a title,
                description and budget and competitive bids come within minutes.
              </div>
            </div>
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.2.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Choose work</div>
              </div>
              <div className="div1ArticleText">
                No job is too big or too small. We've got freelancers for jobs
                of any size or budget, across 1800+ skills. No job is too
                complex. We can get it done!
              </div>
            </div>
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.7.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Pay Safely</div>
              </div>
              <div className="div1ArticleText">
                Only pay for work when it has been completed and you're 100%
                satisfied with the quality using our milestone payment system.
              </div>
            </div>
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.4.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">We are here to help</div>
              </div>
              <div className="div1ArticleText">
                Our talented team of recruiters can help you find the best
                freelancer for the job and our technical co-pilots can even
                manage the project for you.
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="mainContainerLine">
          <hr />
        </div>
        <div className="mainDiv1">
          <div className="mainDiv1Heading">What's great about it?</div>
          {/* <div className="mainDiv1Flex"> */}
          <div className="div1Articles">
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.2.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Browse portfolios</div>
              </div>
              <div className="div1ArticleText">
                Find professionals you can trust by browsing their samples of
                previous work and reading their profile reviews.
              </div>
            </div>
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.3.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Fast bids</div>
              </div>
              <div className="div1ArticleText">
                No job is too big or too small. We've got freelancers for jobs
                of any size or budget, across 1800+ skills. No job is too
                complex. We can get it done!
              </div>
            </div>
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.5.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Quality Work</div>
              </div>
              <div className="div1ArticleText">
                Freelancer.com has by far the largest pool of quality
                freelancers globally- over 50 million to choose from.
              </div>
            </div>
            <div className="div1Article">
              <div className="div1ArticleHeadWrapper">
                <img
                  src="assests/mainArticleImg/1.6.jpeg"
                  alt=""
                  className="div1ArticleImg"
                />
                <div className="div1ArticleHead">Track Progress</div>
              </div>
              <div className="div1ArticleText">
                Keep up-to-date and on-the-go with our time tracker, and mobile
                app. Always know what freelancers are up to.
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
