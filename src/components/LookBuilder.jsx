import React from "react";
import Header from "./Header";
import BigHeading from "./BigHeading";
import Button from "./Button";
import ContentCard from "./ContentCard";
import { roundedClassNames } from "./roundedClassNames";

const title = "The Look Builder";
const desc = "Visualizing custom suit combinations";
const heroImageUrl = "https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/lookbuilder-hero_zabett.jpg";
const heroVideoUrl = "https://res.cloudinary.com/dl4btvfxp/video/upload/v1644700337/home/200504-093605_dev8kc.mp4";
const tags = "caseStudy";
const layout = "caseStudyLayout.html";
const date = "2020-03-28";

const ImageBlock = ({ ...props }) => (
  <div className={`${roundedClassNames} webkit-corner-fix overflow-hidden ${props.className ? props.className : ""}`}>
    <img className={`lazy-load `} loading="lazy" src={props.src} />
  </div>
);
const VideoBlock = ({ ...props }) => (
  <div className={`${props.className ? props.className : ""}`}>
    <div className={`${roundedClassNames} webkit-corner-fix h-full overflow-hidden bg-white ${props.className ? props.className : ""}`}>
      <video className={`lazy-load mx-auto`} autoPlay loop muted playsInline preload="metadata" loading="lazy" src={props.src}></video>
    </div>
  </div>
);

