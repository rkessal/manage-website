import React from "react";
import logoWhite from "../img/logo-white.svg";
import facebookIcon from "../img/icon-facebook.svg";
import twitterIcon from "../img/icon-twitter.svg";
import instagramIcon from "../img/icon-instagram.svg";
import youtubeIcon from "../img/icon-youtube.svg";
import pinterestIcon from "../img/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-4 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:items-start">
          <div className="mx-auto py-6 text-center text-white lg:hidden">
            Copyright &copy; 2022, All rights reserved
          </div>
          <div>
            <img src={logoWhite} className="h-8" alt="white logo" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={facebookIcon} className="h-8" alt="facebook icon" />
            </a>
            <a href="#">
              <img src={instagramIcon} className="h-8" alt="instagram icon" />
            </a>
            <a href="#">
              <img src={youtubeIcon} className="h-8" alt="youtube icon" />
            </a>
            <a href="#">
              <img src={twitterIcon} className="h-8" alt="twitter icon" />
            </a>
            <a href="#">
              <img src={pinterestIcon} className="h-8" alt="pinterest icon" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brighRed">
              Home
            </a>
            <a href="#" className="hover:text-brighRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brighRed">
              Products
            </a>
            <a href="#" className="hover:text-brighRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brighRed">
              Carreers
            </a>
            <a href="#" className="hover:text-brighRed">
              Community
            </a>
            <a href="#" className="hover:text-brighRed">
              Privacy policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white lg:block">
            Copyright &copy; 2022, All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
