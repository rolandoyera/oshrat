import { createRequire } from 'module';
import fs from 'fs';
const require = createRequire('C:/Users/rolys/Web/oshrat/web/package.json');
const { createClient } = require('@sanity/client');
const env = Object.fromEntries(fs.readFileSync('.env.local','utf8').split('\n').filter(l=>l.includes('=')&&!l.startsWith('#')).map(l=>{const i=l.indexOf('=');return [l.slice(0,i).trim(), l.slice(i+1).trim().replace(/^"|"$/g,'')]}));
const token = env.SANITY_API_WRITE_TOKEN || env.SANITY_WRITE_TOKEN || env.SANITY_API_TOKEN || env.SANITY_API_READ_TOKEN;
const client = createClient({ projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: env.NEXT_PUBLIC_SANITY_DATASET, apiVersion: env.SANITY_API_VERSION, token, useCdn: false, perspective: 'raw' });
const cur = JSON.parse(fs.readFileSync('scripts/shul-bal-harbour-current-alts.json','utf8'))[0];
const fixed = JSON.parse(fs.readFileSync('scripts/shul-bal-harbour-fixed-alts.json','utf8'));
const set = { 'mainImage.alt': fixed['mainImage.alt'], 'panorama360.alt': fixed['panorama360.alt'] };
for (const [key, alt] of Object.entries(fixed.gallery)) set[`gallery[_key=="${key}"].alt`] = alt;
for (const v of Object.values(set)) if (/[^\x20-\x7E]/.test(v)) throw new Error('non-ascii in replacement: '+v);
const mode = process.argv[2];
const p = client.patch(cur._id).ifRevisionId(cur._rev).set(set);
try {
  const r = await p.commit({ dryRun: mode !== 'apply', returnDocuments: false });
  console.log(mode === 'apply' ? 'APPLIED' : 'DRY RUN OK', JSON.stringify(r));
} catch (e) {
  console.log('FAILED', e.statusCode, e.message.split('\n')[0]);
  process.exit(2);
}
