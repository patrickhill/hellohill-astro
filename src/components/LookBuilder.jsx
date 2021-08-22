import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BigHeading from "./BigHeading";

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
      <BigHeading>The Look Builder</BigHeading>
    </div>

    <div className="container bg-gray-800 sm:sticky top-0 z-50 mb-64 sm:mb-128 flex flex-wrap gap-x-16 gap-y-8 mt-16">
      <a className="inline-block text-gray-500 hover:text-white" href="#intro">
        Intro
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#exploration"
      >
        Exploration
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#process"
      >
        Design
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#prototyping"
      >
        Prototyping
      </a>
      <a
        className="inline-block text-gray-500 hover:text-white"
        href="#conclusion"
      >
        Conclusion
      </a>
    </div>

    <div className="space-y-64 sm:space-y-128 px-24 overflow-hidden">
      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        <h2 className="mt-0" id="intro">
          Intro
        </h2>
        <hr className="border-gray-300" />
        ### The Challenge Create a way for customers to visualize thousands of
        suit, tux, tie and accessory combinations for Generation Tux, an online
        tuxedo rental company. Gentux has no brick and mortar stores so this UI
        will be the primary way customers interact with the product. The company
        also runs multiple brands so the work needs to be reusable. ### Details
        <div
          className="bg-gray-100 p-32 flex flex-col sm:grid gap-8 sm:gap-16 rounded-b-lg sm:rounded-b-2xl"
          style={{ gridTemplateColumns: "auto auto" }}
        >
          <h4>Resources:</h4>
          <p>
            3-6 person ui team of designers and engineers. Limited budget with
            no outside resources for assets like photographers.
          </p>
          <h4>Timeline:</h4>
          <p>3-4 months</p>
          <h4>My Role:</h4>
          <p>UI Design, 3D Design, UI Dev, Design Leadership</p>
        </div>
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        <h2 id="exploration">Exploration</h2>
        <hr className="border-gray-300" />
        ### Problems to Solve The team knew from the get go that the hardest
        part would be the image creation process. It seemed like an
        insurmountable task. Gentux has 12 suits, 8 tuxes, 438 ties, 53 vests,
        32 cummerbunds, 12 shirts, and 250+ other accessories. How do you get a
        photo of every conceivable combination for a customer to see? On top of
        that, how do you build a user interface that makes managing such a
        massive scale of items easy and intuitive? We ran through a barrage of
        tests to try and find something that would work.
      </div>

      <div>
        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/layer-stack-illustration.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/photo-setup-illustration.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/IMG_2004.jpg"
            />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridColumn: 1 }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/IMG_1818.jpg"
            />
          </div>
          <div style={{ gridColumn: 1 }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/IMG_1820.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "3/4" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/IMG_1746.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "2/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/IMG_1838.jpg"
            />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/photoshop-retouch.gif"
            />
          </div>
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/suit-photo-back.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/tie-stack.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ties.jpg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        We developed a way to layer images so that items could be photographed
        separately and compiled together. We also figured out you could get
        multiple items from one photograph by color correcting one color to look
        like others, of course that only works if the fabric pattern matched.
        These advances helped but we were still going to need weeks of
        photography and photo editing. We would also be locked into a specific
        layout. If we ever wanted to change it, we'd be stuck re-shooting
        everything. This was a small in-house team with other responsibilities,
        that wasn't going to work.
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        ### How do other companies do this? We started digging and came across
        the answer pretty quickly: 3D renderings. A great example is Nike's shoe
        builder. I had some experience with 3D but nothing that I thought would
        pass as photo realistic for a clothing company. I also still had the
        issue of creating hundreds of individual assets. There were some
        benefits to 3D rendering though. We could change camera angles and
        lighting, we could improving the quality over time, and base 3d models
        could be reused for different material types. We decided to give it a
        shot.
      </div>

      <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
        <div style={{ gridRow: "1/3" }}>
          <img
            className="lazy-load rounded-xl sm:rounded-3xl"
            src="/assets/images/loading.png"
            data-src="/assets/images/suit-wireframe.jpg"
          />
        </div>
        <div style={{ gridRow: "1/3" }}>
          <img
            className="lazy-load rounded-xl sm:rounded-3xl"
            src="/assets/images/loading.png"
            data-src="/assets/images/3d-suit-clay.jpg"
          />
        </div>
        <div style={{ gridRow: "1/3" }}>
          <div className="bg-white rounded-xl sm:rounded-3xl overflow-hidden h-full">
            <video
              className="lazy-load rounded-xl sm:rounded-3xl mx-auto"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              data-src="/assets/images/suit-turntable.mp4#t=0.1"
            ></video>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        ### 3D for the Win! I made some exciting discoveries. 1. I actually
        created a 3D rendering that could fool the average person. They weren't
        amazing but I could improve them as I got better! 2. We could automate
        the heck out of the rendering process. My 3D application of choice is{" "}
        <a href="https://www.blender.org/">Blender</a>. Through this exploration
        process, I learned about some of its powerful automation capabilities.
        We could use Python and the command line to render assets. And because
        Blender is open source, I could render on any computer or multiple
        computers without having to worry about licenses. That meant we could
        easily scale up the pipeline if we needed to re-render a lot of items.
      </div>

      <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
        <div style={{ gridRow: "1/3", gridColumn: "1/3" }}>
          <img
            className="lazy-load rounded-xl sm:rounded-3xl"
            src="/assets/images/loading.png"
            data-src="/assets/images/200329-144241.jpg"
          />
        </div>
        <div style={{ gridRow: "1/3" }}>
          <img
            className="lazy-load rounded-xl sm:rounded-3xl"
            src="/assets/images/loading.png"
            data-src="/assets/images/200329-144245.jpg"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        #### The Rendering Pipeline I ended up creating an entire 3D rendering
        tool set. We had a master file for all the 3D fabric materials, files
        for each of the 3D models, and a master scene file that contained the
        studio setup. We got to the point where we could open terminal, type a
        line of code with the object name (e.g. bow tie) and material (e.g. pin
        dot fabric) and the computer would start spitting out images in the
        background!
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        <h2 id="process">UI Design Process</h2>
        <hr className="border-gray-300" />
        The design process for this project was a ton of fun. We experimented a
        lot, shot for the moon, then backed off a little for something a little
        more reserved but functionally solid and user friendly. We worked in an
        agile environment so the same principles of morning standup, retros,
        etc. applied here. The details of the process consisted of a looping
        iteration of the following tasks: - Team Member Discussion / Feedback -
        Head Down Sketching and Designing - Static Prototyping (non-code based
        prototypes aimed at working out high level user flow or micro
        interactions) - Mini user testing with friends, co-workers, family
        members
      </div>

      <div>
        <div className="w-full max-w-[1182px] mx-auto">
          <img
            className="lazy-load rounded-xl sm:rounded-3xl mx-auto"
            src="/assets/images/loading.png"
            data-src="/assets/images/look-builder-sketch-1.jpg"
          />
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-2.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-3.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-4.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-5.jpg"
            />
          </div>
        </div>

        <div className="case-study-grid-images w-full max-w-[1182px] mx-auto">
          <div style={{ gridColumn: 1 }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-6.jpg"
            />
          </div>
          <div style={{ gridColumn: 1 }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-7.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "3/4" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-8.jpg"
            />
          </div>
          <div style={{ gridRow: "1/3", gridColumn: "2/3" }}>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/look-builder-sketch-9.jpg"
            />
          </div>
        </div>

        <div
          className="case-study-grid-images w-full max-w-[1182px] mx-auto"
          style={{ gridRemplateRows: "1fr" }}
        >
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-1.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-2.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-3.jpg"
            />
          </div>
        </div>
        <div
          className="case-study-grid-images w-full max-w-[1182px] mx-auto"
          style={{ gridTemplateRows: "1fr" }}
        >
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-4.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-5.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-6.jpg"
            />
          </div>
        </div>
        <div
          className="case-study-grid-images w-full max-w-[1182px] mx-auto"
          style={{ gridTemplateRows: "1fr" }}
        >
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-7.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-8.jpg"
            />
          </div>
          <div>
            <img
              className="lazy-load rounded-xl sm:rounded-3xl"
              src="/assets/images/loading.png"
              data-src="/assets/images/ui-iterations-9.jpg"
            />
          </div>
        </div>
      </div>

      <div className="video-callout w-full max-w-[1182px] mx-auto">
        <video
          className="lazy-load rounded-xl sm:rounded-3xl mx-auto"
          loop
          muted
          controls
          preload="metadata"
          data-src="/assets/images/lookbuilder-hero.mp4#t=0.1"
          alt={{ title }}
        ></video>
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        <h2 id="prototyping">Prototyping</h2>
        <hr className="border-gray-300" />
        ### Pedal to the Metal! Once we felt like things were starting to mesh
        and we had stakeholder sign off on the feature set, we began building a
        fully functional, data backed prototype with React. At this point,
        there's still a ton of design refinement happening. Many details of a
        design don't really make sense until you get them working in code.
      </div>

      <div className="video-callout w-full max-w-[400px] mx-auto">
        <video
          className="lazy-load rounded-xl sm:rounded-3xl mx-auto "
          data-src="/assets/images/200402-194656.mp4#t=0.1"
          muted
          controls
          loop
          playsInline
          preload="metadata"
        ></video>
      </div>

      <div className="video-callout w-full max-w-[1182px] mx-auto">
        <video
          className="lazy-load rounded-xl sm:rounded-3xl mx-auto"
          width="1200"
          data-src="/assets/images/200330-073437_com.mp4#t=0.1"
          muted
          controls
          loop
          playsInline
          preload="metadata"
        ></video>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <a
          className="btn btn-primary w-full"
          target="_blank"
          href="https://proto-moria.netlify.com/"
        >
          View the Live Prototype
        </a>
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        ### User Testing For the final stage, we conducted formal user testing
        with an online service that let us to supply a link to the prototype,
        specify demographics and devices, then initialize a test. No matter how
        hard you try to think from the user's perspective, you always get things
        wrong. It continues to amaze me how much you learn from watching people
        use an app or website. #### Here were a few key findings from the tests:
        1. Getting back to the main item list screen was troublesome. 2. Users
        were having issues moving between product categories from within the
        gallery. 3. Some users accidentally canceled their changes by hitting
        the x button. 4. Editing looks was a little tough for a few users.
      </div>

      <div className="video-callout w-full max-w-[1182px] mx-auto">
        <img
          className="lazy-load rounded-xl sm:rounded-3xl mx-auto"
          src="/assets/images/loading.png"
          data-src="/assets/images/200330-172519.jpg"
        />
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        #### We addressed the issues with the following changes: 1. Added back
        button 2. Made the product title a drop down so you can switch between
        categories 3. Reduced the x button size and made it a back button. We
        also change the behavior to not cancel changes. 4. Added an edit icon in
        place of the price. This also aligned new and edit function buttons.
      </div>

      <div className="bg-white rounded-xl sm:rounded-3xl shadow-2xl p-32 sm:px-64 sm:pt-64 sm:pb-72 space-y-32 w-full max-w-3xl mx-auto">
        <h2 id="conclusion">Conclusion</h2>
        <hr className="border-gray-300" />
        The final code base was handed off to the engineering team to integrate
        into the Gentux website. In the end, the UI team accomplished a
        staggering amount of great work over a relatively small amount of time.
        ### The Final Features: - Friendly, responsive UI allowing users to
        build out an entire formal wear outfit. - 3D rendering pipeline that can
        automate the creation of thousands of assets. - Modular NPM package that
        can be easily imported to multiple projects.
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <a
          className="btn btn-primary w-full"
          target="_blank"
          href="https://www.generationtux.com/app/customize?bundle_ids=112&sidecar=list&product_skus=330914WHT%2C911246PLM%2C430464BLW%2C610158WHT%2C030088SLV%2CB10903BWN%2CA10186BRA%2C881007BLB"
        >
          View the Final Product
        </a>
      </div>
    </div>

    <Footer />
  </>
);

export default LookBuilder;
