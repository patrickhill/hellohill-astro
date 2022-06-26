---
layout: "../../layouts/casestudy.astro"
setup: |
  import Button from '../../components/Button'
  import { roundedClassNames } from "../../components/roundedClassNames"
  import ContentCard from "../../components/ContentCard"
  import ImageBlock from "../../components/ImageBlock"
title: "Zenti"
desc: "A simple meditation timer"
heroImageUrl: "https://res.cloudinary.com/dl4btvfxp/image/upload/w_620,dpr_2/v1648307444/zenti/zenti_20220326-110728_gmtkj9.jpg"
heroAlt: "Zenti Timer Screenshot"
tags:
  - design
  - dev
  - branding
publishDate: "2022-04-03"
---

<div class="mx-auto w-full max-w-[1182px]">
  <ImageBlock
    src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172934/zenti/zenti-hero-20220625-115844_anxfhr.jpg"
    alt="zenti app hero image"
    className="aspect-4/3"
  />
</div>

<ContentCard id="intro">
  <h2 class="mt-0">Intro</h2>
  <hr class="border-gray-300" />
  <h3>Project</h3>
  <p>
    Zenti Meditation Timer. Available in the <a class="text-sky-500 underline hover:text-sky-600" href="https://apps.apple.com/us/app/zenti-meditation-timer/id1587887322">AppStore</a>.
  </p>

  <h3>The Challenge</h3>
  <p>
    Create a meditation app that prioritizes ease-of-use while providing options for detailed customization.
  </p>

  <h3>Details</h3>
  <div
    class="flex flex-col gap-8 rounded-b-lg bg-gray-100 p-32 sm:grid sm:gap-16 sm:rounded-b-2xl"
    style={{ gridTemplateColumns: "auto auto" }}
  >
    <h4>Resources:</h4>
    <div class="space-y-8">
      <p>1 person team</p>
    </div>
    <h4>Timeline:</h4>
    <p>3-4 months</p>
    <h4>My Role:</h4>
    <p>Product Design, UI Design, Engineering</p>
  </div>
</ContentCard>

<div class=`mx-auto w-full max-w-[1182px] ${roundedClassNames} bg-gray-700 bg-opacity-70 border border-gray-600 text-center pt-64 lg:pt-128 px-32`>
  <h2 class="text-3xl font-bold text-white">Wait, but why?</h2>
  <p class="text-gray-500 font-light text-lg pt-8 pb-32 lg:pb-64">Aren’t there enough meditation apps out&nbsp;there?</p>

  <img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656174108/zenti/zenti-competitors-20220625-113818_twshgs.png" alt="zenti competitor screenshots" class="aspect-[10/3]" loading="lazy" />
</div>

<ContentCard>
<h3>1. An educational exercise</h3>
<p>I’ve been trying to learn iOS development on and off for years. It never really stuck. When SwiftUI came along, everything changed. It just made sense to me. I had fun with it for a while following along with Recreate UI. Then, I decided to get more serious about and commited to doing 100 Days of SwiftUI.
</p>

<p>
When I finished those courses, I couldn’t wait to build my own app. This was the middle of the pandemic so I’d also been learning more about meditation as a way to relax and cope with everything going on. I found myself constantly frustrated by the apps on the market and decided that would be a great target for my first app. I could start the app off simple and let it grow as I learned more.</p>

<h3>2. Finding a niche in a crowded market</h3>
<p>There are tons of apps in the meditation space and while this was a learning exercise for me, I figured I should at least try and make something that others would find useful. Otherwise, what’s the point? So, I started thinking about what frustrates me in the other apps and how do I to stand out? I found my answers very quickly.</p>
</ContentCard>

<p class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-thin leading-tight bg-gradient-brand text-clip max-w-screen-lg mx-auto text-center">
  Get out of my way, I just<br class="hidden sm:block"/> want to&nbsp;meditate.
</p>

