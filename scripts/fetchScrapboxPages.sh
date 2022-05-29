#!/bin/bash

source ./.env

URL="https://scrapbox.io/api/pages/${SCRAPBOX_PROJECT}?skip=0\&sort=updated\&limit=100\&q="

curl -s -o - $URL | jq . > ./public/data/pages.json
