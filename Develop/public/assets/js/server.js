const express = require(`express`);
const path = require(`path`);

const dbJSON = require(`../../../db/db.json`);
const PORT = process.env.PORT || 3001;

const app = express();

