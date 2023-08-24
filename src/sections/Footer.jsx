import React from "react";

function Footer() {
  return (
    <div className="pt-[2.5rem] h-4/5 bg-black px-[5rem] py-[1rem] space-y-16">
      <p className="text-white font-light">
        Questions? Call{" "}
        <a href="tel:000-800-919-1694" className="underline">
          000-800-919-1694
        </a>
      </p>

      <div className="menudiv grid grid-cols-3  text-white">
        <a href="#" className="underline font-light text-white/60">
          FAQ
        </a>
        <a href="#" className="underline font-light text-white/60">
          Help Centre
        </a>
        <a href="#" className="underline font-light text-white/60">
          Account
        </a>
        <a href="#" className="underline font-light text-white/60">
          Media Center
        </a>
        <a href="#" className="underline font-light text-white/60">
          Investor Relations
        </a>
        <a href="#" className="underline font-light text-white/60">
          Jobs
        </a>
        <a href="#" className="underline font-light text-white/60">
          Ways to Watch
        </a>
        <a href="#" className="underline font-light text-white/60">
          Terms of use
        </a>
        <a href="#" className="underline font-light text-white/60">
          Privacy
        </a>
        <a href="#" className="underline font-light text-white/60">
          Cookie Preferences
        </a>
        <a href="#" className="underline font-light text-white/60">
          Corporate Information
        </a>
        <a href="#" className="underline font-light text-white/60">
          Contact Us
        </a>
        <a href="#" className="underline font-light text-white/60">
          Speed Test
        </a>
        <a href="#" className="underline font-light text-white/60">
          Legal Notices
        </a>
        <a href="#" className="underline font-light text-white/60">
          Only on Netflix
        </a>
      </div>
      <select name="" id="">
        <option value="">English</option>
        <option value="">Hindi</option>
      </select>
      <p className="text-gray-500">Netflix India</p>
    </div>
  );
}

export default Footer;
