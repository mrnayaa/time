function updateSanDiegoTime() {
  
  const now = new Date();

  
  const sanDiegoOffset = -420; // San Diego time is UTC-7
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const sanDiegoTime = new Date(now.getTime() + (userOffset + sanDiegoOffset) * 60000); // Adjust current time to San Diego time zone

  // Format the San Diego time
  const hoursSanDiego = sanDiegoTime.getHours();
  const ampmSanDiego = hoursSanDiego >= 12 ? 'PM' : 'AM';
  const formattedHoursSanDiego = hoursSanDiego % 12 || 12;
  const minutesSanDiego = String(sanDiegoTime.getMinutes()).padStart(2, '0');
  const secondsSanDiego = String(sanDiegoTime.getSeconds()).padStart(2, '0');
  const timeStringSanDiego = `${formattedHoursSanDiego}:${minutesSanDiego}:${secondsSanDiego} ${ampmSanDiego}`;

  // Update the San Diego time display
  $('#timeSanDiego .playTime').text(timeStringSanDiego);
}

updateSanDiegoTime(); 
setInterval(updateSanDiegoTime, 1000);

function updateBostonTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Boston time zone
  const bostonOffset = -240; // Boston time is UTC-4
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const bostonTime = new Date(now.getTime() + (userOffset + bostonOffset) * 60000); // Adjust current time to Boston time zone

  // Format the Boston time
  const hoursBoston = bostonTime.getHours();
  const ampmBoston = hoursBoston >= 12 ? 'PM' : 'AM';
  const formattedHoursBoston = hoursBoston % 12 || 12;
  const minutesBoston = String(bostonTime.getMinutes()).padStart(2, '0');
  const secondsBoston = String(bostonTime.getSeconds()).padStart(2, '0');
  const timeStringBoston = `${formattedHoursBoston}:${minutesBoston}:${secondsBoston} ${ampmBoston}`;

  // Update the Boston time display
  $('#timeBoston .playTime').text(timeStringBoston);
}

updateBostonTime(); 
setInterval(updateBostonTime, 1000);


function updateTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for London time zone
  const londonOffset = 60; // London time is UTC+0 (GMT)
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const londonTime = new Date(now.getTime() + (userOffset + londonOffset) * 60000); // Adjust current time to London time zone

  // Format the London time
  const hoursLondon = londonTime.getHours();
  const ampmLondon = hoursLondon >= 12 ? 'PM' : 'AM';
  const formattedHoursLondon = hoursLondon % 12 || 12;
  const minutesLondon = String(londonTime.getMinutes()).padStart(2, '0');
  const secondsLondon = String(londonTime.getSeconds()).padStart(2, '0');
  const timeStringLondon = `${formattedHoursLondon}:${minutesLondon}:${secondsLondon} ${ampmLondon}`;

  // Update the London time display
  $('#timeLondon .playTime').text(timeStringLondon);
}

updateTime(); 
setInterval(updateTime, 1000);

function updateBerlinTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Berlin time zone
  const berlinOffset = 120; // Berlin time is UTC+2
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const berlinTime = new Date(now.getTime() + (userOffset + berlinOffset) * 60000); // Adjust current time to Berlin time zone

  // Format the Berlin time
  const hoursBerlin = berlinTime.getHours();
  const ampmBerlin = hoursBerlin >= 12 ? 'PM' : 'AM';
  const formattedHoursBerlin = hoursBerlin % 12 || 12;
  const minutesBerlin = String(berlinTime.getMinutes()).padStart(2, '0');
  const secondsBerlin = String(berlinTime.getSeconds()).padStart(2, '0');
  const timeStringBerlin = `${formattedHoursBerlin}:${minutesBerlin}:${secondsBerlin} ${ampmBerlin}`;

  // Update the Berlin time display
  $('#timeBerlin .playTime').text(timeStringBerlin);
}

updateBerlinTime(); 
setInterval(updateBerlinTime, 1000);

function updateNaplesTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Naples time zone
  const naplesOffset = 120; // Naples time is UTC+2
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const naplesTime = new Date(now.getTime() + (userOffset + naplesOffset) * 60000); // Adjust current time to Naples time zone

  // Format the Naples time
  const hoursNaples = naplesTime.getHours();
  const ampmNaples = hoursNaples >= 12 ? 'PM' : 'AM';
  const formattedHoursNaples = hoursNaples % 12 || 12;
  const minutesNaples = String(naplesTime.getMinutes()).padStart(2, '0');
  const secondsNaples = String(naplesTime.getSeconds()).padStart(2, '0');
  const timeStringNaples = `${formattedHoursNaples}:${minutesNaples}:${secondsNaples} ${ampmNaples}`;

  // Update the Naples time display
  $('#timeNaples .playTime').text(timeStringNaples);
}

updateNaplesTime(); 
setInterval(updateNaplesTime, 1000);



function updateKaliningradTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Kaliningrad time zone
  const kaliningradOffset = 120; // Kaliningrad time is UTC+3
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const kaliningradTime = new Date(now.getTime() + (userOffset + kaliningradOffset) * 60000); // Adjust current time to Kaliningrad time zone

  // Format the Kaliningrad time
  const hoursKaliningrad = kaliningradTime.getHours();
  const ampmKaliningrad = hoursKaliningrad >= 12 ? 'PM' : 'AM';
  const formattedHoursKaliningrad = hoursKaliningrad % 12 || 12;
  const minutesKaliningrad = String(kaliningradTime.getMinutes()).padStart(2, '0');
  const secondsKaliningrad = String(kaliningradTime.getSeconds()).padStart(2, '0');
  const timeStringKaliningrad = `${formattedHoursKaliningrad}:${minutesKaliningrad}:${secondsKaliningrad} ${ampmKaliningrad}`;

  // Update the Kaliningrad time display
  $('#timeKaliningrad .playTime').text(timeStringKaliningrad);
}

updateKaliningradTime(); 
setInterval(updateKaliningradTime, 1000);

function updateWroclawTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Wroclaw time zone
  const wroclawOffset = 120; // Wroclaw time is UTC+2
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const wroclawTime = new Date(now.getTime() + (userOffset + wroclawOffset) * 60000); // Adjust current time to Wroclaw time zone

  // Format the Wroclaw time
  const hoursWroclaw = wroclawTime.getHours();
  const ampmWroclaw = hoursWroclaw >= 12 ? 'PM' : 'AM';
  const formattedHoursWroclaw = hoursWroclaw % 12 || 12;
  const minutesWroclaw = String(wroclawTime.getMinutes()).padStart(2, '0');
  const secondsWroclaw = String(wroclawTime.getSeconds()).padStart(2, '0');
  const timeStringWroclaw = `${formattedHoursWroclaw}:${minutesWroclaw}:${secondsWroclaw} ${ampmWroclaw}`;

  // Update the Wroclaw time display
  $('#timeWroclaw .playTime').text(timeStringWroclaw);
}

updateWroclawTime(); 
setInterval(updateWroclawTime, 1000);


function updateDombayTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Dombay time zone
  const dombayOffset = 180; // Dombay time is UTC+3
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const dombayTime = new Date(now.getTime() + (userOffset + dombayOffset) * 60000); // Adjust current time to Dombay time zone

  // Format the Dombay time
  const hoursDombay = dombayTime.getHours();
  const ampmDombay = hoursDombay >= 12 ? 'PM' : 'AM';
  const formattedHoursDombay = hoursDombay % 12 || 12;
  const minutesDombay = String(dombayTime.getMinutes()).padStart(2, '0');
  const secondsDombay = String(dombayTime.getSeconds()).padStart(2, '0');
  const timeStringDombay = `${formattedHoursDombay}:${minutesDombay}:${secondsDombay} ${ampmDombay}`;

  // Update the Dombay time display
  $('#timeDombay .playTime').text(timeStringDombay);
}

updateDombayTime(); 
setInterval(updateDombayTime, 1000);


