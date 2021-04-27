# Simple Converter from Roam style date to YYYY-MM-DD

This script will convert filenames from roam style to YYYY-MM-DD. It also will read file contents and convert any roam style dates within. The primary use-case is converting a bunch of daily notes from roam to the standard Obsidian date format.

## Instructions

0. You'll need nodejs and npm installed
1. Download this repository
2. cd into the directory in your terminal and run `npm install` to download the dependencies
3. Put all your daily notes or notes you want to process in a folder. Add a folder inside that folder named `processed` this is where the output files will be generated (we don't overwrite existing files in case there are issues.)
4. while in the directory with `app.js` run `node app.js $PATH_TO_NOTES` where $PATH_TO_NOTES is the full path to the folder with the notes you want processed.

The new notes should appear in the `/processed` directory you've created. Check them to make sure nothing went wrong!

## Support

If you have a problem, please do your best to resolve it yourself. If you still can't figure it out, open an issue in the repo. Thanks!