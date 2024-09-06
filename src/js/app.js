/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import HeaderChatBtnToggle from './modules/HeaderChatBtnToggle.js';
import PopupManager from './modules/PopupManager.js';
import InitSliders from './modules/SwiperInit.js';
import FaqCard from './modules/FaqCard.js';
import { InitializePhoneInputs } from './modules/InputMaskTel.js';
import ChatTabs from './modules/ChatTabs.js';
import ChatVersionToggle from './modules/ChatVersionToggle.js';
import AddScrollClass from './modules/AddScrollClass.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);
  // header nav mobile toggle
  new HeaderBtnToggle();

  // header chat nav mobile toggle
  new HeaderChatBtnToggle();

  // modal init
  new PopupManager();

  // slider init
  new InitSliders();

  // faq card
  new FaqCard();

  // input mask tel
  InitializePhoneInputs('.js-input-tel');

  // chat tabs
  new ChatTabs(
    '[data-tab-nav-aside]',
    '[data-tab-content-aside]',
    'is-active',
    'is-show',
    'data-tab-nav-aside',
    'data-tab-content-aside'
  );

  new ChatTabs(
    '[data-subtab-nav-aside]',
    '[data-subtab-content-aside]',
    'is-active',
    'is-show',
    'data-subtab-nav-aside',
    'data-subtab-content-aside'
  );

  // chat version choose/toggle
  ChatVersionToggle();

  // add class when scrollbar
  AddScrollClass();
});