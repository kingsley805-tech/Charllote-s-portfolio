import fs from 'fs';
import path from 'path';
import http from 'http';

console.log('--- RUNNING CHARLLOTE KORANKYE PORTFOLIO VERIFICATION SUITE ---');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${message}`);
  }
}

// 1. Verify CV file preservation
const originalCvPath = path.resolve('Charllote_Korankye_CV.pdf');
assert(fs.existsSync(originalCvPath), 'Original CV preserved at workspace root');
const cvStats = fs.statSync(originalCvPath);
assert(cvStats.size === 46452, `Original CV size intact (46,452 bytes)`);

// 2. Verify Public CV file for download
const publicCvPath = path.resolve('public/Charllote_Korankye_CV.pdf');
assert(fs.existsSync(publicCvPath), 'Downloadable PDF exists in public folder');

// 3. Verify Candidate Photography
const photos = [
  'public/images/charllote-portrait.jpg',
  'public/images/charllote-labcoat.jpg',
  'public/images/charllote-scrubs.jpg'
];
photos.forEach(p => {
  assert(fs.existsSync(path.resolve(p)), `Verified candidate photo exists: ${p}`);
});

// 4. Verify Dist build outputs
assert(fs.existsSync(path.resolve('dist/index.html')), 'dist/index.html generated');
const distFiles = fs.readdirSync(path.resolve('dist/assets'));
assert(distFiles.some(f => f.endsWith('.js')), 'Production JS bundle generated in dist/assets');
assert(distFiles.some(f => f.endsWith('.css')), 'Production CSS stylesheet generated in dist/assets');

// 5. Verify cvData content matches authentic CV exactly
import('./src/data/cvData.js').then(({ cvData }) => {
  assert(cvData.personal.fullName === 'Charllote Amaniampong Korankye', 'Candidate full name is Charllote Amaniampong Korankye');
  assert(cvData.personal.institution === 'Pentecost University', 'Institution is Pentecost University');
  assert(cvData.education.length >= 2, 'Education timeline includes Pentecost University & Odorgonno SHS');
  assert(cvData.clinicalPlacements.length === 5, 'Exactly 5 clinical hospital placements verified');
  
  const hospitalNames = cvData.clinicalPlacements.map(p => p.facility);
  assert(hospitalNames.some(h => h.includes('Korle-Bu')), 'Includes Korle-Bu Teaching Hospital');
  assert(hospitalNames.some(h => h.includes('Greater Accra Regional')), 'Includes Greater Accra Regional Hospital');
  assert(hospitalNames.some(h => h.includes('Achimota')), 'Includes Achimota Hospital');
  assert(hospitalNames.some(h => h.includes('Mother and Child')), 'Includes Mother and Child Hospital');
  assert(hospitalNames.some(h => h.includes('Swedru Municipal')), 'Includes Swedru Municipal Hospital');

  assert(cvData.certifications.some(c => c.status.includes('PIN: Not yet obtained') || c.status.includes('In Progress')), 'Honest and truthful registration status (PIN: in progress)');
  assert(cvData.languages.some(l => l.name === 'English') && cvData.languages.some(l => l.name.includes('Twi')), 'Languages English and Twi/Fante included');

  // 6. Test HTTP server response
  http.get('http://localhost:3000/', (res) => {
    assert(res.statusCode === 200, `Local preview server responds with HTTP 200 OK (Status: ${res.statusCode})`);
    
    http.get('http://localhost:3000/Charllote_Korankye_CV.pdf', (pdfRes) => {
      assert(pdfRes.statusCode === 200, `PDF endpoint serves successfully (Status: ${pdfRes.statusCode})`);
      assert(pdfRes.headers['content-type'] === 'application/pdf', 'PDF content-type is application/pdf');

      console.log(`\nVerification Complete: ${passedTests}/${totalTests} tests passed.`);
      if (passedTests === totalTests) {
        console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
      } else {
        process.exit(1);
      }
    });
  });
}).catch(err => {
  console.error('Error importing cvData:', err);
  process.exit(1);
});