<ContentCard>
<p>
My biggest problem with the existing mediation apps was the focus on beginners. They simplified the timer so much that you couldn’t dial in specific settings. At the same time they flooded their apps with distractions like content feeds, tutorials, social media, and other features that I cared nothing about.
</p>
<h3>What was available:</h3>
<ul class="!mt-8 !ml-24 text-pink-700">
<li>Forced Account Creation</li>
<li>Data Tracking</li>
<li>Subscriptions</li>
<li>Learn, Discover</li>
<li>Content Feeds</li>
<li>Social Media</li>
<li>Events, Celebrities</li>
<li>Hard to use</li>
</ul>

<h3>What I wanted:</h3>
<ul class="!mt-8 !ml-24 text-emerald-700">
<li>A Timer</li>
<li>Intervals</li>
<li>HealthKit Support</li>
<li>Stats</li>
<li>Customization</li>
<li>Easy to Use</li>
</ul>

<p>In short, If you wanted to do a simple, unguided meditation, it was a pain. I was going to try and fix that.</p>
</ContentCard>

<ContentCard>
<h2>Design</h2>
<p>
I went through many design iterations but they all shared one core idea. Make it as easy as possible to start a meditation when you open the app. That meant surfacing details like the duration and interval settings on the main screen.
</p>
<p>
To keep things user friendly I tried to find a balance between simplified options that would make starting a timer quick while also providing advanced settings for those that needed them.
</p>
</ContentCard>

<div class="mx-auto w-full max-w-[1182px]">
<ImageBlock src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172146/zenti/zenti-sketches-20220625-113818_d7zygw.jpg" alt="zenti design sketches"  className="aspect-[2012/1147] p-32" />
</div>

<div class="mx-auto w-full max-w-[1182px]">
<ImageBlock  src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172140/zenti/zenti-mocks-20220625-113818_s1uoyx.jpg" alt="zenti design mockups"  className="aspect-[2128/907] p-32" />
</div>

<div class="mx-auto w-full max-w-[1182px]">
<ImageBlock  src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172933/zenti/zenti-final-crop-20220625-120141_j4hzco.jpg" alt="zenti final design"  className="aspect-4/3" />
</div>

<ContentCard>
<h2>The “Final” Product</h2>
<p class="!mt-16">
Zenti ended up in a pretty good spot. I was able to incorporate all the main features I wanted and I’m pretty happy with the results.
</p>

<h3>Highlights:</h3>
<ul class="!mt-8">
<li>Large play/pause button</li>
<li>Swipeable options to save space while allowing easy access to a full range of choices</li>
<li>Bottom tap bar to keep app navigation within reach</li>
<li>Simplified stats screen with key highlights</li>
<li>Light and dark modes</li>
<li>Themes</li>
</ul>
</ContentCard>

<div class="!bg-transparent">
<img class="max-w-[1182px] w-full mx-auto aspect-[2495/1527] lazy-load !bg-transparent" loading="lazy" data-src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656243278/zenti/zenti-screenshots-final-1-20220625-113818_lefgef.png" />
<img class="max-w-[1182px] w-full mx-auto aspect-[2495/1527] lazy-load !bg-transparent" loading="lazy" data-src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656243277/zenti/zenti-screenshots-final-2-20220625-113818_wme8lo.png" />
<img class="max-w-[1182px] w-full mx-auto aspect-[2495/1527] lazy-load !bg-transparent" loading="lazy" data-src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656243277/zenti/zenti-screenshots-final-2-20220625-113818-1_ti6ixj.png" />
</div>

<ContentCard>
<h2>Challenges</h2>
<p class="!mt-8">
Of course learning a new programming language is going to be hard but that was expected so it didn’t stand out as a big deal. It’s always the unexpected challenges that stick with me. 
</p>

