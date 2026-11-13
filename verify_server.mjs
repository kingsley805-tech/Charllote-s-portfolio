import http from 'http';
import { execSync } from 'child_process';

// Test script to check HTML elements and verify section IDs exist
const testUrls = [
  'http://localhost:3000/#home',
  'http://localhost:3000/#about',
  'http://localhost:3000/#experience',
  'http://localhost:3000/#skills',
  'http://localhost:3000/#education',
  'http://localhost:3000/#clinical-flow',
  'http://localhost:3000/#certifications',
  'http://localhost:3000/#philosophy',
  'http://localhost:3000/#gallery',
  'http://localhost:3000/#cv',
  'http://localhost:3000/#contact',
];

http.get('http://localhost:3000/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Homepage response length:', data.length);
    console.log('Includes title:', data.includes('Charllote Korankye'));
  });
});

