#!/bin/sh
cd /var/local/app;sleep 15;npm run db:migration;npm run db:seed;npm start;
