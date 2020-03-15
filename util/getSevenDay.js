module.exports = (city,posotion) => {
    posotion.forEach(el => {
        console.log(`${el.date} ${el.week} ${city} ${el.tem}  ${el.wea} ${el.tem2}  ~ ${el.tem1}  ${el.win[0]} ${el.win_speed}`);
    });
  }