<h3>Dark Mode</h3>
<p class="!mt-8">
One of those was dark mode. I’ve been designing UIs for years but haven’t had to tackle dark mode before. Even for an app a small as this one, it was tough because I had to combine it with themes. For every color theme I wanted to provide, I needed to think through how that would work in light and dark mode on every screen. 
</p>
<p>
Here are a few of the ways I tackled this problem:
</p>
<ul class="!mt-8">
<li>I simplified the app design by moving from a full background color to using color as accent. This reduced the color complexity.</li>
<li>I relied on Apple’s system colors instead of cutsom ones becaus they provide color variants for light and dark modes plus options to increase legibility.</li>
</ul>
<p>
I have a new found respect for the work that goes into creating dark mode especially for bigger apps.
</p>
</ContentCard>

<p class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-thin leading-tight bg-gradient-brand text-clip max-w-screen-lg mx-auto text-center">
  How’s it going? So,&nbsp;so.
</p>

<div class="grid sm:grid-cols-2 gap-32">
<div class=`${roundedClassNames} webkit-corner-fix object-fill p-24 bg-white`>
<h3 class="mb-8 font-sans text-base font-bold uppercase tracking-wide text-gray-600" >Sales</h3>
<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172138/zenti/zenti-chart-sales-20220625-113818_jhjtsm.jpg" alt="sales chart" loading="lazy" />
</div>
<div class=`${roundedClassNames} webkit-corner-fix object-fill p-24 bg-white`>
<h3 class="mb-8 font-sans text-base font-bold uppercase tracking-wide text-gray-600" >Sessions</h3>
<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172138/zenti/zenti-chart-sessions-20220625-113818_ukjnr8.jpg" alt="sessions chart" loading="lazy" />
</div>
<div class=`${roundedClassNames} webkit-corner-fix object-fill p-24 bg-white`>
<h3 class="mb-8 font-sans text-base font-bold uppercase tracking-wide text-gray-600" >Updates</h3>
<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172138/zenti/zenti-chart-updates-20220625-113818_ily5uk.jpg" alt="updates chart" loading="lazy" />
</div>
<div class=`${roundedClassNames} webkit-corner-fix object-fill p-24 bg-white`>
<h3 class="mb-8 font-sans text-base font-bold uppercase tracking-wide text-gray-600" >Active Devices</h3>
<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172138/zenti/zenti-chart-active_devices-20220625-113818_tmzovm.jpg" alt="devices chart" loading="lazy" />
</div>
<div class=`${roundedClassNames} webkit-corner-fix object-fill p-24 bg-white`>
<h3 class="mb-8 font-sans text-base font-bold uppercase tracking-wide text-gray-600" >Downloads</h3>
<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172138/zenti/zenti-chart-downloads-20220625-113818_oufe03.jpg" alt="downloads chart" loading="lazy" />
</div>
<div class=`${roundedClassNames} webkit-corner-fix object-fill p-24 bg-white`>
<h3 class="mb-8 font-sans text-base font-bold uppercase tracking-wide text-gray-600" >Regions</h3>
<img class="max-w-[220px] w-full" src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656244706/zenti/zenti-chart-regions-20220625-113818_jr5pge.jpg" alt="regions chart" loading="lazy" />
</div>
</div>

<ContentCard>
<h2>Results</h2>
<p>
Overall, I’m happy that people are using it. Some enjoy it enough to give me money.
</p>
<p>
If this wasn’t the case, I’d still make the app because I find it useful and building things is an incredible way to learn.
</p>

<h2>Insights</h2>
<p>
There are some insights I’ve gained from that data though. 
</p>
<p>
The first is that I didn’t expect the majority of users to be from outside the United States. Don’t know why I assumed that but now I’m making strides where I can to accomodate other languages. An example is the interval labels. Instead of using words like half, third, quarter, I switched to fractions like 1/2, 1/3, 1/4. The ultamite goal would be to have multilingual translations.
</p>
<p>
The second is that sales always coincide with updates. So I need to coordinate features and requests for upgrades.
</p>
</ContentCard>

<div class="flex justify-center">
<a class="hover:opacity-70 transition" href="https://apps.apple.com/us/app/zenti-meditation-timer/id1587887322">
<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172138/zenti/zenti-appstore-badge-20220625-113818_c0xfii.svg">
</a>
</div>
