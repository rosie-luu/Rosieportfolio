import fs from 'fs';
const files = fs.readdirSync('/src/imports');
files.forEach(f => {
  if (f.startsWith('Screenshot')) {
    console.log(f, Array.from(f).map(c => c.charCodeAt(0).toString(16)).join(' '));
  }
});