function updateHongKongTime() {
  // Get the current time in the user's local time zone
  const now = new Date();

  // Calculate the offset for Hong Kong time zone
  const hongkongOffset = 480; // Hong Kong time is UTC+8
  const userOffset = now.getTimezoneOffset(); // Get the user's time zone offset in minutes
  const hongkongTime = new Date(now.getTime() + (userOffset + hongkongOffset) * 60000); // Adjust current time to Hong Kong time zone

  // Format the Hong Kong time
  const hoursHongKong = hongkongTime.getHours();
  const ampmHongKong = hoursHongKong >= 12 ? 'PM' : 'AM';
  const formattedHoursHongKong = hoursHongKong % 12 || 12;
  const minutesHongKong = String(hongkongTime.getMinutes()).padStart(2, '0');
  const secondsHongKong = String(hongkongTime.getSeconds()).padStart(2, '0');
  const timeStringHongKong = `${formattedHoursHongKong}:${minutesHongKong}:${secondsHongKong} ${ampmHongKong}`;

  // Update the Hong Kong time display
  $('#timeHongKong .playTime').text(timeStringHongKong);
}

updateHongKongTime(); 
setInterval(updateHongKongTime, 1000);

function updateBackgroundBerlin() {
  // Get the current hour for Berlin
  const currentHourBerlin = new Date().getUTCHours() + 2; // Berlin is UTC+2

  // Define gradient colors for each hour
  let gradient;
  if (currentHourBerlin >= 0 && currentHourBerlin < 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourBerlin >= 1 && currentHourBerlin < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourBerlin >= 2 && currentHourBerlin < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourBerlin >= 3 && currentHourBerlin < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourBerlin >= 4 && currentHourBerlin < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060,  #606060)"; // 4AM to 5AM
  } else if (currentHourBerlin >= 5 && currentHourBerlin < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourBerlin >= 6 && currentHourBerlin < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourBerlin >= 7 && currentHourBerlin < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourBerlin >= 8 && currentHourBerlin < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourBerlin >= 9 && currentHourBerlin < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourBerlin >= 10 && currentHourBerlin < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourBerlin >= 11 && currentHourBerlin < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF"; // 11AM to noon
  } else if (currentHourBerlin >= 12 && currentHourBerlin < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourBerlin >= 13 && currentHourBerlin < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourBerlin >= 14 && currentHourBerlin < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourBerlin >= 15 && currentHourBerlin < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourBerlin >= 16 && currentHourBerlin < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourBerlin >= 17 && currentHourBerlin < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourBerlin >= 18 && currentHourBerlin < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourBerlin >= 19 && currentHourBerlin < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060,  #606060)"; // 7PM to 8PM
  } else if (currentHourBerlin >= 20 && currentHourBerlin < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourBerlin >= 21 && currentHourBerlin < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourBerlin >= 22 && currentHourBerlin < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeBerlin').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundBerlin();
setInterval(updateBackgroundBerlin, 60 * 60 * 1000); // Update every hour

function updateBackgroundBoston() {
  // Get the current hour for Boston
  const currentHourBoston = new Date().getUTCHours() - 4; // Boston is UTC-4

  
    // Define gradient colors for each hour
    let gradient;
    if (currentHourBoston >= 0 && currentHourBoston < 1) {
      gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
    } else if (currentHourBoston >= 1 && currentHourBoston < 2) {
      gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
    } else if (currentHourBoston >= 2 && currentHourBoston < 3) {
      gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
    } else if (currentHourBoston >= 3 && currentHourBoston < 4) {
      gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
    } else if (currentHourBoston >= 4 && currentHourBoston < 5) {
      gradient = "radial-gradient(ellipse at top left, #606060,  #606060)"; // 4AM to 5AM
    } else if (currentHourBoston >= 5 && currentHourBoston < 6) {
      gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
    } else if (currentHourBoston >= 6 && currentHourBoston < 7) {
      gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
    } else if (currentHourBoston >= 7 && currentHourBoston < 8) {
      gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
    } else if (currentHourBoston >= 8 && currentHourBoston < 9) {
      gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
    } else if (currentHourBoston >= 9 && currentHourBoston < 10) {
      gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
    } else if (currentHourBoston >= 10 && currentHourBoston < 11) {
      gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
    } else if (currentHourBoston >= 11 && currentHourBoston < 12) {
      gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
    } else if (currentHourBoston >= 12 && currentHourBoston < 13) {
      gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
    } else if (currentHourBoston >= 13 && currentHourBoston < 14) {
      gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
    } else if (currentHourBoston >= 14 && currentHourBoston < 15) {
      gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
    } else if (currentHourBoston >= 15 && currentHourBoston < 16) {
      gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
    } else if (currentHourBoston >= 16 && currentHourBoston < 17) {
      gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
    } else if (currentHourBoston >= 17 && currentHourBoston < 18) {
      gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
    } else if (currentHourBoston >= 18 && currentHourBoston < 19) {
      gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
    } else if (currentHourBoston >= 19 && currentHourBoston < 20) {
      gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
    } else if (currentHourBoston >= 20 && currentHourBoston < 21) {
      gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
    } else if (currentHourBoston >= 21 && currentHourBoston < 22) {
      gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
    } else if (currentHourBoston >= 22 && currentHourBoston < 23) {
      gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 10PM to 11PM
    } else {
      gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
    }
  


  // Set the linear-gradient background
  document.getElementById('timeBoston').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundBoston();
setInterval(updateBackgroundBoston, 60 * 60 * 1000); // Update every hour

function updateBackgroundLondon() {
  // Get the current hour for London
  const currentHourLondon = new Date().getUTCHours() + 1; // London is UTC+1

  // Define gradient colors for each hour
  let gradient;
  if (currentHourLondon >= 0 && currentHourLondon < 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourLondon >= 1 && currentHourLondon < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourLondon >= 2 && currentHourLondon < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourLondon >= 3 && currentHourLondon < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourLondon >= 4 && currentHourLondon < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourLondon >= 5 && currentHourLondon < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourLondon >= 6 && currentHourLondon < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourLondon >= 7 && currentHourLondon < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourLondon >= 8 && currentHourLondon < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourLondon >= 9 && currentHourLondon < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourLondon >= 10 && currentHourLondon < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourLondon >= 11 && currentHourLondon < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourLondon >= 12 && currentHourLondon < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourLondon >= 13 && currentHourLondon < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourLondon >= 14 && currentHourLondon < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourLondon >= 15 && currentHourLondon < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourLondon >= 16 && currentHourLondon < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourLondon >= 17 && currentHourLondon < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourLondon >= 18 && currentHourLondon < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourLondon >= 19 && currentHourLondon < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourLondon >= 20 && currentHourLondon < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourLondon >= 21 && currentHourLondon < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourLondon >= 22 && currentHourLondon < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeLondon').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundLondon();
setInterval(updateBackgroundLondon, 60 * 60 * 1000); // Update every hour

function updateBackgroundNaples() {
  // Get the current hour for Naples
  const currentHourNaples = new Date().getUTCHours() + 2; // Naples is UTC+2

  // Define gradient colors for each hour
  let gradient;
  if (currentHourNaples >= 0 && currentHourNaples < 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourNaples >= 1 && currentHourNaples < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourNaples >= 2 && currentHourNaples < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourNaples >= 3 && currentHourNaples < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourNaples >= 4 && currentHourNaples < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourNaples >= 5 && currentHourNaples < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourNaples >= 6 && currentHourNaples < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourNaples >= 7 && currentHourNaples < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourNaples >= 8 && currentHourNaples < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourNaples >= 9 && currentHourNaples < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourNaples >= 10 && currentHourNaples < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourNaples >= 11 && currentHourNaples < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourNaples >= 12 && currentHourNaples < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourNaples >= 13 && currentHourNaples < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourNaples >= 14 && currentHourNaples < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourNaples >= 15 && currentHourNaples < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourNaples >= 16 && currentHourNaples < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourNaples >= 17 && currentHourNaples < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourNaples >= 18 && currentHourNaples < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourNaples >= 19 && currentHourNaples < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourNaples >= 20 && currentHourNaples < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourNaples >= 21 && currentHourNaples < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourNaples >= 22 && currentHourNaples < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeNaples').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundNaples();
setInterval(updateBackgroundNaples, 60 * 1000); // Update every hour

function updateBackgroundSanDiego() {
  // Get the current hour for San Diego
  const currentHourSanDiego = new Date().getUTCHours() - 7; // San Diego is UTC-7

  // Define gradient colors for each hour
  let gradient;
  if (currentHourSanDiego >= 0 && currentHourSanDiego < 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourSanDiego >= 1 && currentHourSanDiego < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourSanDiego >= 2 && currentHourSanDiego < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourSanDiego >= 3 && currentHourSanDiego < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourSanDiego >= 4 && currentHourSanDiego < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourSanDiego >= 5 && currentHourSanDiego < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourSanDiego >= 6 && currentHourSanDiego < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourSanDiego >= 7 && currentHourSanDiego < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourSanDiego >= 8 && currentHourSanDiego < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourSanDiego >= 9 && currentHourSanDiego < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourSanDiego >= 10 && currentHourSanDiego < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourSanDiego >= 11 && currentHourSanDiego < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourSanDiego >= 12 && currentHourSanDiego < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourSanDiego >= 13 && currentHourSanDiego < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourSanDiego >= 14 && currentHourSanDiego < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourSanDiego >= 15 && currentHourSanDiego < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0), #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourSanDiego >= 16 && currentHourSanDiego < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourSanDiego >= 17 && currentHourSanDiego < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourSanDiego >= 18 && currentHourSanDiego < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourSanDiego >= 19 && currentHourSanDiego < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourSanDiego >= 20 && currentHourSanDiego < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourSanDiego >= 21 && currentHourSanDiego < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourSanDiego >= 22 && currentHourSanDiego < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeSanDiego').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundSanDiego();
setInterval(updateBackgroundSanDiego, 60 * 1000); // Update every hour

function updateBackgroundKaliningrad() {
  // Get the current hour for Kaliningrad
  const currentHourKaliningrad = new Date().getUTCHours() + 2; // Kaliningrad is UTC+2

  // Define gradient colors for each hour
  let gradient;
  if (currentHourKaliningrad >= 0 && currentHourKaliningrad< 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourKaliningrad >= 1 && currentHourKaliningrad < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourKaliningrad >= 2 && currentHourKaliningrad < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourKaliningrad >= 3 && currentHourKaliningrad < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourKaliningrad >= 4 && currentHourKaliningrad < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourKaliningrad >= 5 && currentHourKaliningrad < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourKaliningrad >= 6 && currentHourKaliningrad < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourKaliningrad >= 7 && currentHourKaliningrad < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourKaliningrad >= 8 && currentHourKaliningrad < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourKaliningrad >= 9 && currentHourKaliningrad < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourKaliningrad >= 10 && currentHourKaliningrad < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourKaliningrad >= 11 && currentHourKaliningrad < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourKaliningrad >= 12 && currentHourKaliningrad < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourKaliningrad >= 13 && currentHourKaliningrad < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourKaliningrad >= 14 && currentHourKaliningrad < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourKaliningrad >= 15 && currentHourKaliningrad < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourKaliningrad >= 16 && currentHourKaliningrad < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourKaliningrad >= 17 && currentHourKaliningrad < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourKaliningrad >= 18 && currentHourKaliningrad < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourKaliningrad >= 19 && currentHourKaliningrad < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourKaliningrad >= 20 && currentHourKaliningrad < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourKaliningrad >= 21 && currentHourKaliningrad < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourKaliningrad >= 22 && currentHourKaliningrad < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeKaliningrad').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundKaliningrad();
setInterval(updateBackgroundKaliningrad, 60 * 60 * 1000); // Update every hour


function updateBackgroundDombay() {
  // Get the current hour for Dombay
  const currentHourDombay = new Date().getUTCHours() + 3; // Dombay is UTC+3

  // Define gradient colors for each hour
  let gradient;
  if (currentHourDombay >= 0 && currentHourDombay < 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourDombay >= 1 && currentHourDombay < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourDombay >= 2 && currentHourDombay < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourDombay >= 3 && currentHourDombay < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourDombay >= 4 && currentHourDombay < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourDombay >= 5 && currentHourDombay < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourDombay >= 6 && currentHourDombay < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourDombay >= 7 && currentHourDombay < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourDombay >= 8 && currentHourDombay < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourDombay >= 9 && currentHourDombay < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourDombay >= 10 && currentHourDombay < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourDombay >= 11 && currentHourDombay < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourDombay >= 12 && currentHourDombay < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourDombay >= 13 && currentHourDombay < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourDombay >= 14 && currentHourDombay < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourDombay >= 15 && currentHourDombay < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourDombay >= 16 && currentHourDombay < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourDombay >= 17 && currentHourDombay < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourDombay >= 18 && currentHourDombay < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourDombay >= 19 && currentHourDombay < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourDombay >= 20 && currentHourDombay < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourDombay >= 21 && currentHourDombay < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourDombay >= 22 && currentHourDombay < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeDombay').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundDombay();
setInterval(updateBackgroundDombay, 60 * 60 * 1000); // Update every hour


function updateBackgroundWroclaw() {
  // Get the current hour for Wroclaw
  const currentHourWroclaw = new Date().getUTCHours() + 2; // Wroclaw is UTC+2

  // Define gradient colors for each hour
  let gradient;
  if (currentHourWroclaw >= 0 && currentHourWroclaw < 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourWroclaw >= 1 && currentHourWroclaw < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourWroclaw >= 2 && currentHourWroclaw < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourWroclaw >= 3 && currentHourWroclaw < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourWroclaw >= 4 && currentHourWroclaw < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourWroclaw >= 5 && currentHourWroclaw < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourWroclaw >= 6 && currentHourWroclaw < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourWroclaw >= 7 && currentHourWroclaw < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourWroclaw >= 8 && currentHourWroclaw < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourWroclaw >= 9 && currentHourWroclaw < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourWroclaw >= 10 && currentHourWroclaw < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourWroclaw >= 11 && currentHourWroclaw < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourWroclaw >= 12 && currentHourWroclaw < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourWroclaw >= 13 && currentHourWroclaw < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourWroclaw >= 14 && currentHourWroclaw < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourWroclaw >= 15 && currentHourWroclaw < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourWroclaw >= 16 && currentHourWroclaw < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourWroclaw >= 17 && currentHourWroclaw < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourWroclaw >= 18 && currentHourWroclaw < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourWroclaw >= 19 && currentHourWroclaw < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourWroclaw >= 20 && currentHourWroclaw < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourWroclaw >= 21 && currentHourWroclaw < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourWroclaw >= 22 && currentHourWroclaw < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeWroclaw').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundWroclaw();
setInterval(updateBackgroundWroclaw, 60 * 60 * 1000); // Update every hour

function updateBackgroundHongKong() {
  // Get the current hour for Hong Kong
  const currentHourHongKong = new Date().getUTCHours() + 8; // Hong Kong is UTC+8

  // Define gradient colors for each hour
  let gradient;
  if (currentHourHongKong >= 0 && currentHourHongKong< 1) {
    gradient = "radial-gradient(ellipse at top left, #000000, #000000)"; // Midnight to 1 AM
  } else if (currentHourHongKong >= 1 && currentHourHongKong < 2) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 1AM to 2AM
  } else if (currentHourHongKong >= 2 && currentHourHongKong < 3) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 2AM to 3PM
  } else if (currentHourHongKong >= 3 && currentHourHongKong < 4) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 3AM to 4AM
  } else if (currentHourHongKong >= 4 && currentHourHongKong < 5) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 4AM to 5AM
  } else if (currentHourHongKong >= 5 && currentHourHongKong < 6) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 5AM to 6AM
  } else if (currentHourHongKong >= 6 && currentHourHongKong < 7) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 6AM to 7AM
  } else if (currentHourHongKong >= 7 && currentHourHongKong < 8) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 7AM to 8AM
  } else if (currentHourHongKong >= 8 && currentHourHongKong < 9) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 8AM to 9AM
  } else if (currentHourHongKong >= 9 && currentHourHongKong < 10) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 9AM to 10AM
  } else if (currentHourHongKong >= 10 && currentHourHongKong < 11) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 10AM to 11AM
  } else if (currentHourHongKong >= 11 && currentHourHongKong < 12) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 11AM to noon
  } else if (currentHourHongKong >= 12 && currentHourHongKong < 13) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // noon to 1PM
  } else if (currentHourHongKong >= 13 && currentHourHongKong < 14) {
    gradient = "radial-gradient(ellipse at top left, #FFFFFF, #FFFFFF)"; // 1PM to 2PM
  } else if (currentHourHongKong >= 14 && currentHourHongKong < 15) {
    gradient = "radial-gradient(ellipse at top left, #F0F0F0, #F0F0F0)"; // 2PM to 3PM
  } else if (currentHourHongKong >= 15 && currentHourHongKong < 16) {
    gradient = "radial-gradient(ellipse at top left, #D0D0D0, #D0D0D0)"; // 3PM to 4PM
  } else if (currentHourHongKong >= 16 && currentHourHongKong < 17) {
    gradient = "radial-gradient(ellipse at top left, #B0B0B0, #B0B0B0)"; // 4PM to 5PM
  } else if (currentHourHongKong >= 17 && currentHourHongKong < 18) {
    gradient = "radial-gradient(ellipse at top left, #888888, #888888)"; // 5PM to 6PM
  } else if (currentHourHongKong >= 18 && currentHourHongKong < 19) {
    gradient = "radial-gradient(ellipse at top left, #707070, #707070)"; // 6PM to 7PM
  } else if (currentHourHongKong >= 19 && currentHourHongKong < 20) {
    gradient = "radial-gradient(ellipse at top left, #606060, #606060)"; // 7PM to 8PM
  } else if (currentHourHongKong >= 20 && currentHourHongKong < 21) {
    gradient = "radial-gradient(ellipse at top left, #484848, #484848)"; // 8PM to 9PM
  } else if (currentHourHongKong >= 21 && currentHourHongKong < 22) {
    gradient = "radial-gradient(ellipse at top left, #303030, #303030)"; // 9PM to 10PM
  } else if (currentHourHongKong >= 22 && currentHourHongKong < 23) {
    gradient = "radial-gradient(ellipse at top left, #181818, #181818)"; // 10PM to 11PM
  } else {
    gradient = "radial-gradient(ellipse at top left, #080808, #080808)"; // 11PM to Midnight
  }

  // Set the linear-gradient background
  document.getElementById('timeHongKong').style.background = gradient;
}

// Call the function initially and every hour
updateBackgroundHongKong();
setInterval(updateBackgroundHongKong, 60 * 60 * 1000); // Update every hour





// SVG IMAGE CHANGE


function updateSvgImageSanDiego() {
  const currentHour = new Date().getUTCHours() - 7; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'sandiego.svg' : 'sandiego_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageSanDiego').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageSanDiego();
setInterval(updateSvgImageSanDiego, 60 * 60 * 1000); // Update every hour


function updateSvgImageBoston() {
  const currentHour = new Date().getUTCHours() - 4; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'boston.svg' : 'boston_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageBoston').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageBoston();
setInterval(updateSvgImageBoston, 60 * 60 * 1000); // Update every hour





function updateSvgImageLondon() {
  const currentHour = new Date().getUTCHours() + 1; // Get current UTC hour
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'london.svg' : 'london_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageLondon').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageLondon();
setInterval(updateSvgImageLondon, 60 * 60 * 1000); // Update every hour

// Repeat the same process for other cities...

function updateSvgImageBerlin() {
  const currentHour = new Date().getUTCHours() + 2; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'berlin.svg' : 'berlin_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageBerlin').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageBerlin();
setInterval(updateSvgImageBerlin, 60 * 60 * 1000); // Update every hour

function updateSvgImageNaples() {
  const currentHour = new Date().getUTCHours() + 2; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'naples.svg' : 'naples_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageNaples').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageNaples();
setInterval(updateSvgImageNaples, 60 * 60 * 1000); // Update every hour


function updateSvgImageWroclaw() {
  const currentHour = new Date().getUTCHours() + 2; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'wroclaw.svg' : 'wroclaw_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageWroclaw').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageWroclaw();
setInterval(updateSvgImageWroclaw, 60 * 60 * 1000); // Update every hour


function updateSvgImageKaliningrad() {
  const currentHour = new Date().getUTCHours() + 2; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'kaliningrad.svg' : 'kaliningrad_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageKaliningrad').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageKaliningrad();
setInterval(updateSvgImageKaliningrad, 60 * 60 * 1000); // Update every hour

function updateSvgImageDombay() {
  const currentHour = new Date().getUTCHours() + 3; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'dombay.svg' : 'dombay_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageDombay').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageDombay();
setInterval(updateSvgImageDombay, 60 * 60 * 1000); // Update every hour



function updateSvgImageHongKong() {
  const currentHour = new Date().getUTCHours() + 8; 
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'hongkong.svg' : 'hongkong_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageHongKong').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageHongKong();
setInterval(updateSvgImageHongKong, 60 * 1000); // Update every hour



// FONT COLOR

function updateSvgImageKaliningrad() {
  const currentHour = new Date().getUTCHours() + 2; // Berlin is UTC+2
  const isDaytime = currentHour >= 7 && currentHour < 21; // Assume daytime between 6 AM and 6 PM

  // Determine the SVG image path based on the time of day
  const svgImagePath = isDaytime ? 'kaliningrad.svg' : 'kaliningrad_night.svg';

  // Update the SVG image source
  document.getElementById('svgImageKaliningrad').src = svgImagePath;
}

// Call the function initially and every hour
updateSvgImageKaliningrad();
setInterval(updateSvgImageKaliningrad, 60 * 60 * 1000); // Update every hour








// Function to update font color based on time
function updateFontColorLondon() {
  // Get the current hour

  const currentHour = new Date().getUTCHours() + 2; // Berlin is UTC+2
  const isDaytime = currentHour >= 6 && currentHour < 18; // Assume daytime between 6 AM and 6 PM

  // Select the paragraph element in the London clock
  const londonParagraph = document.getElementById('playLondon');

  // Check the current hour and update font color accordingly
  if (currentHourLondon >= 6 && currentHour < 18) {
    // Daytime: Set font color to a light color
    londonParagraph.style.color = 'black';
  } else {
    // Nighttime: Set font color to a dark color
    londonParagraph.style.color = 'white';
  }
}

// Call the function initially and every hour
updateFontColorLondon();
setInterval(updateFontColorLondon, 60 * 60 * 1000); // Update every hour


// Function to update font color based on time
function updateFontColorBerlin() {
  // Get the current hour
  const currentHour = new Date().getHours();

  // Select the paragraph element in the London clock
  const berlinParagraph = document.querySelector('clock.berlin p');

  // Check the current hour and update font color accordingly
  if (currentHour >= 6 && currentHour < 18) {
    // Daytime: Set font color to a light color
    berlinParagraph.style.color = 'black';
  } else {
    // Nighttime: Set font color to a dark color
    berlinParagraph.style.color = 'white';
  }
}

// Call the function initially and every hour
updateFontColorBerlin();
setInterval(updateFontColorBerlin, 60 * 60 * 1000); // Update every hour


// Function to update font color based on time
function updateFontColorBoston() {
  // Get the current hour
  const currentHour = new Date().getHours();

  // Select the paragraph element in the London clock
  const bostonParagraph = document.querySelector('clock.boston p');

  // Check the current hour and update font color accordingly
  if (currentHour >= 6 && currentHour < 18) {
    // Daytime: Set font color to a light color
    bostonParagraph.style.color = 'white';
  } else {
    // Nighttime: Set font color to a dark color
    bostonParagraph.style.color = 'white';
  }
}

// Function to update font color based on time
function updateFontColorHongKong() {
  // Get the current hour for Hong Kong
  const currentHourHongKong = new Date().getUTCHours() + 8; // Hong Kong is UTC+8

  // Check if it's daytime (between 6 AM and 6 PM local time)
  const isDaytime = currentHourHongKong >= 6 && currentHourHongKong < 18;

  // Select the paragraph element in the Hong Kong clock
  const hongkongParagraph = document.getElementById('playHongKong');

  // Set font color based on daytime or nighttime
  if (isDaytime) {
    // Daytime: Set font color to a light color
    hongkongParagraph.style.color = 'white';
  } else {
    // Nighttime: Set font color to a dark color
    hongkongParagraph.style.color = 'black';
  }
}

// Call the function initially and update every minute
updateFontColorHongKong();
setInterval(updateFontColorHongKong, 60 * 1000);
// CLOCK COLOR

// Function to update font color based on time for the London clock




