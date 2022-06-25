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

  <img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656174108/zenti/zenti-competitors-20220625-113818_twshgs.png" alt="zenti competitor screenshots" class="aspect-[10/3]" />
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
