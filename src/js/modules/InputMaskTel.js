import intlTelInput from '../libs/intl-tel-input';
import Inputmask from 'inputmask/dist/inputmask.es6.js';

export function InitializePhoneInputs(selector) {
  var phoneInputs = document.querySelectorAll(selector);

  phoneInputs.forEach(input => {
    var telInput = intlTelInput(input, {
      autoHideDialCode: false,
      autoPlaceholder: 'aggressive',
      initialCountry: 'auto',
      separateDialCode: true,
      customPlaceholder: function(countryPlaceholder, countryData) {
        return countryPlaceholder.replace(/[0-9]/g, '_');
      },
      geoIpLookup: function(callback) {
        fetch('https://ipinfo.io/json')
          .then(response => response.json())
          .then(data => {
            const detectedCountryCode = (data && data.country) ? data.country : "";
            callback(detectedCountryCode);
          })
          .catch(() => callback(''));
      },
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/23.8.0/js/utils.js'
    });

    function refreshMask() {
      var inputPlaceholder = input.getAttribute('placeholder');
      if (inputPlaceholder) {
        var maskPattern = inputPlaceholder.replace(/_/g, '9');
        Inputmask({
          mask: maskPattern,
          placeholder: '_',
          clearMaskOnLostFocus: true
        }).mask(input);
      }
    }

    input.addEventListener('countrychange', function() {
      input.value = '';
      refreshMask();
    });

    input.addEventListener('focus', refreshMask);
    input.addEventListener('click', refreshMask);
  });
}