const LookBuilder = () => (
  <>
    <Header />

    <div className="container">
      <BigHeading as="h1">The Look Builder</BigHeading>
    </div>

    <div className="container top-0 z-50 mb-64 mt-16 flex flex-wrap gap-x-16 gap-y-8 bg-gray-800 sm:sticky sm:mb-128">
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

    <div className="space-y-64 overflow-hidden px-24 sm:space-y-128">
      <ContentCard id="intro">
        <h2 className="mt-0">Intro</h2>
        <hr className="border-gray-300" />

        <h3>The Challenge</h3>
        <p>Create a way for customers to visualize thousands of suit, tux, tie and accessory combinations for Generation Tux, an online tuxedo rental company. Gentux has no brick and mortar stores so this UI will be the primary way customers interact with the product. The company also runs multiple brands so the work needs to be reusable.</p>
        <h3>Details</h3>
        <div className="flex flex-col gap-8 rounded-b-lg bg-gray-100 p-32 sm:grid sm:gap-16 sm:rounded-b-2xl" style={{ gridTemplateColumns: "auto auto" }}>
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
        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/layer-stack-illustration_pshrve.jpg" className="row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/photo-setup-illustration_rcjblx.jpg" className="row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/IMG_2004_jwjlmf.jpg" className="row-start-1 row-end-3" />
        </div>

        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/IMG_1818_ol572f.jpg" className="col-start-1" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/IMG_1820_ykizln.jpg" className="col-start-1" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/IMG_1746_rlcyj0.jpg" className="col-start-3 col-end-4 row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/IMG_1838_aczw3w.jpg" className="col-start-2 col-end-3 row-start-1 row-end-3" />
        </div>

        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/photoshop-retouch_d5rkm1.gif" className="row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/suit-photo-back_cenjtt.jpg" className="row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/tie-stack_jpmbsh.jpg" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/ties_yrixuy.jpg" />
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

      <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
        <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/suit-wireframe_kdqfcb.jpg" className="row-start-1 row-end-3" />
        <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/3d-suit-clay_qj4vr7.jpg" className="row-start-1 row-end-3" />
        <VideoBlock src="https://res.cloudinary.com/dl4btvfxp/video/upload/v1644701695/look%20builder/suit-turntable_r2rbor.mp4#t=0.1" className="row-start-1 row-end-3" />
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

      <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
        <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/200329-144241_ms7mex.jpg" className="col-start-1 col-end-3 row-start-1 row-end-3" />
        <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/200329-144245_qzlxvm.jpg" className="row-start-1 row-end-3" />
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
        <div className={`case-study-grid-images mx-auto w-full max-w-[1182px]`}>
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/look-builder-sketch-1_o4tntx.jpg" className="col-start-1 col-end-4 row-start-1 row-end-3" />
        </div>

        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/look-builder-sketch-2_rwaigd.jpg" className="row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/look-builder-sketch-3_z75pi8.jpg" className="row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/look-builder-sketch-4_bzaqsm.jpg" className="" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/look-builder-sketch-5_wts0ms.jpg" className="" />
        </div>

        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/look-builder-sketch-6_n5uiyf.jpg" className="col-start-1" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/look-builder-sketch-7_okc7rh.jpg" className="col-start-1" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/look-builder-sketch-8_yhf3b7.jpg" className="col-start-3 col-end-4 row-start-1 row-end-3" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701684/look%20builder/look-builder-sketch-9_jez1km.jpg" className="col-start-2 col-end-3 row-start-1 row-end-3" />
        </div>

        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/ui-iterations-1_dv6eam.jpg" className="row-span-2" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/ui-iterations-2_rpfdfv.jpg" className="row-span-2" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701685/look%20builder/ui-iterations-3_iyhioy.jpg" className="row-span-2" />
        </div>
        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701686/look%20builder/ui-iterations-4_sn4zty.jpg" className="row-span-2" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701686/look%20builder/ui-iterations-5_jqbwie.jpg" className="row-span-2" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701686/look%20builder/ui-iterations-6_k2dd9v.jpg" className="row-span-2" />
        </div>
        <div className="case-study-grid-images mx-auto w-full max-w-[1182px]">
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701686/look%20builder/ui-iterations-7_z8lsmf.jpg" className="row-span-2" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701686/look%20builder/ui-iterations-8_bgmrmu.jpg" className="row-span-2" />
          <ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701686/look%20builder/ui-iterations-9_zueviq.jpg" className="row-span-2" />
        </div>
      </div>

      <div className={`mx-auto w-full max-w-[1182px] `}>
        <VideoBlock src="https://res.cloudinary.com/dl4btvfxp/video/upload/v1644701690/look%20builder/lookbuilder-hero_cos46b.mp4#t=0.1" />
      </div>

      <ContentCard id="prototyping">
        <h2>Prototyping</h2>
        <hr className="border-gray-300" />

        <h3>Pedal to the Metal!</h3>
        <p>Once we felt like things were starting to mesh and we had stakeholder sign off on the feature set, we began building a fully functional, data backed prototype with React. At this point, there's still a ton of design refinement happening. Many details of a design don't really make sense until you get them working in code.</p>
      </ContentCard>

      <div className={`video-callout mx-auto w-full max-w-[400px] `}>
        <VideoBlock src="https://res.cloudinary.com/dl4btvfxp/video/upload/v1644701692/look%20builder/200402-194656_voamab.mp4#t=0.1" />
      </div>

      <div className={`video-callout mx-auto w-full max-w-[1182px] `}>
        <VideoBlock src="https://res.cloudinary.com/dl4btvfxp/video/upload/v1644701705/look%20builder/200330-073437_com_qs5bfd.mp4#t=0.1" className="w-[1200px] max-w-full" />
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <Button big target="_blank" href="https://proto-moria.netlify.com/">
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

      <div className={`video-callout mx-auto w-full max-w-[1182px]  `}>
        <ImageBlock className="opacity-100" src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1644701683/look%20builder/200330-172519_wfao1t.jpg" />
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

      <div className="mx-auto w-full max-w-3xl">
        <Button big target="_blank" href="https://www.generationtux.com/app/customize?bundle_ids=112&sidecar=list&product_skus=330914WHT%2C911246PLM%2C430464BLW%2C610158WHT%2C030088SLV%2CB10903BWN%2CA10186BRA%2C881007BLB">
          View the Final Product
        </Button>
      </div>
    </div>
  </>
);

export default LookBuilder;
