require("dotenv").config();
const request = require("request");
const cheerio = require("cheerio");
const pretty = require("pretty");
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const states = [];
const activeCases = [];
const recoveredCases = [];
const deathCases = [];
const finalArr = [];

app.get("/", (req, res) => {

  states.length = 0;
  activeCases.length = 0;
  recoveredCases.length = 0;
  deathCases.length = 0;
  finalArr.length = 0;

  request('https://www.mygov.in/corona-data/covid19-statewise-status/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const current_active = $('.field-name-field-last-total-active .field-item.even').text();
      const current_discharge = $('.field-name-field-last-total-cured .field-item.even').text();
      const current_deaths = $('.field-name-field-last-total-death .field-item.even').text();
      const total_vaccinations = $('.field-name-field-total-vaccinations .field-item.even').text();

      $('.field-name-field-select-state .field-item.even').each((i, el) => {
        states.push(pretty($(el).text()));
      });

      $('.field-name-field-total-confirmed-indians .field-item.even').each((i, el) => {
        activeCases.push(pretty($(el).text()));
      });

      $('.field-name-field-cured .field-item.even').each((i, el) => {
        recoveredCases.push(pretty($(el).text()));
      });

      $('.field-name-field-deaths .field-item.even').each((i, el) => {
        deathCases.push(pretty($(el).text()));
      });

      for (let i = 0; i < states.length; i++) {
        finalArr.push({
          sno: i+1,
          state: states[i],
          active: activeCases[i],
          recover: recoveredCases[i],
          death: deathCases[i]
        });
      }

      console.log(finalArr);

      return res.status(200).json({
        stateResults: finalArr,
        currentResults: {
          current_active,
          current_discharge,
          current_deaths,
          total_vaccinations
        }
      });
    }

  });
});


app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));