import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BigHeading from "./BigHeading";
import Button from "./Button";
import ContentCard from "./ContentCard";
import { roundedClassNames } from "./roundedClassNames";

const title = "The Look Builder";
const desc = "Visualizing custom suit combinations";
const heroImageUrl = "/assets/images/lookbuilder-hero.jpg";
const heroVideoUrl = "/assets/images/200504-093605.mp4";
const tags = "caseStudy";
const layout = "caseStudyLayout.html";
const date = "2020-03-28";

const LookBuilder = () => (
  <>
    <Header />

    <div className="container">
      <BigHeading as="h1">The Look Builder</BigHeading>
    </div>

    <div className="container bg-gray-800 sm:sticky top-0 z-50 mb-64 sm:mb-128 flex flex-wrap gap-x-16 gap-y-8 mt-16">
      <a className="inline-block text-gray-500 hover:text-white" href="#intro">
        Intro
      </a>
      <a className="inline-block text-gray-500 hover:text-white" href="#exploration">
        Exploration
      </a>
      <a className="inline-block text-gray-500 hover:text-white" href="#process">
        Design
      </a>
      <a className="inline-block text-gray-500 hover:text-white" href="#prototyping">
        Prototyping
      </a>
      <a className="inline-block text-gray-500 hover:text-white" href="#conclusion">
        Conclusion
      </a>
    </div>

    <div className="space-y-64 sm:space-y-128 px-24 overflow-hidden">
      <ContentCard id="intro">
        <h2 className="mt-0">Intro</h2>
        <hr className="border-gray-300" />

        <h3>The Challenge</h3>
        <p>Create a way for customers to visualize thousands of suit, tux, tie and accessory combinations for Generation Tux, an online tuxedo rental company. Gentux has no brick and mortar stores so this UI will be the primary way customers interact with the product. The company also runs multiple brands so the work needs to be reusable.</p>
        <h3>Details</h3>
        <div className="bg-gray-100 p-32 flex flex-col sm:grid gap-8 sm:gap-16 rounded-b-lg sm:rounded-b-2xl" style={{ gridTemplateColumns: "auto auto" }}>
          <h4>Resources:</h4>
          <p>3-6 person ui team of designers and engineers. Limited budget with no outside resources for assets like photographers.</p>

          <h4>Timeline:</h4>
          <p>3-4 months</p>

          <h4>My Role:</h4>
          <p>UI Design, 3D Design, UI Dev, Design Leadership</p>
        </div>
      </ContentCard>

      <ContentCard id="exploration">
        <h2>Exploration</h2>
        <hr className="border-gray-300" />

        <h3>Problems to Solve</h3>
        <p>The team knew from the get go that the hardest part would be the image creation process. It seemed like an insurmountable task. Gentux has 12 suits, 8 tuxes, 438 ties, 53 vests, 32 cummerbunds, 12 shirts, and 250+ other accessories. How do you get a photo of every conceivable combination for a customer to see?</p>
        <p> On top of that, how do you build a user interface that makes managing such a massive scale of items easy and intuitive?</p>
        <p>We ran through a barrage of tests to try and find something that would work.</p>
      </ContentCard>

      <div>
        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/layer-stack-illustration.jpg" />
          </div>
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/photo-setup-illustration.jpg" />
          </div>
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/IMG_2004.jpg" />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridColumn: 1 }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/IMG_1818.jpg" />
          </div>
          <div style={{ gridColumn: 1 }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/IMG_1820.jpg" />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "3/4" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/IMG_1746.jpg" />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "2/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/IMG_1838.jpg" />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/photoshop-retouch.gif" />
          </div>
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/suit-photo-back.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/tie-stack.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ties.jpg" />
          </div>
        </div>
      </div>

      <ContentCard>
        <p>We developed a way to layer images so that items could be photographed separately and compiled together. We also figured out you could get multiple items from one photograph by color correcting one color to look like others, of course that only works if the fabric pattern matched.</p>
        <p>These advances helped but we were still going to need weeks of photography and photo editing. We would also be locked into a specific layout. If we ever wanted to change it, we'd be stuck re-shooting everything. This was a small in-house team with other responsibilities, that wasn't going to work.</p>
      </ContentCard>

      <ContentCard>
        <h3>How do other companies do this?</h3>
        <p>We started digging and came across the answer pretty quickly: 3D renderings. A great example is Nike's shoe builder. I had some experience with 3D but nothing that I thought would pass as photo realistic for a clothing company. I also still had the issue of creating hundreds of individual assets.</p>
        <p>There were some benefits to 3D rendering though. We could change camera angles and lighting, we could improving the quality over time, and base 3d models could be reused for different material types. We decided to give it a shot.</p>
      </ContentCard>

      <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
        <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
          <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/suit-wireframe.jpg" />
        </div>
        <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
          <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/3d-suit-clay.jpg" />
        </div>
        <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
          <div className="bg-white  overflow-hidden h-full">
            <video poster="/assets/images/loading.png" className="lazy-load ${roundedClassNames} mx-auto" autoPlay loop muted playsInline preload="metadata" data-src="/assets/images/suit-turntable.mp4#t=0.1"></video>
          </div>
        </div>
      </div>

      <ContentCard>
        <h3>3D for the Win!</h3>
        <p>I made some exciting discoveries.</p>
        <ol>
          <li>I actually created a 3D rendering that could fool the average person. They weren't amazing but I could improve them as I got better! </li>
          <li>We could automate the heck out of the rendering process. </li>
        </ol>
        <p>
          My 3D application of choice is <a href="https://www.blender.org/">Blender</a>. Through this exploration process, I learned about some of its powerful automation capabilities. We could use Python and the command line to render assets. And because Blender is open source, I could render on any computer or multiple computers without having to worry about licenses. That meant we could easily scale up the pipeline if we needed to re-render a lot of items.
        </p>
      </ContentCard>

      <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
        <div style={{ gridRow: "1/3", gridColumn: "1/3" }} className={`${roundedClassNames}`}>
          <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/200329-144241.jpg" />
        </div>
        <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
          <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/200329-144245.jpg" />
        </div>
      </div>

      <ContentCard>
        <h4> The Rendering Pipeline</h4>
        <p>I ended up creating an entire 3D rendering tool set. We had a master file for all the 3D fabric materials, files for each of the 3D models, and a master scene file that contained the studio setup. We got to the point where we could open terminal, type a line of code with the object name (e.g. bow tie) and material (e.g. pin dot fabric) and the computer would start spitting out images in the background!</p>
      </ContentCard>

      <ContentCard id="process">
        <h2>UI Design Process</h2>
        <hr className="border-gray-300" />
        <p>The design process for this project was a ton of fun. We experimented a lot, shot for the moon, then backed off a little for something a little more reserved but functionally solid and user friendly.</p>
        <p>We worked in an agile environment so the same principles of morning standup, retros, etc. applied here. The details of the process consisted of a looping iteration of the following tasks:</p>
        <ul>
          <li>Team Member Discussion / Feedback </li>
          <li>Head Down Sketching and Designing </li>
          <li>Static Prototyping (non-code based prototypes aimed at working out high level user flow or micro interactions) </li>
          <li>Mini user testing with friends, co-workers, family members</li>
        </ul>
      </ContentCard>

      <div>
        <div className={`w-full max-w-[1182px] mx-auto ${roundedClassNames}`}>
          <img className="lazy-load mx-auto" src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-1.jpg" />
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-2.jpg" />
          </div>
          <div style={{ gridRow: "1/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-3.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-4.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-5.jpg" />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridColumn: 1 }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-6.jpg" />
          </div>
          <div style={{ gridColumn: 1 }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-7.jpg" />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "3/4" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-8.jpg" />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "2/3" }} className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/look-builder-sketch-9.jpg" />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto" style={{ gridTemplateRows: "1fr" }}>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-1.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-2.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-3.jpg" />
          </div>
        </div>
        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto" style={{ gridTemplateRows: "1fr" }}>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-4.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-5.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-6.jpg" />
          </div>
        </div>
        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto" style={{ gridTemplateRows: "1fr" }}>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-7.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-8.jpg" />
          </div>
          <div className={`${roundedClassNames}`}>
            <img className="lazy-load " src="/assets/images/loading.png" data-src="/assets/images/ui-iterations-9.jpg" />
          </div>
        </div>
      </div>

      <div className={`video-callout w-full max-w-[1182px] mx-auto ${roundedClassNames}`}>
        <video poster="/assets/images/loading.png" className="lazy-load  mx-auto" loop muted controls preload="metadata" data-src="/assets/images/lookbuilder-hero.mp4#t=0.1" alt={{ title }}></video>
      </div>

      <ContentCard id="prototyping">
        <h2>Prototyping</h2>
        <hr className="border-gray-300" />

        <h3>Pedal to the Metal!</h3>
        <p>Once we felt like things were starting to mesh and we had stakeholder sign off on the feature set, we began building a fully functional, data backed prototype with React. At this point, there's still a ton of design refinement happening. Many details of a design don't really make sense until you get them working in code.</p>
      </ContentCard>

      <div className={`video-callout w-full max-w-[400px] mx-auto ${roundedClassNames}`}>
        <video poster="/assets/images/loading.png" className="lazy-load mx-auto " data-src="/assets/images/200402-194656.mp4#t=0.1" muted controls loop playsInline preload="metadata"></video>
      </div>

      <div className={`video-callout w-full max-w-[1182px] mx-auto ${roundedClassNames}`}>
        <video poster="/assets/images/loading.png" className="lazy-load  mx-auto" width="1200" data-src="/assets/images/200330-073437_com.mp4#t=0.1" muted controls loop playsInline preload="metadata"></video>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <Button target="_blank" href="https://proto-moria.netlify.com/">
          View the Live Prototype
        </Button>
      </div>

      <ContentCard>
        <h3>User Testing</h3>
        <p>For the final stage, we conducted formal user testing with an online service that let us to supply a link to the prototype, specify demographics and devices, then initialize a test. No matter how hard you try to think from the user's perspective, you always get things wrong. It continues to amaze me how much you learn from watching people use an app or website.</p>
        <h4> Here were a few key findings from the tests:</h4>
        <ol>
          <li>Getting back to the main item list screen was troublesome. </li>
          <li>Users were having issues moving between product categories from within the gallery.</li>
          <li>Some users accidentally canceled their changes by hitting the x button. </li>
          <li>Editing looks was a little tough for a few users.</li>
        </ol>
      </ContentCard>

      <div className={`video-callout w-full max-w-[1182px] mx-auto ${roundedClassNames} `}>
        <img className="lazy-load mx-auto" src="/assets/images/loading.png" data-src="/assets/images/200330-172519.jpg" />
      </div>

      <ContentCard>
        <h4> We addressed the issues with the following changes:</h4>
        <ol>
          <li>Added back button </li>
          <li>Made the product title a drop down so you can switch between categories </li>
          <li>Reduced the x button size and made it a back button. We also change the behavior to not cancel changes. </li>
          <li>Added an edit icon in place of the price. This also aligned new and edit function buttons.</li>
        </ol>
      </ContentCard>

      <ContentCard id="conclusion">
        <h2>Conclusion</h2>
        <hr className="border-gray-300" />
        <p>The final code base was handed off to the engineering team to integrate into the Gentux website. In the end, the UI team accomplished a staggering amount of great work over a relatively small amount of time.</p>

        <h3>The Final Features:</h3>
        <ul>
          <li>Friendly, responsive UI allowing users to build out an entire formal wear outfit. </li>
          <li>3D rendering pipeline that can automate the creation of thousands of assets. </li>
          <li>Modular NPM package that can be easily imported to multiple projects.</li>
        </ul>
      </ContentCard>

      <div className="w-full max-w-3xl mx-auto">
        <Button target="_blank" href="https://www.generationtux.com/app/customize?bundle_ids=112&sidecar=list&product_skus=330914WHT%2C911246PLM%2C430464BLW%2C610158WHT%2C030088SLV%2CB10903BWN%2CA10186BRA%2C881007BLB">
          View the Final Product
        </Button>
      </div>
    </div>

    <Footer className="mt-128 md:mt-256" />
  </>
);

export default LookBuilder;